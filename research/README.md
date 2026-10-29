# Research workspace

A separate page for the Credit Proposal usability study (RMs and ARMs, 30-minute moderated sessions).
It lives in `research/` and is built as a second page next to the prototype, so the prototype in `src/` is untouched.

- Local: `npm run dev`, then open `/research/`
- Built: `dist/research/index.html`, served at `<site>/research/`

## This iteration: home page only

Header, welcome and optional video, four participant cards that open a preview dialog, session overview,
project team and footer. Nothing is collected or saved, and opening a preview does not change a status.

## Configuration

Everything editable is in `src/config.js`: brand tokens and logo, project labels, prototype URL,
version and research date (footer shows them only when set), session length, welcome copy, video path,
participant codes and roles, session stages, journey areas and team names.

Brand values are labelled by source in `config.js`:
- **corporate-ui**: read from the lib : corporate-ui Figma variables (font, primary #182F7C, text colours, 8px radius, 16px spacing).
- **project**: reused from the approved prototype (the Emirates NBD logo SVG in `src/assets`, borders, canvas, focus ring).
- Nothing else is presented as an official token.

Media lives in `public/research/media/`. The video is a re-encoded copy (H.264, about 15 MB) of the supplied 90 MB WhatsApp file, with no edits to content.
It walks through the journey click by click with an earlier sample client, so the page tells the facilitator to show it after the tasks or as onboarding.

## Next iterations (plan, not built)

**Participant experience** (one route per participant, e.g. `#/session/rm-01`):
welcome, research information, participation consent, separate optional recording permission,
electronic signature with a typed-name alternative (subject to the agreed consent process),
assigned journey tasks, short post-task questions, thank-you page.
No research responses are stored before consent. Participant codes are labels, not access control:
participants should only reach their own workspace once real access control exists.

**Journeys**, checked against the prototype README and assigned by role in `config.js`:
Leads and call report (RM, if time), Facility Application hub, Client Information, Documents & References incl. Ejari,
Submission to ARM (RM), Financial Analysis (ARM), ARM-to-RM review, comments, return and confirmation.
Scenarios stay goal-based and never show click paths or moderator hints.

**Moderator workspace** (facilitator only): per task, the research question, scenario and success criteria,
what to observe, neutral prompts, outcome (independent / with help / unsuccessful / not attempted),
observed behaviour, quote, screen or step, expected behaviour, assistance, impact,
issue type (usability / prototype limitation / workflow question), follow-up action and ease rating.
Facts, interpretations and proposed fixes are kept in separate fields.
Saving must show saved / saving / failed. Browser storage is per device and not secure shared storage,
so a shared, access-controlled store is needed before real participant data is kept.

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

One easing (`--ease: cubic-bezier(.22,1,.36,1)`), 500ms entrances and 250ms hover feedback, no libraries.
Scroll-linked (`useScrollMotion.js`, one passive rAF listener): the hero glow drifts up to 28px, and the video's
outer frame scales 0.92 → 1 and rises 24px → 0 as it nears the centre; it is untransformed once centred, focused
or playing. One-time entrances (`useReveal.js`): team clusters assemble from ≤16px and the connector lines draw
once; session cards rise 12px in reading order, 70ms apart. Content is visible unless JS arms it, focus reveals
instantly, and `prefers-reduced-motion` gives a fully static page. Only the research homepage uses any of this.
