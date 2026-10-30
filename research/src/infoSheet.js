// Participant Information Sheet: step 1 of the participant session, after Welcome and before Consent.
// One versioned source for the page (and for infoSheetHtml below, which is kept but not offered as a download).
// Structure follows the uploaded Middlesex (MDX) template, adapted to this study. Nothing from the earlier
// MDX study (topic, university, ethics committee, team) is reused.
//
// DRAFT: every `{ tbc: key }` below is a detail nobody has confirmed yet. It renders as a visible
// "To be confirmed" marker. Replace each one with agreed wording, remove it from `pending`, then set
// `status: 'final'` and bump `version` before this sheet is used with participants.
// The version is saved with each consent record, so change it whenever the wording changes.

export const infoSheet = {
  version: '0.1',
  status: 'draft',          // 'draft' | 'final'
  updated: '30 October 2026',
  label: 'Before we begin',
  title: 'About this research',
  intro: 'Please read this information before deciding whether to take part. Take your time, and ask your facilitator if anything is unclear.',
  contact: { name: 'Saba Shaikh', role: 'Senior Product Designer', email: 'sabash@emiratesnbd.com', phone: '+971 55 328 9032' },

  // Unconfirmed details. Keys are referenced from the sections below.
  pending: {
    recordingCapture: 'How screen and audio recordings are captured and where they are stored'
  },

  // Each paragraph is an array of parts: a string, or { tbc: key }, or { roleList: true }.
  // `{role}`, `{code}` and `{minutes}` in strings are filled per participant.
  sections: [
    {
      id: 'about',
      heading: 'What is this research about?',
      body: [
        ['We’re evaluating a proposed new experience for preparing and reviewing credit proposals at Emirates NBD. The study looks at how well it supports your everyday work and where it needs to improve.'],
        ['You’ll be using a prototype: a design in progress, not the finished system. Some functions are simulated.']
      ]
    },
    {
      id: 'invited',
      heading: 'Why have I been invited?',
      body: [
        ['You’ve been invited because you work as a {role}. Your responsibilities are relevant to the parts of the application being tested, so your experience helps show whether the design works for the people who will use it.']
      ]
    },
    {
      id: 'do',
      heading: 'What will I do?',
      body: [
        ['The session is guided by a facilitator and takes about {minutes} minutes.'],
        ['You’ll try realistic tasks in the prototype, one at a time. As you go, please think aloud: say what you’re looking for, what you expect to happen and anything that feels unclear. After each task, and at the end, you’ll answer a few short questions about your experience.'],
        ['As a {role}, you’ll explore:'],
        [{ roleList: true }],
        ['You don’t need to finish every task. There are no right or wrong answers.']
      ]
    },
    {
      id: 'voluntary',
      heading: 'Do I have to take part?',
      body: [
        ['No. Taking part is voluntary, and it’s fine to decide not to.'],
        ['If you do take part, you can pause, skip a task or stop at any time, without giving a reason. You can also ask for your information to be withdrawn at any time (see below).'],
        ['If you later want your information withdrawn, see “Can I withdraw my information?” below.']
      ]
    },
    {
      id: 'recording',
      heading: 'Will the session be recorded?',
      body: [
        ['We’d like to make two kinds of recording. Each is optional, and you can agree to one, both or neither.'],
        [{ strong: 'Screen recording. ' }, 'A recording of the prototype on screen while you complete the tasks, so we can review where the design worked and where it didn’t.'],
        [{ strong: 'Audio recording. ' }, 'A recording of what is said during the session, so we can check your comments accurately when writing up findings.'],
        ['You’ll make your recording choices on the next screen. Nothing is recorded on this page, and it doesn’t ask for access to your screen or microphone.'],
        ['How recordings are made and kept: ', { tbc: 'recordingCapture' }]
      ]
    },
    {
      id: 'risks',
      heading: 'Are there any risks or benefits?',
      body: [
        ['We’re evaluating the design, not you. Nothing in this session is an assessment of your performance. If any question or task feels uncomfortable, you can skip it.'],
        ['There’s no direct personal benefit from taking part. Your feedback can help inform improvements to the credit proposal experience, but we can’t promise that any particular change will follow or that it will save time.']
      ]
    },
    {
      id: 'handling',
      heading: 'How will my information be handled?',
      groups: [
        { label: 'What we collect', body: [['Your participant code ({code}) and role; your answers to the questions in this session, including task ratings and any optional note; the times you start and finish each task; the facilitator’s observations; your name and signature on the consent form; and, only if you agree, screen and audio recordings.']] },
        { label: 'Where it’s stored', body: [['Your answers are stored in this browser on this device. They aren’t sent to a server and don’t sync to other devices.']] },
        { label: 'Who can see it', body: [['The project’s product owner (PO), business analyst (BA), Saba Shaikh (designer) and the lead designer.']] },
        { label: 'Recordings', body: [['Only made if you agree on the next screen. ', { tbc: 'recordingCapture' }]] }
      ]
    },
    {
      id: 'findings',
      heading: 'How will the findings be used?',
      body: [
        ['Findings will be written up in internal research reports and used to decide what to change in the credit proposal design.'],
        ['We may quote what you say. Quotes are attributed only to your participant code, such as {code}, and never to your name. Reports describe what we learned across sessions, not how any individual performed.']
      ]
    },
    {
      id: 'withdraw',
      heading: 'Can I withdraw my information?',
      body: [
        ['Yes, you can withdraw your information at any time. Contact Saba Shaikh by email or phone (see below) and quote your participant code, {code}.']
      ]
    },
    {
      id: 'contact',
      heading: 'Who can I contact?',
      body: [
        ['If you have questions about this research, before or after the session, please contact:'],
        [{ contact: true }],
        ['During the session, you can also ask your facilitator.']
      ]
    }
  ]
};

