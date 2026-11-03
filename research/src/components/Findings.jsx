import React, { useState } from 'react';
import { round, takeaways, themes, byParticipant, journeyTimes, stepTimes, heatmap, actions, method } from '../findings.js';

// Usability findings (#/findings). Static report written from the session recordings; all content is in findings.js.
const SEV = { high: 'High', medium: 'Medium', low: 'Low' };
const fmt = s => {
  const m = Math.floor(s / 60), r = Math.round(s % 60);
  return m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : m ? `${m} min${r ? ` ${r} s` : ''}` : `${r} s`;
};

export default function Findings() {
  const [pid, setPid] = useState(byParticipant[0].code);
  const person = byParticipant.find(p => p.code === pid);
  const maxStep = Math.max(...stepTimes.flatMap(j => j.steps.map(s => Math.max(...Object.values(s.secs)))));

  return (
    <main id="main" className="r-ov r-fd">
      <div className="r-ov-in">
        <header className="r-ov-head">
          <div>
            <p className="r-heat-crumb"><a href="#/f">Research sessions</a> <span aria-hidden="true">/</span> Findings</p>
            <h1 className="r-ov-h">Usability findings</h1>
            <p className="r-ov-sub">{round.subtitle}</p>
          </div>
          <nav className="r-fd-toc" aria-label="On this page">
            <a href="#fd-themes">Common problems</a>
            <a href="#fd-people">By participant</a>
            <a href="#fd-time">Time</a>
            <a href="#fd-heat">Heatmaps</a>
            <a href="#fd-actions">Actions</a>
          </nav>
        </header>

        <dl className="r-heat-stats r-fd-stats">
          {round.stats.map(s => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd>{s.note && <p className="r-fd-statnote">{s.note}</p>}</div>)}
        </dl>

        <section className="r-fd-card" aria-labelledby="fd-sum">
          <h2 id="fd-sum" className="r-fd-h2">What we learned</h2>
          <ol className="r-fd-take">
            {takeaways.map((t, i) => <li key={i}><strong>{t.title}</strong> {t.text}</li>)}
          </ol>
        </section>

        <section id="fd-themes" aria-labelledby="fd-themes-h" className="r-fd-sec">
          <div className="r-fd-sec-head">
            <h2 id="fd-themes-h" className="r-fd-h2">Common problems</h2>
            <p className="r-ov-note">Problems raised by more than one participant, or by one participant across journeys. Ordered by severity, then by how many people hit them.</p>
          </div>
          <ol className="r-fd-themes">
            {themes.map(t => (
              <li key={t.id} className="r-fd-theme">
                <div className="r-fd-theme-top">
                  <span className={`r-fd-sev is-${t.severity}`}>{SEV[t.severity]}</span>
                  <span className="r-fd-who" aria-label="Participants">{t.who.map(w => <span key={w}>{w}</span>)}</span>
                </div>
                <h3>{t.title}</h3>
                <p>{t.summary}</p>
                {t.evidence.length > 0 && (
                  <ul className="r-fd-ev">
                    {t.evidence.map((e, i) => <li key={i}><span className="r-fd-ev-src">{e.src}</span>{e.quote ? <q>{e.quote}</q> : null}{e.quote && e.note ? ' ' : null}{e.note ? <span>{e.note}</span> : null}</li>)}
                  </ul>
                )}
                <p className="r-fd-screens"><span>Where:</span> {t.screens.join(' · ')}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="fd-people" aria-labelledby="fd-people-h" className="r-fd-sec">
          <div className="r-fd-sec-head">
            <h2 id="fd-people-h" className="r-fd-h2">Problems by participant</h2>
            <p className="r-ov-note">Every problem heard or seen in each recording, with the time in that recording.</p>
          </div>
          <div className="r-fd-tabs" role="group" aria-label="Choose a participant">
            {byParticipant.map(p => (
              <button key={p.code} type="button" aria-pressed={p.code === pid} aria-controls="fd-panel" onClick={() => setPid(p.code)}>
                {p.code}<span>{p.problems.length} problems</span>
              </button>
            ))}
          </div>
          <div id="fd-panel" className="r-fd-card" aria-live="polite">
            <h3 className="r-fd-h3">{person.code}</h3>
            <p className="r-fd-person">{person.role} · {person.recorded}</p>
            {person.note && <p className="r-fd-caveat">{person.note}</p>}
            <div className="r-fd-tablewrap">
              <table className="r-fd-table">
                <thead><tr><th scope="col">Journey · step</th><th scope="col">Problem</th><th scope="col">Severity</th><th scope="col">Theme</th></tr></thead>
                <tbody>
                  {person.problems.map((p, i) => (
                    <tr key={i}>
                      <td><span className="r-fd-j">{p.journey}</span><span className="r-fd-step">{p.step}</span><span className="r-fd-at">{p.at}</span></td>
                      <td>{p.text}{p.quote && <q className="r-fd-q">{p.quote}</q>}</td>
                      <td><span className={`r-fd-sev is-${p.severity}`}>{SEV[p.severity]}</span></td>
                      <td className="r-fd-theme-ref">{p.theme ? themes.find(t => t.id === p.theme).short : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="fd-time" aria-labelledby="fd-time-h" className="r-fd-sec">
          <div className="r-fd-sec-head">
            <h2 id="fd-time-h" className="r-fd-h2">Time spent per journey</h2>
            <p className="r-ov-note">From the recordings: the time from Start task to Finish task, compared with the time planned in the session script. Most of the overrun is facilitator explanation and discussion, not the participant working alone.</p>
          </div>
          <div className="r-fd-card r-fd-tablewrap">
            <table className="r-fd-table r-fd-times">
              <thead><tr><th scope="col">Journey</th><th scope="col" className="is-num">Planned</th>{journeyTimes.people.map(p => <th key={p} scope="col" className="is-num">{p}</th>)}</tr></thead>
              <tbody>
                {journeyTimes.rows.map(r => (
                  <tr key={r.journey}>
                    <th scope="row">{r.journey}</th>
                    <td className="is-num">{r.planned} min</td>
                    {journeyTimes.people.map(p => {
                      const v = r.actual[p];
                      return <td key={p} className="is-num">{v == null ? <span className="r-fd-na">—</span> : <>{fmt(v.secs)}{v.flag && <span className="r-fd-flag">{v.flag}</span>}{!v.flag && r.planned ? <span className="r-fd-x">{(v.secs / 60 / r.planned).toFixed(1)}× plan</span> : null}</>}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="r-fd-h3">Time on each step</h3>
          <p className="r-ov-note">Read from the screen every 10 seconds of each recording, so each value is accurate to about 10 seconds. Long bars mostly mark where the group stopped to discuss.</p>
          <div className="r-fd-steps">
            {stepTimes.map(j => (
              <div key={j.journey} className="r-fd-card">
                <h4 className="r-fd-h4">{j.journey}</h4>
                <ul className="r-fd-legend" aria-hidden="true">{j.people.map((p, i) => <li key={p}><i className={`c${i}`} />{p}</li>)}</ul>
                <dl className="r-fd-bars">
                  {j.steps.map(s => (
                    <div key={s.step}>
                      <dt>{s.step}</dt>
                      <dd>
                        {j.people.map((p, i) => s.secs[p] != null && (
                          <span key={p} className="r-fd-bar">
                            {s.secs[p] > 0 && <span className={`r-fd-fill c${i}`} style={{ width: `${Math.max(1.5, s.secs[p] / maxStep * 100)}%` }} />}
                            <span className="r-fd-val">{p} {s.secs[p] > 0 ? fmt(s.secs[p]) : 'not seen'}</span>
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section id="fd-heat" aria-labelledby="fd-heat-h" className="r-fd-sec">
          <div className="r-fd-sec-head">
            <h2 id="fd-heat-h" className="r-fd-h2">Clicks and heatmaps</h2>
          </div>
          <div className="r-fd-card">
            <p className="r-fd-caveat">{heatmap.status}</p>
            <h3 className="r-fd-h3">What to look for when the click data is added</h3>
            <ul className="r-fd-list">{heatmap.checks.map((c, i) => <li key={i}>{c}</li>)}</ul>
            <p><a className="r-btn r-btn-secondary" href="#/f/analysis">Open click heatmaps</a></p>
          </div>
        </section>

        <section id="fd-actions" aria-labelledby="fd-actions-h" className="r-fd-sec">
          <div className="r-fd-sec-head">
            <h2 id="fd-actions-h" className="r-fd-h2">Recommended actions</h2>
            <p className="r-ov-note">Now: change in the prototype before the next round. Next: decide with the BA/PO. Later: roadmap items raised in the sessions.</p>
          </div>
          {['Now', 'Next', 'Later'].map(when => (
            <div key={when} className="r-fd-card r-fd-actions">
              <h3 className="r-fd-h3">{when}</h3>
              <ol>
                {actions.filter(a => a.when === when).map((a, i) => (
                  <li key={i}>
                    <strong>{a.title}</strong>
                    <span>{a.detail}</span>
                    {a.themes.length > 0 && <span className="r-fd-for">Fixes: {a.themes.map(id => themes.find(t => t.id === id).short).join(', ')}</span>}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>

        <section className="r-fd-card" aria-labelledby="fd-method-h">
          <h2 id="fd-method-h" className="r-fd-h2">How this was put together</h2>
          <ul className="r-fd-list">{method.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </section>
      </div>
    </main>
  );
}
