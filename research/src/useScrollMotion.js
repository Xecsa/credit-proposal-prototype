import { useEffect } from 'react';

// Scroll-linked motion for the research homepage only, driven by one passive, rAF-throttled listener
// (no library needed for two values):
//  - hero glow: a decorative layer that moves down up to 40px as the page scrolls, so it trails the content
//  - video frame: scales 0.88 → 1 and rises 32px → 0 from the first scroll position where it is in view until its
//    top sits just below the sticky header. It is untransformed once full, focused or playing.
// Positions are read live on every frame, and recalculated after fonts, images and video metadata load.
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
        hero.style.setProperty('--glow-y', `${Math.min(40, window.scrollY * 0.3).toFixed(1)}px`);
      }
      if (fig.classList.contains('is-settled')) return;
      // Progress runs from the first scroll position where the frame is in view (the top of the page, if it is
      // visible on load) to the point where its top sits just below the sticky header.
      const pageTop = fig.getBoundingClientRect().top + window.scrollY;
      const startY = Math.max(0, pageTop - vh);
      const endY = Math.max(startY + 1, pageTop - 96);
      const p = clamp((window.scrollY - startY) / (endY - startY), 0, 1);
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
  }, [heroRef, videoRef]);
}
