import React from 'react';
import { project, statusLabels } from '../config.js';

// The button is the only interactive element. Status comes from config/session data and is never
// changed by opening the card.
export default function ParticipantCard({ participant, onOpen }) {
  const { id, code, role, status, illustration } = participant;
  const titleId = `card-${id}`;
  return (
    <article className="r-pcard" aria-labelledby={titleId}>
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
          </button>
        </div>
      </div>
      {illustration && (
        <div className="r-pcard-art" aria-hidden="true">
          <img src={illustration} alt="" loading="lazy" />
        </div>
      )}
    </article>
  );
}
