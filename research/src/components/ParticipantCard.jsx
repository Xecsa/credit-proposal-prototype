import React from 'react';
import { project, statusLabels } from '../config.js';

export default function ParticipantCard({ participant, onOpen }) {
  const { id, code, role, status } = participant;
  const titleId = `card-${id}`;
  return (
    <article className="r-pcard" aria-labelledby={titleId}>
      <div className="r-pcard-top">
        <h3 id={titleId} className="r-pcard-code">{code}</h3>
        <span className="r-tag">{statusLabels[status] || status}</span>
      </div>
      <p className="r-muted">{role} · {project.sessionMinutes}-minute guided session</p>
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
