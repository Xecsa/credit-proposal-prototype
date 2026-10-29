import React, { useRef } from 'react';
import { team, teamSection } from '../config.js';
import useReveal from '../useReveal.js';

// Portraits are decorative-but-informative images; they are not interactive.
// A member without an avatar file gets a plainly labelled placeholder, never a drawn likeness.
function Portrait({ member }) {
  if (member.avatar) {
    const alt = member.avatarIsPlaceholder ? `Placeholder avatar for ${member.name}` : `Illustrated avatar of ${member.name}`;
    return <img className="r-team-img" src={member.avatar} alt={alt} width="128" height="128" loading="lazy" draggable="false" />;
  }
  return (
    <div className="r-team-ph" role="img" aria-label={`Placeholder avatar for ${member.name}`}>
      <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
        <circle cx="32" cy="24" r="11" fill="currentColor" />
        <path d="M12 56c2-11 10-17 20-17s18 6 20 17z" fill="currentColor" />
      </svg>
      <span className="r-team-ph-label">Avatar placeholder</span>
    </div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  useReveal(ref, { full: 0.5 });
  return (
    <section ref={ref} className="r-team-sec" aria-labelledby="team-title">
      <div className="r-team-head">
        <h2 id="team-title" className="r-h2 r-h2-lg">{teamSection.heading}</h2>
        <p className="r-muted">{teamSection.text}</p>
      </div>
      <div className="r-team-stage">
        <div className="r-team-grid" aria-hidden="true">
          {Array.from({ length: 15 }, (_, i) => <span key={i} />)}
        </div>
        <ul className="r-team-list" role="list">
          {team.map(m => (
            <li key={m.id} className="r-team-member">
              <div className="r-team-tile"><Portrait member={m} /></div>
              <p className="r-team-name">{m.name}</p>
              <p className="r-team-role">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
