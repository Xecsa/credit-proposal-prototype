// Usability findings, round 1 (2 November 2026). Written from the nine session recordings
// (screen and audio). Times in `at` are minutes:seconds into that participant's recording of the journey.
// Quotes are from the audio, lightly cleaned for readability; nothing is invented to fill a gap.
// Severity: high = blocked, needed the facilitator, or risks a wrong decision; medium = hesitated or misread;
// low = wording or preference.

export const round = {
  subtitle: 'Round 1, Monday 2 November 2026. Two RMs and two ARMs worked through the Orient Insurance application in moderated sessions.',
  stats: [
    { label: 'Participants', value: '4', note: 'RM 01, RM 02, ARM 01, ARM 02' },
    { label: 'Recorded', value: '3 h 15 min', note: '9 recordings across 4 journeys' },
    { label: 'Problems logged', value: '', note: 'Across all participants' },
    { label: 'Common problems', value: '', note: 'Grouped below' }
  ]
};

export const takeaways = [
  { title: 'Section names don’t match how RMs think.', text: 'Both RMs read “Client Information” as the customer background and narrative, not the KYC pack for marketing clearance, and “Documents and References” didn’t tell them it is where financials go for analysis.' },
  { title: 'People couldn’t tell what they could change.', text: 'The ARM didn’t see that spreading figures were editable, an RM thought spreading shouldn’t be editable at all, and the final review gave no way to jump back and fix one field.' },
  { title: 'Entity selection and consent weren’t understood.', text: 'Neither RM 01 nor ARM 01 could say why three “Orient” entities appeared, and RM 01 didn’t know what the consent request was for. RMs pointed out the AECB consent is already given at account opening.' },
  { title: 'Document categories don’t fit real cases.', text: 'Contracting clients need project lists, projected cash flows, retention receivables and other banks’ offer letters. Ejari as its own step reads as mandatory, though RMs often don’t take it.' },
  { title: 'AI output needs to show its working.', text: 'The ARM said that without seeing which lines make up each total, checking the spread would take longer than keying it in. RMs didn’t realise most details are fetched from Finacle and Maktaba.' },
  { title: 'The sessions measured the conversation more than the task.', text: 'The RM journeys ran 4 to 8 times longer than planned, mostly because the facilitator and BA explained the process. Task success and timings should be read with that in mind.' }
];

