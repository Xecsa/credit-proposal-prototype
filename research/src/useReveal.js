import { useEffect } from 'react';

// One-time scroll reveal. Sets --reveal (0 → 1) on the element as it enters the viewport and
// never goes backwards. Does nothing when reduced motion is preferred or IntersectionObserver
// is missing, so content is always visible without it.
export default function useReveal(ref, { full = 0.6 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('is-animated');
    const steps = Array.from({ length: 21 }, (_, i) => i / 20);
    const io = new IntersectionObserver(([entry]) => {
      const p = Math.min(1, entry.intersectionRatio / full);
      const prev = parseFloat(el.style.getPropertyValue('--reveal') || '0');
      if (p > prev) el.style.setProperty('--reveal', p.toFixed(3));
      if (p >= 1) io.disconnect();
    }, { threshold: steps });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, full]);
}