export const isDraft = () => infoSheet.status !== 'final' || Object.keys(infoSheet.pending).length > 0;
export const infoSheetVersionLabel = () => `Version ${infoSheet.version}${isDraft() ? ' (draft)' : ''}`;

export function fill(text, ctx) {
  return text.replace(/\{(role|code|minutes)\}/g, (_, k) => ctx[k]);
}

// Standalone HTML copy built from the same content and version. Not linked from the page (the download button was
// removed at Saba's request); kept so it can be offered again or printed by the facilitator.
export function infoSheetHtml(ctx) {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const part = x => {
    if (typeof x === 'string') return esc(fill(x, ctx));
    if (x.strong) return `<strong>${esc(x.strong)}</strong>`;
    if (x.tbc) return `<mark>To be confirmed: ${esc(infoSheet.pending[x.tbc] || x.tbc)}</mark>`;
    if (x.roleList) return `<ul>${ctx.journeys.map(j => `<li>${esc(j)}</li>`).join('')}</ul>`;
    if (x.contact) {
      const c = infoSheet.contact;
      return `<strong>${esc(c.name)}</strong><br>${esc(c.role)}<br>Email: ${esc(c.email)}<br>Phone: ${esc(c.phone)}`;
    }
    return '';
  };
  const para = p => (p.length === 1 && (p[0].roleList) ? part(p[0]) : `<p>${p.map(part).join('')}</p>`);
  const body = infoSheet.sections.map((s, i) => `
<h2>${i + 1}. ${esc(s.heading)}</h2>
${(s.body || []).map(para).join('\n')}${(s.groups || []).map(g => `
<h3>${esc(g.label)}</h3>
${g.body.map(para).join('\n')}`).join('')}`).join('\n');
  const draft = isDraft() ? `<p class="draft">Draft for review. Items marked “To be confirmed” must be agreed before this sheet is used with participants.</p>` : '';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(infoSheet.title)} – ${esc(ctx.code)} – ${esc(infoSheetVersionLabel())}</title>
<style>
body{margin:0;background:#fff;color:#1A1F2C;font:16px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}
main{max-width:720px;margin:0 auto;padding:48px 24px 64px}
.label{margin:0;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#5B6478}
h1{margin:8px 0 0;font-size:32px;line-height:1.2;font-weight:500;color:#182F7C}
.meta{margin:12px 0 0;font-size:14px;color:#5B6478}
.intro{font-size:18px}
h2{margin:40px 0 8px;font-size:20px;line-height:1.35;font-weight:600;color:#182F7C}
h3{margin:20px 0 4px;font-size:16px;font-weight:600}
p{margin:8px 0 0}ul{margin:8px 0 0;padding-left:22px}
mark{background:#FFF4D6;color:#5A4300;padding:1px 4px;border-radius:4px}
.draft{margin-top:20px;padding:12px 16px;border:1px solid #F0D9A0;background:#FFFAEC;border-radius:8px;font-size:14px}
@media print{main{padding:0}h2{break-after:avoid}}
</style></head>
<body><main>
<p class="label">Emirates NBD · Credit Proposal usability research</p>
<h1>${esc(infoSheet.title)}</h1>
<p class="meta">Participant ${esc(ctx.code)} · ${esc(ctx.role)} · ${esc(infoSheetVersionLabel())}, updated ${esc(infoSheet.updated)}</p>
${draft}
<p class="intro">${esc(infoSheet.intro)}</p>
${body}
</main></body></html>
`;
}
