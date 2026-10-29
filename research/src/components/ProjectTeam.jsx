import React from 'react';
import { team, missingName } from '../config.js';

export default function ProjectTeam() {
  return (
    <div aria-labelledby="team-title">
      <h2 id="team-title" className="r-h2">Project team</h2>
      <dl className="r-team">
        {team.map(t => (
          <div key={t.role} className="r-team-row">
            <dt>{t.role}</dt>
            <dd className={t.name ? '' : 'r-tbc'}>{t.name || missingName}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
