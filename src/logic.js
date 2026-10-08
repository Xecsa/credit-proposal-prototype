import React from 'react';

export class ProtoLogic extends React.Component {
state = {
phase: 'selfList', collapsed: false, created: false,
name: '', desc: '', cifText: '', client: '',
date: new Date().toISOString().slice(0, 10), start: '', end: '', topic: '', location: '',
participants: [''], files: [], draftSaved: false,
messages: [], draft: '', recording: false, recSecs: 0, answered: false, choice: '',
fdp: '', fdpView: 'date', fdpYear: 2026, fdpMonth: 0, fdpPick: '', fdpYearStart: 2016, gdp: '', gdpView: 'date', gdpYear: 2026, gdpMonth: 0, gdpPick: '', gdpYearStart: 2016, gdpTop: '0px', gdpLeft: '0px', dpOpen: false, dpView: 'date', dpYear: new Date().getFullYear(), dpMonth: new Date().getMonth(), dpPick: '', dpYearStart: new Date().getFullYear() - 10,
tpOpen: '', tpH: '12', tpM: '00', tpP: 'PM', topicOpen: false,
selfQuery: '', selfSearched: false, selfNote: '', selfUploads: [], listSearch: '', listStatus: '', listOpen: '',
facilities: [
{ id: 1, seed: true, title: 'Term loan', type: 'Cross-sell', product: 'LC Import', limit: '10,000,000', purpose: 'To secure a line of credit for importing specialized equipment from Trillium Technologies, enhancing our manufacturing capabilities.' },
{ id: 2, seed: true, title: 'Project specific', type: 'Cross-sell', product: 'LC Import', limit: '20,000,000', purpose: 'To secure a line of credit for importing specialized equipment from Trillium Technologies, enhancing our manufacturing capabilities.' }
],
facSeq: 2, facMenu: 0, facDelete: 0, facEdit: 0, fType: '', fProduct: '', fLimit: '', fPurpose: '', fOpen: '',
facLoading: false, docsUp: { tl: true, moa: true }, docsAuto: { tl: true, moa: true }, docStage: '', docMenu: '', docDelete: '',
tlOpen: '', tlDrop: '', tlSaved: null, tlForm: null, tlCtMobile: '', tlCtSaved: '',
ownDone: false, shStep: 'docs', shDocs: '', shMenu: '', shDrop: '', shEdit: '',
shF: { title: '', first: 'Ahmed', last: 'Al-Hassan', role: '', nat: 'United Arab Emirates', email: '', mobile: '', gender: 'Male' },
shT: { uae: true, ruling: false, sign: false, borrow: false },
mf: { eidNo: '784-1990-1234567-1', eidIssue: '29/06/2026', eidExpiry: '30/06/2028', ppNo: 'AB1234567', ppDob: '15/05/1978', ppExpiry: '30/06/2028', ppIssue: '29/06/2026' },
consent: '', cob: {}, bankSel: {}, bankAdded: false, bankToast: false, bankExt: { m: [], c: [] }, bankTarget: 'm', bankSeq: 0,
acIban: '', acAge: '', acStage: '', acConfirm: true, acUae: true, clientDone: false,
shMode: '', addType: '', addDocs: '', ownExtra: [], ownDel: false, ownGone: false,
docsDone: false, finReady: false, finDone: false, finXls: false, dSeq: 10, dAoaErr: false, dCat: 0, dCatType: '', dSearch: '', finFrom: '', finTo: '',
dKyc: { tl: [], moa: [], aoa: [], aoa2: [], br: [], org: [], other: [] }, dKycConf: {},
dFin: { aud: [{ id: 2, name: 'max-financials.pdf', st: 'ok', year: '2026' }, { id: 3, name: 'max-financials.pdf', st: 'ok', year: '2025' }, { id: 4, name: 'max-financials.pdf', st: 'ok', year: 'Select year' }],
inh: [{ id: 5, name: 'max-financials.pdf', st: 'ok', year: '2026' }, { id: 6, name: 'max-financials.pdf', st: 'ok', year: '2025' }, { id: 7, name: 'max-financials.pdf', st: 'ok', year: 'Select year' }],
rec: [], bank: [], vat: [], cbrb: [], aecb: [] }, dFinConf: {},
cpList: [], cpSeq: 0, cpMenu: 0, cpEdit: 0, cpDel: 0, cpSel: {}, cpF: { name: '', rel: 'Associate', mobile: '', email: '' },
finVals: {}, finEditId: '', finDraft: '',
kmList: [], kmSeq: 0, kmMenu: 0, kmEdit: 0, kmDel: 0, kmDrop: '', kmSel: {}, kmNarr: '',
kmF: { title: 'Ms', first: 'Maryam', last: 'Al-Mansoor', role: '', years: '', qual: '', summary: '', nat: 'United Arab Emirates', email: '', mobile: '' },
addF: { title: '', first: 'Abdullah', last: 'Rahim', role: 'Director', nat: 'United Arab Emirates', email: '', mobile: '', gender: 'Male' },
addT: { uae: true, ruling: false, sign: false, borrow: false }
};

seq = 0;
timers = [];
chatRef = (el) => { this.chatEl = el; };
popRef = (el) => { this.popEl = el; };

componentDidUpdate(prevProps, prevState) {
if (this.chatEl && prevState && prevState.messages !== this.state.messages) {
this.chatEl.scrollTop = this.chatEl.scrollHeight;
}
const st = this.state;
const opened = prevState && ((st.dpOpen && (!prevState.dpOpen || st.dpView !== prevState.dpView)) || (st.tpOpen && st.tpOpen !== prevState.tpOpen) || (st.topicOpen && !prevState.topicOpen));
if (opened && this.popEl && this.popEl.scrollIntoView) this.popEl.scrollIntoView({ block: 'center' });
}

componentWillUnmount() {
this.timers.forEach((t) => clearTimeout(t));
clearInterval(this.recTimer);
}

now() {
const d = new Date();
return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

msg(from, kind, text) {
this.seq += 1;
return { id: this.seq, from: from, kind: kind, text: text || '', time: this.now() };
}

push(list) {
this.setState({ messages: this.state.messages.concat(list) });
}

later(ms, fn) {
this.timers.push(setTimeout(fn, ms));
}

respond() {
if (this.state.answered) {
this.later(700, () => this.push([this.msg('bot', 'text', 'Thanks, I have added that to the call report.')]));
return;
}
this.setState({ answered: true });
this.later(300, () => this.push([this.msg('bot', 'typing')]));
this.later(1900, () => {
const kept = this.state.messages.filter((m) => m.kind !== 'typing');
this.setState({ messages: kept.concat([this.msg('bot', 'summary')]) });
});
this.later(2800, () => this.push([this.msg('bot', 'actions')]));
}

choose(label, reply) {
this.setState({
choice: label,
messages: this.state.messages.concat([this.msg('me', 'text', label), this.msg('bot', 'text', reply)])
});
}

renderVals() {
const s = this.state;
const ovP = (ph) => ph === 'selfFacForm' || ph === 'selfSh' || ph === 'selfAcct' || ph === 'selfKmForm' || ph === 'selfCpForm';
const set = (o) => { if (o && o.phase && ovP(o.phase) && !ovP(this.state.phase)) { o = Object.assign({}, o, { ovLoad: true }); this.later(700, () => this.setState({ ovLoad: false })); } this.setState(o); };
const edit = (o) => this.setState(Object.assign({ draftSaved: false }, o));
const GRADIENT = 'linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)';
const GRADIENT_OFF = 'linear-gradient(95.67deg, #d7dae5 0%, #a4a7af 100%)';

const to12 = (t) => {
if (!t) return '';
const parts = t.split(':');
const h = Number(parts[0]);
return ((h % 12) || 12) + ':' + parts[1] + (h < 12 ? 'AM' : 'PM');
};
const longDate = (iso) => {
if (!iso) return '';
const p = iso.split('-');
const day = Number(p[2]);
const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
return day + suffix + ' ' + months[Number(p[1]) - 1] + ' ' + p[0];
};
const initials = (n) => n.trim().split(/\s+/).slice(0, 2).map((w) => w.charAt(0).toUpperCase()).join('');

const canCreate = !!(s.name.trim() && s.client && s.date && s.start && s.end && s.topic && s.location);
const names = s.participants.map((p) => p.trim()).filter(Boolean);
const sampleFiles = ['Boardofresolution.pdf', 'MOA.pdf'];
const pattern = [2, 6, 8, 2, 10, 8, 6, 6, 6, 8, 6, 10, 6, 2, 2, 2, 8, 14, 4, 16, 14, 10, 4, 4];
const bars = pattern.concat(pattern, pattern).map((h) => ({ h: h }));

const messages = s.messages.map((m) => ({
text: m.text, time: m.time, bars: bars,
align: m.from === 'me' ? 'flex-end' : 'flex-start',
isBotText: m.from === 'bot' && m.kind === 'text',
isMeText: m.from === 'me' && m.kind === 'text',
isAudio: m.kind === 'audio', isTyping: m.kind === 'typing',
isSummary: m.kind === 'summary', isActions: m.kind === 'actions',
open: !s.choice,
startFacility: () => set({ phase: 'selfHub', selfNote: '' }),
followUp: () => this.choose('Schedule follow-up', 'Scheduling a follow-up is not part of this prototype yet.'),
closeLead: () => this.choose('Close lead', 'Closing the lead is not part of this prototype yet.')
}));

const pad2 = (n) => String(n).padStart(2, '0');
const iso = (y, m, d) => y + '-' + pad2(m + 1) + '-' + pad2(d);
const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const nowD = new Date();
const todayIso = iso(nowD.getFullYear(), nowD.getMonth(), nowD.getDate());
const RING = 'inset 0 0 0 1.5px #1b48b5';
const firstDow = new Date(s.dpYear, s.dpMonth, 1).getDay();
const daysIn = new Date(s.dpYear, s.dpMonth + 1, 0).getDate();
const cells = [];
for (let i = 0; i < firstDow; i++) cells.push({ isDay: false });
for (let d = 1; d <= daysIn; d++) {
const id = iso(s.dpYear, s.dpMonth, d);
const sel = id === s.dpPick;
cells.push({
isDay: true, label: String(d), aria: d + ' ' + fullMonths[s.dpMonth] + ' ' + s.dpYear,
pressed: sel ? 'true' : 'false',
bg: sel ? '#1b48b5' : '#ffffff', fg: sel ? '#ffffff' : '#072447',
ring: id === todayIso && !sel ? RING : 'none',
pick: () => set({ dpPick: id })
});
}
while (cells.length % 7) cells.push({ isDay: false });
const dpWeeks = [];
for (let i = 0; i < cells.length; i += 7) dpWeeks.push({ days: cells.slice(i, i + 7) });
const dpMonths = shortMonths.map((m, i) => ({
label: m.toUpperCase(), aria: fullMonths[i] + ' ' + s.dpYear,
ring: i === s.dpMonth ? RING : 'none',
pick: () => set({ dpMonth: i, dpView: 'date' })
}));
const dpYears = [];
for (let i = 0; i < 12; i++) {
const y = s.dpYearStart + i;
dpYears.push({ label: String(y), aria: String(y), ring: y === s.dpYear ? RING : 'none', pick: () => set({ dpYear: y, dpView: 'month' }) });
}
const shiftMonth = (by) => {
const d = new Date(s.dpYear, s.dpMonth + by, 1);
set({ dpYear: d.getFullYear(), dpMonth: d.getMonth() });
};
const dateParts = s.date ? s.date.split('-') : null;
const fdpCells = []; { const fd = new Date(s.fdpYear, s.fdpMonth, 1).getDay(); const fn = new Date(s.fdpYear, s.fdpMonth + 1, 0).getDate();
for (let i = 0; i < fd; i++) fdpCells.push({ isDay: false });
for (let d = 1; d <= fn; d++) { const id = iso(s.fdpYear, s.fdpMonth, d); const sel = id === s.fdpPick;
fdpCells.push({ isDay: true, label: String(d), aria: d + ' ' + fullMonths[s.fdpMonth] + ' ' + s.fdpYear, pressed: sel ? 'true' : 'false', bg: sel ? '#1b48b5' : '#ffffff', fg: sel ? '#ffffff' : '#072447', ring: id === todayIso && !sel ? RING : 'none', pick: () => set({ fdpPick: id }) }); }
while (fdpCells.length % 7) fdpCells.push({ isDay: false }); }
const fdpWeeks = []; for (let i = 0; i < fdpCells.length; i += 7) fdpWeeks.push({ days: fdpCells.slice(i, i + 7) });
const fdpMonths = shortMonths.map((m, i) => ({ label: m.toUpperCase(), aria: fullMonths[i] + ' ' + s.fdpYear, ring: i === s.fdpMonth ? RING : 'none', pick: () => set({ fdpMonth: i, fdpView: 'date' }) }));
const fdpYears = []; for (let i = 0; i < 12; i++) { const y = s.fdpYearStart + i; fdpYears.push({ label: String(y), aria: String(y), ring: y === s.fdpYear ? RING : 'none', pick: () => set({ fdpYear: y, fdpView: 'month' }) }); }
const fdpShift = (by) => { const d = new Date(s.fdpYear, s.fdpMonth + by, 1); set({ fdpYear: d.getFullYear(), fdpMonth: d.getMonth() }); };
const fdpParse = (v) => { const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec((v || '').trim()); return m ? { y: Number(m[3]), mo: Number(m[2]) - 1, d: Number(m[1]) } : null; };
const fdpToggle = (which) => () => { if (s.fdp === which) { set({ fdp: '' }); return; } const cur = fdpParse(which === 'from' ? s.finFrom : s.finTo); const base = cur ? new Date(cur.y, cur.mo, 1) : new Date();
set({ fdp: which, fdpView: 'date', fdpPick: cur ? iso(cur.y, cur.mo, cur.d) : '', fdpYear: base.getFullYear(), fdpMonth: base.getMonth() }); };

const tpOption = (key, value) => {
const on = s[key] === value;
const patch = {}; patch[key] = value;
return { label: value, pressed: on ? 'true' : 'false', bg: on ? '#e7efff' : '#ffffff', fg: on ? '#1b48b5' : '#072447', pick: () => set(patch) };
};
const timeFields = [['start', 'Start time'], ['end', 'End time']].map((f) => {
const value = s[f[0]];
const open = s.tpOpen === f[0];
return {
popRef: this.popRef, label: f[1], aria: f[1] + (value ? ', ' + to12(value) : ''), dialog: 'Choose ' + f[1].toLowerCase(),
text: value ? to12(value) : 'Select', fg: value ? '#072447' : '#50647c',
open: open, expanded: open ? 'true' : 'false', line: open ? '#2765ff' : '#d0d5de',
toggle: () => {
if (open) { set({ tpOpen: '' }); return; }
let h = '12', m = '00', per = 'PM';
if (value) {
const parts = value.split(':');
const hh = Number(parts[0]);
h = pad2((hh % 12) || 12); m = parts[1]; per = hh < 12 ? 'AM' : 'PM';
}
set({ tpOpen: f[0], tpH: h, tpM: m, tpP: per, dpOpen: false, topicOpen: false });
}
};
});

const inChat = s.phase === 'chat';
const inSelf = s.phase.indexOf('self') === 0 || s.phase.indexOf('docs') === 0;
const goSelf = (phase) => () => set({ phase: phase, selfNote: '', listOpen: '', facMenu: 0, facDelete: 0, docMenu: '', docDelete: '', docStage: '', tlOpen: '', tlDrop: '', shDrop: '', shEdit: '', shMenu: '', bankToast: false, kmMenu: 0, kmDrop: '', kmDel: 0, cpMenu: 0, cpDel: 0 });
const inFacForm = s.phase === 'selfFacForm';
const docDefs = [
['tl', 'Trade license', 'An official government-issued permit authorising a business to operate and trade within the UAE.', true, 'TL2024.pdf'],
['moa', 'Memorandum of Association (MOA)', "A document that outlines a company's objectives, structure, and fundamental rules.", true, 'MOA.pdf'],
['aoa', 'Articles of Association (AOA)', "A document governing a company's internal rules — covering shareholder rights, director powers, and voting procedures.", false, 'AOA.pdf'],
['br', 'Board Resolution(s)', "A formal record of a decision passed by the company's board, authorising specific actions such as signing agreements or appointing signatories.", false, 'Board resolution.pdf'],
['ss', 'Shareholding Structure (Organogram)', "A document or diagram showing how ownership is distributed across a company's shareholders.", false, 'Organogram.pdf']
];
const docRows = docDefs.map((d) => {
const up = !!s.docsUp[d[0]];
const open = s.docMenu === d[0];
return {
title: d[1], desc: d[2], uploaded: up, showRequired: d[3] && !up, autoFetched: up && !!s.docsAuto[d[0]],
menuLabel: 'Actions for ' + d[1], expanded: open ? 'true' : 'false', menuUploaded: open && up, menuEmpty: open && !up,
toggleMenu: () => set({ docMenu: open ? '' : d[0] }),
upload: () => set({ docMenu: '', docStage: 'picker' }),
view: () => set({ docMenu: '' }),
del: () => set({ docMenu: '', docDelete: d[0] })
};
});
const docsReady = !!(s.docsUp.tl && s.docsUp.moa);
const dView = (group, confName, key, f) => ({
name: f.name, info: f.info || '', ok: f.st === 'ok', err: f.st === 'err', warn: f.st === 'warn', hasYear: !!f.year, year: f.year || '', removable: true,
removeLabel: 'Remove ' + f.name,
remove: () => { const o = Object.assign({}, s[group]); o[key] = o[key].filter((x) => x.id !== f.id); const p = {}; p[group] = o; set(p); },
categorize: () => set({ dCat: f.id, dCatType: '' })
});
const dBox = (confName, key) => { const on = !!s[confName][key]; return { on: on ? 'true' : 'false', checked: on, unchecked: !on, toggle: () => { const o = Object.assign({}, s[confName]); o[key] = !on; const p = {}; p[confName] = o; set(p); } }; };
const dAdd = (group, confName, key, files, extra) => { const o = Object.assign({}, s[group]); let seq = s.dSeq; o[key] = o[key].filter((x) => x.st !== 'err').concat(files.map((f) => Object.assign({ id: ++seq }, f))); const c = Object.assign({}, s[confName]); if (files.some((f) => f.st === 'ok')) c[key] = true; const p = Object.assign({ dSeq: seq }, extra || {}); p[group] = o; p[confName] = c; set(p); };
const kycDefs = [
['tl', 'Trade license', 'An official government-issued permit authorising a business to operate and trade within the UAE.', 'Trade-license.pdf'],
['moa', 'Memorandum of Association (MOA)', "A document that outlines a company's objectives, structure, and fundamental rules.", 'MOA.pdf'],
['aoa', 'Articles of Association (AOA)', "A document governing a company's internal rules — covering shareholder rights, director powers, and voting procedures.", 'AOA.pdf'],
['aoa2', 'Articles of Association (AOA)', "A document governing a company's internal rules — covering shareholder rights, director powers, and voting procedures.", 'AoA.pdf'],
['br', 'Board Resolution(s)', "A formal record of a decision passed by the company's board, authorising specific actions such as signing agreements or appointing signatories.", 'Board-resolution.pdf'],
['org', 'Shareholding Structure/Organogram (optional)', "A document or diagram showing how ownership is distributed across a company's shareholders.", 'Organogram.pdf'],
['other', 'Other documents', 'Any additional documents relevant to this application', 'other-document.pdf']
];
const dKycSecs = kycDefs.map((d) => { const key = d[0]; const files = s.dKyc[key]; return {
title: d[1], desc: d[2], uploadLabel: 'Upload', uploadAria: 'Upload ' + d[1], hasDates: false,
files: files.map((f) => dView('dKyc', 'dKycConf', key, f)), showConfirm: key !== 'other' && files.length > 0, box: dBox('dKycConf', key),
upload: () => {
if (key === 'aoa2' && !s.dAoaErr) dAdd('dKyc', 'dKycConf', key, [{ name: 'AoA.jpeg', st: 'err', info: 'Document size exceeds 25MB limit' }], { dAoaErr: true });
else dAdd('dKyc', 'dKycConf', key, [{ name: d[3], st: 'ok' }]);
}
}; });
const dKycOk = true;
const dCatFile = s.dKyc.other.find((f) => f.id === s.dCat);
const finDefs = [
['aud', 'Audited financial statements', 'These are financial statements of the company that have been examined and verified by an independent auditor.', 'Upload'],
['inh', 'In-house financial statements', 'Latest audited financials of the last 3 years', 'Upload'],
['rec', 'Account Receivables', 'A detailed accounts receivable report showing outstanding invoices, customer balances, due dates, and aging status.', 'Upload'],
['bank', 'Bank Statements (Past 12 months)', 'Complete bank statements for all business accounts covering the most recent 12 months.', 'Upload (optional)'],
['vat', 'VAT Reports', 'VAT filings or returns, if your company is VAT registered.', 'Upload'],
['cbrb', 'CBRB Report', 'A current CBRB report showing the company’s credit history, active facilities, and outstanding obligations.', 'Upload'],
['aecb', 'AECB Report', 'A current AECB report showing the company’s credit history, active facilities, and outstanding obligations.', 'Upload']
];
const finNew = (key) => {
const n = s.dFin[key].length;
if (key === 'aud' || key === 'inh') return [{ name: 'max-financials.pdf', st: 'ok', year: 'Select year' }];
if (key === 'rec') return [{ name: 'max-accounts.pdf', st: 'ok' }];
if (key === 'bank') return n ? [{ name: 'max-q' + (n + 1) + '.pdf', st: 'ok' }] : [1, 2, 3, 4].map((q) => ({ name: 'max-q' + q + '.pdf', st: 'ok' }));
return [{ name: key + '-report.pdf', st: 'ok' }];
};
const dFinSecs = finDefs.map((d) => { const key = d[0]; const files = s.dFin[key]; return {
title: d[1], desc: d[2], uploadLabel: d[3], uploadAria: d[3] + ': ' + d[1], hasDates: key === 'bank',
from: s.finFrom, to: s.finTo, setFrom: (e) => set({ finFrom: e.target.value }), setTo: (e) => set({ finTo: e.target.value }),
files: files.map((f) => dView('dFin', 'dFinConf', key, f)), showConfirm: files.length > 0, box: dBox('dFinConf', key),
upload: () => dAdd('dFin', 'dFinConf', key, finNew(key), key === 'bank' && !s.finFrom && !s.finTo ? { finFrom: '12/01/2023', finTo: '12/02/2026' } : null)
}; });
const dFinOk = true;
const stkPeople = [['Mostafa Hamed', 'Director'], ['Fatima Ahmed Ali', 'Director'], ['Mo Ahmed Ali', 'POA']];
const dq = s.dSearch.trim().toLowerCase();
const dStkGroups = stkPeople.filter((p) => !dq || p[0].toLowerCase().indexOf(dq) >= 0).map((p) => ({ title: p[0], desc: p[1],
files: ['Passport.pdf', 'EID-1.pdf', 'EID-2.pdf'].map((n) => ({ name: n, ok: true, err: false, warn: false, hasYear: false, year: '', removable: false, info: '' })) }));
const goDocs = (phase) => () => set({ phase: phase, dCat: 0 });
const inModalPhase = s.phase === 'selfSh' || s.phase === 'selfAcct' || s.phase === 'selfKmForm' || s.phase === 'selfCpForm';
const ON = 'linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)';
const OFF = 'linear-gradient(95.67deg, #d7dae5 0%, #a4a7af 100%)';
const btnBg = (ok) => ok ? ON : OFF;
const btnCur = (ok) => ok ? 'pointer' : 'not-allowed';
const sw = (on, flip, dark) => ({ on: on ? 'true' : 'false', left: on ? '26px' : '2px', bg: on ? dark : '#ffffff', toggle: flip });
const box = (on, flip) => ({ on: on ? 'true' : 'false', checked: !!on, unchecked: !on, toggle: flip });
const adding = s.shMode === 'add';
const fKey = adding ? 'addF' : 'shF'; const tKey = adding ? 'addT' : 'shT'; const dKey = adding ? 'addDocs' : 'shDocs';
const isPoa = adding && s.addType === 'poa';
const shF = s[fKey]; const shTState = s[tKey]; const shDocState = s[dKey];
const put = (key, val, extra) => { const o = Object.assign({}, extra || {}); o[key] = val; set(o); };
const shSet = {};
['first', 'last', 'email', 'mobile'].forEach((k) => { shSet[k] = (e) => { const o = Object.assign({}, shF); o[k] = e.target.value; put(fKey, o); }; });
const shSelect = (key, options, placeholder) => {
const open = s.shDrop === key;
return {
text: shF[key] || placeholder, fg: shF[key] ? '#000000' : '#575757', open: open, expanded: open ? 'true' : 'false', line: open ? '#2765ff' : '#d7dae5',
toggle: () => set({ shDrop: open ? '' : key }),
options: options.map((o) => ({ label: o, selected: shF[key] === o ? 'true' : 'false', bg: shF[key] === o ? '#edf2ff' : '#ffffff', pick: () => { const n = Object.assign({}, shF); n[key] = o; put(fKey, n, { shDrop: '' }); } }))
};
};
const shS = {
title: shSelect('title', ['Mr', 'Mrs', 'Ms'], '-'),
role: shSelect('role', ['Director', 'Shareholder', 'Manager'], 'Select role'),
nat: shSelect('nat', ['United Arab Emirates'], 'Select nationality'),
gender: shSelect('gender', ['Male', 'Female'], 'Select')
};
const shT = {};
Object.keys(shTState).forEach((k) => { shT[k] = sw(shTState[k], () => { const o = Object.assign({}, shTState); o[k] = !o[k]; put(tKey, o); }, '#072447'); });
const shMenus = {};
['front', 'back', 'pass', 'poa'].forEach((k) => { const open = s.shMenu === k; shMenus[k] = { open: open, expanded: open ? 'true' : 'false', toggle: () => set({ shMenu: open ? '' : k }) }; });
const shDocsOk = shDocState === 'done' && (!adding || !!s.addType);
const shDetOk = !!(shF.title && (isPoa || shF.role) && shF.email.trim() && shF.first.trim() && shF.last.trim());
const yn = (v) => v ? 'Yes' : 'No';
const mfSet = {};
Object.keys(s.mf).forEach((k) => { mfSet[k] = (e) => { const o = Object.assign({}, s.mf); o[k] = e.target.value; set({ mf: o }); }; });
const kmF = s.kmF;
const kmSet = {};
['first', 'last', 'role', 'years', 'summary', 'email', 'mobile'].forEach((k) => { kmSet[k] = (e) => { const o = Object.assign({}, kmF); o[k] = e.target.value; set({ kmF: o }); }; });
const kmSelect = (key, options, placeholder) => {
const open = s.kmDrop === key;
return {
text: kmF[key] || placeholder, fg: kmF[key] ? '#000000' : '#575757', open: open, expanded: open ? 'true' : 'false', line: open ? '#2765ff' : '#d7dae5',
toggle: () => set({ kmDrop: open ? '' : key }),
options: options.map((o) => ({ label: o, selected: kmF[key] === o ? 'true' : 'false', bg: kmF[key] === o ? '#edf2ff' : '#ffffff', pick: () => { const n = Object.assign({}, kmF); n[key] = o; set({ kmF: n, kmDrop: '' }); } }))
};
};
const kmS = {
title: kmSelect('title', ['Mr', 'Mrs', 'Ms'], '-'),
qual: kmSelect('qual', ['Masters degree or equivalent', 'Bachelors degree or equivalent', 'Doctorate or equivalent'], 'Masters degree, bachelors, etc.'),
nat: kmSelect('nat', ['United Arab Emirates'], 'Select nationality')
};
const kmOk = !!(kmF.title && kmF.first.trim() && kmF.last.trim() && kmF.role.trim());
const kmName = (r) => (r.first + ' ' + r.last).trim();
const kmDeleting = s.kmList.find((r) => r.id === s.kmDel);
const kmBlank = { title: 'Ms', first: 'Maryam', last: 'Al-Mansoor', role: '', years: '', qual: '', summary: '', nat: 'United Arab Emirates', email: '', mobile: '' };
const cons = {};
['a', 'b', 'c'].forEach((k) => { const on = s.consent === k; cons[k] = { on: on ? 'true' : 'false', ring: on ? '#182f7c' : '#575757', dot: on ? '#182f7c' : 'transparent', pick: () => set({ consent: k }) }; });
const flipIn = (name, k) => () => { const o = Object.assign({}, s[name]); o[k] = !o[k]; const p = {}; p[name] = o; set(p); };
const kmSug = {}; ['a', 'b', 'c', 'd', 'e', 'f'].forEach((k) => { kmSug[k] = box(s.kmSel[k], flipIn('kmSel', k)); });
const cpF = s.cpF;
const cpSet = {};
['name', 'rel', 'mobile', 'email'].forEach((k) => { cpSet[k] = (e) => { const o = Object.assign({}, cpF); o[k] = e.target.value; set({ cpF: o }); }; });
const cpOk = !!(cpF.name.trim() && cpF.rel.trim());
const cpDeleting = s.cpList.find((r) => r.id === s.cpDel);
const cpBlank = { name: '', rel: 'Associate', mobile: '', email: '' };
const cpSug = {}; ['a', 'b', 'c'].forEach((k) => { cpSug[k] = box(s.cpSel[k], flipIn('cpSel', k)); });
const cob = {}; ['a', 'b', 'c'].forEach((k) => { cob[k] = box(s.cob[k], flipIn('cob', k)); });
const bank = {}; ['m1', 'm2', 'c1', 'c2'].forEach((k) => { bank[k] = box(s.bankSel[k], flipIn('bankSel', k)); });
const acHasIban = !!s.acIban.trim();
const bankRows = (who) => s.bankExt[who].map((r) => ({ name: r.name, iban: r.iban, remove: () => { const o = Object.assign({}, s.bankExt); o[who] = o[who].filter((x) => x.id !== r.id); set({ bankExt: o }); } }));
const acCanSave = s.acStage === 'valid' && s.acConfirm;
const tlReview = { business: 'Orient Insurance', number: '1234567789353', issuer: 'Dubai Economic Department', ctype: 'LLC', nature: 'Trading', incDate: '03/03/3023', country: 'UAE', expiry: '03/03/3023', issue: '03/03/3023', website: 'www.orientinsurance.com' };
const tlModal = { business: 'Orient Insurance', number: '123444566777', issuer: 'Dubai Economic Department', ctype: 'Dubai Economic Department', nature: 'Trading', incDate: '03/03/2023', country: 'United Arab Emirates', expiry: '03/03/2023', issue: '03/03/2023', website: 'www.orientinsurance.com' };
const tlF = s.tlForm || s.tlSaved || tlModal;
const tlSet = {};
Object.keys(tlModal).forEach((k) => { tlSet[k] = (e) => { const o = Object.assign({}, tlF); o[k] = e.target.value; set({ tlForm: o }); }; });
const tlSelect = (key, options) => {
const open = s.tlDrop === key;
return {
text: tlF[key], open: open, expanded: open ? 'true' : 'false', line: open ? '#2765ff' : '#d7dae5',
toggle: () => set({ tlDrop: open ? '' : key }),
options: options.map((o) => ({ label: o, selected: tlF[key] === o ? 'true' : 'false', bg: tlF[key] === o ? '#edf2ff' : '#ffffff', pick: () => { const n = Object.assign({}, tlF); n[key] = o; set({ tlForm: n, tlDrop: '' }); } }))
};
};
const tlS = {
issuer: tlSelect('issuer', ['Dubai Economic Department', 'DMCC']),
ctype: tlSelect('ctype', ['Dubai Economic Department', 'LLC']),
nature: tlSelect('nature', ['Trading', 'Services', 'Manufacturing']),
country: tlSelect('country', ['United Arab Emirates'])
};
const docDeleting = docDefs.find((d) => d[0] === s.docDelete);
const facTitle = (f) => f.seed ? f.title : f.type;
const facRows = s.facilities.map((f) => ({
title: facTitle(f), amount: 'AED ' + f.limit, subtitle: f.seed ? 'Purpose of the loan' : f.purpose,
menuLabel: 'Actions for ' + facTitle(f), menuOpen: s.facMenu === f.id, expanded: s.facMenu === f.id ? 'true' : 'false',
toggleMenu: () => set({ facMenu: s.facMenu === f.id ? 0 : f.id }),
edit: () => set({ phase: 'selfFacForm', facEdit: f.id, facMenu: 0, fType: f.type, fProduct: f.product, fLimit: f.limit, fPurpose: f.purpose, fOpen: '' }),
del: () => set({ facMenu: 0, facDelete: f.id })
}));
const facDeleting = s.facilities.find((f) => f.id === s.facDelete);
const facCanSubmit = !!(s.fType && s.fLimit.trim() && s.fPurpose.trim());
const facSelect = (key, label, options, value, disabled) => {
const open = s.fOpen === key && !disabled;
const patch = (v) => { const o = { fOpen: '' }; o[key] = v; return o; };
return {
label: label, aria: label, labelFg: disabled ? '#9f9f9f' : '#575757',
text: value || 'Select', fg: disabled ? '#9f9f9f' : value ? '#000000' : '#575757',
bg: disabled ? '#f9fafb' : '#ffffff', line: open ? '#2765ff' : '#d7dae5', cursor: disabled ? 'not-allowed' : 'pointer',
iconOpacity: disabled ? '0.4' : '1', disabled: disabled, open: open, expanded: open ? 'true' : 'false',
toggle: () => set({ fOpen: open ? '' : key }),
options: options.map((o) => ({ label: o, selected: value === o ? 'true' : 'false', bg: value === o ? '#edf2ff' : '#ffffff', pick: () => set(patch(o)) }))
};
};
const facSelects = [
facSelect('fType', 'Product type', ['Term loan', 'Project specific', 'Cross-sell'], s.fType, false),
facSelect('fProduct', 'Product (optional)', ['LC Import'], s.fProduct, !s.fType)
];
const TAGS = { 'ARM Review': ['#efe6ff', '#820fd9'], 'Executed': ['#eaf6ea', '#54ac51'], 'Pending RM approval': ['#fef3e6', '#d79c10'], 'Rejected': ['#eaeaea', '#575757'] };
const applications = [
['Zenith Co LLC', 'CIF: 5434-1111', 'ABC13456789', 'Credit Proposal', 'ARM Review', 'Cristiano', '16.03.2024'],
['Cloud Tech LLC', 'CIF: 1234-1111', 'ABC124567001', 'Fleet financing', 'Executed', 'Pedro', '11.12.2024'],
['Etisalat', 'CIF: 1233-4555', 'ABC783460355', 'Fleet financing', 'Pending RM approval', 'Ronaldo', '11.12.2024'],
['Technologies LLC', 'CIF: 1233-2333', 'ABC546360362', 'Fleet financing', 'Pending RM approval', 'Unassigned', '11.12.2024'],
['Technologies LLC', '1233-0321', 'ABC203460301', 'Fleet financing', 'Pending RM approval', 'Unassigned', '11.12.2023'],
['Technologies LLC', '1323-1111', '100,000 AED', 'Fleet financing', 'Rejected', 'Maryam', '11.12.2023'],
['Technologies LLC', '6564-1111', '750,000 AED', 'Fleet financing', 'Executed', 'Ahmed', '11.12.2023'],
['Technologies LLC', '1233-1233', '1,750,500 AED', '1,750,500 AED', 'Executed', '11.12.2023', '11.12.2023']
];
const listNeedle = s.listSearch.trim().toLowerCase();
const listFiltered = !!listNeedle || !!s.listStatus;
const listRows = applications.filter((r) => (!s.listStatus || r[4] === s.listStatus) && (!listNeedle || (r[0] + ' ' + r[1] + ' ' + r[2]).toLowerCase().indexOf(listNeedle) !== -1)).map((r) => ({
company: r[0], cif: r[1], appId: r[2], product: r[3], status: r[4], assigned: r[5], created: r[6], tagBg: TAGS[r[4]][0], tagFg: TAGS[r[4]][1]
}));
const listFilter = (key, label, options, value, onPick) => {
const open = s.listOpen === key;
return {
aria: label, text: value || label, fg: value ? '#072447' : '#50647c',
open: open, expanded: open ? 'true' : 'false', line: open ? '#2765ff' : '#d0d5de',
toggle: () => set({ listOpen: open ? '' : key }),
options: options.map((o) => ({ label: o[0], selected: value === o[1] ? 'true' : 'false', bg: value === o[1] ? '#e7efff' : '#ffffff', pick: () => onPick(o[1]) }))
};
};
const listFilters = [
listFilter('status', 'Status', [['All statuses', '']].concat(Object.keys(TAGS).map((k) => [k, k])), s.listStatus, (v) => set({ listStatus: v, listOpen: '' })),
listFilter('substatus', 'Substatus', [['All substatuses', '']], '', () => set({ listOpen: '' }))
];
const mm = String(Math.floor(s.recSecs / 60)).padStart(2, '0') + ':' + String(s.recSecs % 60).padStart(2, '0');
const canSend = !s.recording && !!s.draft.trim();

const send = () => {
if (!canSend) return;
this.setState({ draft: '', messages: s.messages.concat([this.msg('me', 'text', s.draft.trim())]) });
this.respond();
};

const __v = {
headerTitle: s.phase === 'start' ? 'New credit proposal' : inChat && s.name.trim() ? s.name.trim() : 'Capture a meeting',
showStart: s.phase === 'start', showMain: s.phase === 'form' || inChat, showClose: s.phase !== 'start',
showTakeoverHeader: !inSelf, showAppHeader: inSelf, showOverlay: inFacForm || inModalPhase, ovUnder: (inFacForm || inModalPhase) ? 'true' : 'false', ovLoading: (inFacForm || inModalPhase) && !!s.ovLoad, showAppCrumb: inSelf && s.phase !== 'selfList',
showSelfFacility: s.phase === 'selfFacility' || inFacForm, showFacForm: inFacForm,
showSelfDocs: s.phase === 'selfDocs', goSelfFacility: goSelf('selfFacility'),
showSelfTl: s.phase === 'selfTl', goSelfDocs: goSelf('selfDocs'),
goSelfTl: goSelf('selfTl'), goSelfOwn: goSelf('selfOwn'), goSelfConsent: goSelf('selfConsent'), goSelfCob: goSelf('selfCob'), goSelfBank: goSelf('selfBank'), goSelfReview: goSelf('selfReview'),
showSelfOwn: s.phase === 'selfOwn' || s.phase === 'selfSh', showSelfSh: s.phase === 'selfSh', showSelfConsent: s.phase === 'selfConsent', showSelfCob: s.phase === 'selfCob',
showSelfBank: s.phase === 'selfBank' || s.phase === 'selfAcct', showSelfAcct: s.phase === 'selfAcct', showSelfReview: s.phase === 'selfReview',
showModalHeader: inModalPhase, modalTitle: s.phase === 'selfAcct' ? 'Add account details' : s.phase === 'selfKmForm' ? 'Add key management information' : s.phase === 'selfCpForm' ? 'Add contact point information' : 'Add stakeholder information',
modalClose: s.phase === 'selfAcct' ? goSelf('selfBank') : s.phase === 'selfKmForm' ? goSelf('selfKm') : s.phase === 'selfCpForm' ? goSelf('selfCp') : goSelf('selfOwn'),
ownDone: s.ownDone, ownTodo: !s.ownDone, ownBg: btnBg(s.ownDone || s.ownGone), ownCursor: btnCur(s.ownDone || s.ownGone), ownBlocked: !(s.ownDone || s.ownGone), ownFirst: !s.ownGone,
ownDelShow: s.ownDel && s.phase === 'selfOwn', ownDelOpen: () => set({ ownDel: true }), ownDelCancel: () => set({ ownDel: false }), ownDelYes: () => set({ ownDel: false, ownGone: true }),
ownOpen: () => set({ phase: 'selfSh', shMode: '', shStep: 'docs', shMenu: '', shDrop: '', shEdit: '' }),
ownAdd: () => set({ phase: 'selfSh', shMode: 'add', shStep: 'docs', shMenu: '', shDrop: '', shEdit: '', addType: '', addDocs: '',
addF: Object.assign({ title: '', role: 'Director', nat: 'United Arab Emirates', email: '', mobile: '', gender: 'Male' }, [{ first: 'Abdullah', last: 'Rahim' }, { first: 'Sara', last: 'Al-Nuaimi', gender: 'Female' }, { first: 'Omar', last: 'Khalifa' }, { first: 'Layla', last: 'Haddad', gender: 'Female' }, { first: 'Yousef', last: 'Al-Marri' }][s.ownExtra.length % 5]),
addT: { uae: true, ruling: false, sign: false, borrow: false } }),
ownExtra: s.ownExtra,
shWho: !adding ? 'Ahmed Al-Hassan' : s.addType === 'sh' ? 'Add new shareholder' : 'Add new stakeholder',
shStep2: adding && !isPoa ? 'Shareholder details' : 'Stakeholder details',
shDocsTitle: adding ? 'Document upload' : 'Identity documents', shExisting: !adding, shAdding: adding, shIsPoa: isPoa, shShowRole: !isPoa,
shUaeLabel: adding ? 'Are you a UAE resident?' : 'UAE resident',
shUaeBody: adding ? 'Emirates ID or Emirates ID form will be required' : 'Emirates ID or Emirates ID form required',
shDetTitle: adding && !isPoa ? 'Shareholder details' : 'Stakeholder details',
shDetSub: adding && !isPoa ? 'Enter the shareholder’s details below' : 'Enter the stakeholder’s details below',
shRevSub: adding ? 'Review and update the extracted details, then continue.' : 'Review and update the stakeholder’s details, then continue.',
shTypes: { sh: { on: s.addType === 'sh' ? 'true' : 'false', line: s.addType === 'sh' ? '#6284f2' : '#d7dae5', bg: s.addType === 'sh' ? '#edf2ff' : '#ffffff', pick: () => set({ addType: 'sh' }) },
poa: { on: s.addType === 'poa' ? 'true' : 'false', line: s.addType === 'poa' ? '#6284f2' : '#d7dae5', bg: s.addType === 'poa' ? '#edf2ff' : '#ffffff', pick: () => set({ addType: 'poa' }) } },
shLater: () => set({ shStep: 'details', shMenu: '' }),
ownContinue: () => { if (s.ownDone || s.ownGone) goSelf('selfConsent')(); },
shIsDocs: s.shStep === 'docs', shIsDetails: s.shStep === 'details', shIsReview: s.shStep === 'review',
shBack: () => { if (s.shStep === 'docs') goSelf('selfOwn')(); else set({ shStep: s.shStep === 'review' ? 'details' : 'docs', shDrop: '', shMenu: '' }); },
shF: shF, shSet: shSet, shS: shS, shT: shT, shMenus: shMenus, shMenuClose: () => set({ shMenu: '' }),
shUploaded: shDocState === 'done', shUploading: shDocState === 'uploading',
shUpload: () => { if (shDocState === 'uploading') return; put(dKey, 'uploading', { shMenu: '' }); this.later(2200, () => { if (this.state[dKey] === 'uploading') { const o = {}; o[dKey] = 'done'; this.setState(o); } }); },
shDocsBlocked: !shDocsOk, shDocsBg: btnBg(shDocsOk), shDocsCursor: btnCur(shDocsOk),
shDocsContinue: () => { if (shDocsOk) set({ shStep: 'details', shMenu: '' }); },
shDetBlocked: !shDetOk, shDetBg: btnBg(shDetOk), shDetCursor: btnCur(shDetOk),
shDetContinue: () => { if (shDetOk) set({ shStep: 'review', shDrop: '' }); },
shV: { title: shF.title, name: (shF.first + ' ' + shF.last).trim(), role: shF.role, nat: shF.nat, email: shF.email, mobile: shF.mobile.trim() ? '+971 ' + shF.mobile.trim() : '-', ruling: yn(shTState.ruling), sign: yn(shTState.sign), borrow: yn(shTState.borrow) },
mf: s.mf, mfSet: mfSet,
shEditDetails: () => set({ shEdit: 'details', shDrop: '' }), shEditEid: () => set({ shEdit: 'eid', shDrop: '' }), shEditPass: () => set({ shEdit: 'pass', shDrop: '' }),
shEditIsDetails: s.shEdit === 'details', shEditIsEid: s.shEdit === 'eid', shEditIsPass: s.shEdit === 'pass',
shEditClose: () => set({ shEdit: '', shDrop: '' }),
shSave: () => {
if (!adding) { set({ phase: 'selfOwn', ownDone: true, shEdit: '', shDrop: '' }); return; }
const nm = (shF.first + ' ' + shF.last).trim();
const ini = ((shF.first.trim()[0] || '') + (shF.last.trim()[0] || '')).toUpperCase();
set({ phase: 'selfOwn', shMode: '', shEdit: '', shDrop: '', ownExtra: s.ownExtra.concat([{ id: s.ownExtra.length + 1, initials: ini, name: nm, poa: isPoa, email: shF.email.trim() || 'email@email.com', body: isPoa ? 'Power of Attorney (POA)' : '50%  Shareholder - Individual' }]) });
},
cons: cons, cob: cob, bank: bank,
cobPicked: s.ownExtra.filter((x) => s.cob['x' + x.id]),
consExtra: s.ownExtra.map((x) => { const k = 'x' + x.id; const on = s.consent === k; return { initials: x.initials, name: x.name, body: x.poa ? 'Power of Attorney (POA)' : '50%  Shareholder - Authorized signatory', on: on ? 'true' : 'false', ring: on ? '#182f7c' : '#575757', dot: on ? '#182f7c' : 'transparent', pick: () => set({ consent: k }) }; }),
cobExtra: s.ownExtra.map((x) => Object.assign({ initials: x.initials, name: x.name, body: x.poa ? 'Power of Attorney (POA)' : '50%  Shareholder of Orient Insurance - Individual', label: 'Select ' + x.name + ' as co-borrower' }, box(s.cob['x' + x.id], flipIn('cob', 'x' + x.id)))),
goSelfCp: goSelf('selfCp'), showSelfCp: s.phase === 'selfCp' || s.phase === 'selfCpForm', showSelfCpForm: s.phase === 'selfCpForm',
cpHas: s.cpList.length > 0, cpSug: cpSug, cpF: cpF, cpSet: cpSet,
cpRows: s.cpList.map((r) => { const open = s.cpMenu === r.id; const parts = r.name.trim().split(/ +/); return {
initials: ((parts[0] || '')[0] || '').toUpperCase() + (parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : ''), name: r.name.trim(), rel: r.rel,
menuLabel: 'Actions for ' + r.name.trim(), open: open, expanded: open ? 'true' : 'false',
toggle: () => set({ cpMenu: open ? 0 : r.id }),
edit: () => set({ phase: 'selfCpForm', cpEdit: r.id, cpMenu: 0, cpF: Object.assign({}, r) }),
del: () => set({ cpMenu: 0, cpDel: r.id })
}; }),
cpAdd: () => set({ phase: 'selfCpForm', cpEdit: 0, cpMenu: 0, cpF: cpBlank }),
cpFormClose: goSelf('selfCp'), cpEditing: !!s.cpEdit,
cpSaveBlocked: !cpOk, cpSaveBg: btnBg(cpOk), cpSaveCursor: btnCur(cpOk),
cpSave: () => {
if (!cpOk) return;
if (s.cpEdit) set({ phase: 'selfCp', cpList: s.cpList.map((r) => r.id === s.cpEdit ? Object.assign({}, cpF, { id: r.id }) : r) });
else set({ phase: 'selfCp', cpSeq: s.cpSeq + 1, cpList: s.cpList.concat([Object.assign({}, cpF, { id: s.cpSeq + 1 })]) });
},
cpFormDelete: () => set({ phase: 'selfCp', cpDel: s.cpEdit }),
cpDelOpen: !!cpDeleting, cpDelName: cpDeleting ? cpDeleting.name.trim() : '',
cpDelCancel: () => set({ cpDel: 0 }),
cpDelYes: () => set({ cpDel: 0, cpList: s.cpList.filter((r) => r.id !== s.cpDel) }),
showDKyc: s.phase === 'docsKyc', showDStk: s.phase === 'docsStk', showDFin: s.phase === 'docsFin',
goDKyc: goDocs('docsKyc'), goDStk: goDocs('docsStk'), goDFin: goDocs('docsFin'), goHubFromDocs: goSelf('selfHub'),
dKycSecs: dKycSecs, dKycBlocked: !dKycOk, dKycBg: btnBg(dKycOk), dKycCursor: btnCur(dKycOk), dKycContinue: () => { if (dKycOk) goDocs('docsStk')(); },
dCatOpen: !!dCatFile, dCatName: dCatFile ? dCatFile.name : '', dCatType: s.dCatType, setDCatType: (e) => set({ dCatType: e.target.value }),
dCatClose: () => set({ dCat: 0 }), dCatBlocked: !s.dCatType.trim(), dCatBg: btnBg(!!s.dCatType.trim()), dCatCursor: btnCur(!!s.dCatType.trim()),
dCatSave: () => { if (!s.dCatType.trim()) return; const o = Object.assign({}, s.dKyc); o.other = o.other.map((f) => f.id === s.dCat ? Object.assign({}, f, { st: 'ok' }) : f); set({ dKyc: o, dCat: 0 }); },
dSearch: s.dSearch, setDSearch: (e) => set({ dSearch: e.target.value }), dStkGroups: dStkGroups, dStkEmpty: dStkGroups.length === 0,
dFinSecs: dFinSecs, dFinBlocked: !dFinOk, dFinBg: btnBg(dFinOk), dFinCursor: btnCur(dFinOk),
dFinSend: () => { if (!dFinOk) return; set({ phase: 'selfHub', docsDone: true, selfNote: '' }); this.later(6000, () => { if (this.state.docsDone) this.setState({ finReady: true }); }); },
docsDone: s.docsDone, finLocked: !s.docsDone,
hubDocs: () => { if (s.clientDone) set({ phase: 'docsKyc', dCat: 0 }); },
hubDocsAria: s.clientDone ? 'false' : 'true', hubDocsCursor: s.clientDone ? 'pointer' : 'default',
hubDocsTag: s.docsDone ? 'Submitted' : 'Not started', hubDocsTagBg: s.docsDone ? '#eaf6ea' : '#eaeaea', hubDocsTagFg: s.docsDone ? '#54ac51' : '#575757',
hubSendLabel: s.clientDone ? 'Submit' : 'Send to ARM',
showFinSum: s.phase === 'selfFinSum', showFinEnt: s.phase === 'selfFinEnt', showFinLaunch: s.phase === 'selfFinLaunch', showFinCl: s.phase === 'selfFinCl',
showFinRedir: s.phase === 'selfFinRedir', showFinRatios: s.phase === 'selfFinRatios', showFinRatings: s.phase === 'selfFinRatings',
finOngoing: s.docsDone && !s.finReady, finReadyTag: s.finReady && !s.finDone, finDone: s.finDone,
hubFin: () => { if (s.finReady) goSelf('selfFinSum')(); }, hubFinAria: s.finReady ? 'false' : 'true', hubFinCursor: s.finReady ? 'pointer' : 'default',
finHub: goSelf('selfHub'), finBackSum: goSelf('selfFinSum'), finToEntity: goSelf('selfFinEnt'), finBackEnt: goSelf('selfFinEnt'), finBackRatios: goSelf('selfFinRatios'), finToRatings: goSelf('selfFinRatings'),
finPick: () => { set({ phase: 'selfFinLaunch' }); this.later(2000, () => { if (this.state.phase === 'selfFinLaunch') this.setState({ phase: 'selfFinCl' }); }); },
finClDone: () => { set({ phase: 'selfFinRedir' }); this.later(2000, () => { if (this.state.phase === 'selfFinRedir') this.setState({ phase: 'selfFinRatios' }); }); },
showFinXls: s.phase === 'selfFinRatings' && s.finXls, finXlsOpen: () => set({ finXls: true }), finXlsClose: () => set({ finXls: false }),
finSubmit: () => set({ phase: 'selfHub', finDone: true, selfNote: '' }),
goSelfKm: goSelf('selfKm'), showSelfKm: s.phase === 'selfKm' || s.phase === 'selfKmForm', showSelfKmForm: s.phase === 'selfKmForm',
kmHas: s.kmList.length > 0, kmSug: kmSug, kmF: kmF, kmSet: kmSet, kmS: kmS,
kmNarr: s.kmNarr, setKmNarr: (e) => set({ kmNarr: e.target.value }),
kmRows: s.kmList.map((r) => { const open = s.kmMenu === r.id; return {
initials: ((r.first.trim()[0] || '') + (r.last.trim()[0] || '')).toUpperCase(), name: kmName(r), role: r.role,
menuLabel: 'Actions for ' + kmName(r), open: open, expanded: open ? 'true' : 'false',
toggle: () => set({ kmMenu: open ? 0 : r.id }),
edit: () => set({ phase: 'selfKmForm', kmEdit: r.id, kmMenu: 0, kmDrop: '', kmF: Object.assign({}, r) }),
del: () => set({ kmMenu: 0, kmDel: r.id })
}; }),
kmAdd: () => set({ phase: 'selfKmForm', kmEdit: 0, kmMenu: 0, kmDrop: '', kmF: kmBlank }),
kmFormClose: goSelf('selfKm'), kmEditing: !!s.kmEdit,
kmSaveBlocked: !kmOk, kmSaveBg: btnBg(kmOk), kmSaveCursor: btnCur(kmOk),
kmSave: () => {
if (!kmOk) return;
if (s.kmEdit) set({ phase: 'selfKm', kmDrop: '', kmList: s.kmList.map((r) => r.id === s.kmEdit ? Object.assign({}, kmF, { id: r.id }) : r) });
else set({ phase: 'selfKm', kmDrop: '', kmSeq: s.kmSeq + 1, kmList: s.kmList.concat([Object.assign({}, kmF, { id: s.kmSeq + 1 })]) });
},
kmFormDelete: () => set({ phase: 'selfKm', kmDrop: '', kmDel: s.kmEdit }),
kmDelOpen: !!kmDeleting, kmDelName: kmDeleting ? kmName(kmDeleting) : '',
kmDelCancel: () => set({ kmDel: 0 }),
kmDelYes: () => set({ kmDel: 0, kmList: s.kmList.filter((r) => r.id !== s.kmDel) }),
bankBefore: !s.bankAdded, bankAfter: s.bankAdded, bankToast: s.bankToast, bankToastClose: () => set({ bankToast: false }),
bankAdd: () => set({ phase: 'selfAcct', acIban: '', acAge: '', acStage: '', acConfirm: true, bankToast: false }),
bankAddM: () => set({ phase: 'selfAcct', bankTarget: 'm', acIban: '', acAge: '', acStage: '', acConfirm: true, bankToast: false }),
bankAddC: () => set({ phase: 'selfAcct', bankTarget: 'c', acIban: '', acAge: '', acStage: '', acConfirm: true, bankToast: false }),
bankExt: { m: bankRows('m'), c: bankRows('c') },
acIban: s.acIban, acAge: s.acAge,
setAcIban: (e) => set({ acIban: e.target.value, acStage: '' }), setAcAge: (e) => set({ acAge: e.target.value }),
acValBlocked: !acHasIban, acValFg: acHasIban ? '#182f7c' : '#9f9f9f', acValCursor: btnCur(acHasIban),
acValidate: () => { if (!acHasIban || s.acStage === 'validating') return; set({ acStage: 'validating' }); this.later(1600, () => { if (this.state.acStage === 'validating') this.setState({ acStage: 'valid' }); }); },
acValidating: s.acStage === 'validating', acValid: s.acStage === 'valid',
acConf: box(s.acConfirm, () => set({ acConfirm: !s.acConfirm })),
acUae: sw(s.acUae, () => set({ acUae: !s.acUae }), '#182f7c'),
acSaveBlocked: !acCanSave, acSaveBg: btnBg(acCanSave), acSaveCursor: btnCur(acCanSave),
acSave: () => { if (!acCanSave) return;
const o = Object.assign({}, s.bankExt); const iban = s.acIban.trim().replace(/\s+/g, '');
o[s.bankTarget] = o[s.bankTarget].concat([{ id: s.bankSeq + 1, name: 'Commercial Bank of Dubai', iban: /^AE/i.test(iban) ? iban : 'AE' + iban }]);
set({ phase: 'selfBank', bankExt: o, bankSeq: s.bankSeq + 1, bankToast: true }); this.later(5000, () => this.setState({ bankToast: false })); },
rvFacilities: s.facilities.map((f) => ({ type: f.title || f.type, amount: 'AED ' + f.limit, purpose: (f.purpose || '').trim() || '---' })),
rvSend: () => set({ phase: 'selfHub', clientDone: true, selfNote: '' }),
clientDone: s.clientDone, hubDocsLocked: !s.clientDone,
hubClientTag: s.clientDone ? 'Submitted' : 'Not started', hubClientTagBg: s.clientDone ? '#eaf6ea' : '#eaeaea', hubClientTagFg: s.clientDone ? '#54ac51' : '#575757',
hubSendBg: btnBg(s.finDone), hubSendCursor: s.finDone ? 'pointer' : 'not-allowed', hubSendBlocked: !s.finDone,
docContinue: () => { if (docsReady) goSelf('selfTl')(); },
tlV: s.tlSaved || tlReview, tlF: tlF, tlSet: tlSet, tlS: tlS,
tlEditOpen: s.tlOpen === 'edit', tlPreviewOpen: s.tlOpen === 'preview', tlContactOpen: s.tlOpen === 'contact',
tlContactEdit: () => set({ tlOpen: 'contact', tlDrop: '', tlCtMobile: s.tlCtSaved }),
tlCtMobile: s.tlCtMobile, setTlCtMobile: (e) => set({ tlCtMobile: e.target.value }),
tlContactUpdate: () => set({ tlOpen: '', tlCtSaved: s.tlCtMobile.trim() }),
tlCompanyNumber: s.tlCtSaved ? '+971 ' + s.tlCtSaved : '+971 55 637 8222',
tlEdit: () => set({ tlOpen: 'edit', tlDrop: '', tlForm: null }),
tlPreview: () => set({ tlOpen: 'preview', tlDrop: '' }),
tlClose: () => set({ tlOpen: '', tlDrop: '', tlForm: null }),
tlUpdate: () => set({ tlOpen: '', tlDrop: '', tlSaved: Object.assign({}, tlF), tlForm: null }),
facLoading: s.facLoading,
facContinue: () => {
if (s.facLoading) return;
set({ facLoading: true, facMenu: 0 });
this.later(1200, () => this.setState({ facLoading: false, phase: 'selfDocs', docStage: '', docMenu: '', docDelete: '' }));
},
docRows: docRows, docPick: () => set({ docStage: 'picker', docMenu: '' }),
docPickerOpen: s.docStage === 'picker', docUploading: s.docStage === 'uploading',
docPickerCancel: () => set({ docStage: '' }),
docPickerChoose: () => {
set({ docStage: 'uploading' });
this.later(2200, () => { if (this.state.docStage === 'uploading') this.setState({ docStage: '', docsUp: Object.assign({}, this.state.docsUp, { tl: true, moa: true }) }); });
},
docContinueDisabled: !docsReady, docContinueCursor: docsReady ? 'pointer' : 'not-allowed',
docContinueBg: docsReady ? 'linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)' : 'linear-gradient(95.67deg, #d7dae5 0%, #a4a7af 100%)',
docDeleteOpen: !!docDeleting, docDeleteName: docDeleting ? docDeleting[4] : '',
docDeleteCancel: () => set({ docDelete: '' }),
docDeleteYes: () => { const next = Object.assign({}, s.docsUp); next[s.docDelete] = false; const au = Object.assign({}, s.docsAuto); au[s.docDelete] = false; set({ docDelete: '', docsUp: next, docsAuto: au }); },
facRows: facRows, facAdd: () => set({ phase: 'selfFacForm', facEdit: 0, facMenu: 0, fType: '', fProduct: '', fLimit: '', fPurpose: '', fOpen: '' }),
facDeleteOpen: !!facDeleting, facDeleteTitle: facDeleting ? facTitle(facDeleting) : '',
facDeleteCancel: () => set({ facDelete: 0 }),
facDeleteYes: () => set({ facDelete: 0, facilities: s.facilities.filter((f) => f.id !== s.facDelete) }),
facFormTitle: s.facEdit ? 'Edit Facility' : 'Add Facility',
facFormClose: () => set({ phase: 'selfFacility', fOpen: '' }),
facSelects: facSelects, fLimit: s.fLimit, fPurpose: s.fPurpose,
setFLimit: (e) => set({ fLimit: e.target.value }), setFPurpose: (e) => set({ fPurpose: e.target.value }),
facPurposeLabel: s.facEdit ? 'Purpose of the facility' : 'Purpose of the loan', facPurposeFg: s.facEdit ? '#000000' : '#575757',
facSubmitDisabled: !facCanSubmit, facSubmitCursor: facCanSubmit ? 'pointer' : 'not-allowed',
facSubmitBg: facCanSubmit ? 'linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)' : 'linear-gradient(95.67deg, #d7dae5 0%, #a4a7af 100%)',
facSubmit: () => {
if (!facCanSubmit) return;
const data = { type: s.fType, product: s.fProduct, limit: s.fLimit.trim(), purpose: s.fPurpose.trim() };
if (s.facEdit) set({ phase: 'selfFacility', fOpen: '', facilities: s.facilities.map((f) => f.id === s.facEdit ? Object.assign({}, f, data) : f) });
else set({ phase: 'selfFacility', fOpen: '', facSeq: s.facSeq + 1, facilities: s.facilities.concat([Object.assign({ id: s.facSeq + 1, seed: false }, data)]) });
},
showSelfList: s.phase === 'selfList', showSelfSearch: s.phase === 'selfSearch', showSelfSummary: s.phase === 'selfSummary', showSelfHub: s.phase === 'selfHub',
goMeeting: () => set({ phase: s.created ? 'chat' : 'form', name: s.name || 'Working capital requirements', selfNote: '', listOpen: '' }), hubBack: () => set({ phase: s.created ? 'chat' : 'selfSearch' }),
goSelfList: goSelf('selfList'), goSelfSearch: goSelf('selfSearch'), goSelfSummary: goSelf('selfSummary'), goSelfHub: goSelf('selfHub'),
listSearch: s.listSearch, setListSearch: (e) => set({ listSearch: e.target.value }),
listFilters: listFilters, listRows: listRows, listEmpty: listRows.length === 0,
listCount: listFiltered ? listRows.length + ' of 15' : '1-10 of 15',
selfQuery: s.selfQuery, hasSelfQuery: !!s.selfQuery,
setSelfQuery: (e) => set({ selfQuery: e.target.value, selfSearched: false, selfNote: '' }),
selfQueryKey: (e) => { if (e.key === 'Enter') { e.preventDefault(); set({ selfSearched: true, selfNote: '' }); } },
clearSelfQuery: () => set({ selfQuery: '', selfSearched: false, selfNote: '' }),
runSelfSearch: () => set({ selfSearched: true, selfNote: '' }),
selfHasResult: s.selfSearched && !!s.selfQuery.trim(), selfNeedsQuery: s.selfSearched && !s.selfQuery.trim(),
selfNote: s.selfNote, hasSelfNote: !!s.selfNote,
addNtb: () => set({ selfNote: 'Adding a new-to-bank (NTB) customer is not part of this prototype yet.' }),
selfContinue: () => set({ selfNote: 'The next step, Company ownership, is not part of this prototype yet.' }),
hubClient: goSelf('selfFacility'),
selfUpload: () => {
const next = ['Borrowing_information.pdf', 'Updated_trade_license.pdf'].find((f) => s.selfUploads.indexOf(f) === -1);
if (next) set({ selfUploads: s.selfUploads.concat([next]) });
},
selfUploadRows: s.selfUploads.map((name, i) => ({ name: name, remove: () => set({ selfUploads: s.selfUploads.filter((x, j) => j !== i) }) })),
goStart: () => set({ phase: 'selfList', selfNote: '', listOpen: '' }),
startCallReport: () => set({ phase: s.created ? 'chat' : 'form' }),
startSelf: goSelf('selfList'),
showForm: s.phase === 'form', showChat: inChat,
showDetails: inChat && !s.collapsed, showRail: inChat && s.collapsed,
mainMargin: inChat && s.collapsed ? '0 auto' : '0 0 0 24px',
name: s.name, desc: s.desc, cifText: s.cifText, client: s.client,
topic: s.topic, timeFields: timeFields,
topicText: s.topic || 'Select', topicFg: s.topic ? '#072447' : '#50647c',
topicOpen: s.topicOpen, topicExpanded: s.topicOpen ? 'true' : 'false', topicLine: s.topicOpen ? '#2765ff' : '#d0d5de',
topicToggle: () => set({ topicOpen: !s.topicOpen, dpOpen: false, tpOpen: '' }),
topicOptions: ['Leads', 'Working capital requirements', 'Other'].map((t) => ({
label: t, selected: s.topic === t ? 'true' : 'false', bg: s.topic === t ? '#e7efff' : '#ffffff',
pick: () => edit({ topic: t, topicOpen: false })
})),
tpHours: ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'].map((v) => tpOption('tpH', v)),
tpMinutes: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'].map((v) => tpOption('tpM', v)),
tpPeriods: ['AM', 'PM'].map((v) => tpOption('tpP', v)),
tpOk: () => {
const h12 = Number(s.tpH) % 12;
const patch = { tpOpen: '' };
patch[s.tpOpen] = pad2(s.tpP === 'PM' ? h12 + 12 : h12) + ':' + s.tpM;
edit(patch);
},
dateText: dateParts ? dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0] : 'Select',
dateFg: dateParts ? '#072447' : '#50647c',
fdpOpenFrom: s.fdp === 'from' && s.phase === 'docsFin', fdpOpenTo: s.fdp === 'to' && s.phase === 'docsFin', fdpExpFrom: s.fdp === 'from' ? 'true' : 'false', fdpExpTo: s.fdp === 'to' ? 'true' : 'false',
fdpToggleFrom: fdpToggle('from'), fdpToggleTo: fdpToggle('to'), fdpDialog: s.fdp === 'to' ? 'Choose end date' : 'Choose start date',
fdpIsDate: s.fdpView === 'date', fdpIsGrid: s.fdpView !== 'date', fdpHasChevron: s.fdpView !== 'year', fdpGrid: s.fdpView === 'year' ? fdpYears : fdpMonths, fdpWeeks: fdpWeeks,
fdpTitle: s.fdpView === 'date' ? shortMonths[s.fdpMonth] + ' ' + s.fdpYear : s.fdpView === 'month' ? String(s.fdpYear) : s.fdpYearStart + ' - ' + (s.fdpYearStart + 11),
fdpTitleLabel: s.fdpView === 'date' ? 'Choose month' : s.fdpView === 'month' ? 'Choose year' : 'Back to months',
fdpPrevLabel: s.fdpView === 'date' ? 'Previous month' : s.fdpView === 'month' ? 'Previous year' : 'Previous 12 years',
fdpNextLabel: s.fdpView === 'date' ? 'Next month' : s.fdpView === 'month' ? 'Next year' : 'Next 12 years',
fdpPrev: () => { if (s.fdpView === 'date') fdpShift(-1); else if (s.fdpView === 'month') set({ fdpYear: s.fdpYear - 1 }); else set({ fdpYearStart: s.fdpYearStart - 12 }); },
fdpNext: () => { if (s.fdpView === 'date') fdpShift(1); else if (s.fdpView === 'month') set({ fdpYear: s.fdpYear + 1 }); else set({ fdpYearStart: s.fdpYearStart + 12 }); },
fdpSwitchView: () => { if (s.fdpView === 'date') set({ fdpView: 'month' }); else if (s.fdpView === 'month') set({ fdpView: 'year', fdpYearStart: s.fdpYear - 10 }); else set({ fdpView: 'month' }); },
fdpCancel: () => set({ fdp: '' }),
fdpApply: () => { if (!s.fdpPick) { set({ fdp: '' }); return; } const q = s.fdpPick.split('-'); const txt = q[2] + '/' + q[1] + '/' + q[0]; set(s.fdp === 'to' ? { fdp: '', finTo: txt } : { fdp: '', finFrom: txt }); },
dpOpen: s.dpOpen, dpExpanded: s.dpOpen ? 'true' : 'false', dpFieldLine: s.dpOpen ? '#2765ff' : '#d0d5de',
dpIsDate: s.dpView === 'date', dpIsGrid: s.dpView !== 'date', dpHasChevron: s.dpView !== 'year',
dpGrid: s.dpView === 'year' ? dpYears : dpMonths,
dpTitle: s.dpView === 'date' ? shortMonths[s.dpMonth] + ' ' + s.dpYear : s.dpView === 'month' ? String(s.dpYear) : s.dpYearStart + ' - ' + (s.dpYearStart + 11),
dpTitleLabel: s.dpView === 'date' ? 'Choose month' : s.dpView === 'month' ? 'Choose year' : 'Back to months',
dpPrevLabel: s.dpView === 'date' ? 'Previous month' : s.dpView === 'month' ? 'Previous year' : 'Previous 12 years',
dpNextLabel: s.dpView === 'date' ? 'Next month' : s.dpView === 'month' ? 'Next year' : 'Next 12 years',
dpWeeks: dpWeeks,
dpToggle: () => {
if (s.dpOpen) { set({ dpOpen: false }); return; }
const base = dateParts ? new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, 1) : new Date();
set({ dpOpen: true, tpOpen: '', topicOpen: false, dpView: 'date', dpPick: s.date, dpYear: base.getFullYear(), dpMonth: base.getMonth() });
},
dpPrev: () => { if (s.dpView === 'date') shiftMonth(-1); else if (s.dpView === 'month') set({ dpYear: s.dpYear - 1 }); else set({ dpYearStart: s.dpYearStart - 12 }); },
dpNext: () => { if (s.dpView === 'date') shiftMonth(1); else if (s.dpView === 'month') set({ dpYear: s.dpYear + 1 }); else set({ dpYearStart: s.dpYearStart + 12 }); },
dpSwitchView: () => { if (s.dpView === 'date') set({ dpView: 'month' }); else if (s.dpView === 'month') set({ dpView: 'year', dpYearStart: s.dpYear - 10 }); else set({ dpView: 'month' }); },
dpCancel: () => set({ dpOpen: false }),
dpApply: () => edit({ dpOpen: false, date: s.dpPick || s.date }),
hasClient: !!s.client,
showCifResults: !s.client && s.cifText.trim().length > 0,
locations: ['Teams', 'Client', 'Office'].map((l) => ({
label: l, pressed: s.location === l ? 'true' : 'false',
bg: s.location === l ? '#1b48b5' : '#ffffff', fg: s.location === l ? '#ffffff' : '#1b48b5',
pick: () => edit({ location: l })
})),
participantFields: s.participants.map((value, i) => ({
value: value, aria: 'Participant ' + (i + 1) + ' full name', canRemove: i > 0,
change: (e) => { const next = s.participants.slice(); next[i] = e.target.value; edit({ participants: next }); },
remove: () => edit({ participants: s.participants.filter((x, j) => j !== i) })
})),
fileRows: s.files.map((name, i) => ({ name: name, remove: () => edit({ files: s.files.filter((x, j) => j !== i) }) })),
draftSaved: s.draftSaved,
createDisabled: !canCreate, createCursor: canCreate ? 'pointer' : 'not-allowed',
createBg: canCreate ? GRADIENT : GRADIENT_OFF,
createLabel: s.created ? 'Save changes' : 'Create meeting',
clientInitials: initials(s.client || ''),
whenText: longDate(s.date) + ', ' + to12(s.start) + '-' + to12(s.end),
locationText: s.location === 'Client' ? 'Clients office' : s.location,
hasDesc: !!s.desc.trim(),
hasPeople: names.length > 0, peopleCount: names.length,
people: names.map((n) => ({ name: n, initials: initials(n) })),
hasFiles: s.files.length > 0, fileCount: s.files.length,
messages: messages, chatRef: this.chatRef, popRef: this.popRef,
formPadBottom: (s.dpOpen || s.tpOpen || s.topicOpen) ? '200px' : '40px',
draft: s.draft, recording: s.recording, notRecording: !s.recording, recTime: mm,
micLabel: s.recording ? 'Stop recording' : 'Record audio', micBg: s.recording ? '#fdeceb' : 'transparent',
sendDisabled: !canSend, sendCursor: canSend ? 'pointer' : 'not-allowed', sendBg: canSend ? GRADIENT : GRADIENT_OFF,

setName: (e) => edit({ name: e.target.value }),
setDesc: (e) => edit({ desc: e.target.value }),
setCif: (e) => edit({ cifText: e.target.value, client: '' }),
pickCif: () => edit({ cifText: '3438872374234: Orient Insurance', client: 'Orient Insurance' }),
addParticipant: () => edit({ participants: s.participants.concat(['']) }),
attach: () => {
const next = sampleFiles.find((f) => s.files.indexOf(f) === -1);
if (next) edit({ files: s.files.concat([next]) });
},
saveDraft: () => set({ draftSaved: true }),
createMeeting: () => {
if (!canCreate) return;
const first = s.messages.length ? [] : [this.msg('bot', 'text', 'What was said during the meeting?')];
set({ phase: 'chat', created: true, collapsed: false, draftSaved: false, dpOpen: false, tpOpen: '', topicOpen: false, messages: s.messages.concat(first), draft: s.messages.length ? s.draft : "Meeting with Mr. Satish Shetty was arranged on 30/09/2024 at 3PM at Client's office in U Bora Tower, Business Bay Dubai to discuss the current requirement.\n\nOrient Insurance Ltd was incorporated on 22-Apr-2021 with registered number 4663 at DIFC, Dubai.\n\nOrient Insurance LLC is a Limited Liability established in Dec'2016 registered under DED Dubai. The company is a part of Hayel Saeed Anam (HSA) Group of Companies.\n\nThe Group: Hayel Saeed Anam Group - Wikipedia HSA Group is a multi-Billion US conglomerate started operations from Yemen. The HSA Group is globally recognised for a well-balanced investment portfolio, efficient manufacturing systems and a range of market leading products that enrich the lives of customers.\n\nCurrent Request: A New term loan facility is proposed for the client. Client had purchased an office in DIFC area in last year for captive usage. The company and corporate Guarantor are cash rich and maintains average balances of AED 18 MN- AED 55 MN in company accounts with us. Entire cash flow routing is done through ENBD accounts. The borrower is a part HSA Group which is a multi-Billion USD conglomerate, having operations in more than 10 countries.\n\nPurpose of the current loan: The client is looking for the equity release on the property which is bought by them in the last year. Client is looking for equity release of the funds for reinvestment in the business." });
},
editMeeting: () => set({ phase: 'form' }),
deleteMeeting: () => {
this.timers.forEach((t) => clearTimeout(t));
clearInterval(this.recTimer);
set({
phase: 'form', collapsed: false, created: false, name: '', desc: '', cifText: '', client: '',
start: '', end: '', topic: '', location: '', participants: [''], files: [], draftSaved: false,
messages: [], draft: '', recording: false, recSecs: 0, answered: false, choice: ''
});
},
closeTakeover: () => set({ phase: 'selfSearch', dpOpen: false, tpOpen: '', topicOpen: false }),
togglePanel: () => set({ collapsed: !s.collapsed }),
setDraft: (e) => set({ draft: e.target.value }),
draftKey: (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } },
send: send,
toggleRecord: () => {
if (!s.recording) {
set({ recording: true, recSecs: 0 });
this.recTimer = setInterval(() => this.setState({ recSecs: this.state.recSecs + 1 }), 1000);
return;
}
clearInterval(this.recTimer);
this.setState({ recording: false, messages: s.messages.concat([this.msg('me', 'audio', mm)]) });
this.respond();
}
};
const GF = {"tl-incDate": ["tlF.incDate", "tlSet.incDate", "Date of incorporation"], "tl-expiry": ["tlF.expiry", "tlSet.expiry", "Expiry date"], "tl-issue": ["tlF.issue", "tlSet.issue", "Issue date"], "eid-issue": ["mf.eidIssue", "mfSet.eidIssue", "Issue date"], "eid-exp": ["mf.eidExpiry", "mfSet.eidExpiry", "Expiry date"], "pp-dob": ["mf.ppDob", "mfSet.ppDob", "Date of birth"], "pp-exp": ["mf.ppExpiry", "mfSet.ppExpiry", "Expiry date"], "pp-issue": ["mf.ppIssue", "mfSet.ppIssue", "Issue date"]};
const gget = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), __v);
const gParse = (v) => { const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec((v || '').trim()); return m ? { y: Number(m[3]), mo: Number(m[2]) - 1, d: Number(m[1]) } : null; };
Object.keys(GF).forEach((id) => {
__v['gdpT_' + id.replace(/-/g, '_')] = (e) => {
if (s.gdp === id) { set({ gdp: '' }); return; }
const r = e && e.currentTarget && e.currentTarget.getBoundingClientRect ? e.currentTarget.getBoundingClientRect() : { bottom: 200, right: 600 };
const W = 304, H = 420, vw = window.innerWidth || 1440, vh = window.innerHeight || 900;
let left = Math.min(Math.max(8, r.right + 8 - W), vw - W - 8); let top = r.bottom + 12; if (top + H > vh - 8) top = Math.max(8, r.top - H - 12);
const cur = gParse(gget(GF[id][0])); const base = cur ? new Date(cur.y, cur.mo, 1) : new Date();
set({ gdp: id, gdpView: 'date', gdpPick: cur ? iso(cur.y, cur.mo, cur.d) : '', gdpYear: base.getFullYear(), gdpMonth: base.getMonth(), gdpTop: top + 'px', gdpLeft: left + 'px' });
};
});
const gCells = []; { const fd = new Date(s.gdpYear, s.gdpMonth, 1).getDay(); const fn = new Date(s.gdpYear, s.gdpMonth + 1, 0).getDate();
for (let i = 0; i < fd; i++) gCells.push({ isDay: false });
for (let d = 1; d <= fn; d++) { const id = iso(s.gdpYear, s.gdpMonth, d); const sel = id === s.gdpPick;
gCells.push({ isDay: true, label: String(d), aria: d + ' ' + fullMonths[s.gdpMonth] + ' ' + s.gdpYear, pressed: sel ? 'true' : 'false', bg: sel ? '#1b48b5' : '#ffffff', fg: sel ? '#ffffff' : '#072447', ring: id === todayIso && !sel ? RING : 'none', pick: () => set({ gdpPick: id }) }); }
while (gCells.length % 7) gCells.push({ isDay: false }); }
const gWeeks = []; for (let i = 0; i < gCells.length; i += 7) gWeeks.push({ days: gCells.slice(i, i + 7) });
const gMonths = shortMonths.map((m, i) => ({ label: m.toUpperCase(), aria: fullMonths[i] + ' ' + s.gdpYear, ring: i === s.gdpMonth ? RING : 'none', pick: () => set({ gdpMonth: i, gdpView: 'date' }) }));
const gYears = []; for (let i = 0; i < 12; i++) { const y = s.gdpYearStart + i; gYears.push({ label: String(y), aria: String(y), ring: y === s.gdpYear ? RING : 'none', pick: () => set({ gdpYear: y, gdpView: 'month' }) }); }
const gShift = (by) => { const d = new Date(s.gdpYear, s.gdpMonth + by, 1); set({ gdpYear: d.getFullYear(), gdpMonth: d.getMonth() }); };
Object.assign(__v, {
gdpShow: !!GF[s.gdp], gdpTop: s.gdpTop, gdpLeft: s.gdpLeft, gdpDialog: GF[s.gdp] ? 'Choose ' + GF[s.gdp][2].toLowerCase() : 'Choose date',
gdpIsDate: s.gdpView === 'date', gdpIsGrid: s.gdpView !== 'date', gdpHasChevron: s.gdpView !== 'year', gdpGrid: s.gdpView === 'year' ? gYears : gMonths, gdpWeeks: gWeeks,
gdpTitle: s.gdpView === 'date' ? shortMonths[s.gdpMonth] + ' ' + s.gdpYear : s.gdpView === 'month' ? String(s.gdpYear) : s.gdpYearStart + ' - ' + (s.gdpYearStart + 11),
gdpTitleLabel: s.gdpView === 'date' ? 'Choose month' : s.gdpView === 'month' ? 'Choose year' : 'Back to months',
gdpPrevLabel: s.gdpView === 'date' ? 'Previous month' : s.gdpView === 'month' ? 'Previous year' : 'Previous 12 years',
gdpNextLabel: s.gdpView === 'date' ? 'Next month' : s.gdpView === 'month' ? 'Next year' : 'Next 12 years',
gdpPrev: () => { if (s.gdpView === 'date') gShift(-1); else if (s.gdpView === 'month') set({ gdpYear: s.gdpYear - 1 }); else set({ gdpYearStart: s.gdpYearStart - 12 }); },
gdpNext: () => { if (s.gdpView === 'date') gShift(1); else if (s.gdpView === 'month') set({ gdpYear: s.gdpYear + 1 }); else set({ gdpYearStart: s.gdpYearStart + 12 }); },
gdpSwitchView: () => { if (s.gdpView === 'date') set({ gdpView: 'month' }); else if (s.gdpView === 'month') set({ gdpView: 'year', gdpYearStart: s.gdpYear - 10 }); else set({ gdpView: 'month' }); },
gdpCancel: () => set({ gdp: '' }),
gdpApply: () => { const f = GF[s.gdp]; if (f && s.gdpPick) { const q = s.gdpPick.split('-'); const h = gget(f[1]); if (h) h({ target: { value: q[2] + '/' + q[1] + '/' + q[0] } }); } set({ gdp: '' }); }
});
{
const co = 'Orient Insurance';
const ahN = (s.shF.first + ' ' + s.shF.last).trim() || 'Ahmed Al-Hassan';
const ini2 = (n) => { const p = n.trim().split(/ +/); return (((p[0] || '')[0] || '') + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase(); };
const P = {
  ah: { name: ahN, email: s.shF.email.trim() || 'ahmed@email.com', mobile: s.shF.mobile.trim() ? '+971 ' + s.shF.mobile.trim() : '050 123 4567' },
  fa: { name: 'Fatima Ahmed Ali', email: 'fatima@email.com', mobile: '050 234 5678' },
  mh: { name: 'Mostafa Hamed', email: 'mostafa@email.com', mobile: '052 678 1255' },
  km: { name: 'Khalid Al-Mansoori', email: 'khalid@email.com', mobile: '055 345 6789' }
};
const per = (o, extra) => Object.assign({ initials: ini2(o.name), ind: true, ent: false, hasSub: true }, o, extra || {});
const ent = (name, sub) => ({ name: name, sub: sub, ind: false, ent: true, hasSub: true, initials: '' });
const rvOwn = (s.ownGone ? [] : [per(P.ah, { sub: '50%  Shareholder - Individual' })]).concat([ent('GETAX Agrifert DMCC', '50% Shareholder - Entity')])
  .concat(s.ownExtra.map((x) => per({ name: x.name, initials: x.initials }, { sub: x.body })));
const cmap = { a: P.ah, b: P.fa, c: P.mh };
const cx = s.consent && s.consent[0] === 'x' ? s.ownExtra.find((x) => 'x' + x.id === s.consent) : null;
const cPick = cmap[s.consent] || cx;
const rvConsent = cPick ? [{ name: cPick.name, email: cPick.email, bt: '0' }] : [];
const cobMap = { a: P.ah, b: P.fa, c: P.km };
const rvCob = ['a', 'b', 'c'].filter((k) => s.cob[k]).map((k) => per(cobMap[k], { sub: cobMap[k].email }))
  .concat(s.ownExtra.filter((x) => s.cob['x' + x.id]).map((x) => per({ name: x.name, initials: x.initials }, { sub: x.email })));
const kmSugs = { a: per(P.ah, { sub: '50%  Shareholder of ' + co + ' - Individual' }), b: ent('Gulf Star Investments LLC', '50%  Shareholder of ' + co + ' - Company'),
  c: per(P.fa, { sub: '50%  Shareholder of ' + co + ' - Individual' }), d: ent('Al Noor Trading LLC', '50%  Shareholder of ' + co + ' - Company'),
  e: per(P.mh, { sub: '50%  Shareholder of ' + co + ' - Individual' }), f: ent('Orient Holdings Ltd', '50%  Shareholder of ' + co + ' - Company') };
const rvKm = s.kmList.map((r) => per({ name: ((r.title ? r.title + ' ' : '') + r.first + ' ' + r.last).trim(), initials: ((r.first.trim()[0] || '') + (r.last.trim()[0] || '')).toUpperCase() }, { sub: r.role || '-' }))
  .concat(['a', 'b', 'c', 'd', 'e', 'f'].filter((k) => s.kmSel[k]).map((k) => kmSugs[k]));
const enbd = { 1: '1044560850002', 2: '1024560850002' };
const banks = (w) => [1, 2].filter((n) => s.bankSel[w + n]).map((n) => ({ name: 'Emirates NBD', num: enbd[n], kind: 'Current Account', hasKind: true, enbd: true, ext: false }))
  .concat(s.bankExt[w].map((r) => ({ name: r.name, num: r.iban, kind: '', hasKind: false, enbd: false, ext: true })));
const cobFirst = rvCob[0];
const cpSugs = { a: P.ah, b: P.fa, c: P.mh };
const rvCp = s.cpList.map((r) => per({ name: r.name.trim(), initials: ini2(r.name) }, { sub: r.rel, mobile: r.mobile.trim() ? '+971 ' + r.mobile.trim() : '-', email: r.email.trim() || '-' }))
  .concat(['a', 'b', 'c'].filter((k) => s.cpSel[k]).map((k) => per(cpSugs[k], { sub: '50%  Shareholder of ' + co + ' - Individual' })));
Object.assign(__v, {
  rvOwn: rvOwn, rvNoOwn: rvOwn.length === 0,
  rvConsent: rvConsent, rvNoConsent: rvConsent.length === 0,
  rvCob: rvCob, rvNoCob: rvCob.length === 0,
  rvKmNarr: s.kmNarr.trim() || '-', rvKm: rvKm, rvNoKm: rvKm.length === 0,
  rvBankMTitle: co + '’s bank accounts', rvBankM: banks('m'), rvNoBankM: banks('m').length === 0,
  rvBankCTitle: (cobFirst ? cobFirst.name : 'Co-borrower') + '’s bank accounts', rvBankC: banks('c'), rvNoBankC: banks('c').length === 0,
  rvBankCShow: !!cobFirst || banks('c').length > 0,
  bankCoTitle: (cobFirst ? cobFirst.name : 'Co-borrower') + '’s bank accounts',
  rvCp: rvCp, rvNoCp: rvCp.length === 0
});
}
{
const FE_DEF = {"c1": "1,330,526", "c2": "81,614,736", "c3": "4,106,184", "c4": "1,012,148", "c5": "1,725,402", "c6": "55,593,804", "c7": "27,633,232", "c8": "58,200,003", "c9": "40,468,814", "c10": "64,253,647", "c11": "48,367,488", "c12": "48,140,857", "c13": "79,582,434", "c14": "74,501,918", "c15": "32,799,574", "c16": "56,515,233", "c17": "53,611,098", "c18": "67,117,049", "c19": "88,454,530", "c20": "29,199,751", "c21": "88,645,477", "c22": "99,344,533", "c23": "38,951,971", "c24": "60,340,585", "c25": "82,667,659", "c26": "84,236,023", "c27": "55,557,773", "c28": "67,052,342", "c29": "64,810,583", "c30": "43,431,685", "c31": "87,801,782", "c32": "99,109,702", "c33": "84,553,630", "c34": "1,330,526", "c35": "81,614,736", "c36": "4,106,184", "c37": "1,012,148", "c38": "1,725,402", "c39": "55,593,804", "c40": "27,633,232", "c41": "58,200,003", "c42": "40,468,814", "c43": "64,253,647", "c44": "48,367,488", "c45": "48,140,857", "c46": "79,582,434", "c47": "74,501,918", "c48": "32,799,574", "c49": "56,515,233", "c50": "53,611,098", "c51": "67,117,049", "c52": "88,454,530", "c53": "29,199,751", "c54": "88,645,477", "c55": "99,344,533", "c56": "38,951,971", "c57": "60,340,585", "c58": "82,667,659", "c59": "84,236,023", "c60": "55,557,773", "c61": "67,052,342", "c62": "64,810,583", "c63": "43,431,685", "c64": "87,801,782", "c65": "99,109,702", "c66": "84,553,630", "c67": "72,358,325", "c68": "44,682,614", "c69": "75,446,197", "c70": "47,274,721", "c71": "59,051,577", "c72": "37,586,179", "c73": "89,799,814", "c74": "93,371,635", "c75": "19,622,239", "c76": "95,074,543", "c77": "18,381,207", "c78": "10,756,078", "c79": "94,311,413", "c80": "35,158,845", "c81": "54,050,999", "c82": "83,268,220", "c83": "73,462,302", "c84": "34,535,457", "c85": "67,730,305", "c86": "45,152,708", "c87": "9,303,472", "c88": "10,341,584", "c89": "79,011,866", "c90": "76,746,704", "c91": "75,648,757", "c92": "54,012,110", "c93": "83,856,173", "c94": "63,746,197", "c95": "40,308,692", "c96": "75,405,130", "c97": "42,253,392", "c98": "59,194,977", "c99": "69,422,004", "c100": "83,179,370", "c101": "48,612,848", "c102": "7,179,735", "c103": "142,857", "c104": "167,432", "c105": "95,340", "c106": "58,320", "c107": "89,150", "c108": "21,567", "c109": "191,204", "c110": "12,784", "c111": "154,893", "c112": "73,615", "c113": "105,623", "c114": "67,812", "c115": "126,498", "c116": "48,209", "c117": "118,045", "c118": "34,971", "c119": "183,076", "c120": "39,726", "c121": "1,330,526", "c122": "81,614,736", "c123": "4,106,184", "c124": "142,857", "c125": "167,432", "c126": "95,340", "c127": "58,320", "c128": "89,150", "c129": "21,567", "c130": "191,204", "c131": "12,784", "c132": "154,893", "c133": "73,615", "c134": "105,623", "c135": "67,812", "c136": "126,498", "c137": "48,209", "c138": "118,045", "c139": "34,971", "c140": "183,076", "c141": "39,726", "c142": "64421", "c143": "145630", "c144": "111666", "c145": "102840", "c146": "83203", "c147": "137289", "c148": "55011", "c149": "61546", "c150": "146231", "c151": "140141", "c152": "104826", "c153": "149172", "c154": "1,330,526", "c155": "81,614,736", "c156": "4,106,184", "c157": "973136", "c158": "406431", "c159": "664549", "c160": "686494", "c161": "515259", "c162": "934745", "c163": "982925", "c164": "970239", "c165": "710315", "c166": "64823", "c167": "561179", "c168": "826809", "c169": "602102", "c170": "68867", "c171": "210624", "c172": "805386", "c173": "560774", "c174": "964247", "c175": "77805", "c176": "374165", "c177": "62868", "c178": "171359", "c179": "194622", "c180": "517987", "c181": "210000", "c182": "614065", "c183": "594176", "c184": "317383", "c185": "593598", "c186": "943490", "c187": "977980", "c188": "869237", "c189": "975627", "c190": "1,330,526", "c191": "81,614,736", "c192": "4,106,184", "c193": "1,330,526", "c194": "81,614,736", "c195": "4,106,184", "c196": "973136", "c197": "406431", "c198": "664549", "c199": "686494", "c200": "515259", "c201": "934745", "c202": "982925", "c203": "970239", "c204": "710315", "c205": "64823", "c206": "561179", "c207": "826809", "c208": "602102", "c209": "68867", "c210": "210624", "c211": "805386", "c212": "560774", "c213": "964247", "c214": "77805", "c215": "374165", "c216": "62868", "c217": "171359", "c218": "194622", "c219": "517987", "c220": "210000", "c221": "614065", "c222": "594176", "c223": "317383", "c224": "593598", "c225": "943490", "c226": "977980", "c227": "869237", "c228": "975627", "c229": "1,330,526", "c230": "81,614,736", "c231": "4,106,184", "c232": "1,330,526", "c233": "81,614,736", "c234": "4,106,184", "c235": "973136", "c236": "406431", "c237": "664549", "c238": "686494", "c239": "515259", "c240": "934745", "c241": "982925", "c242": "970239", "c243": "710315", "c244": "64823", "c245": "561179", "c246": "826809", "c247": "602102", "c248": "68867", "c249": "210624", "c250": "805386", "c251": "560774", "c252": "964247", "c253": "77805", "c254": "374165", "c255": "62868", "c256": "171359", "c257": "194622", "c258": "517987", "c259": "210000", "c260": "614065", "c261": "594176", "c262": "317383", "c263": "593598", "c264": "943490", "c265": "977980", "c266": "869237", "c267": "975627"};
const fmt = (raw, prev) => { const c = String(raw).replace(/[^0-9.\-]/g, ''); if (!c || isNaN(Number(c))) return prev; return Number(c).toLocaleString('en-US', { maximumFractionDigits: 2 }); };
const cur = (k) => (s.finVals[k] != null ? s.finVals[k] : FE_DEF[k]);
const commit = (extra) => { const o = Object.assign({}, s.finVals); if (s.finEditId) o[s.finEditId] = fmt(s.finDraft, cur(s.finEditId)); this.setState(Object.assign({ finVals: o, finEditId: '', finDraft: '' }, extra || {})); };
const focusIn = () => this.later(30, () => { const el = document.getElementById('finEditInput'); if (el) { el.focus(); el.select(); } });
const fe = {};
Object.keys(FE_DEF).forEach((k) => { const ed = s.finEditId === k; fe[k] = { val: cur(k), view: !ed, editing: ed,
  edit: () => { const o = Object.assign({}, s.finVals); if (s.finEditId) o[s.finEditId] = fmt(s.finDraft, cur(s.finEditId)); this.setState({ finVals: o, finEditId: k, finDraft: o[k] != null ? o[k] : FE_DEF[k] }); focusIn(); } }; });
Object.assign(__v, { fe: fe, finDraft: s.finDraft, finDraftSet: (e) => this.setState({ finDraft: e.target.value }),
  finSave: () => commit(), finKey: (e) => { if (e.key === 'Enter') { e.preventDefault(); commit(); } else if (e.key === 'Escape') { this.setState({ finEditId: '', finDraft: '' }); } } });
}
return __v;
}
}
