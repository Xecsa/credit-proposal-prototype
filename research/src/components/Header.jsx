import React, { useEffect, useState } from 'react';
import { brand, project, nav } from '../config.js';

// Sticky header. Height, logo and nav positions never change: after ~50px of scroll only the background
// turns solid and the bottom border appears (200ms). On the homepage the link for the section under the
// header is marked as current with an underline that takes no layout space.
// One passive, rAF-throttled listener handles both.
export default function Header({ view = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(nav[0].id);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 50);
      if (view !== 'home') return;
      // The current section is the last one whose top has passed just below the header.
      // At the very bottom of the page the last section wins, even if it is short.
      const line = 120;
      let current = nav[0].id;
      for (const n of nav) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= line) current = n.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = nav[nav.length - 1].id;
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [view]);

  return (
    <header className={`r-header${scrolled ? ' is-scrolled' : ''}${view === 'overview' ? ' is-wide' : ''}`}>
      <div className="r-header-in">
        <div className="r-header-brand">
          <img className="r-logo" src={brand.logo} alt={brand.logoAlt} />
          <span className="r-header-label">{view === 'participant' ? 'Usability session' : project.workspaceLabel}</span>
        </div>
        {view === 'home'
          ? <nav className="r-nav" aria-label="Page sections">
              {nav.map(n => <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : undefined} aria-current={active === n.id ? 'location' : undefined}>{n.label}</a>)}
            </nav>
          : <nav className="r-nav" aria-label="Research site">
              {view === 'facilitator' && <a href="#/f">All sessions</a>}
              <a href="#/">Research home</a>
            </nav>}
      </div>
    </header>
  );
}