export const themes = [
  {
    id: 'names', short: 'Section names and wording', severity: 'high', who: ['RM 01', 'RM 02', 'ARM 01'],
    title: 'Section names and wording don’t match the RMs’ vocabulary',
    summary: '“Client Information” was expected to hold the customer background, promoter net worth and business model. “Documents and References” didn’t suggest financial analysis. “Stakeholders”, “External accounts”, “Accounts for income calculation”, “Perfios” and “Submit” were each misread.',
    evidence: [
      { src: 'RM 02 · Client Information 06:41', quote: 'When I just see this, customer information means I am expecting this information.', note: '(background and ownership narrative)' },
      { src: 'RM 02 · Documents 00:12', quote: 'Document and reference does not make any reference.' },
      { src: 'RM 01 · Client Information 35:29', quote: 'It looks like for an individual.', note: '(Accounts for income calculation)' },
      { src: 'RM 02 · Client Information 28:36', note: 'Asked to rename “External accounts” to “Other bank accounts”, the term RMs use every day.' },
      { src: 'RM 01 · Documents 35:29', quote: 'Let’s not make Perfios the hero… say send for analysis.', note: '(said in the session; speaker not certain)' }
    ],
    screens: ['Hub', 'Bank accounts', 'Stakeholder documents', 'Send to Perfios', 'Confirm application']
  },
  {
    id: 'edit', short: 'Editing not discoverable', severity: 'high', who: ['RM 01', 'ARM 01'],
    title: 'It isn’t clear what can be edited, or how to fix a mistake',
    summary: 'The ARM didn’t see that spreading figures could be edited. An RM thought spreading shouldn’t be editable by the RM at all. On the final review, the RM expected a shortcut to edit one section instead of going back through every step, and needed help to fix the over-100% shareholding error.',
    evidence: [
      { src: 'ARM 01 · Financial Analysis 04:17', quote: 'Doesn’t look like that, the edit button is not visible.' },
      { src: 'RM 01 · Review 04:03', quote: 'We should not be editing, because this is based on the audited financials.' },
      { src: 'RM 01 · Client Information 44:07', quote: 'There should be a shortcut to edit.' },
      { src: 'RM 01 · Client Information 23:13', note: 'Didn’t see the fix for “more than 100%” was on the same screen until prompted to scroll.' }
    ],
    screens: ['Financial spreading', 'Review & submit', 'Stakeholder details']
  },
  {
    id: 'entity', short: 'Entity selection', severity: 'high', who: ['RM 01', 'ARM 01'],
    title: 'Entity selection isn’t understood',
    summary: 'Three similarly named entities with only an ID and statement count gave no basis to choose. The arrows suggested drilling in rather than selecting. The team agreed during the RM session that RMs shouldn’t see this step at all.',
    evidence: [
      { src: 'ARM 01 · Financial Analysis 07:54', quote: 'I don’t know, this is not understood, I can’t understand.' },
      { src: 'ARM 01 · Financial Analysis 08:57', quote: 'These arrows are a bit confusing… we should put a checkbox and continue.' },
      { src: 'RM 01 · Review 06:01', note: 'Asked why there were three, and which one is the main borrower.' },
      { src: 'RM 01 · Review 09:13', quote: 'They won’t see the entity selection.', note: '(team decision)' }
    ],
    screens: ['Entity selection']
  },
  {
    id: 'consent', short: 'Consent request', severity: 'high', who: ['RM 01', 'RM 02'],
    title: 'The consent request step isn’t understood, and may not be needed',
    summary: 'RM 01 didn’t know what the consent was for or whom to pick. Both RMs said AECB consent is already in the account opening documents. The UAEFTS consent for other banks’ statements is separate, and nobody was sure whether one signatory is enough.',
    evidence: [
      { src: 'RM 01 · Client Information 23:58', quote: 'That I don’t know. What is it?' },
      { src: 'RM 01 · Client Information 27:35', quote: 'In the account opening document, the consent is already there.' },
      { src: 'RM 02 · Client Information 24:40', note: 'Asked whether one person can give consent for the other shareholder.' }
    ],
    screens: ['Consent request', 'Bank accounts']
  },
  {
    id: 'docs', short: 'Document categories', severity: 'high', who: ['RM 01', 'RM 02', 'ARM 01'],
    title: 'Document categories don’t fit real cases',
    summary: 'There is nowhere for documents outside the seven Perfios categories, such as project lists, projected cash flows, other banks’ offer letters and approved counterparties. Ejari as a main step reads as mandatory. Board resolutions arrive at the end of the process, and some articles exceed 25 MB.',
    evidence: [
      { src: 'RM 01 · Documents 26:07', quote: 'If it is a contracting client, we need to know what other projects they have completed. There’s no uniform set of documents.' },
      { src: 'RM 01 · Documents 31:26', quote: 'If you keep it as a main document, the people will think this is a must.', note: '(Ejari)' },
      { src: 'RM 02 · Documents 08:45', note: 'Retention receivables (often 25 to 40% over 365 days for contractors) need their own column in receivables ageing.' },
      { src: 'RM 01 · Documents 16:56', note: 'Concerned the 25 MB file limit is too low for foreign companies’ articles.' }
    ],
    screens: ['Financial documents', 'Ejari documents', 'KYC documents']
  },
  {
    id: 'trust', short: 'AI output and data sources', severity: 'high', who: ['ARM 01', 'RM 01', 'RM 02'],
    title: 'Generated data doesn’t show its source or working',
    summary: 'The ARM couldn’t see which lines make up a spread total, or the statement details credit needs: auditor, period length, audited or in-house, qualified or not. RMs didn’t realise shareholders and signatories come from Finacle and Maktaba, so they assumed they had to key everything in, and questioned the value of the journey.',
    evidence: [
      { src: 'ARM 01 · Financial Analysis 07:24', quote: 'Otherwise it will be more time consuming than us manually inputting, because we have to go and find.' },
      { src: 'ARM 01 · Financial Analysis 14:32', quote: 'June 2025, how do we know that this is six months, not 12 months?' },
      { src: 'RM 01 · Review 13:13', quote: 'What will this journey shorten? It’s duplication, what I am understanding.' },
      { src: 'RM 01 · Review 14:17', note: 'Thought the borrower, shareholders and signatories had to be entered manually.' }
    ],
    screens: ['Financial spreading', 'Risk ratios', 'Ownership & shareholders']
  },
  {
    id: 'hub', short: 'Hub status and navigation', severity: 'medium', who: ['RM 01', 'ARM 01'],
    title: 'The hub doesn’t make status, next step or the way back clear',
    summary: 'RMs read “Not started” as disabled, didn’t know how to reopen a finished section, and saw both “Back” and “Back to hub”. The Financial Analysis tile looked open to the RM before the ARM had done anything. When the ARM’s work came back, the RM didn’t know where to click to see it.',
    evidence: [
      { src: 'RM 01 · Documents 13:47', note: 'Thought the Documents and References tile was disabled.' },
      { src: 'RM 01 · Documents 14:29', quote: 'Actually this [Back] we have to remove, because we have Back to hub here also.', note: '(team)' },
      { src: 'RM 01 · Review 02:52', quote: 'Where can I see it?' },
      { src: 'RM 01 · Documents 36:00', quote: 'Actually we should disable this for RM.', note: '(team, Financial Analysis tile)' },
      { src: 'RM 01 · clicks', note: 'Pressed Back on the hub and left the application; 32 clicks in Leads to get back in.' }
    ],
    screens: ['Hub', 'Documents and References']
  },
  {
    id: 'end', short: 'End of journey and hand-off', severity: 'medium', who: ['RM 01', 'ARM 01'],
    title: 'People couldn’t tell where the application goes next',
    summary: '“Submit” on the RM review suggests it goes somewhere, but in the MVP it ends there. After sending documents for analysis, the ARM didn’t know how to send them or what would happen to Submit to RM.',
    evidence: [
      { src: 'RM 01 · Review 11:47', quote: 'Submit means where it goes?', note: 'The team agreed to rename it.' },
      { src: 'ARM 01 · Financial Analysis 19:58', quote: 'So once I upload, how do I send it to Perfios?' }
    ],
    screens: ['Confirm application', 'Submit to RM', 'Financial documents']
  },
  {
    id: 'controls', short: 'Form controls and inputs', severity: 'medium', who: ['RM 01', 'RM 02'],
    title: 'Some form controls slow people down or look prefilled',
    summary: 'The resident toggle wasn’t read as yes or no. Placeholder examples looked like real data. Large amounts need counting zeros, and the IBAN had to be validated before Continue was enabled, with no hint why it was disabled.',
    evidence: [
      { src: 'RM 01 · Client Information 19:05', quote: 'Why don’t you put yes or no instead of a toggle?' },
      { src: 'RM 01 · clicks', note: 'Clicked the resident toggle 8 times in about 90 seconds.' },
      { src: 'RM 01 · Client Information 43:04', note: 'Thought the contact point example was prefilled.' },
      { src: 'RM 02 · Client Information 12:57', note: 'Wanted to type 25M rather than count zeros.' },
      { src: 'RM 01 · Client Information 39:37', note: 'Asked why Continue was disabled; the IBAN wasn’t validated.' }
    ],
    screens: ['Stakeholder details', 'Facility request', 'Bank accounts', 'Contact points']
  },
  {
    id: 'process', short: 'Fit with today’s process', severity: 'medium', who: ['ARM 02', 'RM 01', 'RM 02'],
    title: 'The journey assumes RMs do work that ARMs do today',
    summary: 'Today RMs email documents to ARMs, who categorise and upload them; RMs only upload the call report. ARMs work as a pool and don’t start analysis without marketing clearance. RMs asked for co-borrowers to be decided at the start, and for in-house and audited figures for the same period side by side.',
    evidence: [
      { src: 'ARM 02 · 01:29', quote: 'All the upload happens from our side. Right now it comes as email.' },
      { src: 'ARM 02 · 03:31', quote: 'There is no sense in starting without getting the clearance.' },
      { src: 'RM 01 · Client Information 29:08', note: 'Co-borrowers are agreed with the client at the start, not at this step.' },
      { src: 'RM 01 · Documents 04:56', note: 'Needs in-house and audited figures for the same year side by side, to check variance.' }
    ],
    screens: ['Documents and References', 'Co-borrowers', 'Financial spreading']
  }
];

