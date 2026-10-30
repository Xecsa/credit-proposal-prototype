// The usability script for the 30-minute sessions. Participant-facing text (`task`) is goal-based only:
// no expected clicks, model answers or observation lists. Everything else is facilitator-only.
// `start` opens the prototype at a prepared point (see src/logic.js): '' = leads home, 'arm', 'rm-review'.

export const agenda = [
  { from: 0, to: 3, label: 'Welcome, research information, consent' },
  { from: 3, to: 5, label: 'Current responsibilities' },
  { from: 5, to: 24, label: 'Role-specific journeys' },
  { from: 24, to: 28, label: 'Overall feedback' },
  { from: 28, to: 30, label: 'Buffer and close' }
];

export const introScript = '“Today we’re exploring how the credit proposal prototype supports your work. We’re testing the design, and your honest feedback will help us improve it. Please say what you’re looking for, what you expect, and anything that feels unclear. Some functions are simulated. You can pause or skip a task, and you don’t need to finish everything.”';

export const consentItems = [
  'The purpose of this session has been explained to me and I have had the chance to ask questions.',
  'I understand that the design is being tested, not me, and nothing I do is an assessment of my performance.',
  'I understand that taking part is voluntary and that I can pause, skip a task or stop at any time.',
  'I understand that the facilitator will take notes, and that I will be referred to only by my participant code.',
  'I agree to take part in this session.'
];
// Two separate, optional recording choices, as described on the information sheet. Choosing here does not start any capture.
export const consentRecordings = [
  { key: 'recordScreen', label: 'I agree to my screen being recorded while I complete the tasks.' },
  { key: 'recordAudio', label: 'I agree to audio of the session being recorded.' }
];

// "About your work": two optional questions. Answers are optional so the facilitator can capture spoken answers instead.
// `effort` keeps its id so answers saved under the earlier wording still show.
export const roleQuestions = [
  { id: 'handle', q: 'Which parts of a credit proposal do you normally handle?' },
  { id: 'effort', q: 'Thinking about your most recent credit proposal, which part required the most effort, and why?' }
];
export const roleIntro = {
  title: 'A little about your work',
  intro: 'Let’s start with a brief conversation about how you work today.',
  note: 'You can answer aloud—your facilitator can capture your responses.',
  placeholder: 'Add a response, or discuss with your facilitator.'
};
// Asked after the review task (moved from "About your work"): RM Financial Analysis review, ARM Submit to RM.
export const reviewFollowUp = { id: 'check', q: 'Which information do you check most carefully before passing an application onward?' };

export const afterTaskQuestions = {
  ease: 'Overall, how difficult or easy was that task?',
  unclear: 'What, if anything, felt unclear?',
  fit: 'How would this fit into your current way of working?'
};
export const easeScale = { min: 1, max: 7, minLabel: 'Very difficult', maxLabel: 'Very easy' };

export const neutralPrompts = ['What are you thinking?', 'What would you expect to happen?', 'What would you do next?'];
export const avoidPrompts = ['Can you see the edit button?', 'Was that easy?'];

export const closingQuestion = 'What is the most important thing we should improve before you would use this in your daily work?';

export const limitationNote = 'If an action is unavailable in the prototype, record what the participant expected and classify it as a prototype limitation, not a usability failure.';

// Participant-facing overview shown in the session modal: three short rows per role, no times.
// Detailed, goal-based task text stays on the individual task screens.
export const journeyOverview = {
  RM: [
    { icon: 'client', title: 'Client Information', text: 'Review and update customer details.' },
    { icon: 'docs', title: 'Documents & References', text: 'Prepare and check supporting documents.' },
    { icon: 'chart', title: 'Financial Analysis review', text: 'Review the application after ARM submission.' }
  ],
  ARM: [
    { icon: 'client', title: 'Client Information review', text: 'Review the customer details you receive.' },
    { icon: 'docs', title: 'Documents & References review', text: 'Check the supporting documents.' },
    { icon: 'chart', title: 'Financial Analysis and submission to RM', text: 'Complete the analysis and send it back to the RM.' }
  ]
};

// Optional note from the participant, asked only after consent (on the "About your work" step).
export const participantNote = {
  label: 'Anything you’d like us to know? (optional)',
  placeholder: 'Add a question or anything that would help you take part comfortably.'
};

