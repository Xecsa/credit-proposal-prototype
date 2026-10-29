# Credit Proposal Prototype – Emirates NBD

A clickable usability prototype of the corporate **Credit Proposal** journey (Figma file *CP-01.00 Sourcing*).
It follows one client, **Orient Insurance**, from the RM's first lead call to a confirmed facility application.
Only the happy path (main flow) is built.

## Links

| What | Where |
|---|---|
| Live prototype (main demo link) | https://xecsa.github.io/credit-proposal-prototype/ |
| Backup (Netlify) | https://credit-proposal-prototype-saba.netlify.app |
| Claude Design version | https://claude.ai/artifact/XqCkgpv3eDkvaHgpVwxcJq |
| Demo script | https://claude.ai/artifact/HACC8Htx1xjKLmYu7dWCBE |
| Figma source | https://www.figma.com/design/peEm0fl0eZbmyYR8C0SyHK/CP-01.00-Sourcing |
| Offline copy | `Credit-Proposal-Prototype.html` (single file, opens in any browser, no internet needed) |

Every push to `main` rebuilds GitHub Pages (`.github/workflows/deploy.yml`) and Netlify (`netlify.toml`).

## The journey

1. **Leads and insights.** Open the Trade import lead, log a call report (date, mode, participants, related leads),
   then add notes, generate a summary, attach files and submit. The lead closes and the app moves to the hub.
2. **Facility Application hub.** One card per section, with status tags (Not started, In progress, Submitted).
   Cards have hover and press states, and a short loader opens Client Information.
3. **Client Information (KYC/KYB).**
   - Facilities: the RM adds them manually (product type, limit, purpose); Continue waits for at least one.
   - Documents: trade license and MOA are prefetched. Uploading adds AOA and a board resolution; a file whose type
     isn't recognised is categorised from a dropdown.
   - Trade license, ownership and shareholders (view, edit, delete; 100% total check; corporate shareholder ends
     on the terminated screen), Emirates ID and passport previews (generic specimen card).
   - Co-borrowers (with Skip), key management, contact points, Emirates NBD accounts, consent, review and Submit.
4. **Documents and References.**
   - KYC documents: trade license and MOA prefetched; AOA upload fails once (25MB limit) then succeeds;
     Other documents opens **Categorise document type**, and the typed category shows as a tag.
   - Stakeholder documents: search, preview, delete.
   - Financial documents: bank statements and AECB report prefetched; audited and in-house statements are
     uploaded by the RM; **Send for Perfios Analysis** locks the step.
   - Ejari documents: bulk upload with progress, then **Documents sent**.
5. **Submit to ARM.** The RM adds a comment in the **Add comment for ARM** dialog; *Application submitted to ARM*.
6. **Financial analysis.** Spreading tables, risk ratios, ratings and the Perfios output (analysis.xlsx).
7. **ARM and RM on the hub.** The ARM submits to the RM with a comment; the RM can **Return to ARM** or
   **Confirm application**. *Application confirmed* → **Back to HUB** shows the RM hub with all three sections
   Submitted and the comment history.

Every document has a **Preview document** viewer with zoom; the sample pages are generated and marked as samples.

## Design rules followed

- Content and layout come from the Figma file; nothing changes until it is asked for.
- Emirates NBD design-system colours and components; buttons have an 8px radius (never pill-shaped).
- Inputs show a blue focus border; no browser-native pickers or dropdowns.
- Sample names from Figma (Orient Insurance, Jane Smith – RM, Omar Khan – ARM, Mostafa Hamed…).
- UAE flag on phone-number and nationality fields; mobile placeholder `e.g. 50 0000000`.

## Code

| Path | What it is |
|---|---|
| `src/main.jsx` | Entry point – mounts `<App />` |
| `src/App.jsx` | Page shell (header, dialogs, overlays) and which screen is showing |
| `src/logic.js` | All prototype state and behaviour (navigation, forms, timers, uploads, comments) |
| `src/screens/*.jsx` | One file per screen or large section (30 files) |
| `src/styles.css` | Global styles: font, focus states, shimmer, spinners |
| `src/assets/*` | Images: logo, illustrations, bank logos, analysis preview |

Each screen receives the same `v` object (values and click handlers computed in `logic.js`).
The only runtime dependency is React 18; the build uses Vite 5.

### Run locally (Node 18+)

```
npm install
npm run dev       # development server
npm run build     # production build in dist/
```

### Moving it into Figma Make

Attach the files from `src/` (all `.jsx`, `logic.js`, `styles.css`) and the images in `src/assets/`, then ask:
*"Replace the current app with the attached React code. Keep every file's contents and the folder structure
(`screens/`, `assets/`) exactly as they are. `App.jsx` is the root component. Do not redesign or refactor anything."*
If Make reports an error, paste the error back and ask it to fix only that line.

## Not in the prototype

Error and edge cases designed in Figma (data mismatches, no records found, IBAN validation failure, Perfios error,
Ejari upload failures), new-to-bank customers, and the Schedule follow-up / Close lead paths. These were left out
to keep the demo on the main path.
