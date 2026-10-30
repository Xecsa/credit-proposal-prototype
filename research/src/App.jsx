import React, { useRef, useState } from 'react';
import { brand, welcome, participants, sessionsSection } from './config.js';
import useReveal from './useReveal.js';
import useScrollMotion from './useScrollMotion.js';
import Header from './components/Header.jsx';
import WelcomeVideo from './components/WelcomeVideo.jsx';
import ParticipantCard from './components/ParticipantCard.jsx';
import SessionPreviewDialog from './components/SessionPreviewDialog.jsx';
import Footer from './components/Footer.jsx';
import ParticipantSession from './components/ParticipantSession.jsx';
import FacilitatorView, { FacilitatorOverview } from './components/FacilitatorView.jsx';
import useRoute from './useRoute.js';
import { useStatuses } from './store.js';

export default function App() {
  const route = useRoute();
  return (
    <div className="r-page" style={brand.tokens}>
      <a className="r-skip" href="#main">Skip to content</a>
      <Header view={route.view} />
      {route.view === 'home' && <Home />}
      {route.view === 'participant' && <ParticipantSession id={route.id} />}
      {route.view === 'facilitator' && <FacilitatorView id={route.id} />}
      {route.view === 'overview' && <FacilitatorOverview />}
      <Footer />
    </div>
  );
}

// Research homepage. Scroll-linked and entrance motion are set up here only and cleaned up when leaving.
function Home() {
  // Only the id of the previewed participant is held. Opening a preview never changes a status.
  const [previewId, setPreviewId] = useState(null);
  const triggerRef = useRef(null);
  const selected = participants.find(p => p.id === previewId) || null;
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const videoRef = useRef(null);
  const videoSlotRef = useRef(null);
  const sessionsHeadRef = useRef(null);
  const bentoRef = useRef(null);
  useReveal(heroTextRef, { immediate: true });
  useReveal(sessionsHeadRef);
  useReveal(bentoRef);
  useScrollMotion(heroRef, videoSlotRef, videoRef);

  const openPreview = (id, button) => { triggerRef.current = button; setPreviewId(id); };
  const closePreview = () => {
    setPreviewId(null);
    if (triggerRef.current) triggerRef.current.focus();
  };

  const statuses = useStatuses(participants.map(p => p.id));

  return (
    <>
      <main id="main">
        {/* ENBD identity → introduction → video → participant sessions */}
        <section ref={heroRef} id="overview" className="r-hero" aria-labelledby="welcome-title">
          {/* Decorative layers: navy base, royal-blue glow (scroll parallax), fine texture. Text sits above them. */}
          <div className="r-hero-layers" aria-hidden="true">
            <div className="r-hero-base" />
            <div className="r-hero-glow" />
            <div className="r-hero-texture" />
          </div>
          <div className="r-hero-in">
            <div ref={heroTextRef} className="r-hero-text">
              <h1 id="welcome-title" className="r-display">{welcome.title}</h1>
              <p className="r-lead">
                {welcome.intro.map((line, i) => <span key={i} className="r-lead-line">{line}</span>)}
              </p>
            </div>
            {/* The slot keeps the video's final layout space; only the frame inside it is transformed. */}
            <div id="video" ref={videoSlotRef} className="r-video-slot">
              <WelcomeVideo figRef={videoRef} />
            </div>
          </div>
        </section>

        {/* Pale blue band; the hero fades into the same colour. Centred intro above the cards, which share the
            header's content width. */}
        <section id="sessions" className="r-sessions-band" aria-labelledby="participants-title">
          <div className="r-sessions">
            <div ref={sessionsHeadRef} className="r-sessions-head r-reveal">
              <h2 id="participants-title" className="r-h2 r-h2-lg">{sessionsSection.heading}</h2>
              <p className="r-muted">{sessionsSection.text}</p>
            </div>
            <ul ref={bentoRef} className="r-bento r-stagger" role="list">
              {participants.map(p => (
                <li key={p.id} className={`is-${p.size || 'narrow'}`}>
                  <ParticipantCard participant={{ ...p, status: statuses[p.id] }} onOpen={openPreview} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SessionPreviewDialog participant={selected} status={selected ? statuses[selected.id] : null} onClose={closePreview} />
    </>
  );
}
