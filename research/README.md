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