const P = (journey, step, at, severity, text, theme, quote) => ({ journey, step, at, severity, text, theme, quote });

export const byParticipant = [
  {
    code: 'RM 01', role: 'Relationship Manager', recorded: 'Client Information 47 min, Documents 42 min, Review 16 min',
    note: 'The Documents recording begins with about 12 minutes of a separate discussion with the project team; problems are taken from the task part only.',
    problems: [
      P('Client Information', 'Hub', '01:04', 'medium', 'Described the hub as “a portal to key in details” and couldn’t say what to do first; asked why Send to ARM was disabled.', 'hub'),
      P('Client Information', 'Hub', '02:48', 'low', 'Wanted a way to reject a lead from the hub. This happens in Business One.', 'process'),
      P('Client Information', 'Facility request', '04:13', 'medium', 'Couldn’t find how to add a facility; read the screen as a lead pop-up.', 'controls', 'Where do I add?'),
      P('Client Information', 'Documents', '07:43', 'medium', 'Questioned why AOA and board resolution are asked for. A borrowing resolution only arrives when the facility letter is signed.', 'docs'),
      P('Client Information', 'Documents', '09:53', 'medium', 'Didn’t know how the upload works until shown.', 'controls', 'I don’t know how the upload option works.'),
      P('Client Information', 'Ownership & shareholders', '16:03', 'low', 'Abu Dhabi and other trade licences don’t list shareholders, so these will often be entered by hand.', 'docs'),
      P('Client Information', 'Stakeholder details', '18:30', 'medium', 'Couldn’t tell whether the resident toggle meant resident or non-resident.', 'controls', 'Why don’t you put yes or no instead of a toggle?'),
      P('Client Information', 'Stakeholder details', '23:08', 'medium', 'Thought the over-100% error meant going back; needed prompting to fix it on the same screen.', 'edit'),
      P('Client Information', 'Consent request', '23:58', 'high', 'Didn’t know what the consent was for or whom to choose. Said AECB consent is already given at account opening.', 'consent', 'That I don’t know. What is it?'),
      P('Client Information', 'Co-borrowers', '29:08', 'medium', 'Expects co-borrowers to be agreed at the start, and asked about companies as co-borrowers.', 'process'),
      P('Client Information', 'Key management', '32:28', 'low', 'Key management details are rarely available at marketing clearance; keep them optional.', 'docs'),
      P('Client Information', 'Bank accounts', '35:22', 'high', 'Read “Accounts for income calculation” as an individual’s debt burden check, and wanted to set the statement period.', 'names', 'It looks like for an individual.'),
      P('Client Information', 'Bank accounts', '39:37', 'medium', 'Couldn’t see why Continue was disabled (IBAN not validated) or who Fatima was.', 'controls'),
      P('Client Information', 'Contact points', '43:04', 'low', 'Thought the example contact was prefilled, and couldn’t find the contact point just added.', 'controls'),
      P('Client Information', 'Review & submit', '44:07', 'high', 'No way to jump to and fix one section from the summary.', 'edit', 'There should be a shortcut to edit.'),
      P('Documents', 'Hub', '13:43', 'medium', 'Thought the Documents tile was disabled, and couldn’t find how to reopen Client Information.', 'hub'),
      P('Documents', 'KYC documents', '14:29', 'low', '“Back” and “Back to hub” both shown.', 'hub'),
      P('Documents', 'KYC documents', '16:56', 'low', '25 MB limit may be too small for foreign companies’ articles.', 'docs'),
      P('Documents', 'Stakeholder documents', '19:52', 'medium', '“Stakeholders” is ambiguous; wants shareholders first and consistent naming. Didn’t see why documents uploaded earlier appear again.', 'names'),
      P('Documents', 'Financial documents', '25:50', 'high', 'No place for contracting-client documents such as project lists; asked for an “Other supporting documents” section with sub-categories.', 'docs', 'There’s no uniform set of documents. It always varies.'),
      P('Documents', 'Ejari documents', '29:50', 'medium', 'Ejari as its own step reads as mandatory; usually only a sample is taken.', 'docs'),
      P('Documents', 'Send to Perfios', '35:24', 'low', 'Use “Send for analysis” instead of naming the vendor.', 'names'),
      P('Documents', 'Hub', '35:56', 'medium', 'Financial Analysis tile looked open to the RM before the ARM had started.', 'hub'),
      P('Documents', 'Submit to ARM', '36:59', 'low', 'Facility names should match the real product list; wants comments to ask the ARM for specific documents.', 'process'),
      P('Review', 'Hub', '02:52', 'high', 'Didn’t know where to click to see the ARM’s analysis.', 'hub', 'Where can I see it?'),
      P('Review', 'Financial spreading', '04:03', 'medium', 'Believed the RM shouldn’t edit spreading, and wasn’t sure how an edit gets saved.', 'edit'),
      P('Review', 'Entity selection', '06:01', 'high', 'Asked why three entities appear and which is the main borrower.', 'entity'),
      P('Review', 'Confirm application', '11:47', 'medium', '“Submit” implies the application goes somewhere; in the MVP it ends here.', 'end', 'Submit means where it goes?'),
      P('Review', 'Overall', '13:13', 'high', 'Saw the journey as duplicated effort; didn’t realise details are fetched from Finacle and Maktaba.', 'trust', 'It’s duplication, what I am understanding.')
    ]
  },
  {
    code: 'RM 02', role: 'Relationship Manager', recorded: 'Client Information 33 min, Documents 20 min, Review 27 s',
    note: 'Only 27 seconds of the Review journey were recorded, with the facilitator talking, so RM 02 has no Review findings.',
    problems: [
      P('Client Information', 'Hub', '00:39', 'high', 'Expected “Client Information” to hold promoters, suppliers, customers and net worth, not the KYC pack for marketing clearance.', 'names', 'Customer information means I am expecting this information.'),
      P('Client Information', 'Hub', '07:01', 'medium', 'Suggested naming the section after marketing clearance or KYC.', 'names'),
      P('Client Information', 'Facility request', '12:57', 'low', 'Wants to type amounts as 25M instead of counting zeros; asked about sub-limits.', 'controls'),
      P('Client Information', 'Documents', '16:41', 'low', 'Automatic categorisation was new, but understood once explained.', null, 'This is something new to me.'),
      P('Client Information', 'Stakeholder details', '20:49', 'medium', 'Tried to set resident or non-resident and the prototype didn’t respond.', 'controls', 'Now it is not working.'),
      P('Client Information', 'Consent request', '24:38', 'medium', 'Unsure whether one signatory can consent for others, and whether AECB for individuals is separate.', 'consent'),
      P('Client Information', 'Key management', '27:42', 'low', 'Wants to paste the management narrative from Word.', 'controls'),
      P('Client Information', 'Bank accounts', '28:36', 'medium', '“External accounts” should be “Other bank accounts”.', 'names'),
      P('Client Information', 'Contact points', '30:36', 'low', 'Only authorised signatories should be selectable for banking contact.', 'process'),
      P('Client Information', 'Review & submit', '32:04', 'medium', 'Customer details and business model are missing from the section.', 'names'),
      P('Documents', 'Hub', '00:12', 'high', '“Documents and References” didn’t tell them it is for financial analysis.', 'names', 'Document and reference does not make any reference.'),
      P('Documents', 'KYC documents', '02:13', 'low', 'KYC documents and marketing clearance documents looked the same.', 'names', 'For me both are same.'),
      P('Documents', 'Financial documents', '04:04', 'high', 'Needs other banks’ offer letters, contracts and projected cash flows for contracting clients.', 'docs'),
      P('Documents', 'Financial documents', '08:45', 'medium', 'Receivables ageing needs a retention receivables column for contractors.', 'docs'),
      P('Documents', 'Ejari documents', '11:44', 'low', 'Ejari is often not taken; must be optional.', 'docs'),
      P('Documents', 'Submit to ARM', '15:52', 'medium', 'Needs a field for approved counterparties, and a way to brief the ARM on covenants.', 'docs')
    ]
  },
  {
    code: 'ARM 01', role: 'Assistant Relationship Manager', recorded: 'Financial Analysis 21 min',
    note: null,
    problems: [
      P('Financial Analysis', 'Hub', '00:56', 'medium', 'Didn’t know where to click to review client information, and thought documents couldn’t be opened.', 'hub'),
      P('Financial Analysis', 'Hub', '02:18', 'low', 'Scrolling was hard with a Windows mouse on the test Mac. A setup issue, not the design.', null),
      P('Financial Analysis', 'Financial spreading', '04:17', 'high', 'Didn’t see that values can be edited.', 'edit', 'Doesn’t look like that, the edit button is not visible.'),
      P('Financial Analysis', 'Financial spreading', '05:13', 'high', 'No breakdown of which lines make up each total, so checking takes longer than keying in.', 'trust', 'More time consuming than us manually inputting.'),
      P('Financial Analysis', 'Entity selection', '07:54', 'high', 'Couldn’t tell what the three entities were, and read the arrows as “more information”.', 'entity', 'I don’t know, this is not understood.'),
      P('Financial Analysis', 'Financial spreading', '12:09', 'medium', 'A reclassification made here won’t carry into next year’s upload.', 'trust'),
      P('Financial Analysis', 'Risk ratios', '13:52', 'medium', 'Borrower name isn’t shown on the analysis pages.', 'hub'),
      P('Financial Analysis', 'Risk ratios', '14:07', 'high', 'Missing auditor, period length, audited or in-house, and qualified or unqualified opinion.', 'trust', 'That’s critical information.'),
      P('Financial Analysis', 'Risk ratings', '16:02', 'low', 'Overrides are done by credit, not ARMs.', 'process'),
      P('Financial Analysis', 'Financial documents', '17:52', 'medium', 'ARMs upload documents today; didn’t know the ARM can upload here, or how.', 'process', 'How do I upload?'),
      P('Financial Analysis', 'Financial documents', '19:58', 'medium', 'Didn’t know how to send new documents for analysis.', 'end', 'So once I upload, how do I send it?')
    ]
  },
  {
    code: 'ARM 02', role: 'Assistant Relationship Manager', recorded: 'Financial Analysis 5 min (partial)',
    note: 'Only 5 minutes were recorded, on the Client Information screens rather than Financial Analysis. The findings are about the current process, not the screens.',
    problems: [
      P('Financial Analysis', 'Documents', '00:32', 'low', 'Each document has to be opened one at a time to check it.', 'docs', 'Each document we need to go and click to see.'),
      P('Financial Analysis', 'Ownership & shareholders', '01:11', 'medium', 'Today documents arrive by email and the ARM categorises and uploads them; RMs only upload the call report.', 'process', 'All the upload happens from our side.'),
      P('Financial Analysis', 'Overall', '02:12', 'low', 'ARMs work as a pool, not one ARM per RM.', 'process'),
      P('Financial Analysis', 'Overall', '03:31', 'medium', 'Analysis doesn’t start before marketing clearance, except in critical cases.', 'process', 'There is no sense in starting without getting the clearance.')
    ]
  }
];

