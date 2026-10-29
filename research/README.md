# Research workspace

A separate page for the Credit Proposal usability study (RMs and ARMs, 30-minute moderated sessions).
It lives in `research/` and is built as a second page next to the prototype, so the prototype in `src/` is untouched.

- Local: `npm run dev`, then open `/research/`
- Built: `dist/research/index.html`, served at `<site>/research/`

## What the site does

- **Home** (`#/`): welcome, walkthrough video, project team and the four participant cards. Each card shows the
  real status of that session (Not started, In progress, Completed) and opens a preview with
  "Start session" and "Facilitator view".
- **Participant space** (`#/s/<id>`, e.g. `#/s/rm-01`): welcome and consent (participation and note-taking, separate
  optional recording, name, drawn or typed-name signature), brief role questions, the assigned journeys one scenario
  at a time with an Open prototype button, a 1 to 7 ease rating with two short comments after each task, then the
  closing question and a thank-you. Task text is goal-based only. No clicks, model answers or observation checklist appear here.
- **Facilitator view** (`#/f/<id>`): intro script, consent status, materials, live participant answers, a session clock
  with the agenda, neutral prompts, and for every task: Outcome, Observation, Quote, Screen or step, Assistance,
  Impact, Classification, Follow-up, plus the questions to ask and what to observe. Export JSON or CSV, or reset the session.
- **All sessions** (`#/f`): links to every session, export all, and the before-the-first-session checklist.

The session script (agenda, consent wording, role questions, journeys, prompts, closing question) is in `src/script.js`.

### Prototype starting states

The prototype accepts an opt-in `?start=` parameter (in `src/logic.js`). Without it nothing changes.
- `?start=arm`: the application as an ARM receives it (Client and Documents submitted, Financial Analysis ready to start, an RM comment).
- `?start=rm-review`: the application back with the RM after the ARM's analysis (Financial Analysis submitted, ARM comment).
RM tasks 1 to 3 use the normal start. The walkthrough video should only be shown after the tasks.

### Where data is kept

Everything is saved in this browser's localStorage under `cp-research:v1:<id>` and nothing is sent anywhere.
Open the participant screen and the facilitator view in two tabs or windows of the same browser and the facilitator
view updates live. Export after each session. The signature image is left out of exports (only "drawn" or "typed" is kept).
Browser storage is per device and not secure shared storage, and participant codes are labels, not access control,
so a shared, access-controlled store is needed before any real participant data is kept beyond the session laptop.

## Configuration

Everything editable is in `src/config.js`: brand tokens and logo, project labels, prototype URL,
version and research date (footer shows them only when set), session length, welcome copy, video path,
participant codes and roles, session stages, journey areas and team names.

Brand values are labelled by source in `config.js`:
- **corporate-ui**: read from the lib : corporate-ui Figma variables (font, primary #182F7C, text colours, 8px radius, 16px spacing).
- **project**: reused from the approved prototype (the Emirates NBD logo SVG in `src/assets`, borders, canvas, focus ring).
- Nothing else is presented as an official token.

Media lives in `public/research/media/`. The video is the supplied file, served unchanged (see Walkthrough video below).
It walks through the journey click by click with an earlier sample client, so the page tells the facilitator to show it after the tasks or as onboarding.

## Assets added in the participant-section refinement

- `public/research/media/illustrations/`: four ENBD light/default illustrations from the ADS illustrations Figma library
  (Document, Docs-Calculator, Docs-Gear, Phone-Chat). They are 1x renders (about 200px) exported through Figma's
  screenshot service, because the asset download host was blocked from this environment. Re-export them at 2x from
  Figma for sharper display on high-density screens.
- Hero gradient: recreated by sampling the "ENBD Gradient Header" in the Egypt EBM IPP Accounts screen. Values in
  `config.js` (`--r-hero-*`) are approximations, not design-system tokens.

### Team portraits and companions

`public/research/media/team/` holds circular-crop portraits made from the photos supplied for Viploave and Saba,
an illustrated stand-in for Prashanti (marked `avatarIsPlaceholder` in `config.js`, which also sets its alt text),
and three decorative 3D companion shapes generated with Figma AI in ENBD blues. Masters are in the project files
under `research-home-assets/`. To replace a portrait, drop in a square image (320 px or larger) and update `avatar`.

### Session illustrations

ADS metallic illustrations (ENBD, light, type=metallic: Document-Declaration, Docs-Calculator, Document-Search,
Phone-Chat) exported at 3x. The metallic Docs-Gear variant is empty in the library, so Document-Search stands in.
Each is from the library as their own two layers, the object and
its shadow, so the hover can move them at slightly different rates without altering the artwork.

### Walkthrough video

`credit-proposal-walkthrough.mp4` is the uploaded file served unchanged (1280 × 720, H.264, about 2.6 Mbit/s,
89.6 MB). An earlier version re-encoded it to about 0.33 Mbit/s, which softened text in moving frames. The
poster is a frame taken from this original. The source itself is a 720p, WhatsApp-compressed recording, so
the player is capped at 960 px wide; a sharper result needs a new 1080p (or larger) screen recording.

### Motion

No animation library is installed, and two scroll-linked values do not need one, so the page uses a single
passive, rAF-throttled listener (`useScrollMotion.js`) rather than adding GSAP:
- hero glow: decorative layer, moves up to 40px as the page scrolls (trails the content)
- video frame: scales 0.88 → 1 and rises 32px → 0 from the first scroll position where it is in view until its
  top sits below the sticky header; untransformed once full, focused or playing (no scrubbing, manual playback)
Positions are read live each frame and recalculated after fonts, images and video metadata load.
One-time entrances (`useReveal.js`): team clusters assemble and the connector lines draw once; session cards rise
12px in reading order. Sticky participant intro: CSS `position: sticky` at ≥1180px wide and ≥720px tall.
Hover motion only on fine pointers. Content is visible unless JS arms it; focus reveals instantly;
`prefers-reduced-motion` gives a static page. Only the research homepage uses any of this.
