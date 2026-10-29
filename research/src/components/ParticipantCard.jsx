import React from 'react';
import { project, statusLabels } from '../config.js';

// The button is the only interactive element. Status comes from config/session data and is never
// changed by opening the card. On hover only the background layer (surface, glow, illustration) and
// the arrow move; the text and button stay where they are.
export default function ParticipantCard({ participant, onOpen }) {
  const { id, code, role, status, illustration, illustrationShadow, tone = 'white' } = participant;
  const titleId = `card-${id}`;
  return (
    <article className={`r-pcard tone-${tone}`} aria-labelledby={titleId}>
      <div className="r-pcard-bg" aria-hidden="true">
        <span className="r-pcard-glow" />
        {illustration && (
          <div className="r-pcard-art">
            {illustrationShadow && <img className="r-art-shadow" src={illustrationShadow} alt="" loading="lazy" />}
            <img className="r-art-main" src={illustration} alt="" loading="lazy" />
          </div>
        )}
      </div>
      <div className="r-pcard-body">
        <p className="r-pcard-label">{project.sessionMinutes}-minute guided session</p>
        <h3 id={titleId} className="r-pcard-code">{code}</h3>
        <p className="r-pcard-role">{role}</p>
        <p className="r-pcard-status"><span className="r-dot" aria-hidden="true" />{statusLabels[status] || status}</p>
        <div className="r-pcard-foot">
          <button
            type="button"
            className="r-btn"
            aria-haspopup="dialog"
            aria-describedby={titleId}
            onClick={e => onOpen(id, e.currentTarget)}
          >
            Open session
            <span className="r-btn-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
