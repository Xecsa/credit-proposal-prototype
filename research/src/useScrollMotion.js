import { useEffect } from 'react';

// Scroll-linked motion for two places only, driven by one passive, rAF-throttled scroll listener:
//  - hero glow: a decorative layer that drifts down to 28px as the page scrolls (so it moves slower than content)
//  - video frame: scales 0.92 → 1 and rises 24px → 0 as it approaches the viewport centre
// Native scrolling is untouched. Without JS, or with reduced motion, nothing here runs and the layout is static.
export default function useScrollMotion(heroRef, videoRef) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = heroRef.current;
    const fig = videoRef.current;
    if (!hero || !fig) return;

    fig.classList.add('is-linked');
    let raf = 0;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      if (window.scrollY < hero.offsetHeight + vh) {
        hero.style.setProperty('--glow-y', `${Math.min(28, window.scrollY * 0.12).toFixed(1)}px`);
      }
      // Once playback has started (or the player has focus), the frame stays settled and untransformed.
      if (fig.classList.contains('is-settled')) return;
      const r = fig.getBoundingClientRect();
      const start = vh;                          // frame top touches the bottom of the viewport
      const end = vh / 2 - r.height / 2;         // frame centred in the viewport
      const p = clamp((start - r.top) / Math.max(1, start - end), 0, 1);
      fig.style.setProperty('--vp', p.toFixed(3));
      fig.classList.toggle('is-full', p >= 1);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const settle = () => { fig.classList.add('is-settled'); fig.style.setProperty('--vp', '1'); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    fig.addEventListener('focusin', settle);
    fig.addEventListener('play', settle, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      fig.removeEventListener('focusin', settle);
      fig.removeEventListener('play', settle, true);
    };
  }, [heroRef, videoRef]);
}
