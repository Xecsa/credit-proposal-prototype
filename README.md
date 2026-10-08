# Credit Proposal Prototype – React version

Live prototype: https://xecsa.github.io/credit-proposal-prototype/ (rebuilt automatically on every push to `main`).

The full clickable prototype (self-sourced flow: applications list → search → request summary → hub →
Client Information / KYC-KYB → Documents and References → Financial analysis) as a standard React app.
It renders identically to the Claude prototype and passes the same end-to-end click tests.

## What is in here

| Path | What it is |
|---|---|
| `src/main.jsx` | Entry point – mounts `<App />` |
| `src/App.jsx` | The page shell (headers, overlays) and which screen is showing |
| `src/logic.js` | All prototype state and behaviour (navigation, forms, timers, added shareholders…) |
| `src/screens/*.jsx` | One file per screen / large section (24 files) |
| `src/styles.css` | Global styles: font, focus states, shimmer, spinners |
| `src/assets/*` | Images (logo, illustrations, CreditLens, analysis preview, bank logos) |

`App.jsx` imports every screen; each screen receives the same `v` object (values and click handlers
computed in `logic.js`). Nothing else is needed besides React 18.

## Getting it into Figma Make

Figma Make builds React apps, so the code can be moved in as-is. Two ways:

**A. Ask Make to adopt the code (fewest steps)**
1. Open the Make file and start a chat message.
2. Attach the files from `src/` (all `.jsx`, `logic.js`, `styles.css`) and the images in `src/assets/`.
3. Prompt: *"Replace the current app with the attached React code. Keep every file's contents exactly as
   they are; keep the same folder structure (`screens/`, `assets/`). `App.jsx` is the root component and
   imports `./logic.js`, `./styles.css`, `./screens/*` and `./assets/*`. Do not redesign or refactor anything."*

**B. Paste by hand in Make's code view**
1. Create the same files/folders as in `src/` and paste each file's contents.
2. Upload the images from `src/assets/` keeping the same file names.
3. Make sure the app's entry renders `App` from `App.jsx` (in Make that is usually `App.tsx` –
   you can paste the contents of `App.jsx` there and adjust the import paths if the folders differ).

If Make reports an error, paste the error text back into Make's chat and ask it to fix only that line.

## Running it locally (optional, needs Node 18+)

```
npm install
npm run dev
```
