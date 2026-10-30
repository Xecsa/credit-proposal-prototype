import React, { useEffect, useRef, useState } from 'react';
import { afterTaskQuestions, easeScale, reviewFollowUp } from '../script.js';
import { prototypeHref } from '../useRoute.js';
import {
  getRec, subscribeRec, bindParticipant, supportsScreen, supportsMic, requestScreen, requestMic, isLive,
  startJourney, stopJourney, pauseJourney, resumeJourney, stopCapture, discardCapture, lastUnsaved, recExt
} from '../recorder.js';
import { download } from '../store.js';
// Feedback illustration: two speech bubbles in ENBD navy and blue. Deliberately neutral (no tick or celebration),
// so it doesn't suggest the task was done correctly. Used at a modest size on the closing screens.
export const FeedbackArt = () => (
  <svg className="r-fa" width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="fa-b" x1="10" y1="12" x2="46" y2="46" gradientUnits="userSpaceOnUse"><stop stopColor="#3D63C9" /><stop offset="1" stopColor="#14307E" /></linearGradient>
      <linearGradient id="fa-l" x1="30" y1="28" x2="62" y2="60" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFFFF" /><stop offset="1" stopColor="#DCE5F8" /></linearGradient>
    </defs>
    <path d="M14 12h28a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H26l-8 7v-7h-4a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6Z" fill="url(#fa-b)" />
    <path d="M17 22h20M17 29h13" stroke="#fff" strokeOpacity=".85" strokeWidth="3" strokeLinecap="round" />
    <path d="M58 30H36a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h14l7 6v-6h1a6 6 0 0 0 6-6V36a6 6 0 0 0-6-6Z" fill="url(#fa-l)" stroke="#B9C8EA" strokeWidth="1.5" />
    <circle cx="40" cy="42" r="2.4" fill="#3D63C9" /><circle cx="47" cy="42" r="2.4" fill="#3D63C9" /><circle cx="54" cy="42" r="2.4" fill="#3D63C9" />
  </svg>
);

// Shared participant surface for every task and closing screen: one rounded panel in the 960px session column.
export function Panel({ className = '', label, children }) {
  return <section className={`r-jp${className ? ` ${className}` : ''}`} aria-label={label}>{children}</section>;
}

// Panel heading: a small icon beside the heading, or (band) a pale-blue introduction area with a modest illustration.
export function PanelHead({ icon, art, band, eyebrow, title, intro, headRef }) {
  return (
    <header className={`r-jp-head${band ? ' is-band' : ''}`}>
      {icon && <span className="r-jp-icon" aria-hidden="true">{icon}</span>}
      <div className="r-jp-headtext">
        {eyebrow && <p className="r-jp-eyebrow">{eyebrow}</p>}
        <h1 ref={headRef} tabIndex={-1} className="r-jp-title">{title}</h1>
        {intro && <p className="r-jp-intro">{intro}</p>}
      </div>
      {art && <span className="r-jp-headart" aria-hidden="true">{art}</span>}
    </header>
  );
}

