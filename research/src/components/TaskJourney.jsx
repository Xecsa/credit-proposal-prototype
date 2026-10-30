import React, { useEffect, useRef, useState } from 'react';
import { afterTaskQuestions, easeScale, reviewFollowUp } from '../script.js';
import { prototypeHref } from '../useRoute.js';
import {
  getRec, subscribeRec, bindParticipant, supportsScreen, supportsMic, requestScreen, requestMic, isLive,
  startJourney, stopJourney, pauseJourney, resumeJourney, stopCapture, discardCapture, lastUnsaved, recExt
} from '../recorder.js';
import { download } from '../store.js';

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
  const [phase, setPhase] = useState(t.finishedAt || t.skipped ? 'feedback' : 'intro');
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

  const onStart = () => {
    // First journey (or capture has ended): set up recording if consent allows and it hasn't been declined.
    if (wantsRecording && mode !== 'notes-only' && !isLive() && (supportsScreen() || supportsMic())) setPhase('setup');
    else openTask();
  };

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
    return <RecordingSetup consent={consent} rec={rec}
      onReady={() => { update(d => ({ ...d, recordingMode: 'record' })); openTask(); }}
      onSkip={reason => { discardCapture(); update(d => ({ ...d, recordingMode: 'notes-only', recordingNote: reason })); openTask(); }}
      onBack={() => { discardCapture(); setPhase('intro'); }} />;
  }

  return (
    <>
      {phase === 'intro' && (
        <div className="r-scn">
          <h2 className="r-scn-title">{journey.title}</h2>
          <dl className="r-scn-list">
            <div><dt>Situation</dt><dd>{journey.situation}</dd></div>
            <div><dt>Your goal</dt><dd>{journey.goal}</dd></div>
          </dl>
          <p className="r-hint">Take your time and think aloud. You can view this scenario again during the task.</p>
          {t.leftAt && !t.finishedAt && <p className="r-scn-left">You left this journey before finishing. You can start it again or skip it.</p>}
          <RecStatusLine rec={rec} data={data} wantsRecording={wantsRecording} />
          <div className="r-actions">
            <button type="button" className="r-link-btn" onClick={() => { set({ skipped: true }); onNext(); }}>Skip this journey</button>
            <button type="button" className="r-btn" onClick={onStart}>Start journey</button>
          </div>
        </div>
      )}
      {phase === 'task' && (
        <Workspace journey={journey} index={index} total={total} rec={rec} frameOn={frameOn} startError={startError}
          onFinish={() => endTask('finished')} onLeave={() => endTask('left')} />
      )}
      {phase === 'feedback' && <Feedback journey={journey} t={t} set={set} rec={rec} onNext={onNext} onRedo={() => setPhase('intro')} />}
    </>
  );
}

function RecStatusLine({ rec, data, wantsRecording }) {
  let text;
  if (!wantsRecording) text = 'Not recording: no recording was agreed on the consent form.';
  else if (rec.live) text = `Recording: ${REC_LABEL[rec.state] || rec.state}. Screen and microphone access stay on between journeys.`;
  else if (rec.state === 'stopped') text = `Recording stopped. ${rec.note} You’ll be asked to share again when you start the journey.`;
  else if (data.recordingMode === 'notes-only') text = `Not recording: notes only${data.recordingNote ? ` (${data.recordingNote})` : ''}.`;
  else text = 'Recording is set up when you start the journey.';
  return <p className="r-rec-line"><span className={`r-rec-dot is-${rec.live ? rec.state : 'off'}`} aria-hidden="true" />{text}</p>;
}

