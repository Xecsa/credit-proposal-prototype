import React, { useEffect, useRef, useState } from 'react';
import { afterTaskQuestions, easeScale, reviewFollowUp } from '../script.js';
import { prototypeHref } from '../useRoute.js';
import {
  getRec, subscribeRec, bindParticipant, supportsScreen, supportsMic, requestScreen, requestMic, isLive,
  startJourney, stopJourney, pauseJourney, resumeJourney, stopCapture, discardCapture, lastUnsaved, recExt
} from '../recorder.js';
import { download } from '../store.js';
// The Facility Application Hub's own tile illustrations, so each journey matches what the participant sees in the prototype.
import artClient from '../../../src/assets/48d1ac83055cf739d59eb9a8a7234415.png';
import artDocs from '../../../src/assets/54ed698967b05294cca56c56f3884d39.png';
import artChart from '../../../src/assets/567e0ec0472f73849c690a5a80845d7e.png';

const ART = { client: artClient, docs: artDocs, chart: artChart };

// Shared surface for the journey screens: rounded white card, pale ENBD-blue wash at the top, one focal heading.
export function JCard({ wide, center, art, eyebrow, title, intro, headRef, children, foot, label }) {
  return (
    <section className={`r-jcard${wide ? ' is-wide' : ''}${center ? ' is-center' : ''}`} aria-label={label}>
      <header className="r-jcard-head">
        {art && <img className="r-jcard-art" src={art} alt="" width="96" height="96" />}
        {eyebrow && <p className="r-jcard-eyebrow">{eyebrow}</p>}
        <h1 ref={headRef} tabIndex={-1} className="r-jcard-title">{title}</h1>
        {intro && <p className="r-jcard-intro">{intro}</p>}
      </header>
      <div className="r-jcard-body">{children}</div>
      {foot && <footer className="r-jcard-foot">{foot}</footer>}
    </section>
  );
}