// Journey illustrations for the introduction panel. Generic shapes only (no values, ticks or routes), so they
// suggest the area of the application without hinting at the task's solution.
function ArtBackdrop() {
  return (
    <>
      <circle cx="270" cy="58" r="70" fill="#fff" opacity=".07" />
      <circle cx="40" cy="320" r="92" fill="#5082FF" opacity=".22" />
      <path d="M-20 236C50 200 110 276 186 248s112-96 176-68" stroke="#fff" strokeOpacity=".16" strokeWidth="1.5" fill="none" />
      <path d="M-20 266C60 232 118 304 196 276s106-90 166-64" stroke="#fff" strokeOpacity=".08" strokeWidth="1.5" fill="none" />
      <path d="M40 76l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="#fff" opacity=".7" />
      <path d="M300 206l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5Z" fill="#fff" opacity=".55" />
      <circle cx="24" cy="186" r="3" fill="#fff" opacity=".45" />
      <circle cx="176" cy="340" r="2.5" fill="#fff" opacity=".4" />
    </>
  );
}
const ArtDefs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-card`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#EEF3FF" /></linearGradient>
    <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".24" /><stop offset="1" stopColor="#fff" stopOpacity=".06" /></linearGradient>
    <filter id={`${id}-sh`} x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#020B24" floodOpacity=".28" /></filter>
  </defs>
);
export function JourneyArt({ kind }) {
  const id = `ja-${kind}`;
  return (
    <svg className="r-jp-svg" viewBox="0 0 320 360" preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true">
      <ArtDefs id={id} />
      <ArtBackdrop />
      {kind === 'client' && <>
        <rect x="88" y="44" width="196" height="116" rx="20" fill={`url(#${id}-glass)`} stroke="#fff" strokeOpacity=".28" />
        <rect x="108" y="68" width="64" height="8" rx="4" fill="#fff" opacity=".55" />
        <rect x="108" y="86" width="140" height="6" rx="3" fill="#fff" opacity=".3" />
        <rect x="108" y="100" width="110" height="6" rx="3" fill="#fff" opacity=".3" />
        <g filter={`url(#${id}-sh)`}><rect x="36" y="118" width="232" height="176" rx="22" fill={`url(#${id}-card)`} /></g>
        <rect x="56" y="140" width="48" height="48" rx="14" fill="#DCE6FF" />
        <path d="M70 178v-22l10-6 10 6v22M74 162h3M83 162h3M74 169h3M83 169h3M66 178h28" stroke="#182F7C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="118" y="148" width="96" height="9" rx="4.5" fill="#072447" opacity=".85" />
        <rect x="118" y="166" width="62" height="6" rx="3" fill="#8CA3D8" />
        <rect x="56" y="206" width="92" height="6" rx="3" fill="#A9BAE0" />
        <rect x="56" y="218" width="192" height="26" rx="10" fill="#F4F7FE" stroke="#DCE6FF" />
        <rect x="56" y="254" width="70" height="6" rx="3" fill="#A9BAE0" />
        <rect x="56" y="266" width="120" height="18" rx="9" fill="#F4F7FE" stroke="#DCE6FF" />
        <g filter={`url(#${id}-sh)`}><rect x="214" y="250" width="78" height="56" rx="16" fill="#5082FF" /></g>
        <rect x="228" y="266" width="22" height="16" rx="4" stroke="#fff" strokeWidth="2" fill="none" />
        <rect x="256" y="268" width="24" height="5" rx="2.5" fill="#fff" opacity=".9" />
        <rect x="256" y="278" width="16" height="5" rx="2.5" fill="#fff" opacity=".6" />
      </>}
      {kind === 'docs' && <>
        <rect x="128" y="40" width="150" height="190" rx="18" fill={`url(#${id}-glass)`} stroke="#fff" strokeOpacity=".28" transform="rotate(8 203 135)" />
        <g filter={`url(#${id}-sh)`}><rect x="92" y="70" width="156" height="200" rx="18" fill="#fff" opacity=".92" transform="rotate(-6 170 170)" /></g>
        <g filter={`url(#${id}-sh)`}><rect x="58" y="96" width="168" height="208" rx="20" fill={`url(#${id}-card)`} /></g>
        <rect x="80" y="122" width="40" height="48" rx="8" fill="#DCE6FF" />
        <path d="M90 136h20M90 145h20M90 154h12" stroke="#182F7C" strokeWidth="2" strokeLinecap="round" />
        <rect x="132" y="126" width="74" height="8" rx="4" fill="#072447" opacity=".85" />
        <rect x="132" y="142" width="52" height="6" rx="3" fill="#8CA3D8" />
        <rect x="80" y="190" width="126" height="6" rx="3" fill="#C3D0EE" />
        <rect x="80" y="204" width="110" height="6" rx="3" fill="#C3D0EE" />
        <rect x="80" y="218" width="120" height="6" rx="3" fill="#C3D0EE" />
        <rect x="80" y="246" width="126" height="36" rx="12" fill="#F4F7FE" stroke="#C9D6F5" strokeDasharray="4 4" />
        <path d="M143 272v-14M137 263l6-6 6 6" stroke="#5082FF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M232 84v40a14 14 0 0 1-28 0V78a9 9 0 0 1 18 0v44a4 4 0 0 1-8 0V86" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
        <g filter={`url(#${id}-sh)`}><rect x="208" y="252" width="84" height="44" rx="14" fill="#5082FF" /></g>
        <rect x="222" y="268" width="14" height="12" rx="3" fill="#fff" opacity=".9" />
        <rect x="242" y="268" width="36" height="5" rx="2.5" fill="#fff" opacity=".9" />
        <rect x="242" y="277" width="24" height="4" rx="2" fill="#fff" opacity=".6" />
      </>}
      {kind === 'chart' && <>
        <rect x="96" y="40" width="190" height="112" rx="20" fill={`url(#${id}-glass)`} stroke="#fff" strokeOpacity=".28" />
        <path d="M116 120l30-22 26 14 34-30 30 18 30-26" stroke="#fff" strokeOpacity=".6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <g filter={`url(#${id}-sh)`}><rect x="34" y="112" width="240" height="184" rx="22" fill={`url(#${id}-card)`} /></g>
        <rect x="56" y="134" width="84" height="8" rx="4" fill="#072447" opacity=".85" />
        <rect x="56" y="150" width="56" height="6" rx="3" fill="#8CA3D8" />
        <rect x="206" y="132" width="48" height="24" rx="12" fill="#F4F7FE" stroke="#DCE6FF" />
        <path d="M56 274h196" stroke="#DCE6FF" strokeWidth="2" />
        <rect x="66" y="232" width="22" height="42" rx="6" fill="#C3D0EE" />
        <rect x="102" y="206" width="22" height="68" rx="6" fill="#8CA3D8" />
        <rect x="138" y="218" width="22" height="56" rx="6" fill="#5082FF" />
        <rect x="174" y="188" width="22" height="86" rx="6" fill="#182F7C" />
        <rect x="210" y="200" width="22" height="74" rx="6" fill="#3D63C9" />
        <path d="M60 222l38-26 36 12 40-32 40 14" stroke="#072447" strokeOpacity=".35" strokeWidth="2" fill="none" strokeDasharray="3 5" strokeLinecap="round" />
        <g filter={`url(#${id}-sh)`}><circle cx="262" cy="282" r="30" fill="#5082FF" /></g>
        <circle cx="258" cy="278" r="11" stroke="#fff" strokeWidth="3" fill="none" />
        <path d="m266 286 9 9" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </>}
    </svg>
  );
}

