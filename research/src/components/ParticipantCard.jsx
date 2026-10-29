import React from 'react';
import { project, statusLabels } from '../config.js';

export default function ParticipantCard({ participant, onOpen }) {
  const { id, code, role, status } = participant;
  const titleId = `card-${id}`;
  return (
    <article className="r-pcard" aria-labelledby={titleId}>
      <div className="r-pcard-top">
        <span className="r-pcard-role">{role}</span>
        <span className="r-tag">{statusLabels[status] || status}</span>
      </div>
      <h3 id={titleId} className="r-pcard-code">{code}</h3>
      <p className="r-muted">{project.sessionMinutes}-minute guided session</p>
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
    </article>
  );
}
