import React, { useRef, useState } from 'react';
import { brand, project, welcome, participants, sessionStages, sessionNote } from './config.js';
import Header from './components/Header.jsx';
import WelcomeVideo from './components/WelcomeVideo.jsx';
import ParticipantCard from './components/ParticipantCard.jsx';
import SessionPreviewDialog from './components/SessionPreviewDialog.jsx';
import SessionStages from './components/SessionStages.jsx';
import ProjectTeam from './components/ProjectTeam.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Only the id of the previewed participant is held. Opening a preview never changes a status.
  const [previewId, setPreviewId] = useState(null);
  const triggerRef = useRef(null);
  const selected = participants.find(p => p.id === previewId) || null;

  const openPreview = (id, button) => { triggerRef.current = button; setPreviewId(id); };
  const closePreview = () => {
    setPreviewId(null);
    if (triggerRef.current) triggerRef.current.focus();
  };

  return (
    <div className="r-page" style={brand.tokens}>
      <a className="r-skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="r-main">
        <section className="r-hero" aria-labelledby="welcome-title">
          <div className="r-hero-copy">
            <p className="r-eyebrow">{project.name} · {project.label}</p>
            <h1 id="welcome-title" className="r-display">{welcome.headline}</h1>
            <p className="r-lead">{welcome.body}</p>
            <p className="r-reassure">{welcome.reassurance}</p>
          </div>
          <WelcomeVideo />
        </section>

        <section className="r-section" aria-labelledby="participants-title">
          <div className="r-section-head">
            <h2 id="participants-title" className="r-h2">Participants</h2>
            <p className="r-muted">Choose a participant to preview their session.</p>
          </div>
          <ul className="r-bento" role="list">
            {participants.map(p => (
              <li key={p.id}>
                <ParticipantCard participant={p} onOpen={openPreview} />
              </li>
            ))}
          </ul>
        </section>

        <section className="r-section r-split" aria-labelledby="overview-title">
          <div>
            <h2 id="overview-title" className="r-h2">Session overview</h2>
            <SessionStages stages={sessionStages} />
            <p className="r-note">{sessionNote}</p>
          </div>
          <ProjectTeam />
        </section>
      </main>
      <Footer />
      <SessionPreviewDialog participant={selected} onClose={closePreview} />
    </div>
  );
}
