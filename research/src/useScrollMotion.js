import { useEffect } from 'react';

// Scroll-linked motion for the research homepage only, driven by one passive, rAF-throttled listener.
// Every value is a pure function of the scroll position, so slow, fast and reverse scrolling all land in the
// same state and nothing can be left half-hidden behind a missed event.
//
//  - Hero layers: the glow drifts down up to 40px and the texture up to 16px, so both travel more slowly than
//    the heading and text, which scroll normally. The navy base does not move.
//  - Video frame: from 94% scale and 30px lower to 100% and 0 while its slot travels from 90% of the viewport
//    height to the centre. Playback (or focus) settles it at full size for the rest of the visit.
//  - [data-reveal] wrappers: each gets --p from 0 to 1 over a defined range of its top edge in the viewport
//    (see RANGES). The wrapper itself is never transformed, so measurements are stable; CSS moves its children.
//    Cards later in the same row start slightly later, so they overlap in reading order.
//    Cards also get --q (0 entering at the bottom, 1 leaving at the top) for the slower illustration depth.
//
// Content is visible by default (CSS falls back to --p: 1). Values are only applied once this has run, focus
// inside a wrapper shows it fully, and the bottom of the page shows everything. Without JS, or with reduced
// motion, nothing here runs and the layout is static.
const RANGES = {            // top edge position as a fraction of viewport height: [start, end]
  heading: [0.96, 0.72],
  text: [0.92, 0.66],
  card: [1.0, 0.74]
};
const ROW_STAGGER = 0.07;  // extra viewport fraction for each earlier card in the same row

export default function useScrollMotion(rootRef, heroRef, slotRef, frameRef) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = rootRef.current;
    const hero = heroRef.current;
    const slot = slotRef.current;
    const fig = frameRef.current;
    if (!root || !hero || !slot || !fig) return;

    const items = [...root.querySelectorAll('[data-reveal]')];
    const shown = new WeakSet();
    let raf = 0;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const atBottom = vh + y >= document.documentElement.scrollHeight - 2;

      if (y < hero.offsetHeight + vh) {
        hero.style.setProperty('--glow-y', `${Math.min(40, y * 0.25).toFixed(1)}px`);
        hero.style.setProperty('--tex-y', `${Math.min(16, y * 0.08).toFixed(1)}px`);
      }

      if (!fig.classList.contains('is-settled')) {
        const r = slot.getBoundingClientRect();
        const top = r.top + y;
        const startY = Math.max(0, top - vh * 0.9);
        const endY = Math.max(startY + 1, Math.min(top + r.height / 2 - vh / 2, top - 96));
        const p = clamp((y - startY) / (endY - startY));
        fig.style.setProperty('--vp', p.toFixed(3));
        fig.classList.toggle('is-full', p >= 1);
      }

      const rowCount = {};
      for (const el of items) {
        const r = el.getBoundingClientRect();
        const kind = el.dataset.reveal;
        const [start, end] = RANGES[kind] || RANGES.text;
        let shift = 0;
        if (kind === 'card') {
          const row = Math.round(r.top);
          shift = (rowCount[row] || 0) * ROW_STAGGER;
          rowCount[row] = (rowCount[row] || 0) + 1;
          el.style.setProperty('--q', clamp((vh - r.top) / (vh + r.height)).toFixed(3));
        }
        const p = atBottom || shown.has(el) ? 1 : clamp((vh * (start - shift) - r.top) / (vh * (start - end)));
        el.style.setProperty('--p', p.toFixed(3));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const settle = () => { fig.classList.add('is-settled'); fig.style.setProperty('--vp', '1'); };
    // Keyboard focus never lands on something faded or offset.
    const onFocus = e => { const el = e.target.closest && e.target.closest('[data-reveal]'); if (el) { shown.add(el); onScroll(); } };
    const video = fig.querySelector('video');

    fig.classList.add('is-linked');
    root.classList.add('is-scroll-linked');
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(onScroll).catch(() => {});
    if (video) video.addEventListener('loadedmetadata', onScroll);
    fig.addEventListener('focusin', settle);
    fig.addEventListener('play', settle, true);
    root.addEventListener('focusin', onFocus);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      if (video) video.removeEventListener('loadedmetadata', onScroll);
      fig.removeEventListener('focusin', settle);
      fig.removeEventListener('play', settle, true);
      root.removeEventListener('focusin', onFocus);
      root.classList.remove('is-scroll-linked');
    };
  }, [rootRef, heroRef, slotRef, frameRef]);
}
