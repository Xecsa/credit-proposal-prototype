import React, { useEffect, useRef, useState } from 'react';
import { participants } from '../config.js';
import {
  agenda, introScript, roleQuestions, journeysByRole, afterTaskQuestions, neutralPrompts, avoidPrompts,
  closingQuestion, reviewFollowUp, retiredJourneys, limitationNote, outcomes, classifications, noteFields, secondaryArea, beforeFirstSession
} from '../script.js';
import { infoSheet, isDraft } from '../infoSheet.js';
import { useSession, statusOf, readSession, writeSession, clearSession, download } from '../store.js';
import { prototypeHref } from '../useRoute.js';
import RecordingsPanel from './RecordingsPanel.jsx';
import { resetParticipantMedia } from '../recorder.js';
import { statusLabels, sessionModal, sessionStages } from '../config.js';
import { participantNote } from '../script.js';

// Facilitator workspace for one participant: a compact session bar, then three tabs. Run session shows one stage at a
// time; Recordings lists this browser's recordings; Summary collects what has been captured. Every input writes to
// the session record as it changes, so switching tabs or refreshing keeps it. Nothing here changes the participant's
// screen: the participant tab only reads the same record.
const TABS = [{ id: 'run', label: 'Run session' }, { id: 'recordings', label: 'Recordings' }, { id: 'summary', label: 'Summary' }];
const viewKey = id => `cp-research:fac-view:${id}`;
const readView = id => { try { return JSON.parse(sessionStorage.getItem(viewKey(id))) || {}; } catch (e) { return {}; } };

export default function FacilitatorView({ id }) {
  const p = participants.find(x => x.id === id);
  const [data, rawUpdate] = useSession(id);
  const [view, setView] = useState(() => ({ tab: 'run', stage: 'welcome', ...readView(id) }));
  const [save, setSave] = useState(null); // null | { ok, at }
  useEffect(() => { try { sessionStorage.setItem(viewKey(id), JSON.stringify(view)); } catch (e) { /* per-tab convenience only */ } }, [id, view]);
  if (!p) return <main id="main" className="r-session"><div className="r-session-in"><p>Session not found. <a href="#/f">All sessions</a></p></div></main>;
  const role = journeysByRole[p.roleKey];
  const update = fn => { const ok = rawUpdate(fn); setSave({ ok, at: Date.now() }); return ok; };
  const notes = data.notes || {};
  const setNote = (jid, patch) => update(d => ({ ...d, notes: { ...(d.notes || {}), [jid]: { ...((d.notes || {})[jid] || {}), ...patch } } }));
  const status = statusOf(data);
  const go = patch => setView(v => ({ ...v, ...patch }));

  return (
    <main id="main" className="r-fw">
      <div className="r-fw-in">
        <header className="r-fw-head">
          <div className="r-fw-id">
            <p className="r-fw-eyebrow">Facilitator view · not for participants</p>
            <h1 className="r-fw-title">{p.code} <span>· {p.role}</span></h1>
            <p className="r-fw-meta">
              <span className={`r-tag r-status is-${status}`}>{statusLabels[status]}</span>
              <SaveState save={save} />
            </p>
          </div>
          <div className="r-fw-tools">
            <Timer data={data} update={update} />
            <a className="r-btn r-btn-secondary" href={`#/s/${id}`} target="_blank" rel="noopener">Open participant screen<span className="r-sr"> (opens in a new tab)</span></a>
            <Menu label="Export">
              <button type="button" role="menuitem" onClick={() => exportJson([p])}>Export JSON</button>
              <button type="button" role="menuitem" onClick={() => exportCsv([p])}>Export CSV</button>
            </Menu>
            <SessionMenu p={p} data={data} update={update} />
          </div>
        </header>

        <div className="r-fw-tabs" role="tablist" aria-label="Facilitator workspace">
          {TABS.map(t => (
            <button key={t.id} type="button" role="tab" id={`tab-${t.id}`} aria-selected={view.tab === t.id} aria-controls={`panel-${t.id}`}
              tabIndex={view.tab === t.id ? 0 : -1} className={view.tab === t.id ? 'is-on' : ''} onClick={() => go({ tab: t.id })}
              onKeyDown={e => {
                const i = TABS.findIndex(x => x.id === view.tab);
                const n = e.key === 'ArrowRight' ? (i + 1) % TABS.length : e.key === 'ArrowLeft' ? (i + TABS.length - 1) % TABS.length : -1;
                if (n >= 0) { e.preventDefault(); go({ tab: TABS[n].id }); requestAnimationFrame(() => document.getElementById(`tab-${TABS[n].id}`).focus()); }
              }}>{t.label}</button>
          ))}
        </div>

        <div role="tabpanel" id={`panel-${view.tab}`} aria-labelledby={`tab-${view.tab}`} className="r-fw-panel">
          {view.tab === 'run' && <RunSession p={p} role={role} data={data} update={update} notes={notes} setNote={setNote} stage={view.stage} setStage={s => go({ stage: s })} />}
          {view.tab === 'recordings' && <RecordingsPanel participant={p} live={data.recording} journeys={role.journeys} />}
          {view.tab === 'summary' && <Summary p={p} role={role} data={data} notes={notes} />}
        </div>
      </div>
    </main>
  );
}