// Filled from the recordings (see the method notes). secs = seconds from task start to task end.
export const journeyTimes = {
  "people": [
    "RM 01",
    "RM 02",
    "ARM 01",
    "ARM 02"
  ],
  "rows": [
    {
      "journey": "Client Information",
      "planned": 6,
      "actual": {
        "RM 01": {
          "secs": 2800
        },
        "RM 02": {
          "secs": 1950
        }
      }
    },
    {
      "journey": "Documents & References",
      "planned": 5,
      "actual": {
        "RM 01": {
          "secs": 2500,
          "flag": "incl. about 12 min side discussion"
        },
        "RM 02": {
          "secs": 1180
        }
      }
    },
    {
      "journey": "Financial Analysis review",
      "planned": 4,
      "actual": {
        "RM 01": {
          "secs": 970
        },
        "RM 02": {
          "secs": 27,
          "flag": "partly recorded"
        }
      }
    },
    {
      "journey": "Financial Analysis (ARM)",
      "planned": 19,
      "actual": {
        "ARM 01": {
          "secs": 1250
        },
        "ARM 02": {
          "secs": 319,
          "flag": "partly recorded"
        }
      }
    }
  ]
};
export const stepTimes = [
  {
    "journey": "Client Information",
    "people": [
      "RM 01",
      "RM 02"
    ],
    "steps": [
      {
        "step": "Hub",
        "secs": {
          "RM 01": 290,
          "RM 02": 760
        }
      },
      {
        "step": "Facility request",
        "secs": {
          "RM 01": 190,
          "RM 02": 150
        }
      },
      {
        "step": "Documents",
        "secs": {
          "RM 01": 550,
          "RM 02": 340
        }
      },
      {
        "step": "Review trade licence",
        "secs": {
          "RM 01": 220,
          "RM 02": 90
        }
      },
      {
        "step": "Ownership & shareholders",
        "secs": {
          "RM 01": 140,
          "RM 02": 70
        }
      },
      {
        "step": "Stakeholder details",
        "secs": {
          "RM 01": 120,
          "RM 02": 80
        }
      },
      {
        "step": "Consent request",
        "secs": {
          "RM 01": 270,
          "RM 02": 70
        }
      },
      {
        "step": "Co-borrowers",
        "secs": {
          "RM 01": 120,
          "RM 02": 40
        }
      },
      {
        "step": "Key management",
        "secs": {
          "RM 01": 180,
          "RM 02": 90
        }
      },
      {
        "step": "Bank accounts",
        "secs": {
          "RM 01": 440,
          "RM 02": 150
        }
      },
      {
        "step": "Contact points",
        "secs": {
          "RM 01": 100,
          "RM 02": 80
        }
      },
      {
        "step": "Review & submit",
        "secs": {
          "RM 01": 130,
          "RM 02": 10
        }
      }
    ]
  },
  {
    "journey": "Documents & References",
    "people": [
      "RM 01",
      "RM 02"
    ],
    "steps": [
      {
        "step": "Hub (RM 01 includes 12 min side discussion)",
        "secs": {
          "RM 01": 940,
          "RM 02": 190
        }
      },
      {
        "step": "KYC documents",
        "secs": {
          "RM 01": 260,
          "RM 02": 60
        }
      },
      {
        "step": "Stakeholder documents",
        "secs": {
          "RM 01": 350,
          "RM 02": 10
        }
      },
      {
        "step": "Financial documents",
        "secs": {
          "RM 01": 260,
          "RM 02": 200
        }
      },
      {
        "step": "Ejari documents",
        "secs": {
          "RM 01": 330,
          "RM 02": 370
        }
      },
      {
        "step": "Hand-off (submit or return)",
        "secs": {
          "RM 01": 280,
          "RM 02": 320
        }
      }
    ]
  },
  {
    "journey": "Financial Analysis review",
    "people": [
      "RM 01"
    ],
    "steps": [
      {
        "step": "Hub",
        "secs": {
          "RM 01": 290
        }
      },
      {
        "step": "Financial spreading",
        "secs": {
          "RM 01": 170
        }
      },
      {
        "step": "Entity selection",
        "secs": {
          "RM 01": 170
        }
      },
      {
        "step": "CreditLens (simulated)",
        "secs": {
          "RM 01": 20
        }
      },
      {
        "step": "Risk ratios",
        "secs": {
          "RM 01": 10
        }
      },
      {
        "step": "Hand-off (submit or return)",
        "secs": {
          "RM 01": 280
        }
      }
    ]
  },
  {
    "journey": "Financial Analysis (ARM)",
    "people": [
      "ARM 01"
    ],
    "steps": [
      {
        "step": "Hub",
        "secs": {
          "ARM 01": 130
        }
      },
      {
        "step": "Client Information (viewing)",
        "secs": {
          "ARM 01": 140
        }
      },
      {
        "step": "Financial spreading",
        "secs": {
          "ARM 01": 260
        }
      },
      {
        "step": "Entity selection",
        "secs": {
          "ARM 01": 130
        }
      },
      {
        "step": "CreditLens (simulated)",
        "secs": {
          "ARM 01": 70
        }
      },
      {
        "step": "Risk ratios",
        "secs": {
          "ARM 01": 260
        }
      },
      {
        "step": "Risk ratings & other",
        "secs": {
          "ARM 01": 160
        }
      },
      {
        "step": "Uploading more documents",
        "secs": {
          "ARM 01": 60
        }
      },
      {
        "step": "Hand-off (submit or return)",
        "secs": {
          "ARM 01": 30
        }
      }
    ]
  }
];

