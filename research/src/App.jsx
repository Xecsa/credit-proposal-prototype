import React, { useRef, useState } from 'react';
import { brand, welcome, participants, sessionsSection } from './config.js';
import useReveal from './useReveal.js';
import Header from './components/Header.jsx';
import WelcomeVideo from './components/WelcomeVideo.jsx';
import ParticipantCard from './components/ParticipantCard.jsx';
import SessionPreviewDialog from './components/SessionPreviewDialog.jsx';
import TeamSection from './components/TeamSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Only the id of the previewed participant is held. Opening a preview never changes a status.
  const [previewId, setPreviewId] = useState(null);
  const triggerRef = useRef(null);
  const selected = participants.find(p => p.id === previewId) || null;
  const sessionsRef = useRef(null);
  useReveal(sessionsRef, { full: 0.25 });

  const openPreview = (id, button) => { triggerRef.current = button; setPreviewId(id); };
  const closePreview = () => {
    setPreviewId(null);
    if (triggerRef.current) triggerRef.current.focus();
  };

  return (
    <div className="r-page" style={brand.tokens}>
      <a className="r-skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        {/* ENBD identity → introduction → video → project team → participant sessions */}
        <section className="r-hero" aria-labelledby="welcome-title">
          <div className="r-hero-in">
            <h1 id="welcome-title" className="r-display">{welcome.title}</h1>
            <p className="r-lead">
              {welcome.intro.map((line, i) => <span key={i} className="r-lead-line">{line}</span>)}
            </p>
            <WelcomeVideo />
          </div>
        </section>

        <div className="r-main">
          <TeamSection />

          <section ref={sessionsRef} className="r-sessions" aria-labelledby="participants-title">
            <div className="r-sessions-head">
              <h2 id="participants-title" className="r-h2 r-h2-lg">{sessionsSection.heading}</h2>
              <p className="r-muted">{sessionsSection.text}</p>
            </div>
            <ul className="r-bento" role="list">
              {participants.map(p => (
                <li key={p.id}>
                  <ParticipantCard participant={p} onOpen={openPreview} />
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>
      <Footer />
      <SessionPreviewDialog participant={selected} onClose={closePreview} />
    </div>
  );
}
