import React, { useRef, useState } from 'react';
import { video } from '../config.js';
import useReveal from '../useReveal.js';

// Optional playback: no autoplay, no loop, never driven by scroll. Watching it is not required and is not consent.
// Only the outer <figure> moves on entrance (16px lift, once). The frame and <video> are never transformed or
// filtered, so playback renders at its final size. The frame reserves the source's aspect ratio before loading.
export default function WelcomeVideo() {
  const [failed, setFailed] = useState(false);
  const [started, setStarted] = useState(false);
  const figRef = useRef(null);
  const videoRef = useRef(null);

  useReveal(figRef);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    const r = v.play();
    if (r && r.catch) r.catch(() => {});
    v.focus();
  };

  return (
    <figure ref={figRef} className="r-video">
      <div className="r-video-frame" style={{ aspectRatio: `${video.width} / ${video.height}` }}>
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
              width={video.width}
              height={video.height}
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