const Ico = {
  speech: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4.5h12a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9l-3.5 3v-3H4A1.5 1.5 0 0 1 2.5 13V6A1.5 1.5 0 0 1 4 4.5Z" /><path d="M6.5 8.5h7M6.5 11h4.5" /></svg>,
  video: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="10.5" height="10" rx="2" /><path d="m13 9 4.5-2.5v7L13 11" /></svg>,
  info: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.25" /><path d="M10 9v4.5M10 6.5v.01" /></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>,
  target: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.25" /><circle cx="10" cy="10" r="3.5" /><path d="M10 10h.01" /></svg>,
  check: <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4.5 10.5 3.5 3.5 7.5-8" /></svg>
};

// One journey: scenario card → (recording setup, first time only) → focused prototype workspace → feedback.
// The participant never sees success criteria, hints or the expected route. "Finish task" records that the
// participant ended the task; the facilitator classifies the outcome.

export function useRec() {
  const [rec, setRec] = useState(getRec);
  useEffect(() => subscribeRec(setRec), []);
  return rec;
}

// Recording consent from the consent form. `recording` is the combined choice used before screen and audio were split.
export function recordingConsent(data) {
  const c = data.consent || {};
  return { screen: !!(c.recordScreen || c.recording), audio: !!(c.recordAudio || c.recording) };
}

