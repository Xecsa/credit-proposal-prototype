import React, { useEffect, useRef, useState } from 'react';
import { video } from '../config.js';

// Optional playback: no autoplay, no loop, never driven by scroll. Watching it is not required and is not consent.
// Scrolling only fades the frame in and lifts it (24px, 94% → 100%). Reduced motion turns that off in CSS and here.
export default function WelcomeVideo() {
  const [failed, setFailed] = useState(false);
  const [started, setStarted] = useState(false);
  const frameRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('is-animated');
    const steps = Array.from({ length: 21 }, (_, i) => i / 20);
    const io = new IntersectionObserver(([entry]) => {
      // Fully revealed once 60% of the frame is visible; never goes backwards.
      const p = Math.min(1, entry.intersectionRatio / 0.6);
      const prev = parseFloat(el.style.getPropertyValue('--reveal') || '0');
      if (p > prev) el.style.setProperty('--reveal', p.toFixed(3));
      if (p >= 1) io.disconnect();
    }, { threshold: steps });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    const r = v.play();
    if (r && r.catch) r.catch(() => {});
    v.focus();
  };

  return (
    <figure className="r-video">
      <div ref={frameRef} className="r-video-frame">
        {failed ? (
          <div className="r-video-fallback" role="status">
            <p className="r-video-fallback-title">The video can’t be played here.</p>
            <p className="r-muted">You can carry on without it.</p>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              controls={started}
              preload="metadata"
              playsInline
              poster={video.poster}
              tabIndex={started ? 0 : -1}
              aria-label={`${video.title}, ${video.duration}`}
              onError={() => setFailed(true)}
            >
              <source src={video.src} type="video/mp4" onError={() => setFailed(true)} />
            </video>
            {!started && (
              <button type="button" className="r-play" onClick={play}>
                <span className="r-play-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 1.5v11l9-5.5z" fill="currentColor" /></svg>
                </span>
                {video.playLabel}
                <span className="r-play-dur">{video.duration}</span>
              </button>
            )}
          </>
        )}
      </div>
      {video.facilitatorNote && <figcaption className="r-video-cap">{video.facilitatorNote}</figcaption>}
    </figure>
  );
}
