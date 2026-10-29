import React from 'react';

export default function SessionStages({ stages, compact = false }) {
  return (
    <ol className={compact ? 'r-stages r-stages-compact' : 'r-stages'}>
      {stages.map((s, i) => (
        <li key={s.title} className="r-stage">
          <span className="r-stage-n" aria-hidden="true">{i + 1}</span>
          <span>
            <span className="r-stage-t">{s.title}</span>
            {s.text && <span className="r-stage-d">{s.text}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}
