# Research workspace

A separate page for the Credit Proposal usability study (RMs and ARMs, 30-minute moderated sessions).
It lives in `research/` and is built as a second page next to the prototype, so the prototype in `src/` is untouched.

- Local: `npm run dev`, then open `/research/`
- Built: `dist/research/index.html`, served at `<site>/research/`

## What the site does

- **Home** (`#/`): welcome, walkthrough video and the four participant cards. Each card shows the
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
participant codes and roles, session stages and journey areas.

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

Homepage only (Hero → Video → Sessions). Participant, consent and facilitator screens have no motion.
- Header (`Header.jsx`): sticky, fixed 64px height; after ~50px of scroll the background turns solid with a subtle
  border (200ms). Overview / Video / Sessions links underline the section under the header without shifting.
  Anchors land below the header via `scroll-padding-top`.
- Scroll-linked (`useScrollMotion.js`, one passive rAF-throttled listener):
  - hero glow layer moves down up to 40px, so it travels more slowly than the text; the navy base and texture are
    separate static layers and the base fades into the sessions band colour
  - video frame goes from 92% scale and 20px lower to 100% and 0 as it travels from the lower viewport to the
    centre, both ways with the scroll. The `#video` slot keeps the final layout space; only the figure moves.
    Pressing play (or focusing the video) settles it at full size for the rest of the visit. No autoplay,
    no scrubbing, no pinning.
- One-time entrances (`useReveal.js`): the sessions intro fades up 12px; the four cards rise 18px with a ±0.4°
  tilt settling to 0, 450ms each, 60ms apart in reading order. They stay visible on scroll back.
- Cards: the list item carries the entrance, the card background the 4px hover lift and glow, the illustration its
  own 7px lift and 1.03 scale, and the arrow moves 3px, all 280ms. Text and button never move. Keyboard focus gets
  an equivalent border emphasis. Hover only on fine pointers.
- Small screens: smaller video change (96%, 12px), no glow parallax, no card tilt.
- Content is visible unless JS arms it; focus reveals instantly; `prefers-reduced-motion` gives a static page.
