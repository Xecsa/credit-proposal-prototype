import React, { useEffect, useRef } from 'react';
import { project, sessionStages, sessionModal, statusLabels } from '../config.js';
import { journeyOverview } from '../script.js';
import { readSession } from '../store.js';

// Session modal on the research home page. Native <dialog> opened with showModal(): focus stays inside, Escape
// closes it and the page behind is inert. Focus returns to the card's button on close (see App).
// Opening it never starts a session or changes a status; there are no inputs here, so nothing can be lost on close.
// Participant notes are asked later, after consent. Facilitator actions and notes show only in a tab where a
// facilitator route has been opened (see store.js); that is a convenience, not access control.
const Icon = ({ name }) => {
  const p = { width: 18, height: 18, viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'clock') return <svg {...p} width={16} height={16}><circle cx="10" cy="10" r="7.25" /><path d="M10 6v4.2l2.6 1.6" /></svg>;
  if (name === 'client') return <svg {...p}><circle cx="10" cy="7" r="3" /><path d="M4.5 16c.8-2.7 2.9-4 5.5-4s4.7 1.3 5.5 4" /></svg>;
  if (name === 'docs') return <svg {...p}><path d="M6 2.75h5.5L15 6.25v11H6z" /><path d="M11.5 2.75v3.5H15M8.5 10h4M8.5 13h4" /></svg>;
  if (name === 'chart') return <svg {...p}><path d="M3.5 16.5h13" /><path d="M6 13.5v-3M10 13.5V6.5M14 13.5v-5" /></svg>;
  if (name === 'heart') return <svg {...p}><path d="M10 16s-6-3.6-6-8a3.25 3.25 0 0 1 6-1.7A3.25 3.25 0 0 1 16 8c0 4.4-6 8-6 8z" /></svg>;
  if (name === 'device') return <svg {...p}><rect x="3" y="4" width="14" height="9.5" rx="1.5" /><path d="M7.5 16.5h5M10 13.5v3" /></svg>;
  if (name === 'info') return <svg {...p}><circle cx="10" cy="10" r="7.25" /><path d="M10 9v4.5M10 6.5v.01" /></svg>;
  return null;
};

export default function SessionPreviewDialog({ participant, status, facilitator = false, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (participant && !d.open) d.showModal();
    if (!participant && d.open) d.close();
  }, [participant]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handleClose = () => onClose();
    d.addEventListener('close', handleClose);
    return () => d.removeEventListener('close', handleClose);
  }, [onClose]);

  const onBackdrop = e => { if (e.target === ref.current) ref.current.close(); };
  const s = status || 'not-started';
  // Where a started session is now, using the same six stages as the participant's stepper.
  const STAGE_IDS = ['welcome', 'info', 'consent', 'about', 'tasks', 'closing'];
  const saved = participant && s === 'in-progress' ? readSession(participant.id) : {};
  const current = s === 'in-progress' ? Math.max(0, STAGE_IDS.indexOf(saved.stage || 'welcome')) : -1;
  const journeys = participant ? journeyOverview[participant.roleKey] || [] : [];
  const primary = s === 'not-started' ? 'Continue to welcome' : s === 'in-progress' ? 'Resume session' : 'Open session';

  return (
    <dialog ref={ref} className="r-dialog" aria-labelledby="dlg-title" aria-describedby="dlg-role" onClick={onBackdrop}>
      {participant && (
        <div className="r-dlg">
          <header className="r-dlg-head">
            {/* decorative band: soft ENBD-blue gradient over a faint grid, with the card's ADS illustration */}
            <div className="r-dlg-hero" aria-hidden="true">
              {participant.illustration && <span className="r-dlg-art"><img src={participant.illustration} alt="" /></span>}
            </div>
            <button type="button" className="r-dlg-close" onClick={() => ref.current.close()} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
            </button>
            <div className="r-dlg-titles">
              <h2 id="dlg-title" className="r-dlg-title">{participant.code}</h2>
              <p id="dlg-role" className="r-dlg-role">{participant.role}</p>
              <div className="r-dlg-meta">
                <span className="r-dlg-time"><Icon name="clock" />Approximately {project.sessionMinutes} minutes</span>
                <span className={`r-tag r-status is-${s}`}>Status: {statusLabels[s] || statusLabels['not-started']}</span>
              </div>
            </div>
          </header>

          <div className="r-dlg-body">
            {/* two aligned columns: same row height, same 32px marker column */}
            <div className="r-dlg-cols">
              <section aria-labelledby="dlg-expect">
                <h3 id="dlg-expect" className="r-dlg-h">What to expect</h3>
                <ol className="r-dlg-list r-timeline">
                  {sessionStages.map((st, i) => (
                    <li key={st.title} className={i === current ? 'is-current' : ''} aria-current={i === current ? 'step' : undefined}>
                      <span className="r-dlg-mark is-step" aria-hidden="true">{i + 1}</span>
                      <span className="r-dlg-item">{st.title}{i === current && <span className="r-sr"> (current step)</span>}</span>
                    </li>
                  ))}
                </ol>
              </section>
              {journeys.length > 0 && (
                <section aria-labelledby="dlg-journeys">
                  <h3 id="dlg-journeys" className="r-dlg-h">{journeys.length === 1 ? 'Journey you’ll explore' : 'Journeys you’ll explore'}</h3>
                  <ul className="r-dlg-list">
                    {journeys.map(j => (
                      <li key={j.title}>
                        <span className="r-dlg-mark is-icon"><Icon name={j.icon} /></span>
                        <span className="r-dlg-item">{j.title}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <p className="r-panel is-glow"><Icon name="info" /><span>{sessionModal.reassurance}</span></p>
            <p className="r-dlg-store"><Icon name="device" /><span>{sessionModal.storageTitle} {sessionModal.storage}</span></p>
            {facilitator && (
              <p className="r-dlg-store">
                <Icon name="info" /><span>For facilitators: {sessionModal.facilitatorStorage} {sessionModal.facilitatorGuidance}</span>
              </p>
            )}
          </div>

          <footer className="r-dlg-foot">
            {facilitator && <a className="r-link-btn r-dlg-fac" href={`#/f/${participant.id}`}>Open facilitator view</a>}
            <button type="button" className="r-btn r-btn-secondary" onClick={() => ref.current.close()}>Not now</button>
            <a className="r-btn" href={`#/s/${participant.id}`}>{primary}</a>
          </footer>
        </div>
      )}
    </dialog>
  );
}
