import { useEffect } from 'react';

// Homepage motion, set up and cleaned up by the Home view only. One passive, rAF-throttled scroll listener
// drives everything that follows the scroll position; one IntersectionObserver plays the card entrances.
//
//  - Hero layers: the glow travels down 56px and the texture 20px across the hero's whole scroll range
//    (hero top at the viewport top → hero bottom at the viewport top), so they keep moving relative to the
//    heading and video the entire time the hero is on screen. The navy base does not move.
//  - Video frame: from 94% scale and 30px lower to 100% and 0 while its slot travels from 90% of the viewport
//    height to the centre. Playback (or focus) settles it at full size for the rest of the visit.
//  - [data-reveal] text: --p goes 0 → 1 as the wrapper's top edge moves through RANGES (fractions of the viewport
//    height). It follows the scroll both ways until it first reaches 1, then stays revealed for the visit.
//  - [data-card] items: play a one-off entrance (CSS, 550ms) when 15% of the card is visible, 80ms apart for
//    cards entering together. They also get --q (0 entering at the bottom, 1 leaving at the top) for the slow
//    illustration drift.
// Wrappers are measured but never moved; their children carry the motion. Focus inside a wrapper, or arriving
// at a section through an anchor, reveals it at once. Content is visible by default: the hidden start states
// only apply once this has run. With reduced motion nothing here runs and the page is static.
const RANGES = {
  heading: [0.90, 0.65],
  text: [0.86, 0.60]
};

export default function useScrollMotion(rootRef, heroRef, slotRef, frameRef) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = rootRef.current;
    const hero = heroRef.current;
    const slot = slotRef.current;
    const fig = frameRef.current;
    if (!root || !hero || !slot || !fig) return;

    const texts = [...root.querySelectorAll('[data-reveal]')];
    const cards = [...root.querySelectorAll('[data-card]')];
    const done = new WeakSet();
    let raf = 0;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const atBottom = vh + y >= document.documentElement.scrollHeight - 2;

      const hr = hero.getBoundingClientRect();
      if (hr.bottom > 0) {
        const hp = clamp(-hr.top / hr.height);
        hero.style.setProperty('--glow-y', `${(hp * 56).toFixed(1)}px`);
        hero.style.setProperty('--tex-y', `${(hp * 20).toFixed(1)}px`);
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

      for (const el of texts) {
        if (done.has(el)) continue;
        const [start, end] = RANGES[el.dataset.reveal] || RANGES.text;
        const p = atBottom ? 1 : clamp((vh * start - el.getBoundingClientRect().top) / (vh * (start - end)));
        el.style.setProperty('--p', p.toFixed(3));
        if (p >= 1) done.add(el);
      }

      for (const el of cards) {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--q', clamp((vh - r.top) / (vh + r.height)).toFixed(3));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    // Card entrances: once each, 80ms apart in reading order for cards that cross the 15% line together.
    const showCard = (el, instant) => {
      if (el.classList.contains('is-in')) return;
      if (instant) el.classList.add('is-instant');
      el.classList.add('is-in');
      io && io.unobserve(el);
    };
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(entries => {
        entries.filter(e => e.isIntersecting)
          .map(e => e.target)
          .sort((a, b) => cards.indexOf(a) - cards.indexOf(b))
          .forEach((el, i) => { el.style.setProperty('--d', `${i * 80}ms`); showCard(el, false); });
      }, { threshold: 0.15 });
      cards.forEach(el => { el.classList.add('is-armed'); io.observe(el); });
    }

    // Reveal everything in a section at once: used for keyboard focus and anchor arrivals.
    const revealWithin = scope => {
      scope.querySelectorAll('[data-reveal]').forEach(el => { done.add(el); el.style.setProperty('--p', '1'); });
      scope.querySelectorAll('[data-card]').forEach(el => showCard(el, true));
      if (scope.matches && scope.matches('[data-reveal]')) { done.add(scope); scope.style.setProperty('--p', '1'); }
      if (scope.matches && scope.matches('[data-card]')) showCard(scope, true);
    };
    const onFocus = e => {
      const el = e.target.closest && e.target.closest('[data-reveal],[data-card]');
      if (el) revealWithin(el);
    };
    const onHash = initial => {
      const id = decodeURIComponent((window.location.hash || '').slice(1));
      const target = id && !id.startsWith('/') ? document.getElementById(id) : null;
      if (!target || !root.contains(target)) return;
      revealWithin(target);
      // On a fresh load the page renders after the browser looked for the anchor, so land on it here.
      if (initial === true) target.scrollIntoView();
    };

    const settle = () => { fig.classList.add('is-settled'); fig.style.setProperty('--vp', '1'); };
    const video = fig.querySelector('video');

    fig.classList.add('is-linked');
    root.classList.add('is-scroll-linked');
    onHash(true);
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    window.addEventListener('hashchange', onHash);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(onScroll).catch(() => {});
    if (video) video.addEventListener('loadedmetadata', onScroll);
    fig.addEventListener('focusin', settle);
    fig.addEventListener('play', settle, true);
    root.addEventListener('focusin', onFocus);
    return () => {
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      window.removeEventListener('hashchange', onHash);
      if (video) video.removeEventListener('loadedmetadata', onScroll);
      fig.removeEventListener('focusin', settle);
      fig.removeEventListener('play', settle, true);
      root.removeEventListener('focusin', onFocus);
      root.classList.remove('is-scroll-linked');
      cards.forEach(el => el.classList.remove('is-armed', 'is-in', 'is-instant'));
    };
  }, [rootRef, heroRef, slotRef, frameRef]);
}
