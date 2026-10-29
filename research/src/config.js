// Research workspace configuration.
// Everything a facilitator may need to change lives here, not in the components.

import enbdLogo from '../../src/assets/ac82201241fa083b5c835e1c0d63652e.svg';

// Where each value comes from:
//   corporate-ui  read from the lib : corporate-ui Figma variables (29 Oct 2026)
//   project       used by the approved Credit Proposal prototype in src/
//   assumed       temporary value, not a design-system token
export const brand = {
  logo: enbdLogo,            // project: same SVG as the prototype header
  logoAlt: 'Emirates NBD',
  tokens: {
    '--r-font': '"Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', // corporate-ui
    '--r-primary': '#182F7C',        // corporate-ui color/default, link, icon/active
    '--r-primary-hover': '#081F5B',  // project
    '--r-ink': '#000000',            // corporate-ui sys/color/text/primary
    '--r-text-2': '#575757',         // corporate-ui sys/color/text/secondary
    '--r-navy': '#072447',           // corporate-ui icon colour, project logo fill
    '--r-surface': '#F4F7FE',        // corporate-ui upload status background
    '--r-blue-light': '#5082FF',     // corporate-ui upload progressBar surface
    '--r-canvas': '#F3F3F3',         // project page shell background
    '--r-card': '#FFFFFF',           // corporate-ui widget background
    '--r-border': '#D7DAE5',         // project input and card border
    '--r-divider': '#E5E5E5',        // project divider
    '--r-tag-bg': '#EAEAEA',         // project neutral tag
    '--r-focus': '#2765FF',          // project focus ring
    '--r-radius': '8px',             // corporate-ui sys/border/radius/default
    '--r-space': '16px'              // corporate-ui spacing/05
  }
};

export const project = {
  name: 'Credit Proposal',
  label: 'Usability research',
  workspaceLabel: 'Facilitator workspace',
  prototypeUrl: 'https://xecsa.github.io/credit-proposal-prototype/',
  prototypeVersion: null,   // e.g. 'Prototype v1.4'. Shown in the footer only when set.
  researchDate: null,       // e.g. 'Monday 2 November 2026'. Shown in the footer only when set.
  sessionMinutes: 30
};

export const welcome = {
  title: 'Credit Proposal',
  intro: [
    'Explore a digital journey for preparing and reviewing credit proposals.',
    'Your feedback will help shape an experience that supports your work.'
  ],
  reassurance: `About ${project.sessionMinutes} minutes. We’re testing the design, not you.`
};

// Paths are relative to research/index.html. Files live in public/research/media/.
export const video = {
  src: './media/credit-proposal-walkthrough.mp4',
  poster: './media/walkthrough-poster.jpg',
  title: 'Credit Proposal walkthrough',
  duration: '4 min 28 s',
  playLabel: 'Play introduction',
  // The video walks through the journey click by click, with sound and on-screen captions.
  // It also uses an earlier sample client (Zenith Co LLC), so some screens differ from today's prototype.
  facilitatorNote: 'Facilitators: the video shows each step, so play it after the tasks.'
};

// Status values: 'not-started' only in this iteration. Opening a preview never changes it.
export const participants = [
  { id: 'rm-01', code: 'RM 01', role: 'Relationship Manager', roleKey: 'RM', status: 'not-started' },
  { id: 'rm-02', code: 'RM 02', role: 'Relationship Manager', roleKey: 'RM', status: 'not-started' },
  { id: 'arm-01', code: 'ARM 01', role: 'ARM', roleKey: 'ARM', status: 'not-started' },
  { id: 'arm-02', code: 'ARM 02', role: 'ARM', roleKey: 'ARM', status: 'not-started' }
];

export const statusLabels = {
  'not-started': 'Not started'
};

export const sessionStages = [
  { title: 'Welcome and consent', text: 'A short introduction to the study, then the consent form.' },
  { title: 'Explore assigned journeys', text: 'A few goal-based tasks in the prototype, thinking aloud as you go.' },
  { title: 'Share feedback', text: 'A short conversation about what worked and what felt unclear.' }
];

export const sessionNote = 'You can pause, skip a task, or stop at any time.';

// Journey areas, checked against the prototype README (29 Oct 2026).
// `roles` says who is assigned the area. Nobody is expected to cover everything in one session.
// Scenarios and success criteria are written in a later iteration and are never shown as click paths.
export const journeys = [
  { id: 'leads', title: 'Leads, call report and generated summary', roles: ['RM'], optional: true }, // only if time allows
  { id: 'hub', title: 'Facility Application hub', roles: ['RM', 'ARM'] },
  { id: 'client-info', title: 'Client Information', roles: ['RM'] },
  { id: 'documents', title: 'Documents & References, including Ejari', roles: ['RM'] },
  { id: 'submit-arm', title: 'Submission to ARM', roles: ['RM'] },
  { id: 'financial', title: 'Financial Analysis', roles: ['ARM'] },
  { id: 'review', title: 'ARM-to-RM review, comments, return and confirmation', roles: ['RM', 'ARM'] }
];

export const team = [
  { role: 'Product Designer', name: 'Saba Shaikh' },
  { role: 'Business Analyst', name: null },
  { role: 'Product Owner', name: null }
];
export const missingName = 'Name to be confirmed';