function SaveState({ save }) {
  if (!save) return <span className="r-fw-save">Notes save automatically on this device</span>;
  return save.ok
    ? <span className="r-fw-save is-ok" role="status">Saved</span>
    : <span className="r-fw-save is-err" role="alert">Couldn’t save in this browser. Copy your notes elsewhere.</span>;
}

// Small disclosure menu; closes on Escape or a click outside.
function Menu({ label, children, className = '' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const off = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = e => { if (e.key === 'Escape') { setOpen(false); ref.current && ref.current.querySelector('button').focus(); } };
    document.addEventListener('mousedown', off); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', off); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div className={`r-fw-menu ${className}`} ref={ref}>
      <button type="button" className="r-btn r-btn-secondary r-fw-menubtn" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(o => !o)}>
        {label}<svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 8 4 4 4-4" /></svg>
      </button>
      {open && <div className="r-fw-pop" role="menu" onClick={e => { if (e.target.closest('[role=menuitem]') && !e.target.closest('[data-keep]')) setOpen(false); }}>{children}</div>}
    </div>
  );
}

// Session management, kept apart from moderation controls. Reset needs a second, explicit confirmation.
function SessionMenu({ p, data, update }) {
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState('');
  return (
    <>
      <Menu label="Session">
        <button type="button" role="menuitem" onClick={() => update(d => ({ ...d, timer: { elapsed: 0, runningSince: null } }))}>Reset clock</button>
        <button type="button" role="menuitem" className="is-danger" onClick={() => { setConfirm(true); setMsg(''); }}>Reset participant session…</button>
      </Menu>
      {(confirm || msg) && (
        <div className="r-fw-confirm" role={confirm ? 'alertdialog' : 'status'} aria-labelledby="reset-h">
          {confirm ? <>
            <p id="reset-h"><strong>Reset {p.code}?</strong> This returns {p.code} to Not started. In this browser only, it deletes their consent and signature, answers, task progress and feedback, your notes for this session, and their recordings. An open participant tab in this browser stops recording and goes back to Welcome. It can’t be undone, so export first if you need anything.</p>
            <div className="r-actions is-start">
              <button type="button" className="r-btn r-btn-danger" onClick={async () => { setConfirm(false); setMsg(await resetTestSession(p)); }}>Reset {p.code}</button>
              <button type="button" className="r-btn r-btn-secondary" onClick={() => setConfirm(false)}>Cancel</button>
            </div>
          </> : <p>{msg} <button type="button" className="r-link-btn" onClick={() => setMsg('')}>Dismiss</button></p>}
        </div>
      )}
    </>
  );
}