export const REC_LABEL = {
  off: 'Not recording', ready: 'Ready', recording: 'Recording', paused: 'Paused', saving: 'Saving…',
  saved: 'Saved', failed: 'Save failed', stopped: 'Stopped'
};

export default function TaskJourney({ p, journey, index, total, data, update, onNext }) {
  const t = (data.tasks || {})[journey.id] || {};
  const set = patch => update(d => ({ ...d, tasks: { ...(d.tasks || {}), [journey.id]: { ...((d.tasks || {})[journey.id] || {}), ...patch } } }));
  const [phase, setPhase] = useState(t.finishedAt ? 'feedback' : 'intro');
  const headRef = useRef(null);
  useEffect(() => { if (phase !== 'task' && phase !== 'setup' && headRef.current) headRef.current.focus(); }, [phase]);
  const [startError, setStartError] = useState('');
  const rec = useRec();
  const consent = recordingConsent(data);
  const wantsRecording = consent.screen || consent.audio;
  const mode = data.recordingMode; // 'record' | 'notes-only' (chosen in setup)
  useEffect(() => { bindParticipant(p.id); }, [p.id]);

  // Leaving the page while recording or saving would lose the end of the recording.
  useEffect(() => {
    if (!['recording', 'paused', 'saving'].includes(rec.state)) return undefined;
    const warn = e => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [rec.state]);

  // The workspace opens first (covering the portal, prototype not loaded yet), then the recorder starts, then the
  // prepared prototype state loads and the task-start time is taken. So recordings begin on the task workspace.
  const [frameOn, setFrameOn] = useState(false);
  const openTask = async () => {
    setStartError('');
    setFrameOn(false);
    setPhase('task');
    await new Promise(r => requestAnimationFrame(() => setTimeout(r, 150)));
    let recId = '';
    const sid = data.sessionId || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`);
    if (isLive()) {
      const r = await startJourney({
        participantId: p.id, code: p.code, role: p.role, sessionId: sid, journeyId: journey.id,
        journeyTitle: journey.title, prototypeVersion: __BUILD_ID__, prototypeStart: journey.start
      });
      if (r.ok) recId = r.id; else setStartError(r.error);
    }
    const now = new Date().toISOString();
    update(d => {
      const prev = (d.tasks || {})[journey.id] || {};
      return { ...d, sessionId: d.sessionId || sid, tasks: { ...(d.tasks || {}), [journey.id]: { ...prev, startedAt: prev.startedAt || now, attempts: [...(prev.attempts || []), { startedAt: now, recId }], skipped: false } } };
    });
    setFrameOn(true);
  };

  // First journey (or capture has ended): set up recording if consent allows and it hasn't been declined.
  const setupNext = wantsRecording && mode !== 'notes-only' && !isLive() && (supportsScreen() || supportsMic());
  const onStart = () => { if (setupNext) setPhase('setup'); else openTask(); };

  const endTask = async how => {
    const now = new Date().toISOString();
    const saved = await stopJourney(how);
    update(d => {
      const prev = (d.tasks || {})[journey.id] || {};
      const attempts = [...(prev.attempts || [])];
      const a = attempts[attempts.length - 1];
      // The recording may already have ended (sharing stopped, participant stopped it): use its saved result.
      const last = getRec().last;
      const recStatus = saved ? saved.status : a && a.recId && last && last.id === a.recId ? last.status : 'none';
      if (a) attempts[attempts.length - 1] = { ...a, endedAt: now, end: how, recStatus };
      return { ...d, tasks: { ...(d.tasks || {}), [journey.id]: { ...prev, attempts, ...(how === 'finished' ? { finishedAt: now } : { leftAt: now }) } } };
    });
    setPhase(how === 'finished' ? 'feedback' : 'intro');
  };

  if (phase === 'setup') {
    return <RecordingSetup consent={consent} rec={rec} index={index}
      onReady={() => { update(d => ({ ...d, recordingMode: 'record' })); openTask(); }}
      onSkip={reason => { discardCapture(); update(d => ({ ...d, recordingMode: 'notes-only', recordingNote: reason })); openTask(); }}
      onBack={() => { discardCapture(); setPhase('intro'); }} />;
  }

  return (
    <>
      {phase === 'intro' && (
        <Panel className="is-split" label={`Journey ${index + 1} of ${total}: ${journey.title}`}>
          <div className="r-jp-art">
            <p className="r-jp-tag">Journey {index + 1} of {total}</p>
            <JourneyArt kind={journey.art === 'client' || journey.art === 'chart' ? journey.art : 'docs'} />
          </div>
          <div className="r-jp-main">
            <h1 ref={headRef} tabIndex={-1} className="r-jp-title">{journey.title}</h1>
            <Scenario journey={journey} />
            {t.leftAt && !t.finishedAt && <p className="r-jnote">You left this journey before finishing. You can start it again or skip it.</p>}
            <div className="r-jp-actions">
              <button type="button" className="r-btn r-btn-icon r-jp-go" onClick={onStart}>Start journey {Ico.arrow}</button>
              <button type="button" className="r-btn r-btn-secondary r-jp-quietbtn" onClick={() => { set({ skipped: true }); onNext(); }}>Skip this journey</button>
            </div>
            <p className="r-jp-quiet">{Ico.speech}<span>{journey.reassurance || 'You can pause or stop at any time.'}</span></p>
          </div>
        </Panel>
      )}
      {phase === 'task' && (
        <Workspace journey={journey} index={index} total={total} rec={rec} frameOn={frameOn} startError={startError}
          onFinish={() => endTask('finished')} onLeave={() => endTask('left')} />
      )}
      {phase === 'feedback' && <Feedback journey={journey} index={index} total={total} t={t} set={set} rec={rec} wantsRecording={wantsRecording} headRef={headRef} onNext={onNext} />}
    </>
  );
}

// Scenario text, shared by the journey introduction, the task's "View task" panel and the feedback "View scenario" panel.
function Scenario({ journey, compact }) {
  return (
    <dl className={`r-jscn${compact ? ' is-compact' : ''}`}>
      <div><dt>Your scenario</dt><dd>{journey.situation}</dd></div>
      <div className="r-jscn-goal"><dt>{!compact && Ico.target}Your goal</dt><dd>{journey.goal}</dd></div>
    </dl>
  );
}

// ---- recording setup: explicit participant actions, screen first, microphone separately ----
function RecordingSetup({ consent, rec, index, onReady, onSkip, onBack }) {
  const [step, setStep] = useState(consent.screen && supportsScreen() ? 'screen' : 'mic');
  const [err, setErr] = useState('');
  const [surface, setSurface] = useState('');
  const [micOn, setMicOn] = useState(false);
  const [busy, setBusy] = useState(false);
  const videoRef = useRef(null);
  const headRef = useRef(null);
  useEffect(() => { headRef.current && headRef.current.focus(); }, [step]);
  useEffect(() => { if (videoRef.current && rec.screen) videoRef.current.srcObject = rec.screen; }, [rec.screen, step]);

  const share = async () => {
    setErr(''); setBusy(true);
    try { const r = await requestScreen(); setSurface(r.surface); setStep('preview'); }
    catch (e) { setErr(e && e.name === 'NotAllowedError' ? 'Screen sharing wasn’t allowed. You can try again, or continue without recording.' : `Screen sharing isn’t available (${(e && e.message) || 'unknown error'}).`); }
    setBusy(false);
  };
  const mic = async () => {
    setErr(''); setBusy(true);
    try { await requestMic(); setMicOn(true); setStep('confirm'); }
    catch (e) { setErr(e && e.name === 'NotAllowedError' ? 'Microphone access wasn’t allowed. You can try again, continue with screen only, or continue without recording.' : `The microphone isn’t available (${(e && e.message) || 'unknown error'}).`); }
    setBusy(false);
  };
  const afterPreview = () => setStep(consent.audio && supportsMic() ? 'mic' : 'confirm');
  const wrongSurface = surface && surface !== 'browser';

  return (
    <Panel className="is-form" label="Set up recording">
      <PanelHead icon={Ico.video} eyebrow={`Before journey ${index + 1}`} title="Set up recording" headRef={headRef}
        intro={`You agreed to ${consent.screen && consent.audio ? 'screen and audio recording' : consent.screen ? 'screen recording' : 'audio recording'}. Nothing is recorded until the task opens, and you can stop recording at any time.`} />
      <div className="r-jp-body">

      {step === 'screen' && (
        <div className="r-recstep r-jp-tile">
          <h3 className="r-recstep-h">1. Share this tab</h3>
          <p>Your browser will ask what to share. Choose <strong>this tab</strong> (“Credit Proposal · Usability research”) where your browser offers it. The prototype opens inside this tab, so it will be included.</p>
          <p className="r-hint">Whatever you choose is recorded as it appears on screen. Sharing a whole screen or window would also record anything else visible on it.</p>
          <div className="r-actions is-start"><button type="button" className="r-btn" disabled={busy} onClick={share}>Share this tab</button></div>
        </div>
      )}

      {step === 'preview' && (
        <div className="r-recstep r-jp-tile">
          <h3 className="r-recstep-h">2. Check what’s being shared</h3>
          <video ref={videoRef} className="r-recpreview" autoPlay muted playsInline aria-label="Preview of the shared screen" />
          {wrongSurface
            ? <p className="r-jnote">You’re sharing {surface === 'monitor' ? 'your whole screen' : 'a window'}, so anything visible on it will be recorded. Choose again to share just this tab, or continue if that’s intended.</p>
            : <p>If the preview shows this research tab, the prototype will be included once the task opens.</p>}
          <div className="r-actions is-start">
            <button type="button" className="r-btn" onClick={afterPreview}>{wrongSurface ? 'Continue anyway' : 'Yes, this is the research tab'}</button>
            <button type="button" className="r-btn r-btn-secondary" disabled={busy} onClick={share}>Choose again</button>
          </div>
        </div>
      )}

      {step === 'mic' && (
        <div className="r-recstep r-jp-tile">
          <h3 className="r-recstep-h">{consent.screen && supportsScreen() ? '3' : '1'}. Turn on the microphone</h3>
          <p>Your browser will ask for microphone access. Audio is recorded only during each task.</p>
          <div className="r-actions is-start">
            <button type="button" className="r-btn" disabled={busy} onClick={mic}>Turn on microphone</button>
            {isLive() && <button type="button" className="r-btn r-btn-secondary" onClick={() => setStep('confirm')}>Continue with screen only</button>}
          </div>
        </div>
      )}

      {step === 'confirm' && (
        <div className="r-recstep r-jp-tile">
          <h3 className="r-recstep-h">Ready</h3>
          <ul className="r-plain">
            {rec.screen && <li>Screen: sharing {surface === 'browser' ? 'a browser tab' : surface === 'monitor' ? 'a whole screen' : surface === 'window' ? 'a window' : 'your selection'}</li>}
            {(micOn || rec.mic) && <li>Microphone: on</li>}
          </ul>
          <p>Recording starts when the task opens and pauses for the questions after it.</p>
          <div className="r-actions is-start"><button type="button" className="r-btn" disabled={!isLive()} onClick={onReady}>Start recording and open task</button></div>
        </div>
      )}

      {err && <p className="r-jnote" role="alert">{err}</p>}
      </div>
      <footer className="r-jp-foot">
        <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
        <button type="button" className="r-link-btn" onClick={() => onSkip(err ? 'recording unavailable or not allowed' : 'participant chose not to record')}>Continue without recording</button>
      </footer>
    </Panel>
  );
}

// ---- focused workspace: near full viewport, only the prototype and minimal research controls ----
function Workspace({ journey, index, total, rec, frameOn, startError, onFinish, onLeave }) {
  const [showTask, setShowTask] = useState(false);
  const [paused, setPaused] = useState(false);
  const [busy, setBusy] = useState(false);
  const headRef = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add('is-task-focus');
    headRef.current && headRef.current.focus();
    return () => document.documentElement.classList.remove('is-task-focus');
  }, []);
  const recording = rec.state === 'recording' || rec.state === 'paused';

  const togglePause = () => {
    if (paused) { resumeJourney(); setPaused(false); } else { pauseJourney(); setPaused(true); }
  };
  const end = async fn => { setBusy(true); await fn(); };

  return (
    <div className="r-ws" role="region" aria-label={`Task workspace: ${journey.title}`}>
      <div className="r-ws-bar">
        <p ref={headRef} tabIndex={-1} className="r-ws-title"><span className="r-ws-k">Task {index + 1} of {total}</span>{journey.title}</p>
        <span className={`r-ws-rec is-${rec.live || rec.state === 'saving' ? rec.state : 'off'}`} role="status" aria-live="polite">
          <span className="r-rec-dot" aria-hidden="true" />{rec.live || rec.state === 'saving' ? REC_LABEL[rec.state] : rec.state === 'stopped' ? 'Recording stopped' : 'Not recording'}
        </span>
        <span className="r-ws-actions">
          <button type="button" className="r-ws-btn" aria-expanded={showTask} aria-controls="ws-task" onClick={() => setShowTask(s => !s)}>View task</button>
          <button type="button" className="r-ws-btn" aria-pressed={paused} onClick={togglePause}>{paused ? 'Resume' : 'Pause'}</button>
          {recording && <button type="button" className="r-ws-btn" onClick={() => stopCapture()}>Stop recording</button>}
          <button type="button" className="r-ws-btn" disabled={busy || !frameOn} onClick={() => end(onLeave)}>Leave task</button>
          <button type="button" className="r-ws-btn is-primary" disabled={busy || !frameOn} onClick={() => end(onFinish)}>Finish task</button>
        </span>
      </div>
      {showTask && (
        <div id="ws-task" className="r-ws-task">
          <Scenario journey={journey} compact />
          <button type="button" className="r-link-btn" onClick={() => setShowTask(false)}>Hide task</button>
        </div>
      )}
      {rec.state === 'stopped' && rec.note && <p className="r-ws-alert" role="alert">{rec.note} The task continues without recording.</p>}
      {startError && <p className="r-ws-alert" role="alert">Recording didn’t start: {startError} The task continues without recording.</p>}
      <div className="r-ws-frame">
        {frameOn
          ? <iframe key={journey.id} src={prototypeHref(journey.start)} title={`Credit Proposal prototype: ${journey.title}`} />
          : <div className="r-ws-paused"><p>Opening the prototype…</p></div>}
        {paused && (
          <div className="r-ws-paused">
            <p>Task paused{recording ? ' · recording paused' : ''}</p>
            <button type="button" className="r-btn" onClick={togglePause}>Resume task</button>
          </div>
        )}
      </div>
    </div>
  );
}

function Feedback({ journey, index, total, t, set, rec, wantsRecording, headRef, onNext }) {
  const [showScn, setShowScn] = useState(false);
  const scale = [];
  for (let n = easeScale.min; n <= easeScale.max; n++) scale.push(n);
  const last = (t.attempts || [])[(t.attempts || []).length - 1];
  const isLast = index + 1 >= total;
  let recMsg = null;
  if (rec.state === 'saving') recMsg = 'Saving the task recording on this device…';
  else if (last && last.recId) {
    recMsg = {
      saved: 'The full task recording is saved on this device. Recording is paused while you answer.',
      'saved-partial': 'Part of this task was recorded (recording stopped before the task ended). It is saved on this device.',
      failed: 'The task recording couldn’t be saved on this device.',
      empty: 'Nothing was captured for this task, so no recording was saved.'
    }[last.recStatus] || null;
  } else if (wantsRecording) recMsg = 'This task wasn’t recorded.';
  const unsaved = last && (last.recStatus === 'failed' || last.recStatus === 'empty') ? lastUnsaved() : null;

  return (
    <Panel className="is-form" label={`Feedback on ${journey.title}`}>
      <PanelHead icon={Ico.speech} eyebrow={`Journey ${index + 1} of ${total} · ${journey.title}`} title="How was this task?" headRef={headRef}
        intro={isLast ? 'Share your experience before we wrap up.' : 'Share your experience before moving to the next journey.'} />
      <div className="r-jp-body">
      {showScn && <div id="fb-scn" className="r-fb-scn"><Scenario journey={journey} compact /></div>}
      <fieldset className="r-rate r-jp-tile">
        <legend className="r-fb-q">{afterTaskQuestions.ease}</legend>
        <div className="r-rate-row">
          {scale.map(n => (
            <label key={n} className={`r-rate-opt${t.ease === n ? ' is-on' : ''}`}>
              <input type="radio" name={`ease-${journey.id}`} value={n} checked={t.ease === n} onChange={() => set({ ease: n })}
                aria-label={n === easeScale.min ? `${n}, ${easeScale.minLabel}` : n === easeScale.max ? `${n}, ${easeScale.maxLabel}` : String(n)} />
              <span className="r-rate-n">{n}</span>
              <span className="r-rate-tick">{Ico.check}</span>
            </label>
          ))}
        </div>
        <div className="r-rate-ends" aria-hidden="true"><span>1 — {easeScale.minLabel}</span><span>7 — {easeScale.maxLabel}</span></div>
      </fieldset>
      <div className="r-jp-tile">
      <div className="r-fb-field">
        <label htmlFor={`un-${journey.id}`} className="r-fb-q">{afterTaskQuestions.unclear} <span className="r-opt">Optional</span></label>
        <textarea id={`un-${journey.id}`} className="r-fb-input" rows={3} placeholder="Share anything you found unclear…" aria-describedby={`fb-help-${journey.id}`} value={t.unclear || ''} onChange={e => set({ unclear: e.target.value })} />
      </div>
      {journey.followUp && (
        <div className="r-fb-field">
          <label htmlFor={`chk-${journey.id}`} className="r-fb-q">{reviewFollowUp.q} <span className="r-opt">Optional</span></label>
          <textarea id={`chk-${journey.id}`} className="r-fb-input" rows={3} placeholder="Describe the information you usually check…" aria-describedby={`fb-help-${journey.id}`} value={t.check || ''} onChange={e => set({ check: e.target.value })} />
        </div>
      )}
      <p id={`fb-help-${journey.id}`} className="r-fb-help">Prefer to answer aloud? Your facilitator can take notes.</p>
      </div>
      {recMsg && (
        <p className="r-fb-rec" role="status">{Ico.info}<span>{recMsg}
          {unsaved && <> <button type="button" className="r-link-btn is-inline" onClick={() => download(`${journey.id}-unsaved-recording.${recExt(unsaved.type)}`, unsaved, unsaved.type)}>Download the unsaved part</button> before leaving this page.</>}
        </span></p>
      )}
      </div>
      <footer className="r-jp-foot">
        <button type="button" className="r-btn r-btn-secondary" aria-expanded={showScn} aria-controls="fb-scn" onClick={() => setShowScn(v => !v)}>{showScn ? 'Hide scenario' : 'View scenario'}</button>
        <button type="button" className="r-btn r-btn-icon" onClick={onNext}>{isLast ? 'Continue to closing' : 'Next journey'} {Ico.arrow}</button>
      </footer>
    </Panel>
  );
}