export const journeysByRole = {
  RM: {
    title: 'RM session: prepare the application and review the analysis',
    prep: 'Fictional customer pack: meeting notes, facility request, stakeholder details, documents, and one financial figure that needs checking. Same core information for both RMs.',
    journeys: [
      {
        id: 'rm-client', title: 'Client Information', minutes: 6, start: '',
        task: 'Prepare the customer information using this pack. Check the facility request, correct the supplied discrepancy, and confirm the relevant people and accounts.',
        ask: ['What told you which information needed attention?', 'Was the source of the prefilled information clear?', 'What would you still need to verify outside this tool?'],
        observe: ['Discovering edits', 'Understanding stakeholder roles', 'Selecting the right accounts', 'Checking information before confirmation'],
        note: 'Keep this focused: same core checks for both RMs. If time allows, vary one secondary area (see the participant’s secondary area).'
      },
      {
        id: 'rm-docs', title: 'Documents & References', minutes: 5, start: '',
        task: 'Prepare the supporting documents for the next stage. Add the supplied documents and check whether anything else is needed.',
        ask: ['How did you decide where each document belonged?', 'What did you understand from the upload status?', 'What would you expect after sending these documents?'],
        observe: ['Document categorisation', 'Prefetched versus uploaded files', 'Interpreting errors', 'Recognising readiness and processing status']
      },
      {
        id: 'rm-review', title: 'Financial Analysis review', minutes: 4, start: 'rm-review',
        task: 'The ARM has returned the application for your review. Review the analysis and comments, then decide whether to confirm it or return it.',
        ask: ['What informed your decision?', 'Was anything missing for your review?', 'Who would act next after your chosen action?'],
        followUp: true,
        observe: ['Finding analysis and comments', 'Understanding ratings and summaries', 'Distinguishing review from editing', 'Choosing the appropriate handoff'],
        note: 'Opens at the prepared RM review state. Use a consistent scenario with a clear basis for the decision (e.g. a source figure that doesn’t match the analysis). Agree the expected response with the BA/PO.'
      }
    ]
  },
  ARM: {
    title: 'ARM session: review the received application and perform financial analysis',
    prep: 'Start at an application already submitted by the RM. The ARM does not repeat the RM’s preparation. Supplied statements with one specified discrepancy.',
    priority: 'Financial Analysis is this session’s priority. If time is tight, shorten the document review rather than rushing the analysis.',
    journeys: [
      {
        id: 'arm-client', title: 'Received application and Client Information review', minutes: 4, start: 'arm',
        task: 'This application has been assigned to you. Review the customer and facility information and identify anything you need clarified before proceeding.',
        ask: ['Was the RM’s request clear?', 'Which information did you look for first?', 'What would you need clarified?'],
        observe: ['Understanding application context, ownership and status', 'Locating submitted information', 'Identifying gaps']
      },
      {
        id: 'arm-docs', title: 'Documents & References review', minutes: 4, start: 'arm',
        task: 'Check whether the supporting documents are sufficient for your analysis and establish their current processing status.',
        ask: ['How did you determine whether the documents were usable?', 'Was it clear which borrower or stakeholder each document belonged to?', 'What would you do if something were missing?'],
        observe: ['Document discoverability', 'Grouping', 'Previewing', 'Understanding processing status and responsibility for corrections']
      },
      {
        id: 'arm-fin', title: 'Financial Analysis process', minutes: 8, start: 'arm', priority: true,
        task: 'Use the supplied statements to review the spreading, correct the specified discrepancy, select the relevant entity, and assess the resulting analysis.',
        ask: ['How did you find the figure you needed?', 'What did you expect your correction to affect?', 'How would you verify the generated analysis?', 'Was the transition into and out of CreditLens clear?'],
        observe: ['Discovering editable values', 'Comparing figures', 'Selecting entities', 'Interpreting external-tool transitions, ratios, ratings and generated narratives']
      },
      {
        id: 'arm-submit', title: 'Submit to RM', minutes: 3, start: 'arm',
        task: 'Your analysis is ready for RM review. Communicate the issue or qualification they need to consider and pass the application onward.',
        ask: ['What do you expect the RM to receive?', 'Where would you check your comment later?', 'What tells you that your work has been handed over?'],
        followUp: true,
        observe: ['Adding a useful comment', 'Understanding submission', 'Confirmation and next owner', 'Locating comment history'],
        note: 'Continues in the same prototype tab from the analysis task.'
      }
    ]
  }
};

// Facilitator recording fields, the same for every task.
export const outcomes = ['Independent', 'With help', 'Unsuccessful', 'Not attempted'];
export const classifications = ['Usability issue', 'Workflow question', 'Prototype limitation'];
export const noteFields = [
  { id: 'observation', label: 'Observation', hint: 'What the participant actually did' },
  { id: 'quote', label: 'Quote', hint: 'Their words' },
  { id: 'screen', label: 'Screen or step', hint: 'Where the issue occurred' },
  { id: 'assistance', label: 'Assistance', hint: 'Any help you provided' },
  { id: 'impact', label: 'Impact', hint: 'Effect on accuracy, completion or confidence' },
  { id: 'followup', label: 'Follow-up', hint: 'What needs clarification, improvement or retesting' }
];

// Secondary Client Information area, varied between the two RMs if time allows.
export const secondaryArea = { 'rm-01': 'Shareholders', 'rm-02': 'Contact points' };

export const beforeFirstSession = [
  'Prepare separate RM and ARM starting states, plus the RM financial-review state (built in: the task links open them).',
  'Reset the prototype between participants (open each task link fresh; use Reset on the session).',
  'Pilot both scripts to check timing and supported interactions.',
  'Define task success with the BA/PO before testing.',
  'Keep the same core tasks for participants in the same role.',
  'Prepare the fictional customer pack and the statement with the discrepancy.',
  'Confirm remaining ownership details with the BA/PO.'
];