// ---- Run session ----
function RunSession({ p, role, data, update, notes, setNote, stage, setStage }) {
  const stages = [
    { id: 'welcome', label: 'Welcome and consent', time: '0–3 min' },
    { id: 'about', label: 'About their work', time: '3–5 min' },
    ...role.journeys.map((j, i) => ({ id: j.id, label: `Journey ${i + 1}`, sub: j.title, time: `${j.minutes} min`, j, i })),
    { id: 'closing', label: 'Closing', time: '24–30 min' }
  ];
  const cur = stages.find(s => s.id === stage) || stages[0];
  const tasks = data.tasks || {};
  const done = s => s.id === 'welcome' ? !!(data.consent && data.consent.at) : s.id === 'about' ? !!data.role : s.id === 'closing' ? !!data.completedAt : !!((tasks[s.id] || {}).finishedAt || (tasks[s.id] || {}).skipped);
  const mainRef = useRef(null);
  const pick = id => { setStage(id); requestAnimationFrame(() => { const h = mainRef.current && mainRef.current.querySelector('h2'); if (h) h.focus({ preventScroll: true }); }); };
  return (
    <div className="r-fw-run">
      <nav className="r-fw-side" aria-label="Session stages">
        <ol>
          {stages.map(s => (
            <li key={s.id}>
              <button type="button" className={s.id === cur.id ? 'is-on' : ''} aria-current={s.id === cur.id ? 'step' : undefined} onClick={() => pick(s.id)}>
                <span className="r-fw-side-l">{s.label}{s.sub && <small>{s.sub}</small>}</span>
                <span className="r-fw-side-t">{done(s) ? <span className="r-fw-done">Done</span> : s.time}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="r-fw-side-note">Timings are a guide. Nothing advances or ends on its own.</p>
      </nav>
      <div className="r-fw-main" ref={mainRef}>
        {cur.id === 'welcome' && <WelcomeStage role={role} data={data} />}
        {cur.id === 'about' && <AboutStage data={data} />}
        {cur.j && <JourneyStage key={cur.j.id} n={cur.i + 1} total={role.journeys.length} j={cur.j} pid={p.id} role={role} task={tasks[cur.j.id] || {}} note={notes[cur.j.id] || {}} setNote={patch => setNote(cur.j.id, patch)} />}
        {cur.id === 'closing' && <ClosingStage data={data} update={update} />}
      </div>
    </div>
  );
}

const Guide = ({ title = 'Moderator guide', children, open }) => (
  <details className="r-fw-guide" open={open}>
    <summary>{title}</summary>
    <div className="r-fw-guide-b">{children}</div>
  </details>
);
const Answer = ({ children }) => children ? <p className="r-fw-a">{children}</p> : <p className="r-fw-a is-empty">No response yet</p>;

function WelcomeStage({ role, data }) {
  const c = data.consent || {};
  return (
    <section className="r-fw-card" aria-labelledby="st-h">
      <h2 id="st-h" tabIndex={-1} className="r-fw-h2">Welcome and consent</h2>
      <p className="r-fw-time">Suggested 0–3 min</p>
      <h3 className="r-fw-h3">Say</h3>
      <blockquote className="r-quote">{introScript}</blockquote>
      <h3 className="r-fw-h3">From the participant</h3>
      <dl className="r-fw-facts">
        <div><dt>Consent</dt><dd>{c.at ? `Given at ${time(c.at)}` : 'Not yet given'}</dd></div>
        <div><dt>Recording</dt><dd>{c.at ? recordingText(c) : '—'}</dd></div>
        {c.at && c.infoSheetVersion && <div><dt>Information sheet</dt><dd>Version {c.infoSheetVersion}</dd></div>}
      </dl>
      <Guide>
        <p><strong>Materials:</strong> {role.prep}</p>
        {role.priority && <p><strong>Priority:</strong> {role.priority}</p>}
        <p>Show the walkthrough video only after the tasks; it demonstrates the interface.</p>
        <p>{sessionModal.facilitatorGuidance}</p>
      </Guide>
    </section>
  );
}

function AboutStage({ data }) {
  const r = data.role || {};
  return (
    <section className="r-fw-card" aria-labelledby="st-h">
      <h2 id="st-h" tabIndex={-1} className="r-fw-h2">About their work</h2>
      <p className="r-fw-time">Suggested 3–5 min</p>
      <h3 className="r-fw-h3">From the participant</h3>
      {roleQuestions.map(q => <div key={q.id} className="r-fw-qa"><p className="r-fw-q">{q.q}</p><Answer>{r[q.id]}</Answer></div>)}
      <div className="r-fw-qa"><p className="r-fw-q">{participantNote.label}</p><Answer>{data.participantNote}</Answer></div>
      {r.check && <div className="r-fw-qa"><p className="r-fw-q">Earlier version of this step · {reviewFollowUp.q}</p><Answer>{r.check}</Answer></div>}
      <Guide><p>These answers are optional. If the participant prefers to talk, note what they say in Closing › Your overall observations.</p></Guide>
    </section>
  );
}

function JourneyStage({ n, total, j, pid, task, note, setNote }) {
  const detailIds = ['quote', 'screen', 'assistance', 'impact', 'followup'];
  const hasDetail = detailIds.some(k => (note[k] || '').trim()) || !!note.classification;
  const [moreOpen, setMoreOpen] = useState(hasDetail);
  const field = id => noteFields.find(f => f.id === id);
  const status = task.skipped ? 'Skipped' : task.finishedAt ? 'Pressed Finish task' : task.leftAt ? 'Left before finishing' : (task.startedAt || task.openedAt) ? 'In the prototype now' : 'Not started';
  return (
    <section className={`r-fw-card${j.priority ? ' is-priority' : ''}`} aria-labelledby="st-h" key={j.id}>
      <div className="r-fw-jhead">
        <div>
          <p className="r-fw-eyebrow">Journey {n} of {total}{j.priority ? ' · Priority' : ''}</p>
          <h2 id="st-h" tabIndex={-1} className="r-fw-h2">{j.title}</h2>
          <p className="r-fw-time">Suggested {j.minutes} min</p>
        </div>
        <a className="r-btn r-btn-secondary r-btn-sm" href={prototypeHref(j.start)} target="_blank" rel="noopener">Preview starting state<span className="r-sr"> (opens a separate copy in a new tab; the participant’s screen is not affected)</span></a>
      </div>

      <div className="r-fw-block">
        <h3 className="r-fw-h3">Scenario</h3>
        <p className="r-fw-lead">{j.goal}</p>
        <details className="r-fw-more"><summary>Full scenario wording</summary><p>{j.situation}</p><p>{j.goal}</p></details>
        {j.id === 'rm-client' && secondaryArea[pid] && <p className="r-fw-hint">Secondary area for this participant, if time allows: {secondaryArea[pid]}.</p>}
      </div>

      <div className="r-fw-block r-fw-pair">
        <details className="r-fw-guide">
          <summary>What to observe</summary>
          <div className="r-fw-guide-b">
            <p className="r-fw-hint">Tick an area once you’ve watched it. A tick means “observed”, not that a problem occurred.</p>
            {j.observe.map(o => (
              <label key={o} className="r-check is-compact"><input type="checkbox" checked={!!(note.seen || {})[o]} onChange={e => setNote({ seen: { ...(note.seen || {}), [o]: e.target.checked } })} /><span>{o}</span></label>
            ))}
            {j.note && <p className="r-fw-hint">{j.note}</p>}
          </div>
        </details>
        <details className="r-fw-guide">
          <summary>Follow-up questions</summary>
          <div className="r-fw-guide-b">
            <ul className="r-plain">{j.ask.map(q => <li key={q}>“{q}”</li>)}</ul>
            <p className="r-fw-hint">Neutral prompts during the task: {neutralPrompts.map(q => `“${q}”`).join(' ')} Avoid: {avoidPrompts.map(q => `“${q}”`).join(' ')}</p>
            <p className="r-fw-hint">{limitationNote}</p>
          </div>
        </details>
      </div>

      <div className="r-fw-block">
        <h3 className="r-fw-h3">Participant feedback <span className="r-fw-src">from the participant’s screen</span></h3>
        <div className="r-fw-said">
          <dl className="r-fw-facts">
            <div><dt>Task</dt><dd>{status}{task.attempts && task.attempts.length > 1 ? ` · ${task.attempts.length} attempts` : ''}</dd></div>
            <div><dt>Ease (1–7)</dt><dd>{task.ease ? `${task.ease} of 7` : 'No response yet'}</dd></div>
          </dl>
          <p className="r-fw-q">{afterTaskQuestions.unclear}</p><Answer>{task.unclear}</Answer>
          {j.followUp && <><p className="r-fw-q">{reviewFollowUp.q}</p><Answer>{task.check}</Answer></>}
          {task.fit && <><p className="r-fw-q">Earlier question · Fit with your work</p><Answer>{task.fit}</Answer></>}
        </div>
      </div>

      <div className="r-fw-block r-fw-notes">
        <h3 className="r-fw-h3">Your notes <span className="r-fw-src">facilitator interpretation</span></h3>
        <label htmlFor={`${j.id}-observation`} className="r-fw-label">{field('observation').label}</label>
        <textarea id={`${j.id}-observation`} className="r-fw-input is-main" rows={5} value={note.observation || ''} onChange={e => setNote({ observation: e.target.value })}
          placeholder="What did the participant do? Capture hesitation, errors, recovery, and anything unexpected." />
        <button type="button" className="r-fw-add" aria-expanded={moreOpen} aria-controls={`${j.id}-more`} onClick={() => setMoreOpen(o => !o)}>
          {moreOpen ? 'Hide detail' : 'Add detail'}
        </button>
        <div id={`${j.id}-more`} hidden={!moreOpen} className="r-fw-detail">
          {detailIds.map(k => { const f = field(k); return (
            <div key={k} className="r-fw-field">
              <label htmlFor={`${j.id}-${k}`} className="r-fw-label">{k === 'quote' ? 'Participant quote' : k === 'assistance' ? 'Assistance provided' : f.label} <span>{f.hint}</span></label>
              <textarea id={`${j.id}-${k}`} className="r-fw-input" rows={2} value={note[k] || ''} onChange={e => setNote({ [k]: e.target.value })} />
            </div>
          ); })}
          <fieldset className="r-seg r-fw-seg">
            <legend>Issue classification</legend>
            {classifications.map(o => <label key={o} className={note.classification === o ? 'is-on' : ''}><input type="radio" name={`cls-${j.id}`} checked={note.classification === o} onChange={() => setNote({ classification: o })} />{o}</label>)}
            {note.classification && <button type="button" className="r-link-btn" onClick={() => setNote({ classification: '' })}>Clear</button>}
          </fieldset>
        </div>
        <fieldset className="r-seg r-fw-seg">
          <legend>Outcome <span>your judgement; Finish task doesn’t set it</span></legend>
          {outcomes.map(o => <label key={o} className={note.outcome === o ? 'is-on' : ''}><input type="radio" name={`out-${j.id}`} checked={note.outcome === o} onChange={() => setNote({ outcome: o })} />{o}</label>)}
          {note.outcome && <button type="button" className="r-link-btn" onClick={() => setNote({ outcome: '' })}>Clear</button>}
        </fieldset>
      </div>
    </section>
  );
}

function ClosingStage({ data, update }) {
  return (
    <section className="r-fw-card" aria-labelledby="st-h">
      <h2 id="st-h" tabIndex={-1} className="r-fw-h2">Closing</h2>
      <p className="r-fw-time">Suggested 24–30 min</p>
      <h3 className="r-fw-h3">From the participant</h3>
      <div className="r-fw-qa"><p className="r-fw-q">{closingQuestion}</p><Answer>{data.closing}</Answer></div>
      <p className="r-fw-hint">{data.completedAt ? `Session finished at ${time(data.completedAt)}.` : 'The participant hasn’t finished the session yet.'}</p>
      <div className="r-fw-block r-fw-notes">
        <h3 className="r-fw-h3">Your overall observations <span className="r-fw-src">facilitator interpretation</span></h3>
        <label htmlFor="gen-notes" className="r-sr">Your overall observations</label>
        <textarea id="gen-notes" className="r-fw-input is-main" rows={6} value={data.generalNotes || ''} onChange={e => update(d => ({ ...d, generalNotes: e.target.value }))}
          placeholder="Patterns across journeys, notable moments, and anything to follow up." />
      </div>
      <Guide><p>Show the walkthrough video now if you plan to, then thank the participant. Export notes and download recordings before clearing browser data.</p></Guide>
    </section>
  );
}

// ---- Summary ----
function Summary({ p, role, data, notes }) {
  const tasks = data.tasks || {};
  const follow = role.journeys.filter(j => (notes[j.id] || {}).followup);
  const earlier = earlierTasks(p, data);
  return (
    <div className="r-fw-sum">
      <section className="r-fw-card" aria-labelledby="sum-j">
        <h2 id="sum-j" className="r-fw-h2">Journeys</h2>
        <div className="r-fw-tablewrap">
          <table className="r-fw-table">
            <thead><tr><th scope="col">Journey</th><th scope="col">Participant</th><th scope="col">Ease</th><th scope="col">Outcome</th><th scope="col">Classification</th></tr></thead>
            <tbody>
              {role.journeys.map((j, i) => { const t = tasks[j.id] || {}; const n = notes[j.id] || {}; return (
                <tr key={j.id}>
                  <th scope="row">{i + 1}. {j.title}</th>
                  <td>{t.skipped ? 'Skipped' : t.finishedAt ? 'Finished' : t.leftAt ? 'Left' : '—'}</td>
                  <td>{t.ease ? `${t.ease}/7` : '—'}</td>
                  <td>{n.outcome || <span className="r-muted">Not recorded</span>}</td>
                  <td>{n.classification || '—'}</td>
                </tr>
              ); })}
            </tbody>
          </table>
        </div>
      </section>
      {earlier.length > 0 && (
        <section className="r-fw-card" aria-labelledby="sum-e">
          <h2 id="sum-e" className="r-fw-h2">Earlier tasks</h2>
          <p className="r-fw-hint">Saved before this session plan changed. Kept for reference; not part of the current session.</p>
          <ul className="r-plain">
            {earlier.map(j => { const t = tasks[j.id] || {}; const n = notes[j.id] || {}; return (
              <li key={j.id}><strong>{j.title}:</strong> {[t.skipped ? 'skipped' : t.finishedAt ? 'finished' : t.leftAt ? 'left' : null, t.ease ? `ease ${t.ease}/7` : null, t.unclear ? `unclear: “${t.unclear}”` : null, t.check ? `checks: “${t.check}”` : null, n.outcome ? `outcome: ${n.outcome}` : null, n.observation ? `observation: ${n.observation}` : null].filter(Boolean).join(' · ') || 'no answers'}</li>
            ); })}
          </ul>
        </section>
      )}
      <section className="r-fw-card" aria-labelledby="sum-c">
        <h2 id="sum-c" className="r-fw-h2">Closing feedback <span className="r-fw-src">participant</span></h2>
        <p className="r-fw-q">{closingQuestion}</p><Answer>{data.closing}</Answer>
      </section>
      <section className="r-fw-card" aria-labelledby="sum-o">
        <h2 id="sum-o" className="r-fw-h2">Your observations <span className="r-fw-src">facilitator</span></h2>
        <p className="r-fw-q">Overall</p><Answer>{data.generalNotes}</Answer>
        {role.journeys.map(j => (notes[j.id] || {}).observation ? <div key={j.id}><p className="r-fw-q">{j.title}</p><p className="r-fw-a">{notes[j.id].observation}</p></div> : null)}
        <h3 className="r-fw-h3">Follow-up items</h3>
        {follow.length ? <ul className="r-plain">{follow.map(j => <li key={j.id}><strong>{j.title}:</strong> {notes[j.id].followup}</li>)}</ul> : <p className="r-fw-a is-empty">None recorded</p>}
      </section>
      <section className="r-fw-card" aria-labelledby="sum-x">
        <h2 id="sum-x" className="r-fw-h2">Export</h2>
        <p className="r-fw-hint">{sessionModal.facilitatorStorage}</p>
        <div className="r-actions is-start">
          <button type="button" className="r-btn" onClick={() => exportJson([p])}>Export JSON</button>
          <button type="button" className="r-btn r-btn-secondary" onClick={() => exportCsv([p])}>Export CSV</button>
        </div>
      </section>
    </div>
  );
}

function Timer({ data, update }) {
  const t = data.timer || {};
  const [now, setNow] = useState(Date.now());
  useEffect(() => { if (!t.runningSince) return; const h = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(h); }, [t.runningSince]);
  const ms = (t.elapsed || 0) + (t.runningSince ? now - t.runningSince : 0);
  const min = ms / 60000;
  const cur = agenda.find(a => min >= a.from && min < a.to);
  const mmss = `${String(Math.floor(ms / 60000)).padStart(2, '0')}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}`;
  const set = timer => update(d => ({ ...d, timer }));
  return (
    <div className="r-fw-timer" role="group" aria-label="Session clock">
      <span className="r-fw-clock">{mmss}</span>
      <span className="r-fw-clock-l">{ms ? (cur ? cur.label : min >= 30 ? 'Over time' : '') : 'Clock not started'}</span>
      {t.runningSince
        ? <button type="button" className="r-fw-tbtn" onClick={() => set({ elapsed: ms, runningSince: null })}>Pause</button>
        : <button type="button" className="r-fw-tbtn is-start" onClick={() => set({ elapsed: t.elapsed || 0, runningSince: Date.now() })}>{t.elapsed ? 'Resume' : 'Start'}</button>}
    </div>
  );
}

// Sessions overview: the four participant sessions as equal cards, plus storage, preparation and management.
export function FacilitatorOverview() {
  const [confirmAll, setConfirmAll] = useState(false);
  const [allMsg, setAllMsg] = useState('');
  const [checks, setChecks] = useState(() => readSession('checklist').items || {});
  const [, force] = useState(0);
  useEffect(() => { const f = () => force(x => x + 1); window.addEventListener('storage', f); return () => window.removeEventListener('storage', f); }, []);
  const toggle = (i, v) => { const next = { ...checks, [i]: v }; setChecks(next); writeSession('checklist', { items: next }); };
  const done = beforeFirstSession.filter((_, i) => checks[i]).length;
  return (
    <main id="main" className="r-ov">
      <div className="r-ov-in">
        <div className="r-ov-head">
          <div>
            <h1 className="r-ov-h">Research sessions</h1>
            <p className="r-ov-sub">Manage your four participant sessions, capture observations, and review recordings.</p>
          </div>
          <Menu label="Export all" className="r-ov-export">
            <button type="button" role="menuitem" onClick={() => exportCsv(participants)}>CSV (spreadsheet)</button>
            <button type="button" role="menuitem" onClick={() => exportJson(participants)}>JSON (full record)</button>
          </Menu>
        </div>
        <DraftNotice />
        <ul className="r-ov-grid">
          {participants.map(p => <li key={p.id}><SessionCard p={p} data={readSession(p.id)} /></li>)}
        </ul>
        <section className="r-ov-store" aria-labelledby="ov-store-h">
          <div className="r-ov-store-row">
            <span className="r-ov-store-ic" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="14" height="9" rx="1.5" /><path d="M7 16.5h6M10 13v3.5" /></svg></span>
            <p><strong id="ov-store-h">Stored on this device</strong> <span>Export notes and download recordings before clearing browser data.</span></p>
          </div>
          <details className="r-ov-more">
            <summary>Storage details</summary>
            <div>
              <p>Responses, signatures, progress, your notes and this checklist are saved in this browser’s local storage. Recordings are saved in this browser’s IndexedDB. Nothing is uploaded, synced or backed up.</p>
              <p>Open the participant screen and this workspace in the same browser on the same device. A participant screen opened on another device or browser keeps its own separate record, which this workspace can’t see.</p>
              <p>Clearing site data, or closing a private window, removes everything here. Use Export all and each session’s Recordings tab to keep a copy first.</p>
            </div>
          </details>
        </section>
        <details className="r-ov-check">
          <summary><span className="r-ov-check-t">Before your first session</span><span className="r-ov-count">{done} of {beforeFirstSession.length} done</span></summary>
          <div className="r-ov-check-body">
            <p className="r-ov-note">Facilitator preparation only. This doesn’t affect any participant’s progress.</p>
            {beforeFirstSession.map((b, i) => (
              <label key={i} className="r-check"><input type="checkbox" checked={!!checks[i]} onChange={e => toggle(i, e.target.checked)} /><span>{b}</span></label>
            ))}
          </div>
        </details>
        <section className="r-ov-manage" aria-labelledby="ov-manage-h">
          <div className="r-ov-manage-row">
            <p id="ov-manage-h" className="r-ov-note">Test-run tools for sessions in this browser. Export first if you need anything.</p>
            <Menu label="Session management" className="r-ov-mgmt">
              <button type="button" role="menuitem" className="is-danger" onClick={() => { setConfirmAll(true); setAllMsg(''); }}>Reset all test sessions…</button>
            </Menu>
          </div>
          {confirmAll && (
            <div className="r-fw-confirm" role="alertdialog" aria-labelledby="ov-reset-h">
              <p id="ov-reset-h"><strong>Reset all test sessions?</strong> This returns {participants.map(p => p.code).join(', ')} to Not started. In this browser only, it deletes their consent and signatures, answers, task progress and feedback, your notes, and their recordings. Open participant tabs in this browser stop recording and go back to Welcome. Your checklist is kept. It can’t be undone.</p>
              <div className="r-actions is-start">
                <button type="button" className="r-btn r-btn-danger" onClick={async () => {
                  setConfirmAll(false);
                  const out = []; for (const p of participants) out.push(await resetTestSession(p));
                  setAllMsg(out.join(' ')); force(x => x + 1);
                }}>Reset all four</button>
                <button type="button" className="r-btn r-btn-secondary" onClick={() => setConfirmAll(false)}>Cancel</button>
              </div>
            </div>
          )}
          {allMsg && <p className="r-small" role="status">{allMsg}</p>}
        </section>
      </div>
    </main>
  );
}

const STAGE_IDS = ['welcome', 'info', 'consent', 'about', 'tasks', 'closing'];

// One participant session. Status comes from statusOf only (Completed needs the closing to have been saved).
function SessionCard({ p, data }) {
  const status = statusOf(data);
  const total = journeysByRole[p.roleKey].journeys.length;
  const si = STAGE_IDS.indexOf(data.stage);
  const stage = status === 'in-progress' && si >= 0
    ? `${sessionStages[si].title}${data.stage === 'tasks' ? ` · journey ${(data.taskIndex || 0) + 1} of ${total}` : ''}`
    : null;
  return (
    <article className="r-ov-card" aria-labelledby={`ov-${p.id}`}>
      <div className="r-ov-card-top">
        <span className="r-ov-role" aria-hidden="true">{p.roleKey === 'ARM'
          ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 15v-3M12 15V9M16 15v-5" /></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" /><path d="M15.5 5.5a3 3 0 0 1 0 5.6M17.5 14.4c1.6.6 2.7 2.2 3 4.6" /></svg>}
        </span>
        <span className={`r-ov-status is-${status}`}>{statusLabels[status]}</span>
      </div>
      <h2 id={`ov-${p.id}`} className="r-ov-code">{p.code}</h2>
      <p className="r-ov-role-t">{p.role}</p>
      <p className="r-ov-stage">{stage ? <>Current stage: <strong>{stage}</strong></> : status === 'completed' ? 'All stages complete' : 'Waiting to begin'}</p>
      <div className="r-ov-actions">
        <a className="r-btn" href={`#/f/${p.id}`}>Open workspace<span className="r-sr"> for {p.code}</span></a>
        <a className="r-btn r-btn-secondary" href={`#/s/${p.id}`} target="_blank" rel="noopener">Participant screen <span aria-hidden="true">↗</span><span className="r-sr"> for {p.code} (opens in a new tab)</span></a>
      </div>
    </article>
  );
}

// Test-run reset for one participant, in this browser only: the session record and its recordings. An open
// participant tab sees its record removed and releases its screen and microphone (see ParticipantSession).
// The pre-session checklist and other participants are left alone.
async function resetTestSession(p) {
  clearSession(p.id);
  try {
    const n = await resetParticipantMedia(p.id);
    return `${p.code} reset to Not started${n ? `; ${n} recording${n === 1 ? '' : 's'} deleted` : ''}.`;
  } catch (e) {
    return `${p.code} answers reset, but recordings couldn’t be deleted in this browser (${e.message}).`;
  }
}

// Shown only while the information sheet is still a draft.
function DraftNotice() {
  if (!isDraft()) return null;
  const pending = Object.values(infoSheet.pending);
  return (
    <div className="r-panel is-warn r-fac-notice" role="note">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M10 3 2.5 16.5h15L10 3Z" /><path d="M10 8.5v3.5M10 14.5v.01" /></svg>
      <div>
        <strong>Information sheet v{infoSheet.version} is a draft and not ready for participants.</strong>
        {pending.length > 0 && <> Confirm {pending.length === 1 ? 'this detail' : `these ${pending.length} details`} in <code>src/infoSheet.js</code> first:</>}
        {pending.length > 0 && <ul className="r-fac-pending">{pending.map(t => <li key={t}>{t}</li>)}</ul>}
      </div>
    </div>
  );
}

// `recording` is the single combined choice used before screen and audio were asked separately.
function recordingText(c) {
  const screen = c.recordScreen || c.recording, audio = c.recordAudio || c.recording;
  return screen && audio ? 'screen and audio recording agreed' : screen ? 'screen recording only' : audio ? 'audio recording only' : 'no recording';
}

const time = iso => new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function exportJson(list) {
  const out = list.map(p => ({ participant: p.code, role: p.role, status: statusOf(readSession(p.id)), ...stripSig(readSession(p.id)) }));
  download(`credit-proposal-sessions-${stamp()}.json`, JSON.stringify(out, null, 2), 'application/json');
}
function exportCsv(list) {
  const cols = ['participant', 'role', 'task', 'outcome', 'classification', 'ease', 'unclear', 'fit', 'checks_most_carefully', 'observation', 'quote', 'screen', 'assistance', 'impact', 'followup', 'participant_status'];
  const rows = [cols];
  list.forEach(p => {
    const d = readSession(p.id);
    [...journeysByRole[p.roleKey].journeys, ...earlierTasks(p, d)].forEach(j => {
      const t = (d.tasks || {})[j.id] || {}; const n = (d.notes || {})[j.id] || {};
      rows.push([p.code, p.role, j.retired ? `${j.title} (earlier session plan)` : j.title, n.outcome, n.classification, t.ease, t.unclear, t.fit, t.check, n.observation, n.quote, n.screen, n.assistance, n.impact, n.followup, t.skipped ? 'skipped' : t.finishedAt ? 'finished' : '']);
    });
  });
  const csv = rows.map(r => r.map(v => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`).join(',')).join('\n');
  download(`credit-proposal-sessions-${stamp()}.csv`, csv, 'text/csv');
}
// Tasks from an earlier session plan that this record still holds answers or notes for.
function earlierTasks(p, d) {
  return (retiredJourneys[p.roleKey] || []).filter(j => (d.tasks || {})[j.id] || (d.notes || {})[j.id]).map(j => ({ ...j, retired: true }));
}
// Exports keep the fact of signing, not the signature image.
function stripSig(d) { if (!d.consent) return d; const { signature, ...c } = d.consent; return { ...d, consent: { ...c, signed: !!signature } }; }
const stamp = () => new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
