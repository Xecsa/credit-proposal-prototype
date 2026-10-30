import React, { useEffect, useRef, useState } from 'react';
import { participants, project } from '../config.js';
import { consentItems, consentRecordings, roleQuestions, roleIntro, journeysByRole, journeyOverview, closingQuestion, participantNote } from '../script.js';
import { infoSheet } from '../infoSheet.js';
import { useSession } from '../store.js';
import SignaturePad from './SignaturePad.jsx';
import InfoSheet from './InfoSheet.jsx';
import TaskJourney, { JCard, FeedbackArt } from './TaskJourney.jsx';
import { discardCapture, resetParticipantMedia } from '../recorder.js';

// Participant space: welcome → information sheet → consent → about your work → one task at a time → closing.
// Calm and stable: no entrance or scroll motion here. Task text is goal-based; no clicks or answers shown.
const STEPS = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'info', label: 'Information' },
  { id: 'consent', label: 'Consent' },
  { id: 'about', label: 'About your work' },
  { id: 'tasks', label: 'Tasks' },
  { id: 'closing', label: 'Closing' }
];
// Sessions saved before the information sheet existed used numeric steps (0 welcome+consent, 1 about, 2 tasks, 3 closing).
const LEGACY = ['welcome', 'about', 'tasks', 'closing'];
const stageOf = d => d.stage || LEGACY[d.step || 0] || 'welcome';

