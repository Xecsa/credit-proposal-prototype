import React, { useEffect, useRef, useState } from 'react';
import { participants, project } from '../config.js';
import { consentItems, consentRecordings, roleQuestions, roleIntro, journeysByRole, journeyOverview, closingQuestion, participantNote } from '../script.js';
import { infoSheet } from '../infoSheet.js';
import { useSession } from '../store.js';
import SignaturePad from './SignaturePad.jsx';
import InfoSheet from './InfoSheet.jsx';
import TaskJourney, { Panel, PanelHead, FeedbackArt } from './TaskJourney.jsx';
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
  // Clamped, so a record saved under a longer task list (ARM sessions had three journeys) opens the last current one.
  const taskIndex = Math.min(data.taskIndex || 0, role.journeys.length - 1);
  const ctx = { id: p.id, code: p.code, role: p.role, minutes: project.sessionMinutes, journeys: journeyOverview[p.roleKey].map(j => j.title) };

  const go = (patch) => {
    update(d => ({ ...d, ...patch }));
    requestAnimationFrame(() => { window.scrollTo(0, 0); headRef.current && headRef.current.focus(); });
  };

  return (
    <main id="main" className="r-session">
      <div className="r-session-in">
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

// Welcome: one connected panel. Left, a static ENBD-blue illustration; right, the welcome copy and actions.
// Continue only opens the information sheet: nothing is consented to or recorded here.
function Welcome({ headRef, onNext }) {
  return (
    <section className="r-wel" aria-labelledby="r-wel-h">
      <div className="r-wel-art" aria-hidden="true"><WelcomeArt /></div>
      <div className="r-wel-body">
        <p className="r-wel-eyebrow">Credit proposal research</p>
        <h1 id="r-wel-h" ref={headRef} tabIndex={-1} className="r-wel-h">Welcome to your session</h1>
        <p className="r-wel-p">Today, we’ll explore how the credit proposal prototype fits into your work. Your feedback will help us understand what works well and what needs improvement.</p>
        <div className="r-wel-note">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 2.5 4 4.8v4.6c0 3.7 2.6 6.8 6 8.1 3.4-1.3 6-4.4 6-8.1V4.8L10 2.5Z" /><path d="m7.4 10 1.8 1.8 3.5-3.6" /></svg>
          <p>We’re testing the design, not you. Some features are simulated. You can pause, skip a task, or stop at any time.</p>
        </div>
        <p className="r-wel-p r-wel-next">First, we’ll share information about the research so you can decide whether to take part.</p>
        <div className="r-wel-foot">
          <a className="r-wel-leave" href="#/">Leave session</a>
          <button type="button" className="r-btn r-btn-icon r-wel-go" onClick={onNext}>Continue <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg></button>
        </div>
      </div>
    </section>
  );
}

// Custom illustration: layered conversation cards, speech bubbles and soft shapes on the hero gradient.
function WelcomeArt() {
  return (
    <svg className="r-wel-svg" viewBox="0 0 360 400" preserveAspectRatio="xMidYMid meet" focusable="false">
      <defs>
        <linearGradient id="wa-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#EEF3FF" /></linearGradient>
        <linearGradient id="wa-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".22" /><stop offset="1" stopColor="#fff" stopOpacity=".06" /></linearGradient>
        <filter id="wa-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#020B24" floodOpacity=".28" /></filter>
      </defs>
      <circle cx="292" cy="70" r="74" fill="#fff" opacity=".07" />
      <circle cx="54" cy="338" r="96" fill="#5082FF" opacity=".22" />
      <path d="M-10 250C60 214 120 290 196 262s118-98 184-70" stroke="#fff" strokeOpacity=".16" strokeWidth="1.5" fill="none" />
      <path d="M-10 280C70 246 128 318 206 290s112-92 174-66" stroke="#fff" strokeOpacity=".08" strokeWidth="1.5" fill="none" />
      {/* back card */}
      <rect x="96" y="58" width="208" height="128" rx="20" fill="url(#wa-glass)" stroke="#fff" strokeOpacity=".28" />
      <rect x="116" y="82" width="70" height="8" rx="4" fill="#fff" opacity=".55" />
      <rect x="116" y="100" width="150" height="6" rx="3" fill="#fff" opacity=".3" />
      <rect x="116" y="114" width="120" height="6" rx="3" fill="#fff" opacity=".3" />
      {/* main conversation card */}
      <g filter="url(#wa-sh)">
        <rect x="44" y="132" width="248" height="164" rx="22" fill="url(#wa-card)" />
      </g>
      <circle cx="76" cy="166" r="14" fill="#DCE6FF" />
      <path d="M70 168a6 6 0 0 1 12 0" stroke="#182F7C" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="76" cy="160" r="3.5" fill="#182F7C" />
      <rect x="100" y="156" width="78" height="8" rx="4" fill="#072447" opacity=".85" />
      <rect x="100" y="170" width="52" height="6" rx="3" fill="#8CA3D8" />
      <rect x="64" y="198" width="160" height="34" rx="14" fill="#F4F7FE" stroke="#DCE6FF" />
      <rect x="78" y="212" width="108" height="6" rx="3" fill="#8CA3D8" />
      <rect x="116" y="242" width="156" height="34" rx="14" fill="#182F7C" />
      <rect x="132" y="256" width="96" height="6" rx="3" fill="#fff" opacity=".85" />
      <circle cx="252" cy="259" r="3" fill="#fff" opacity=".85" />
      {/* speech bubbles */}
      <g filter="url(#wa-sh)">
        <path d="M232 302h86a16 16 0 0 1 16 16v26a16 16 0 0 1-16 16h-58l-16 14v-14h-12a16 16 0 0 1-16-16v-26a16 16 0 0 1 16-16Z" fill="#fff" />
      </g>
      <circle cx="252" cy="331" r="4" fill="#182F7C" />
      <circle cx="268" cy="331" r="4" fill="#5082FF" />
      <circle cx="284" cy="331" r="4" fill="#A9BFF5" />
      <path d="M262 30h60a14 14 0 0 1 14 14v20a14 14 0 0 1-14 14h-36l-12 11V78h-12a14 14 0 0 1-14-14V44a14 14 0 0 1 14-14Z" fill="#5082FF" />
      <path d="m280 55 7 7 14-14" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* sparkles */}
      <path d="M44 92l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="#fff" opacity=".7" />
      <path d="M330 214l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5Z" fill="#fff" opacity=".55" />
      <circle cx="30" cy="200" r="3" fill="#fff" opacity=".45" />
      <circle cx="190" cy="372" r="2.5" fill="#fff" opacity=".4" />
    </svg>
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
      <Panel key="thanks" className="is-closing" label="Thank you">
        <PanelHead band art={<FeedbackArt />} eyebrow="Session complete" title="Thank you for your time" headRef={headRef}
          intro="Your feedback will help us improve the credit proposal experience for RMs and ARMs." />
        <div className="r-jp-body">
          <p className="r-fb-rec" role="status"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.25" /><path d="M10 9v4.5M10 6.5v.01" /></svg><span>Your answers are saved in this browser on this device.</span></p>
        </div>
        <footer className="r-jp-foot is-end"><a className="r-btn r-btn-icon" href="#/">Return to research home</a></footer>
      </Panel>
    );
  }
  return (
    <Panel key="form" className="is-closing" label="One last question">
      <PanelHead band art={<FeedbackArt />} eyebrow="Final reflection" title="One last question" headRef={headRef}
        intro="Looking back at the journeys you tried, we’d like to understand your main priority." />
      <div className="r-jp-body">
        <label htmlFor="closing" className="r-fb-q r-jp-q">{closingQuestion}</label>
        <textarea id="closing" className="r-fb-input is-tall" rows={5} placeholder="Share the improvement that matters most to you…" aria-describedby="closing-help"
          value={text} onChange={e => { const v = e.target.value; setText(v); update(d => ({ ...d, closing: v })); }} />
        <p id="closing-help" className="r-fb-help">You can answer aloud, and your facilitator can take notes.</p>
        {failed && <p className="r-jnote" role="alert">Your answer couldn’t be saved in this browser. It’s still here; please try again, or ask your facilitator to note it.</p>}
      </div>
      <footer className="r-jp-foot">
        <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back</button>
        <button type="button" className="r-btn" onClick={finish}>{failed ? 'Try again' : 'Finish session'}</button>
      </footer>
    </Panel>
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
