import React, { useEffect, useState } from 'react';
import { brand, project, nav } from '../config.js';

// Sticky header. The bottom border is always 1px (transparent at the top) so the height never changes.
export default function Header({ view = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`r-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="r-header-in">
        <div className="r-header-brand">
          <img className="r-logo" src={brand.logo} alt={brand.logoAlt} />
          <span className="r-header-label">{view === 'participant' ? 'Usability session' : project.workspaceLabel}</span>
        </div>
        {view === 'home'
          ? <nav className="r-nav" aria-label="Page sections">
              {nav.map(n => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
            </nav>
          : <nav className="r-nav" aria-label="Research site">
              {view !== 'participant' && <a href="#/f">All sessions</a>}
              <a href="#/">Research home</a>
            </nav>}
      </div>
    </header>
  );
}
