import React, { useEffect, useState } from 'react';
import { participants } from '../config.js';
import {
  agenda, introScript, roleQuestions, journeysByRole, afterTaskQuestions, neutralPrompts, avoidPrompts,
  closingQuestion, limitationNote, outcomes, classifications, noteFields, secondaryArea, beforeFirstSession
} from '../script.js';
import { useSession, statusOf, readSession, writeSession, clearSession, download } from '../store.js';
import { prototypeHref } from '../useRoute.js';
import { statusLabels } from '../config.js';

// Facilitator-only view: the script, prompts, what to observe, live participant answers, and the eight
// recording fields for every task. Open it on a second screen; it updates as the participant answers.

export default function FacilitatorView({ id }) {
  const p = participants.find(x => x.id === id);
  const [data, update] = useSession(id);
  const [confirmReset, setConfirmReset] = useState(false);
  if (!p) return <main id="main" className="r-session"><div className="r-session-in"><p>Session not found. <a href="#/f">Facilitator overview</a></p></div></main>;
  const role = journeysByRole[p.roleKey];
  const notes = data.notes || {};
  const setNote = (jid, patch) => update(d => ({ ...d, notes: { ...(d.notes || {}), [jid]: { ...((d.notes || {})[jid] || {}), ...patch } } }));

  return (
    <main id="main" className="r-fac">
      <div className="r-fac-in">
        <div className="r-fac-top">
          <div>
            <p className="r-eyebrow">Facilitator view · not for participants</p>
            <h1 className="r-fac-h">{p.code} · {p.role}</h1>
            <p className="r-muted">{role.title}. Status: {statusLabels[statusOf(data)]}.</p>
          </div>
          <div className="r-fac-top-actions">
            <a className="r-btn r-btn-secondary" href={`#/s/${id}`} target="_blank" rel="noopener">Participant screen<span className="r-sr"> (opens in a new tab)</span></a>
            <a className="r-link-btn" href="#/f">All sessions</a>
          </div>
        </div>

        <div className="r-fac-grid">
          <aside className="r-fac-side" aria-label="Timing and prompts">
            <Timer data={data} update={update} />
            <section className="r-fac-box">
              <h2 className="r-fac-h3">During a task</h2>
              <ul className="r-plain">{neutralPrompts.map(q => <li key={q}>“{q}”</li>)}</ul>
              <p className="r-small r-muted">Avoid: {avoidPrompts.map(q => `“${q}”`).join(', ')}. They steer the participant.</p>
            </section>
            <section className="r-fac-box">
              <h2 className="r-fac-h3">After each task</h2>
              <ol className="r-plain-ol">
                <li>{afterTaskQuestions.ease} (1–7)</li>
                <li>{afterTaskQuestions.unclear}</li>
                <li>{afterTaskQuestions.fit}</li>
              </ol>
              <p className="r-small r-muted">{limitationNote}</p>
            </section>
          </aside>

          <div className="r-fac-main">
            <section className="r-fac-box">
              <h2 className="r-fac-h2">0–3 min · Welcome and consent</h2>
              <blockquote className="r-quote">{introScript}</blockquote>
              <p className="r-small r-muted">Show the walkthrough video only after the tasks; it demonstrates the interface.</p>
              <p className="r-fac-live">Consent: {data.consent && data.consent.at ? `given ${time(data.consent.at)}${data.consent.recording ? ', recording agreed' : ', no recording'}` : 'not yet given'}</p>
              <p className="r-small r-muted">Materials: {role.prep}</p>
            </section>

            <section className="r-fac-box">
              <h2 className="r-fac-h2">3–5 min · Current responsibilities</h2>
              {roleQuestions.map(q => (
                <div key={q.id} className="r-fac-qa">
                  <p className="r-fac-q">“{q.q}”</p>
                  <p className="r-fac-a">{(data.role || {})[q.id] || <span className="r-muted">No answer yet</span>}</p>
                </div>
              ))}
            </section>

            <h2 className="r-fac-h2 r-fac-sep">5–24 min · Journeys</h2>
            {role.priority && <p className="r-callout">{role.priority}</p>}
            {role.journeys.map((j, i) => (
              <JourneyCard key={j.id} n={i + 1} j={j} pid={id} task={(data.tasks || {})[j.id] || {}} note={notes[j.id] || {}} setNote={patch => setNote(j.id, patch)} />
            ))}

            <section className="r-fac-box">
              <h2 className="r-fac-h2">24–28 min · Overall feedback · 28–30 close</h2>
              <p className="r-fac-q">“{closingQuestion}”</p>
              <p className="r-fac-a">{data.closing || <span className="r-muted">No answer yet</span>}</p>
              <div className="r-field">
                <label htmlFor="gen-notes">General notes</label>
                <textarea id="gen-notes" className="r-input" rows={4} value={data.generalNotes || ''} onChange={e => update(d => ({ ...d, generalNotes: e.target.value }))} />
              </div>
            </section>

            <section className="r-fac-box">
              <h2 className="r-fac-h2">Export and reset</h2>
              <p className="r-small r-muted">Everything is saved in this browser only. Export after each session.</p>
              <div className="r-actions is-start">
                <button type="button" className="r-btn" onClick={() => exportJson([p])}>Export JSON</button>
                <button type="button" className="r-btn r-btn-secondary" onClick={() => exportCsv([p])}>Export CSV</button>
                {!confirmReset
                  ? <button type="button" className="r-link-btn is-danger" onClick={() => setConfirmReset(true)}>Reset this session…</button>
                  : <span className="r-confirm" role="group" aria-label="Confirm reset">
                      This clears consent, answers and notes for {p.code}.
                      <button type="button" className="r-btn r-btn-danger" onClick={() => { clearSession(id); setConfirmReset(false); }}>Clear {p.code}</button>
                      <button type="button" className="r-link-btn" onClick={() => setConfirmReset(false)}>Cancel</button>
                    </span>}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function JourneyCard({ n, j, pid, task, note, setNote }) {
  return (
    <section className={`r-fac-box r-fac-journey${j.priority ? ' is-priority' : ''}`} aria-labelledby={`fj-${j.id}`}>
      <div className="r-fac-jhead">
        <h3 id={`fj-${j.id}`} className="r-fac-h3">{n}. {j.title} · {j.minutes} min</h3>
        <a className="r-link-btn" href={prototypeHref(j.start)} target="_blank" rel="noopener">Open prototype{j.start ? ` (${j.start} state)` : ''}<span className="r-sr"> (opens in a new tab)</span></a>
      </div>
      <p className="r-fac-task">“{j.task}”</p>
      {j.id === 'rm-client' && secondaryArea[pid] && <p className="r-small"><strong>Secondary area for {pid.toUpperCase().replace('-', ' ')}:</strong> {secondaryArea[pid]} (if time allows)</p>}
      {j.note && <p className="r-small r-muted">{j.note}</p>}
      <div className="r-fac-cols">
        <div>
          <p className="r-label">Ask after the task</p>
          <ul className="r-plain">{j.ask.map(q => <li key={q}>“{q}”</li>)}</ul>
        </div>
        <div>
          <p className="r-label">What you observe</p>
          {j.observe.map(o => (
            <label key={o} className="r-check is-compact"><input type="checkbox" checked={!!(note.seen || {})[o]} onChange={e => setNote({ seen: { ...(note.seen || {}), [o]: e.target.checked } })} /><span>{o}</span></label>
          ))}
        </div>
      </div>
      <p className="r-fac-live">
        Participant: {task.skipped ? 'skipped' : task.finishedAt ? 'finished' : task.openedAt ? 'in the prototype' : 'not started'}
        {task.ease ? ` · Ease ${task.ease}/7` : ''}
        {task.unclear ? ` · Unclear: “${task.unclear}”` : ''}
        {task.fit ? ` · Fit: “${task.fit}”` : ''}
      </p>
      <div className="r-fac-record">
        <fieldset className="r-seg">
          <legend>Outcome</legend>
          {outcomes.map(o => <label key={o} className={note.outcome === o ? 'is-on' : ''}><input type="radio" name={`out-${j.id}`} checked={note.outcome === o} onChange={() => setNote({ outcome: o })} />{o}</label>)}
        </fieldset>
        <fieldset className="r-seg">
          <legend>Classification</legend>
          {classifications.map(o => <label key={o} className={note.classification === o ? 'is-on' : ''}><input type="radio" name={`cls-${j.id}`} checked={note.classification === o} onChange={() => setNote({ classification: o })} />{o}</label>)}
        </fieldset>
        <div className="r-fac-fields">
          {noteFields.map(f => (
            <div key={f.id} className="r-field">
              <label htmlFor={`${j.id}-${f.id}`}>{f.label} <span className="r-muted">· {f.hint}</span></label>
              <textarea id={`${j.id}-${f.id}`} className="r-input" rows={f.id === 'observation' ? 3 : 2} value={note[f.id] || ''} onChange={e => setNote({ [f.id]: e.target.value })} />
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="r-fac-box">
      <h2 className="r-fac-h3">Session clock</h2>
      <p className="r-clock" aria-live="off">{mmss}</p>
      <p className="r-small">{cur ? cur.label : min >= 30 ? 'Over time' : 'Not started'}</p>
      <ol className="r-agenda">{agenda.map(a => <li key={a.from} className={cur === a ? 'is-now' : ''}>{a.from}–{a.to} min · {a.label}</li>)}</ol>
      <div className="r-actions is-start">
        {t.runningSince
          ? <button type="button" className="r-btn r-btn-secondary" onClick={() => set({ elapsed: ms, runningSince: null })}>Pause</button>
          : <button type="button" className="r-btn" onClick={() => set({ elapsed: t.elapsed || 0, runningSince: Date.now() })}>{t.elapsed ? 'Resume' : 'Start'}</button>}
        <button type="button" className="r-link-btn" onClick={() => set({ elapsed: 0, runningSince: null })}>Reset clock</button>
      </div>
    </section>
  );
}

export function FacilitatorOverview() {
  const [checks, setChecks] = useState(() => readSession('checklist').items || {});
  const [, force] = useState(0);
  useEffect(() => { const f = () => force(x => x + 1); window.addEventListener('storage', f); return () => window.removeEventListener('storage', f); }, []);
  const toggle = (i, v) => { const next = { ...checks, [i]: v }; setChecks(next); writeSession('checklist', { items: next }); };
  return (
    <main id="main" className="r-fac">
      <div className="r-fac-in">
        <p className="r-eyebrow">Facilitator view · not for participants</p>
        <h1 className="r-fac-h">Sessions</h1>
        <ul className="r-fac-list">
          {participants.map(p => (
            <li key={p.id} className="r-fac-box">
              <div><strong>{p.code}</strong> · {p.role}<br /><span className="r-small r-muted">{statusLabels[statusOf(readSession(p.id))]}</span></div>
              <span className="r-actions-end">
                <a className="r-btn" href={`#/f/${p.id}`}>Facilitator view</a>
                <a className="r-btn r-btn-secondary" href={`#/s/${p.id}`} target="_blank" rel="noopener">Participant screen<span className="r-sr"> (opens in a new tab)</span></a>
              </span>
            </li>
          ))}
        </ul>
        <div className="r-actions is-start">
          <button type="button" className="r-btn" onClick={() => exportJson(participants)}>Export all (JSON)</button>
          <button type="button" className="r-btn r-btn-secondary" onClick={() => exportCsv(participants)}>Export all (CSV)</button>
        </div>
        <section className="r-fac-box">
          <h2 className="r-fac-h2">Before the first session</h2>
          {beforeFirstSession.map((b, i) => (
            <label key={i} className="r-check"><input type="checkbox" checked={!!checks[i]} onChange={e => toggle(i, e.target.checked)} /><span>{b}</span></label>
          ))}
        </section>
      </div>
    </main>
  );
}

const time = iso => new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function exportJson(list) {
  const out = list.map(p => ({ participant: p.code, role: p.role, status: statusOf(readSession(p.id)), ...stripSig(readSession(p.id)) }));
  download(`credit-proposal-sessions-${stamp()}.json`, JSON.stringify(out, null, 2), 'application/json');
}
function exportCsv(list) {
  const cols = ['participant', 'role', 'task', 'outcome', 'classification', 'ease', 'unclear', 'fit', 'observation', 'quote', 'screen', 'assistance', 'impact', 'followup', 'participant_status'];
  const rows = [cols];
  list.forEach(p => {
    const d = readSession(p.id);
    journeysByRole[p.roleKey].journeys.forEach(j => {
      const t = (d.tasks || {})[j.id] || {}; const n = (d.notes || {})[j.id] || {};
      rows.push([p.code, p.role, j.title, n.outcome, n.classification, t.ease, t.unclear, t.fit, n.observation, n.quote, n.screen, n.assistance, n.impact, n.followup, t.skipped ? 'skipped' : t.finishedAt ? 'finished' : '']);
    });
  });
  const csv = rows.map(r => r.map(v => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`).join(',')).join('\n');
  download(`credit-proposal-sessions-${stamp()}.csv`, csv, 'text/csv');
}
// Exports keep the fact of signing, not the signature image.
function stripSig(d) { if (!d.consent) return d; const { signature, ...c } = d.consent; return { ...d, consent: { ...c, signed: !!signature } }; }
const stamp = () => new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