const Ico = {
  speech: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4.5h12a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9l-3.5 3v-3H4A1.5 1.5 0 0 1 2.5 13V6A1.5 1.5 0 0 1 4 4.5Z" /><path d="M6.5 8.5h7M6.5 11h4.5" /></svg>,
  video: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="10.5" height="10" rx="2" /><path d="m13 9 4.5-2.5v7L13 11" /></svg>,
  info: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.25" /><path d="M10 9v4.5M10 6.5v.01" /></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg>,
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

  const recText = setupNext ? 'Recording setup comes next.' : rec.live ? 'Recording is ready.' : 'Recording is off.';
  const art = ART[journey.art] || ART.docs;

  return (
    <>
      {phase === 'intro' && (
        <JCard center art={art} eyebrow={`Journey ${index + 1} of ${total}`} title={journey.title} intro={journey.intro} headRef={headRef}
          label={`Journey ${index + 1} of ${total}: ${journey.title}`}
          foot={<>
            <p className="r-jcard-quiet">You can pause or stop at any time.</p>
            <span className="r-jcard-actions">
              <button type="button" className="r-btn r-btn-secondary" onClick={() => { set({ skipped: true }); onNext(); }}>Skip this journey</button>
              <button type="button" className="r-btn r-btn-icon" onClick={onStart}>Start journey {Ico.arrow}</button>
            </span>
          </>}>
          <Scenario journey={journey} />
          {t.leftAt && !t.finishedAt && <p className="r-jnote">You left this journey before finishing. You can start it again or skip it.</p>}
          <ul className="r-jmeta">
            <li>{Ico.speech}<span>{journey.reassurance ? `${journey.reassurance} ` : 'Think aloud as you explore. '}You can reopen these instructions during the task.</span></li>
            <li>{Ico.video}<span>{recText}</span></li>
          </ul>
        </JCard>
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
      <div><dt>Your goal</dt><dd>{journey.goal}</dd></div>
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
    <JCard eyebrow={`Before journey ${index + 1}`} title="Set up recording" headRef={headRef} label="Set up recording"
      intro={`You agreed to ${consent.screen && consent.audio ? 'screen and audio recording' : consent.screen ? 'screen recording' : 'audio recording'}. Nothing is recorded until the task opens, and you can stop recording at any time.`}
      foot={<>
        <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
        <button type="button" className="r-link-btn" onClick={() => onSkip(err ? 'recording unavailable or not allowed' : 'participant chose not to record')}>Continue without recording</button>
      </>}>

      {step === 'screen' && (
        <div className="r-recstep">
          <h3 className="r-recstep-h">1. Share this tab</h3>
          <p>Your browser will ask what to share. Choose <strong>this tab</strong> (“Credit Proposal · Usability research”) where your browser offers it. The prototype opens inside this tab, so it will be included.</p>
          <p className="r-hint">Whatever you choose is recorded as it appears on screen. Sharing a whole screen or window would also record anything else visible on it.</p>
          <div className="r-actions is-start"><button type="button" className="r-btn" disabled={busy} onClick={share}>Share this tab</button></div>
        </div>
      )}

      {step === 'preview' && (
        <div className="r-recstep">
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
        <div className="r-recstep">
          <h3 className="r-recstep-h">{consent.screen && supportsScreen() ? '3' : '1'}. Turn on the microphone</h3>
          <p>Your browser will ask for microphone access. Audio is recorded only during each task.</p>
          <div className="r-actions is-start">
            <button type="button" className="r-btn" disabled={busy} onClick={mic}>Turn on microphone</button>
            {isLive() && <button type="button" className="r-btn r-btn-secondary" onClick={() => setStep('confirm')}>Continue with screen only</button>}
          </div>
        </div>
      )}

      {step === 'confirm' && (
        <div className="r-recstep">
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
    </JCard>
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
    <JCard wide={false} eyebrow={`Journey ${index + 1} of ${total} · ${journey.title}`} title="How was this task?" headRef={headRef}
      intro={isLast ? 'Share your experience before you continue.' : 'Share your experience before moving to the next journey.'}
      label={`Feedback on ${journey.title}`}
      foot={<>
        <button type="button" className="r-link-btn" aria-expanded={showScn} aria-controls="fb-scn" onClick={() => setShowScn(v => !v)}>{showScn ? 'Hide scenario' : 'View scenario'}</button>
        <button type="button" className="r-btn r-btn-icon" onClick={onNext}>{isLast ? 'Continue to closing' : 'Next journey'} {Ico.arrow}</button>
      </>}>
      {showScn && <div id="fb-scn" className="r-fb-scn"><Scenario journey={journey} compact /></div>}
      <fieldset className="r-rate">
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
      <div className="r-fb-field">
        <label htmlFor={`un-${journey.id}`} className="r-fb-q">{afterTaskQuestions.unclear} <span className="r-opt">Optional</span></label>
        <textarea id={`un-${journey.id}`} className="r-fb-input" rows={4} placeholder="Share anything you found unclear…" aria-describedby={`un-help-${journey.id}`} value={t.unclear || ''} onChange={e => set({ unclear: e.target.value })} />
        <p id={`un-help-${journey.id}`} className="r-fb-help">Prefer to answer aloud? Your facilitator can take notes.</p>
      </div>
      {journey.followUp && (
        <div className="r-fb-field">
          <label htmlFor={`chk-${journey.id}`} className="r-fb-q">{reviewFollowUp.q} <span className="r-opt">Optional</span></label>
          <textarea id={`chk-${journey.id}`} className="r-fb-input" rows={4} value={t.check || ''} onChange={e => set({ check: e.target.value })} />
        </div>
      )}
      {recMsg && (
        <p className="r-fb-rec" role="status">{Ico.info}<span>{recMsg}
          {unsaved && <> <button type="button" className="r-link-btn is-inline" onClick={() => download(`${journey.id}-unsaved-recording.${recExt(unsaved.type)}`, unsaved, unsaved.type)}>Download the unsaved part</button> before leaving this page.</>}
        </span></p>
      )}
    </JCard>
  );
}