export const heatmap = {
  status: 'The click export holds 257 clicks, all from RM 01, across the three RM journeys. No clicks were captured for RM 02, ARM 01 or ARM 02, so this section covers only RM 01.',
  stats: [
    { label: 'Clicks (RM 01)', value: '257', note: 'Client Information 154, Documents 62, Review 41' },
    { label: 'Clicks outside the application', value: '44', note: 'In Leads and the call report, while trying to get back' },
    { label: 'Clicks on nothing clickable', value: '23', note: '9% of all clicks, mostly on labels' },
    { label: 'Back or Back to hub', value: '14', note: 'One, on the hub, led out of the application' }
  ],
  journeys: [
    { journey: 'Client Information', clicks: 154, minutes: 42, off: 10, outside: 0, top: 'Add stakeholder information (41), Add facility (15), Documents (12)' },
    { journey: 'Documents & References', clicks: 62, minutes: 27, off: 11, outside: 32, top: 'Leads and the call report (32), Facility Application hub (9), Ejari (8)' },
    { journey: 'Financial Analysis review', clicks: 41, minutes: 14, off: 2, outside: 12, top: 'Hub (11), Financial spreading (9), Leads and the call report (12)' }
  ],
  insights: [
    { title: 'Leaving the hub means starting again from Leads', theme: 'hub', text: 'In Documents, RM 01 went from the hub to KYC documents and “Back to Hub” three times in a minute, then pressed Back on the hub and left the application. It took 32 clicks in Leads and a new call report to get back in. The same happened in the Review, from the logo on the CreditLens screen (12 clicks). Over half of the Documents clicks were spent outside the application.' },
    { title: 'The resident toggle was clicked 8 times', theme: 'controls', text: '“Are you a UAE resident?” was clicked 8 times in about 90 seconds, with no other action in between. This matches the confusion heard in the recording about which position means resident.' },
    { title: 'The shareholding percentage fought back', theme: 'edit', text: 'On the shareholding field there were 10 clicks in 8 seconds, 3 of them on the “%” suffix and the empty space next to the input. RM 01 couldn’t place the cursor to change the value, and later deleted the shareholder instead of editing it.' },
    { title: 'Consent: five selections before choosing', theme: 'consent', text: 'RM 01 made five selections (Fatima, Abdullah, Omar, Fatima, Omar) and stayed on the screen for about four and a half minutes. A click on the screen background came first, while they were still reading.' },
    { title: 'Back and forth through the later steps', theme: 'edit', text: 'From Key management, RM 01 pressed Back three times to reach Ownership & shareholders, then Continue three times to return. From the Review & submit summary, they went back to Contact points to add one. There’s no way to jump to a step, so every fix is a walk through the stepper.' },
    { title: 'Bank account: toggle first, validate later', theme: 'controls', text: 'The UAEFTS toggle was clicked 3 times in 3 seconds, and “Validate IBAN” only 85 seconds later, after the facilitator explained why Save was disabled.' },
    { title: 'Hesitation at hand-offs', theme: 'end', text: 'RM 01 opened Submit to ARM and spent four and a half minutes in the dialog before submitting. In the Review they opened Return to ARM, cancelled it, and then confirmed the application.' },
    { title: 'Entity selection was chosen three times', theme: 'entity', text: 'RM 01 picked “Orient Insurance LLC” three times, going back to the hub in between. All three clicks were on the entity name, not the arrow.' },
    { title: 'Editing spreading metadata was found', theme: 'edit', text: 'In the Review, RM 01 did find and use the inline edit on the spreading summary (Method, Accountant and Analyst for 2023). Editing works once it is found; the problem is noticing it.' },
    { title: 'Long pages, buttons far down', theme: null, text: 'Continue and Submit were clicked 1,500 to 2,700 pixels down the page (Review & submit at 2,689, Financial documents at 2,086) on a 723-pixel-high window, so the main action sits two to four screens below the top.' }
  ],
  checks: [
    'Run the next round with the sessions in one browser, and export the click CSV after each participant, so RM 02 and both ARMs are captured too.',
    'Then compare: hub clicks on the Financial Analysis tile before it is the RM’s turn, ARM clicks on spreading values before finding the edit control, and clicks on totals looking for a breakdown.'
  ]
};

