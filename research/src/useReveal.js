import { useEffect } from 'react';

// One-time entrance. Content is visible by default: the hidden start state (.is-armed) is only
// added once the observer is set up, and .is-in is added when ~12% of the element is on screen
// (or a screen's worth of a tall element), on focus, or straight away with `immediate`.
// Nothing hides again on scroll back. Reduced motion or no IntersectionObserver: no-op.
export default function useReveal(ref, { immediate = false } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let io;
    const show = () => {
      el.classList.add('is-in');
      if (io) io.disconnect();
      el.removeEventListener('focusin', showNow);
    };
    // Keyboard focus reveals at once, without a transition, so the focused control is never faded.
    const showNow = () => { el.classList.add('is-instant'); show(); };
    el.classList.add('is-armed');
    el.addEventListener('focusin', showNow);

    if (immediate) {
      // Two frames so the armed state is painted before it transitions.
      const raf = requestAnimationFrame(() => requestAnimationFrame(show));
      return () => { cancelAnimationFrame(raf); el.removeEventListener('focusin', showNow); };
    }

    io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const tall = entry.intersectionRect.height >= window.innerHeight * 0.25;
      if (entry.intersectionRatio >= 0.12 || tall) show();
    }, { threshold: [0, 0.06, 0.12, 0.2] });
    io.observe(el);
    return () => { io.disconnect(); el.removeEventListener('focusin', showNow); };
  }, [ref, immediate]);
}
