import React, { useEffect, useRef } from 'react';
import { project, sessionStages, sessionNote, statusLabels } from '../config.js';
import { journeysByRole } from '../script.js';
import SessionStages from './SessionStages.jsx';

// Native <dialog> opened with showModal(): focus is kept inside, Escape closes it,
// and the page behind is inert. Focus returns to the card's button on close (see App).
export default function SessionPreviewDialog({ participant, status, onClose }) {
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
  const assigned = participant ? journeysByRole[participant.roleKey].journeys : [];

  return (
    <dialog ref={ref} className="r-dialog" aria-labelledby="preview-title" aria-describedby="preview-desc" onClick={onBackdrop}>
      {participant && (
        <div className="r-dialog-in">
          <div className="r-dialog-head">
            <div>
              <p className="r-eyebrow">Session preview</p>
              <h2 id="preview-title" className="r-h2">{participant.code} · {participant.role}</h2>
            </div>
            <button type="button" className="r-icon-btn" onClick={() => ref.current.close()} aria-label="Close preview">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>
          </div>
          <p id="preview-desc" className="r-muted">
            {project.sessionMinutes}-minute guided session · Status: {statusLabels[status] || statusLabels['not-started']}
          </p>

          <h3 className="r-h3">Planned stages</h3>
          <SessionStages stages={sessionStages} compact />
          <p className="r-note">{sessionNote}</p>

          {assigned.length > 0 && (
            <>
              <h3 className="r-h3">Tasks for this session</h3>
              <ul className="r-list">
                {assigned.map(j => <li key={j.id}>{j.title} · {j.minutes} min</li>)}
              </ul>
              <p className="r-small r-muted">You don’t need to finish everything.</p>
            </>
          )}

          <p className="r-callout r-callout-info">
            Answers and notes are saved in this browser only. The facilitator view opens separately and is not shown to participants.
          </p>
          <div className="r-dialog-foot">
            <a className="r-link-btn" href={`#/f/${participant.id}`}>Facilitator view</a>
            <a className="r-btn" href={`#/s/${participant.id}`}>{status === 'not-started' || !status ? 'Start session' : 'Continue session'}</a>
          </div>
        </div>
      )}
    </dialog>
  );
}
