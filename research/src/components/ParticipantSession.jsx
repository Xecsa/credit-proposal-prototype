import React, { useEffect, useRef, useState } from 'react';
import { participants, project } from '../config.js';
import { consentItems, consentRecordings, roleQuestions, roleIntro, reviewFollowUp, journeysByRole, journeyOverview, afterTaskQuestions, easeScale, closingQuestion, participantNote } from '../script.js';
import { infoSheet } from '../infoSheet.js';
import { useSession } from '../store.js';
import { prototypeHref } from '../useRoute.js';
import SignaturePad from './SignaturePad.jsx';
import InfoSheet from './InfoSheet.jsx';

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
      <div className={`r-session-in${stage === 'info' ? ' is-reading' : stage === 'about' ? ' is-about' : ''}`}>
        <p className="r-eyebrow">{p.code} · {p.role}</p>
        <ol className="r-steps" aria-label="Session progress">
          {STEPS.map((s, i) => (
            <li key={s.id} className={i === step ? 'is-current' : i < step ? 'is-done' : ''} aria-current={i === step ? 'step' : undefined}>
              <span className="r-steps-n">{i + 1}</span>{s.label}
            </li>
          ))}
        </ol>
        <div className={`r-session-card${stage === 'info' ? ' is-reading' : stage === 'about' ? ' is-about' : ''}`}>
          {stage === 'info' && <InfoSheet ctx={ctx} headRef={headRef} onBack={() => go({ stage: 'welcome' })} onNext={() => go({ stage: 'consent' })} />}
          {stage === 'about' && <RoleQuestions p={p} headRef={headRef} data={data} update={update} onBack={() => go({ stage: 'consent' })} onNext={() => go({ stage: 'tasks', taskIndex: 0 })} />}
          {stage !== 'info' && stage !== 'about' && <h1 ref={headRef} tabIndex={-1} className="r-session-h">
                {stage === 'welcome' && 'Welcome'}
                {stage === 'consent' && 'Consent form'}
                {stage === 'tasks' && `Task ${taskIndex + 1} of ${role.journeys.length}`}
                {stage === 'closing' && (data.completedAt ? 'Thank you' : 'One last question')}
              </h1>}
          {stage === 'welcome' && <Welcome onNext={() => go({ stage: 'info' })} />}
          {stage === 'consent' && <Consent data={data} update={update} onInfo={() => go({ stage: 'info' })} onNext={() => go({ stage: 'about' })} />}
          {stage === 'tasks' && (
            <Task
              key={role.journeys[taskIndex].id}
              journey={role.journeys[taskIndex]}
              data={data} update={update}
              onBack={() => taskIndex === 0 ? go({ stage: 'about' }) : go({ taskIndex: taskIndex - 1 })}
              onNext={() => taskIndex + 1 < role.journeys.length ? go({ taskIndex: taskIndex + 1 }) : go({ stage: 'closing' })}
            />
          )}
          {stage === 'closing' && <Closing data={data} update={update} onBack={() => go({ stage: 'tasks', taskIndex: role.journeys.length - 1 })} />}
        </div>
        <p className="r-session-foot">You can pause, skip a task or stop at any time. Session length: about {project.sessionMinutes} minutes.</p>
      </div>
    </main>
  );
}

