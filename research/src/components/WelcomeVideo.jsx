import React, { useState } from 'react';
import { video } from '../config.js';

// Optional playback: no autoplay, no loop. Watching it is not required and is not consent.
export default function WelcomeVideo() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="r-video">
      <div className="r-video-frame">
        {failed ? (
          <div className="r-video-fallback" role="status">
            <p className="r-video-fallback-title">The video can’t be played here.</p>
            <p className="r-muted">You can carry on without it. Nothing on this page depends on watching it.</p>
          </div>
        ) : (
          <video
            controls
            preload="metadata"
            playsInline
            poster={video.poster}
            aria-label={`${video.title}, ${video.duration}`}
            onError={() => setFailed(true)}
          >
            <source src={video.src} type="video/mp4" onError={() => setFailed(true)} />
          </video>
        )}
      </div>
      <figcaption className="r-video-cap">
        <span className="r-video-title">{video.title}</span>
        <span className="r-muted"> · {video.duration} · optional</span>
      </figcaption>
      {video.facilitatorNote && (
        <p className="r-callout">
          <span className="r-callout-label">Facilitator note</span>
          {video.facilitatorNote}
        </p>
      )}
    </figure>
  );
}
