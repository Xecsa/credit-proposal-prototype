import React, { useRef } from 'react';
import { team, teamSection } from '../config.js';
import useReveal from '../useReveal.js';

// Decorative, non-interactive composition. Portraits carry alt text; companions and lines are aria-hidden.
// The connecting curves assume three equal columns (centres at 1/6, 3/6, 5/6 of the 880 viewBox)
// and the per-member vertical offsets set in CSS (0, 72, 24px). They are hidden on small screens.
function Lines() {
  return (
    <svg className="r-team-lines" viewBox="0 0 880 320" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="r-line-in" x1="0" x2="1"><stop offset="0" stopColor="#5082FF" stopOpacity="0" /><stop offset="1" stopColor="#5082FF" stopOpacity=".55" /></linearGradient>
        <linearGradient id="r-line-out" x1="0" x2="1"><stop offset="0" stopColor="#5082FF" stopOpacity=".55" /><stop offset="1" stopColor="#5082FF" stopOpacity="0" /></linearGradient>
      </defs>
      <g fill="none" strokeWidth="1.25" vectorEffect="non-scaling-stroke">
        <path pathLength="1" d="M0 84H78" stroke="url(#r-line-in)" vectorEffect="non-scaling-stroke" />
        <path pathLength="1" d="M262 84C318 84 316 156 372 156" stroke="#5082FF" strokeOpacity=".55" vectorEffect="non-scaling-stroke" />
        <path pathLength="1" d="M556 156C612 156 610 108 664 108" stroke="#5082FF" strokeOpacity=".55" vectorEffect="non-scaling-stroke" />
        <path pathLength="1" d="M848 108H880" stroke="url(#r-line-out)" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

function Portrait({ member }) {
  const alt = member.avatarIsPlaceholder ? `Placeholder avatar for ${member.name}` : `Illustrated avatar of ${member.name}`;
  return (
    <div className="r-team-portrait">
      <img src={member.avatar} alt={alt} width="110" height="110" loading="lazy" draggable="false" />
    </div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <section id="team" className="r-team-sec" aria-labelledby="team-title">
      <div className="r-team-head">
        <h2 id="team-title" className="r-h2 r-h2-lg">{teamSection.heading}</h2>
        <p className="r-muted">{teamSection.text}</p>
      </div>
      <div ref={ref} className="r-team-stage">
        <Lines />
        <ul className="r-team-list" role="list">
          {team.map(m => (
            <li key={m.id} className="r-team-member">
              <div className="r-team-cluster">
                <Portrait member={m} />
                {m.companion && (
                  <span className="r-team-companion" aria-hidden="true"><img src={m.companion} alt="" loading="lazy" draggable="false" /></span>
                )}
              </div>
              <p className="r-team-name">{m.name}</p>
              <p className="r-team-role">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