export const actions = [
  { when: 'Now', title: 'Rename the sections and key labels', detail: 'Test names such as “KYC & marketing clearance” for Client Information and “Financial documents for analysis” for Documents and References. Change “External accounts” to “Other bank accounts”, “Send to Perfios” to “Send for analysis”, “Submit” on the RM review to “Complete application”, and rewrite the income calculation intro for companies.', themes: ['names', 'end'] },
  { when: 'Now', title: 'Hide entity selection from RMs, and redesign it for ARMs', detail: 'Use a radio list with the entity’s legal name, CIF, last statement date and a “recommended: latest statements” hint, plus one line on why several entities exist in CreditLens.', themes: ['entity'] },
  { when: 'Now', title: 'Make editing visible', detail: 'Show an edit icon or editable cell style on spreading values, add “Edit” links on each block of the Review & submit summary, and let the over-100% error link straight to the field.', themes: ['edit'] },
  { when: 'Now', title: 'Clarify hub status and navigation', detail: 'Keep a “Not started” tile visibly clickable, lock the Financial Analysis tile for the RM until the ARM submits, show “Analysis ready for your review” with a clear call to action when it comes back, and keep a single “Back to hub”.', themes: ['hub'] },
  { when: 'Now', title: 'Fix the form controls', detail: 'Replace the resident toggle with Yes/No options, make placeholder examples clearly grey hint text, accept amounts like 25M, and explain why Continue is disabled (“Validate the IBAN to continue”).', themes: ['controls'] },
  { when: 'Next', title: 'Decide whether the consent step stays', detail: 'Confirm with Legal and the BA whether the AECB consent from account opening covers this; keep a step only for UAEFTS, with one sentence on what is being consented to and who can give it.', themes: ['consent'] },
  { when: 'Next', title: 'Restructure Financial documents', detail: 'Group into Financial statements, Receivables and payables (with retention receivables), Bank statements, and Other supporting documents (Ejari, contracts, project lists, projected cash flows, other banks’ offer letters, approved counterparties). Mark optional items clearly. Test this section on its own with RMs from contracting and real estate.', themes: ['docs'] },
  { when: 'Next', title: 'Show sources and working for generated data', detail: 'Add a source tag (Finacle, Maktaba, document, manual) to prefilled fields; let ARMs open a total to see its line items; show auditor, period length, audited or in-house and audit opinion with each statement.', themes: ['trust'] },
  { when: 'Next', title: 'Agree who uploads documents', detail: 'Today ARMs upload. Decide with the BA/PO whether RMs, ARMs or both upload, and show “Uploaded by” on each document. Check that the hub doesn’t imply analysis starts before marketing clearance.', themes: ['process'] },
  { when: 'Next', title: 'Run the next round as tasks, not walkthroughs', detail: 'Keep explanations until after each task, use the planned times as a limit, and record ARM 02 and the RM 02 Review in full. Run the sessions on one browser and export the click data afterwards.', themes: [] },
  { when: 'Later', title: 'Customer background and narratives', detail: 'Promoter net worth, business model, top suppliers and buyers, and group companies (planned for MVP 2).', themes: ['names'] },
  { when: 'Later', title: 'In-house versus audited comparison', detail: 'Show both sets of figures for the same period with the variance, for credit conditions such as “within 10%”.', themes: ['process'] },
  { when: 'Later', title: 'Analysis on screen, not in Excel', detail: 'Move the Perfios outputs (cash flow, receivables, VAT, bank statements, Ejari) onto screens, and carry reclassifications into the next year’s upload.', themes: ['trust'] }
];

export const method = [
  'Source: nine screen and audio recordings from the research site (RM 01 three journeys, RM 02 three, ARM 01 one, ARM 02 one). Duplicate uploads were checked and skipped.',
  'Audio was transcribed automatically, then each problem was checked against what was on screen at that moment. The transcript doesn’t separate speakers, so a quote marked “(team)” was said by the project team, not the participant. Quotes are lightly cleaned for readability.',
  'Step times come from reading the screen every 10 seconds, so each value is accurate to about 10 seconds. The time on the “How was this task?” screen is left out.',
  'Sessions were heavily facilitated: the facilitator and BA often explained a screen before the participant tried it. Treat findings as “what people didn’t understand without help”, and don’t read the timings as unaided task times.',
  'RM 02’s Review (27 seconds) and ARM 02’s session (5 minutes) were only partly recorded, so those journeys have thin evidence.',
  'Clicks come from the research site’s click export (RM 01 only). “Outside the application” counts clicks on the Leads and call report screens that a participant reached after leaving the hub.'
];

round.stats[2].value = String(byParticipant.reduce((n, p) => n + p.problems.length, 0));
round.stats[3].value = String(themes.length);
