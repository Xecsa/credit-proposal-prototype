import { useEffect } from 'react';

// Scroll-linked motion for the research homepage only, driven by one passive, rAF-throttled listener
// (no library needed for two values):
//  - hero glow: a decorative layer that moves down up to 40px as the page scrolls, so it travels more slowly
//    than the heading and text, which scroll normally.
//  - video frame: starts at 92% scale and 20px lower (96% and 12px on small screens, set in CSS) and reaches
//    100% and 0 as the frame travels from the lower part of the viewport to the centre. Progress follows the
//    scroll position in both directions. Once playback starts (or the frame takes focus) it settles at full
//    size and is never transformed again on this visit.
// Positions are measured on the untransformed slot that holds the frame, so the transform never feeds back
// into its own measurement, and are re-read after fonts, images and video metadata load.
// Native scrolling is untouched. Without JS, or with reduced motion, nothing here runs and the layout is static.
export default function useScrollMotion(heroRef, slotRef, frameRef) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = heroRef.current;
    const slot = slotRef.current;
    const fig = frameRef.current;
    if (!hero || !slot || !fig) return;

    fig.classList.add('is-linked');
    let raf = 0;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y < hero.offsetHeight + vh) hero.style.setProperty('--glow-y', `${Math.min(40, y * 0.25).toFixed(1)}px`);
      if (fig.classList.contains('is-settled')) return;
      // Start: the slot's top at 90% of the viewport height, or the top of the page if it is already higher.
      // End: the slot's centre at the viewport centre (never closer than just below the sticky header).
      const r = slot.getBoundingClientRect();
      const top = r.top + y;
      const startY = Math.max(0, top - vh * 0.9);
      const endY = Math.max(startY + 1, Math.min(top + r.height / 2 - vh / 2, top - 96));
      const p = clamp((y - startY) / (endY - startY), 0, 1);
      fig.style.setProperty('--vp', p.toFixed(3));
      fig.classList.toggle('is-full', p >= 1);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const settle = () => { fig.classList.add('is-settled'); fig.style.setProperty('--vp', '1'); };
    const video = fig.querySelector('video');

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(onScroll).catch(() => {});
    if (video) video.addEventListener('loadedmetadata', onScroll);
    fig.addEventListener('focusin', settle);
    fig.addEventListener('play', settle, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      if (video) video.removeEventListener('loadedmetadata', onScroll);
      fig.removeEventListener('focusin', settle);
      fig.removeEventListener('play', settle, true);
    };
  }, [heroRef, slotRef, frameRef]);
}