// ---- recording setup: explicit participant actions, screen first, microphone separately ----
function RecordingSetup({ consent, rec, onReady, onSkip, onBack }) {
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
    <div className="r-recsetup">
      <p className="r-scn-k">Before the first journey</p>
      <h2 ref={headRef} tabIndex={-1} className="r-scn-title">Set up recording</h2>
      <p className="r-hint">You agreed to {consent.screen && consent.audio ? 'screen and audio recording' : consent.screen ? 'screen recording' : 'audio recording'}. Nothing is recorded until the task opens, and you can stop recording at any time.</p>

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
            ? <p className="r-scn-left">You’re sharing {surface === 'monitor' ? 'your whole screen' : 'a window'}, so anything visible on it will be recorded. Choose again to share just this tab, or continue if that’s intended.</p>
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

      {err && <p className="r-scn-left" role="alert">{err}</p>}
      <div className="r-actions">
        <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
        <button type="button" className="r-link-btn" onClick={() => onSkip(err ? 'recording unavailable or not allowed' : 'participant chose not to record')}>Continue without recording</button>
      </div>
    </div>
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
          <p><strong>Situation.</strong> {journey.situation}</p>
          <p><strong>Your goal.</strong> {journey.goal}</p>
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

function Feedback({ journey, t, set, rec, onNext, onRedo }) {
  const fbRef = useRef(null);
  useEffect(() => { fbRef.current && fbRef.current.focus(); }, []);
  const scale = [];
  for (let n = easeScale.min; n <= easeScale.max; n++) scale.push(n);
  const last = (t.attempts || [])[(t.attempts || []).length - 1];
  return (
    <>
      <h2 className="r-task-title">{journey.title}</h2>
      {t.skipped
        ? <p className="r-hint">You skipped this journey.</p>
        : <>
            <fieldset className="r-fieldset" ref={fbRef} tabIndex={-1}>
              <legend>{afterTaskQuestions.ease}</legend>
              <div className="r-scale" role="radiogroup" aria-label={afterTaskQuestions.ease}>
                {scale.map(n => (
                  <label key={n} className={`r-scale-opt${t.ease === n ? ' is-on' : ''}`}>
                    <input type="radio" name={`ease-${journey.id}`} value={n} checked={t.ease === n} onChange={() => set({ ease: n })} />
                    <span>{n}</span>
                  </label>
                ))}
              </div>
              <div className="r-scale-ends"><span>1 — {easeScale.minLabel}</span><span>7 — {easeScale.maxLabel}</span></div>
            </fieldset>
            <div className="r-field">
              <label htmlFor={`un-${journey.id}`}>{afterTaskQuestions.unclear} <span className="r-opt">(optional)</span></label>
              <textarea id={`un-${journey.id}`} className="r-input" rows={3} value={t.unclear || ''} onChange={e => set({ unclear: e.target.value })} />
            </div>
            {journey.followUp && (
              <div className="r-field">
                <label htmlFor={`chk-${journey.id}`}>{reviewFollowUp.q} <span className="r-opt">(optional)</span></label>
                <textarea id={`chk-${journey.id}`} className="r-input" rows={3} value={t.check || ''} onChange={e => set({ check: e.target.value })} />
              </div>
            )}
            <p className="r-hint">You can answer aloud instead. Your facilitator can note your response.</p>
          </>}
      {last && last.recId && <p className="r-rec-line"><span className={`r-rec-dot is-${rec.state === 'saving' ? 'saving' : last.recStatus === 'failed' || last.recStatus === 'empty' ? 'failed' : 'saved'}`} aria-hidden="true" />
        {rec.state === 'saving' ? 'Saving the recording…' : last.recStatus === 'saved' ? 'Task recording saved on this device. Recording is paused while you answer.' : last.recStatus === 'saved-partial' ? 'Part of the task was recorded and saved on this device.' : 'The task recording could not be saved. Your facilitator can see this in their view.'}
      </p>}
      {last && (last.recStatus === 'failed' || last.recStatus === 'empty') && lastUnsaved() && (
        <p className="r-hint">For the facilitator: <button type="button" className="r-link-btn is-inline" onClick={() => download(`${journey.id}-unsaved-recording.${recExt(lastUnsaved().type)}`, lastUnsaved(), lastUnsaved().type)}>download the unsaved part of this recording</button> before leaving this page.</p>
      )}
      <div className="r-actions">
        <button type="button" className="r-btn r-btn-secondary" onClick={onRedo}>Back to scenario</button>
        <button type="button" className="r-btn" onClick={onNext}>Continue</button>
      </div>
    </>
  );
}

