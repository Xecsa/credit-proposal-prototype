# Research workspace

A separate page for the Credit Proposal usability study (RMs and ARMs, 30-minute moderated sessions).
It lives in `research/` and is built as a second page next to the prototype, so the prototype in `src/` is untouched.

- Local: `npm run dev`, then open `/research/`
- Built: `dist/research/index.html`, served at `<site>/research/`

## What the site does

- **Home** (`#/`): welcome, walkthrough video and the four participant cards. Each card shows the
  real status of that session (Not started, In progress, Completed) and opens a session modal: what to expect,
  the role's three journeys, a reassurance line and a storage notice, with "Continue to welcome" (or "Resume session").
  "Open facilitator view" and the facilitator notes appear only in a browser tab where a facilitator page has been
  opened (a convenience flag in sessionStorage, not access control).
- **Participant space** (`#/s/<id>`, e.g. `#/s/rm-01`): welcome and consent (participation and note-taking, separate
  optional recording, name, drawn or typed-name signature), brief role questions with an optional note ("Anything you’d like us to know?", asked only after consent), the assigned journeys one scenario
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

### Layout

One content container (`--content: 1136px` plus `--gutter`, 32px or 16px on small screens) is shared by the header,
hero, video, sessions grid and footer, so the grid's edges line up with the logo and the navigation group.
Full-width backgrounds sit on the outer elements. The four participant cards are equal (two by two, one column on
small screens) with the same surface, padding, 28px corners and lower-right illustration, clipped inside the card.

### Motion

Homepage only (Hero → Video → Sessions). Participant, consent and facilitator screens have no motion.
- Header (`Header.jsx`): sticky and opaque, fixed height. A compact rounded group holds Overview, Video and Sessions;
  the section under the header is the highlighted item. After ~50px a subtle border and shadow appear (200ms).
  Anchors land below the header via `scroll-padding-top`.
- Hero text (`useReveal.js`, on load): the heading rises 40px through an overflow-hidden mask, then the introduction
  follows (20px and a fade). It plays on load rather than on scroll so the first screen explains the project.
- `useScrollMotion.js` (one passive rAF-throttled scroll listener plus one IntersectionObserver):
  - hero layers: across the hero's whole scroll range the glow travels 56px and the texture 20px, so they keep
    moving relative to the heading and video; the navy base is static
  - video frame: 94% scale and 30px lower to 100% and 0 as its slot travels from 90% of the viewport to the centre.
    Pressing play (or focusing it) settles it for the rest of the visit. No autoplay, scrubbing or pinning.
  - text (`[data-reveal]`): "Your session starts here." rises 40px through a mask and fades in as its top moves from
    90% to 65% of the viewport height; the sentence follows (86% to 60%, 24px). Follows the scroll until fully
    revealed, then stays.
  - cards (`[data-card]`): a one-off entrance (40px, fade, 550ms) when 15% is visible, 80ms apart for cards entering
    together. A slow illustration drift (±14px) follows the scroll on its own wrapper.
  - focus inside a section, a nav link, or loading the page with `#sessions` reveals it immediately.
  - wrappers are measured but never moved. Entrance (`.r-card-move`), hover (`.r-pcard-bg`, `.r-art-main`, arrow)
    and illustration drift (`.r-pcard-art`) are separate elements, so no element combines two transforms.
- Content is visible if the script does not run (CSS falls back to the final state).
- Small screens: smaller text, video and card movement, no background or illustration parallax.
- `prefers-reduced-motion`: a static, fully readable page.
