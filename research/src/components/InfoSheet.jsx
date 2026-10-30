import React from 'react';
import { infoSheet, isDraft, infoSheetVersionLabel, fill, infoSheetHtml } from '../infoSheet.js';
import { download } from '../store.js';

// Step 1: Participant Information Sheet. A stable reading page: no motion, no questions, no timers,
// no recording or device permissions. Continuing is not consent; that is asked on the next screen.
export default function InfoSheet({ ctx, headRef, onBack, onNext }) {
  const draft = isDraft();
  const save = () => download(
    `enbd-credit-proposal-information-sheet-v${infoSheet.version}${draft ? '-draft' : ''}-${ctx.id}.html`,
    infoSheetHtml(ctx), 'text/html'
  );

  const part = (x, k) => {
    if (typeof x === 'string') return <React.Fragment key={k}>{fill(x, ctx)}</React.Fragment>;
    if (x.strong) return <strong key={k}>{x.strong}</strong>;
    if (x.tbc) return <Tbc key={k} id={x.tbc} />;
    if (x.contact) {
      const c = infoSheet.contact;
      return (
        <span key={k} className="r-pis-contact">
          <strong>{c.name}</strong>
          <span>{c.role}</span>
          <span>{typeof c.email === 'string' ? <a href={`mailto:${c.email}`}>{c.email}</a> : <Tbc id={c.email.tbc} />}</span>
        </span>
      );
    }
    return null;
  };
  const para = (p, i) => p.length === 1 && p[0].roleList
    ? <ul key={i} className="r-pis-list">{ctx.journeys.map(j => <li key={j}>{j}</li>)}</ul>
    : <p key={i}>{p.map(part)}</p>;

  return (
    <article className="r-pis" aria-labelledby="pis-title">
      <header className="r-pis-head">
        <p className="r-pis-label">{infoSheet.label}</p>
        <h1 id="pis-title" ref={headRef} tabIndex={-1} className="r-session-h">{infoSheet.title}</h1>
        <p className="r-pis-meta">
          <span>Participant {ctx.code}</span>
          <span aria-hidden="true">·</span>
          <span>{infoSheetVersionLabel()}</span>
        </p>
        <p className="r-pis-intro">{infoSheet.intro}</p>
        {draft && (
          <p className="r-pis-draft" role="note">
            <strong>Draft for review.</strong> Items marked “To be confirmed” must be agreed before this sheet is used with participants.
          </p>
        )}
      </header>

      {infoSheet.sections.map((s, i) => (
        <section key={s.id} className="r-pis-sec" aria-labelledby={`pis-${s.id}`}>
          <h2 id={`pis-${s.id}`} className="r-pis-h"><span className="r-pis-n" aria-hidden="true">{i + 1}</span>{s.heading}</h2>
          <div className="r-pis-body">
            {(s.body || []).map(para)}
            {(s.groups || []).map(g => (
              <div key={g.label} className="r-pis-group">
                <h3 className="r-pis-h3">{g.label}</h3>
                {g.body.map(para)}
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer className="r-pis-foot">
        <p className="r-pis-next">Continuing doesn’t mean you’ve agreed to take part. You’ll decide on the next screen.</p>
        <div className="r-pis-actions">
          <span className="r-pis-actions-start">
            <button type="button" className="r-btn r-btn-secondary" onClick={onBack}>Back to welcome</button>
            <a className="r-link-btn" href="#/">Leave session</a>
          </span>
          <span className="r-pis-actions-end">
            <button type="button" className="r-btn r-btn-secondary" onClick={save}>Download information sheet</button>
            <button type="button" className="r-btn" onClick={onNext}>Continue to consent</button>
          </span>
        </div>
      </footer>
    </article>
  );
}

function Tbc({ id }) {
  return <mark className="r-tbc">To be confirmed: {infoSheet.pending[id] || id}</mark>;
}