export default function ParticipantSession({ id }) {
  const p = participants.find(x => x.id === id);
  const [data, update] = useSession(id);
  const headRef = useRef(null);
  // A facilitator "Reset test session" in another tab removes this record: stop any recording without keeping it
  // and release screen and microphone here too.
  useEffect(() => {
    const onStorage = e => { if (e.key === `cp-research:v1:${id}` && e.newValue === null) resetParticipantMedia(id).catch(() => {}); };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [id]);
  if (!p) return <NotFound />;
  const role = journeysByRole[p.roleKey];
  const stage = stageOf(data);
  const step = STEPS.findIndex(s => s.id === stage);
  const taskIndex = data.taskIndex || 0;
  const ctx = { id: p.id, code: p.code, role: p.role, minutes: project.sessionMinutes, journeys: journeyOverview[p.roleKey].map(j => j.title) };

  const go = (patch) => {
    update(d => ({ ...d, ...patch }));
    requestAnimationFrame(() => { window.scrollTo(0, 0); headRef.current && headRef.current.focus(); });
  };

  return (
    <main id="main" className="r-session">
      <div className={`r-session-in${stage === 'info' ? ' is-reading' : stage === 'about' ? ' is-about' : stage === 'tasks' || stage === 'closing' || stage === 'welcome' ? ' is-journey' : ''}`}>
        <Progress p={p} step={step} />
        {stage === 'tasks' && (
          <TaskJourney
            key={role.journeys[taskIndex].id}
            p={p} journey={role.journeys[taskIndex]} index={taskIndex} total={role.journeys.length}
            data={data} update={update}
            onNext={() => { if (taskIndex + 1 < role.journeys.length) go({ taskIndex: taskIndex + 1 }); else { discardCapture(); go({ stage: 'closing' }); } }}
          />
        )}
        {stage === 'welcome' && <Welcome headRef={headRef} onNext={() => go({ stage: 'info' })} />}
        {stage === 'closing' && <Closing data={data} update={update} headRef={headRef} onBack={() => go({ stage: 'tasks', taskIndex: role.journeys.length - 1 })} />}
        {stage !== 'tasks' && stage !== 'closing' && stage !== 'welcome' && <div className={`r-session-card${stage === 'info' ? ' is-reading' : stage === 'about' ? ' is-about' : ''}`}>
          {stage === 'info' && <InfoSheet ctx={ctx} headRef={headRef} onBack={() => go({ stage: 'welcome' })} onNext={() => go({ stage: 'consent' })} />}
          {stage === 'about' && <RoleQuestions p={p} headRef={headRef} data={data} update={update} onBack={() => go({ stage: 'consent' })} onNext={() => go({ stage: 'tasks', taskIndex: 0 })} />}
          {stage !== 'info' && stage !== 'about' && <h1 ref={headRef} tabIndex={-1} className="r-session-h">
                {stage === 'consent' && 'Consent form'}
              </h1>}
          {stage === 'consent' && <Consent data={data} update={update} onInfo={() => go({ stage: 'info' })} onNext={() => go({ stage: 'about' })} />}
        </div>}
        {(stage === 'info' || stage === 'consent' || stage === 'about') && <p className="r-session-foot">You can pause, skip a task or stop at any time. Session length: about {project.sessionMinutes} minutes.</p>}
      </div>
    </main>
  );
}

// Session stepper: six rounded pills, the current one in navy. Journeys within Tasks are numbered on each journey
// card ("Journey 1 of 3"), so the two levels aren't confused.
function Progress({ p, step }) {
  return (
    <nav className="r-prog" aria-label="Session progress">
      <p className="r-eyebrow">{p.code} · {p.role}</p>
      <ol className="r-steps">
        {STEPS.map((s, i) => (
          <li key={s.id} className={i === step ? 'is-current' : i < step ? 'is-done' : ''} aria-current={i === step ? 'step' : undefined}>
            <span className="r-steps-n">{i + 1}</span>{s.label}{i < step && <span className="r-sr"> (done)</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Welcome({ headRef, onNext }) {
  return (
    <JCard className="is-closing" figure={<FeedbackArt />} eyebrow="Usability session" title="Welcome" headRef={headRef} label="Welcome"
      intro="Today we’re exploring how the credit proposal prototype supports your work. We’re testing the design, not you, and your honest feedback will help us improve it."
      foot={<>
        <a className="r-link-btn" href="#/">Leave session</a>
        <button type="button" className="r-btn r-btn-icon" onClick={onNext}>Continue <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg></button>
      </>}>
      <div className="r-welcome">
        <p>Please say out loud what you’re looking for, what you expect, and anything that feels unclear. Some functions are simulated, and you don’t need to finish everything.</p>
        <p>First, we’ll share some information about this research. Then you can decide whether to take part.</p>
      </div>
    </JCard>
  );
}

function Consent({ data, update, onInfo, onNext }) {
  const c = data.consent || {};
  const set = patch => update(d => ({ ...d, consent: { ...(d.consent || {}), ...patch } }));
  const items = c.items || [];
  const ready = consentItems.every((_, i) => items[i]) && (c.name || '').trim() && c.signature;
  const agree = () => {
    // The information-sheet version the participant was shown is saved with the consent record.
    update(d => ({ ...d, startedAt: d.startedAt || new Date().toISOString(), consent: { ...(d.consent || {}), infoSheetVersion: d.consent && d.consent.at && d.consent.infoSheetVersion ? d.consent.infoSheetVersion : `${infoSheet.version}${infoSheet.status === 'final' ? '' : '-draft'}`, at: d.consent && d.consent.at ? d.consent.at : new Date().toISOString() } }));
    onNext();
  };
  return (
    <>
      <p className="r-session-lead">Please read each statement. Tick the ones you agree with, then add your name and signature.</p>
      <fieldset className="r-fieldset">
        <legend>Consent</legend>
        {consentItems.map((t, i) => (
          <label key={i} className="r-check">
            <input type="checkbox" checked={!!items[i]} onChange={e => { const next = consentItems.map((_, k) => k === i ? e.target.checked : !!items[k]); set({ items: next }); }} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>
      <fieldset className="r-fieldset">
        <legend>Recording (optional)</legend>
        {consentRecordings.map(r => (
          <label key={r.key} className="r-check is-optional">
            <input type="checkbox" checked={!!c[r.key]} onChange={e => set({ [r.key]: e.target.checked })} />
            <span>{r.label}</span>
          </label>
        ))}
      </fieldset>
      <div className="r-field">
        <label htmlFor="c-name">Your name</label>
        <input id="c-name" className="r-input r-field-soft" type="text" autoComplete="off" value={c.name || ''} onChange={e => set({ name: e.target.value })} />
      </div>
      <div className="r-field">
        <span className="r-label" id="sig-label">Signature</span>
        {c.signature === 'typed'
          ? <p className="r-typed-sig">Signed with typed name: <strong>{c.name}</strong> <button type="button" className="r-link-btn" onClick={() => set({ signature: '' })}>Draw instead</button></p>
          : <>
              <SignaturePad labelledBy="sig-label" value={c.signature || ''} onChange={sig => set({ signature: sig })} />
              <button type="button" className="r-link-btn" disabled={!(c.name || '').trim()} onClick={() => set({ signature: 'typed' })}>Use my typed name as my signature</button>
            </>}
      </div>
      <div className="r-actions">
        <button type="button" className="r-btn r-btn-secondary" onClick={onInfo}>Back</button>
        <button type="button" className="r-btn" disabled={!ready} onClick={agree}>I agree, continue</button>
      </div>
      {!ready && <p className="r-hint">Tick each statement, add your name and sign to continue.</p>}
    </>
  );
}

// "About your work": a short conversation, not a questionnaire. Two optional questions (the facilitator may capture
// spoken answers instead), a collapsed optional note, and a save status that reflects the actual localStorage write.
function RoleQuestions({ p, headRef, data, update, onBack, onNext }) {
  const r = data.role || {};
  const [noteOpen, setNoteOpen] = useState(!!data.participantNote);
  const [saved, setSaved] = useState(null); // null until the first edit, then true / false
  const save = fn => setSaved(update(fn) !== false);
  return (
    <section className="r-about" aria-labelledby="about-title">
      <header className="r-about-head">
        <span className="r-about-art" aria-hidden="true"><img src={p.illustration} alt="" width="52" height="52" /></span>
        <h1 id="about-title" ref={headRef} tabIndex={-1} className="r-about-title">{roleIntro.title}</h1>
        <p className="r-about-intro">{roleIntro.intro}</p>
        <p className="r-about-note">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3a2.5 2.5 0 0 1 2.5 2.5V10a2.5 2.5 0 0 1-5 0V5.5A2.5 2.5 0 0 1 10 3Z" /><path d="M5 9.5a5 5 0 0 0 10 0M10 14.5V17" /></svg>
          {roleIntro.note}
        </p>
      </header>

      <div className="r-about-body">
        {roleQuestions.map((q, i) => (
          <div key={q.id} className="r-about-q">
            <span className="r-about-n" aria-hidden="true">{i + 1}</span>
            <div className="r-about-field">
              <label htmlFor={`rq-${q.id}`} className="r-about-label">{q.q}</label>
              <textarea id={`rq-${q.id}`} className="r-about-input" rows={3} placeholder={roleIntro.placeholder} value={r[q.id] || ''}
                onChange={e => { const v = e.target.value; save(d => ({ ...d, role: { ...(d.role || {}), [q.id]: v } })); }} />
            </div>
          </div>
        ))}

        <div className={`r-about-more${noteOpen ? ' is-open' : ''}`}>
          <button type="button" className="r-about-toggle" aria-expanded={noteOpen} aria-controls="p-note-wrap" onClick={() => setNoteOpen(o => !o)}>
            <span>{participantNote.label}</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 8 4 4 4-4" /></svg>
          </button>
          <div id="p-note-wrap" hidden={!noteOpen}>
            <label htmlFor="p-note" className="r-sr">{participantNote.label}</label>
            <textarea id="p-note" className="r-about-input" rows={3} placeholder={participantNote.placeholder} value={data.participantNote || ''}
              onChange={e => { const v = e.target.value; save(d => ({ ...d, participantNote: v })); }} />
          </div>
        </div>
      </div>

      <footer className="r-about-foot">
        <p className={`r-about-save${saved === false ? ' is-error' : ''}`} role="status" aria-live="polite">
          {saved === false && 'Couldn’t save on this device. Your facilitator can note your answers.'}
        </p>
        <div className="r-about-actions">
          <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
          <button type="button" className="r-btn" onClick={onNext}>Continue to tasks</button>
        </div>
      </footer>
    </section>
  );
}

// Closing: one reflective question, then a thank-you in the same panel. Recordings were already finalised when the
// last task ended (and any open capture released on the way here), so finishing only saves the answer.
function Closing({ data, update, headRef, onBack }) {
  const [failed, setFailed] = useState(false);
  // Kept locally too, so the answer stays on screen even if this browser refuses to save it.
  const [text, setText] = useState(data.closing || '');
  const done = !!data.completedAt;
  const finish = () => { const ok = update(d => ({ ...d, closing: text, completedAt: new Date().toISOString() })); setFailed(ok === false); };
  useEffect(() => { headRef.current && headRef.current.focus(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  if (done) {
    return (
      <JCard key="thanks" className="is-closing" figure={<FeedbackArt />} eyebrow="Session complete" title="Thank you for your time" headRef={headRef}
        intro="Your feedback will help us improve the credit proposal experience for RMs and ARMs." label="Thank you"
        foot={<a className="r-btn r-btn-icon" href="#/">Return to research home</a>}>
        <p className="r-fb-rec" role="status"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.25" /><path d="M10 9v4.5M10 6.5v.01" /></svg><span>Your answers are saved in this browser on this device.</span></p>
      </JCard>
    );
  }
  return (
    <JCard key="form" className="is-closing" figure={<FeedbackArt />} eyebrow="Final reflection" title="One last question" headRef={headRef}
      intro="Looking back at the journeys you tried, we’d like to understand your main priority." label="One last question"
      foot={<>
        <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
        <button type="button" className="r-btn" onClick={finish}>{failed ? 'Try again' : 'Finish session'}</button>
      </>}>
      <div className="r-fb-field is-first">
        <label htmlFor="closing" className="r-fb-q">{closingQuestion}</label>
        <textarea id="closing" className="r-fb-input is-tall" rows={5} placeholder="Share the improvement that matters most to you…" aria-describedby="closing-help"
          value={text} onChange={e => { const v = e.target.value; setText(v); update(d => ({ ...d, closing: v })); }} />
        <p id="closing-help" className="r-fb-help">You can answer aloud, and your facilitator can take notes.</p>
      </div>
      {failed && <p className="r-scn-left" role="alert">Your answer couldn’t be saved in this browser. It’s still here; please try again, or ask your facilitator to note it.</p>}
    </JCard>
  );
}

function NotFound() {
  return (
    <main id="main" className="r-session"><div className="r-session-in"><div className="r-session-card">
      <h1 className="r-session-h">Session not found</h1>
      <p><a href="#/">Back to the research home</a></p>
    </div></div></main>
  );
}