function Welcome({ onNext }) {
  return (
    <>
      <p className="r-session-lead">Today we’re exploring how the credit proposal prototype supports your work. We’re testing the design, not you, and your honest feedback will help us improve it.</p>
      <p>Please say out loud what you’re looking for, what you expect, and anything that feels unclear. Some functions are simulated, and you don’t need to finish everything.</p>
      <p>First, we’ll share some information about this research. Then you can decide whether to take part.</p>
      <div className="r-actions">
        <a className="r-link-btn" href="#/">Leave session</a>
        <button type="button" className="r-btn" onClick={onNext}>Continue</button>
      </div>
    </>
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
      <p className="r-hint">Want to check something first? <button type="button" className="r-link-btn is-inline" onClick={onInfo}>Read the information sheet again</button></p>
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
        <input id="c-name" className="r-input" type="text" autoComplete="off" value={c.name || ''} onChange={e => set({ name: e.target.value })} />
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
        <span />
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
          {saved === true && 'Saved on this device'}
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

function Task({ journey, data, update, onBack, onNext }) {
  const t = (data.tasks || {})[journey.id] || {};
  const set = patch => update(d => ({ ...d, tasks: { ...(d.tasks || {}), [journey.id]: { ...((d.tasks || {})[journey.id] || {}), ...patch } } }));
  const [phase, setPhase] = useState(t.finishedAt || t.skipped ? 'feedback' : 'task');
  const fbRef = useRef(null);
  useEffect(() => { if (phase === 'feedback' && fbRef.current && !t.ease) fbRef.current.focus(); }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps
  const scale = [];
  for (let n = easeScale.min; n <= easeScale.max; n++) scale.push(n);

  return (
    <>
      <h2 className="r-task-title">{journey.title}</h2>
      <div className="r-scenario">
        <p className="r-label">Your task</p>
        <p className="r-scenario-text">{journey.task}</p>
      </div>
      {phase === 'task' && (
        <>
          <div className="r-actions is-start">
            <a className="r-btn" href={prototypeHref(journey.start)} target="_blank" rel="noopener" onClick={() => !t.openedAt && set({ openedAt: new Date().toISOString() })}>
              Open prototype<span className="r-sr"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="r-hint">Take your time and think aloud. Come back here when you’ve finished or want to stop.</p>
          <div className="r-actions">
            <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
            <span className="r-actions-end">
              <button type="button" className="r-link-btn" onClick={() => { set({ skipped: true }); onNext(); }}>Skip this task</button>
              <button type="button" className="r-btn" onClick={() => { set({ finishedAt: new Date().toISOString(), skipped: false }); setPhase('feedback'); }}>I’ve finished this task</button>
            </span>
          </div>
        </>
      )}
      {phase === 'feedback' && (
        <>
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
            <label htmlFor={`un-${journey.id}`}>{afterTaskQuestions.unclear}</label>
            <textarea id={`un-${journey.id}`} className="r-input" rows={3} value={t.unclear || ''} onChange={e => set({ unclear: e.target.value })} />
          </div>
          <div className="r-field">
            <label htmlFor={`fit-${journey.id}`}>{afterTaskQuestions.fit}</label>
            <textarea id={`fit-${journey.id}`} className="r-input" rows={3} value={t.fit || ''} onChange={e => set({ fit: e.target.value })} />
          </div>
          {journey.followUp && (
            <div className="r-field">
              <label htmlFor={`chk-${journey.id}`}>{reviewFollowUp.q}</label>
              <textarea id={`chk-${journey.id}`} className="r-input" rows={3} value={t.check || ''} onChange={e => set({ check: e.target.value })} />
            </div>
          )}
          <div className="r-actions">
            <button type="button" className="r-btn r-btn-secondary" onClick={() => setPhase('task')}>Back to the task</button>
            <button type="button" className="r-btn" onClick={onNext}>Continue</button>
          </div>
        </>
      )}
    </>
  );
}

function Closing({ data, update, onBack }) {
  const done = !!data.completedAt;
  if (done) {
    return (
      <>
        <p className="r-session-lead">Thank you for your time and your honest feedback. It goes straight into the next version of the credit proposal experience.</p>
        <p className="r-hint">Your facilitator will take it from here.</p>
      </>
    );
  }
  return (
    <>
      <div className="r-field">
        <label htmlFor="closing">{closingQuestion}</label>
        <textarea id="closing" className="r-input" rows={4} value={data.closing || ''} onChange={e => update(d => ({ ...d, closing: e.target.value }))} />
      </div>
      <div className="r-actions">
        <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
        <button type="button" className="r-btn" onClick={() => update(d => ({ ...d, completedAt: new Date().toISOString() }))}>Finish session</button>
      </div>
    </>
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
