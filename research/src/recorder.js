import { readSession, writeSession } from './store.js';

// Research recordings: browser screen capture (getDisplayMedia) and, separately, the microphone (getUserMedia),
// recorded with MediaRecorder. Stored ONLY in this browser on this device (IndexedDB), as small chunks written every
// two seconds so an interrupted recording keeps what was captured. Nothing is uploaded. The facilitator plays and
// exports recordings from a window of the same browser on the same device.
//
// One capture per tab is reused across journeys (no repeated permission prompts). Each journey gets its own
// recording, from task start to task end, so feedback is not recorded. Markers note task start/end, pauses and
// interruptions such as sharing being ended from the browser's own controls.

const DB_NAME = 'cp-research-media';
const CHUNK_MS = 2000;

let dbPromise = null;
function db() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) { reject(new Error('IndexedDB is not available in this browser.')); return; }
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const d = req.result;
        const r = d.createObjectStore('recordings', { keyPath: 'id' });
        r.createIndex('participantId', 'participantId');
        const c = d.createObjectStore('chunks', { keyPath: ['recId', 'seq'] });
        c.createIndex('recId', 'recId');
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    dbPromise.catch(() => { dbPromise = null; });
  }
  return dbPromise;
}
function tx(store, mode, fn) {
  return db().then(d => new Promise((resolve, reject) => {
    const t = d.transaction(store, mode);
    let out;
    t.oncomplete = () => resolve(out);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error || new Error('Storage transaction aborted.'));
    out = fn(t.objectStore(store));
  }));
}
const putRec = rec => tx('recordings', 'readwrite', s => { s.put(rec); });
const putChunk = (recId, seq, blob) => tx('chunks', 'readwrite', s => { s.put({ recId, seq, blob }); });
function getAll(store, index, key) {
  return db().then(d => new Promise((resolve, reject) => {
    const req = d.transaction(store).objectStore(store).index(index).getAll(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  }));
}

// ---- live state, shared with the UI ----
// state: 'off' (no capture) | 'ready' (capture live, not recording) | 'recording' | 'paused' | 'saving'
//        | 'saved' | 'failed' | 'stopped' (capture ended)
const cap = { screen: null, mic: null, surface: '', state: 'off', note: '', current: null, last: null, participantId: '' };
const listeners = new Set();
export const getRec = () => ({ ...cap, live: isLive() });
export function subscribeRec(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit() {
  listeners.forEach(fn => fn(getRec()));
  // Mirror a short status into the session record so the facilitator window updates live.
  if (cap.participantId) {
    const d = readSession(cap.participantId);
    writeSession(cap.participantId, { ...d, recording: { state: cap.state, note: cap.note, journeyId: cap.current ? cap.current.journeyId : (cap.last && cap.last.journeyId) || '', at: new Date().toISOString() } });
  }
}
function set(patch) { Object.assign(cap, patch); emit(); }

const liveTracks = () => [cap.screen, cap.mic].filter(Boolean).flatMap(s => s.getTracks()).filter(t => t.readyState === 'live');
export const isLive = () => liveTracks().length > 0;
export const supportsScreen = () => !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && window.MediaRecorder);
export const supportsMic = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
export function bindParticipant(id) { cap.participantId = id; }

// ---- permissions (each called from an explicit participant action) ----
export async function requestScreen() {
  stopStream(cap.screen);
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: { displaySurface: 'browser', frameRate: 15 },
    audio: false,
    preferCurrentTab: true,          // Chrome: offers "this tab" first
    selfBrowserSurface: 'include',
    surfaceSwitching: 'exclude',
    monitorTypeSurfaces: 'exclude'
  });
  const track = stream.getVideoTracks()[0];
  const surface = (track.getSettings && track.getSettings().displaySurface) || '';
  track.addEventListener('ended', () => onCaptureEnded('Screen sharing was ended from the browser.'));
  set({ screen: stream, surface, state: 'ready', note: '' });
  return { stream, surface };
}
export async function requestMic() {
  stopStream(cap.mic);
  const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
  stream.getAudioTracks()[0].addEventListener('ended', () => onCaptureEnded('The microphone was disconnected or turned off.'));
  set({ mic: stream, state: 'ready', note: '' });
  return stream;
}
function stopStream(s) { if (s) s.getTracks().forEach(t => t.stop()); }

// Participant stops recording at any time: end the journey recording, then release screen and microphone.
export async function stopCapture(reason = 'Recording stopped by the participant.') {
  if (cap.current) { marker('recording-stopped', reason); await stopJourney('stopped'); }
  stopStream(cap.screen); stopStream(cap.mic);
  set({ screen: null, mic: null, surface: '', state: 'stopped', note: reason });
}
export function discardCapture() {
  stopStream(cap.screen); stopStream(cap.mic);
  set({ screen: null, mic: null, surface: '', state: 'off', note: '' });
}

let ending = false;
async function onCaptureEnded(reason) {
  if (ending) return;
  ending = true;
  if (cap.current) { marker('interruption', reason); await stopJourney('interrupted'); }
  stopStream(cap.screen); stopStream(cap.mic);
  set({ screen: null, mic: null, surface: '', state: 'stopped', note: reason });
  ending = false;
}

// ---- journey recordings ----
function pickMime(video) {
  const list = video ? ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4'] : ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'];
  return list.find(m => window.MediaRecorder && MediaRecorder.isTypeSupported(m)) || '';
}

export function marker(type, label = '') {
  const c = cap.current;
  if (!c) return;
  c.rec.markers.push({ type, label, at: new Date().toISOString(), t: activeMs(c) });
  putRec(c.rec).catch(() => {});
}
function activeMs(c) { return c.activeMs + (c.runningSince ? Date.now() - c.runningSince : 0); }

// meta: { participantId, code, role, sessionId, journeyId, journeyTitle, prototypeVersion }
export async function startJourney(meta) {
  const tracks = liveTracks();
  if (!tracks.length) return { ok: false, error: 'No active screen or microphone capture.' };
  const video = tracks.some(t => t.kind === 'video');
  const mimeType = pickMime(video);
  let mr;
  try { mr = new MediaRecorder(new MediaStream(tracks), mimeType ? { mimeType } : undefined); } catch (e) { return { ok: false, error: `The recorder could not start (${e.message}).` }; }
  const id = `${meta.participantId}-${meta.journeyId}-${Date.now().toString(36)}`;
  const rec = {
    id, ...meta, createdAt: new Date().toISOString(), endedAt: null, status: 'recording', mimeType: mr.mimeType || mimeType,
    hasVideo: video, hasAudio: tracks.some(t => t.kind === 'audio'), surface: cap.surface, bytes: 0, chunks: 0, durationMs: 0,
    markers: [], error: '', updatedAt: new Date().toISOString()
  };
  const c = { rec, mr, seq: 0, activeMs: 0, runningSince: 0, pending: Promise.resolve(), saveError: '', unsaved: [] };
  mr.ondataavailable = e => {
    if (!e.data || !e.data.size) return;
    const seq = c.seq++;
    const blob = e.data;
    c.pending = c.pending.then(() => putChunk(id, seq, blob).then(() => {
      rec.bytes += blob.size; rec.chunks += 1; rec.durationMs = activeMs(c); rec.updatedAt = new Date().toISOString();
      return putRec(rec);
    })).catch(err => { c.saveError = c.saveError || (err && err.message) || 'Storage write failed.'; c.unsaved.push(blob); });
  };
  mr.onerror = e => { marker('interruption', `Recorder error: ${(e.error && e.error.message) || 'unknown'}`); stopJourney('failed'); };
  try { await putRec(rec); } catch (e) { return { ok: false, error: `Recordings can't be saved in this browser (${e.message}).` }; }
  const started = new Promise((resolve, reject) => { mr.onstart = resolve; setTimeout(() => reject(new Error('timed out')), 4000); });
  try { mr.start(CHUNK_MS); await started; } catch (e) {
    rec.status = 'failed'; rec.error = `Recorder did not start (${e.message}).`; await putRec(rec).catch(() => {});
    return { ok: false, error: rec.error };
  }
  c.runningSince = Date.now();
  cap.current = c;
  marker('task-start', meta.journeyTitle);
  set({ state: 'recording', note: '' });
  return { ok: true, id };
}

export function pauseJourney(label = 'Task paused') {
  const c = cap.current;
  if (!c || c.mr.state !== 'recording') return;
  c.mr.pause(); c.activeMs = activeMs(c); c.runningSince = 0;
  marker('paused', label); set({ state: 'paused' });
}
export function resumeJourney(label = 'Task resumed') {
  const c = cap.current;
  if (!c || c.mr.state !== 'paused') return;
  c.mr.resume(); c.runningSince = Date.now();
  marker('resumed', label); set({ state: 'recording' });
}

// Ends the current journey recording and verifies it before calling it saved.
// endType: 'finished' | 'left' | 'stopped' | 'interrupted' | 'failed'
export async function stopJourney(endType = 'finished') {
  const c = cap.current;
  if (!c) return null;
  cap.current = null;
  const { rec, mr } = c;
  set({ state: 'saving' });
  if (mr.state !== 'inactive') {
    const stopped = new Promise(resolve => { mr.onstop = resolve; setTimeout(resolve, 4000); });
    try { mr.stop(); } catch (e) { /* already stopped */ }
    await stopped;
  }
  c.activeMs = activeMs(c); c.runningSince = 0;
  await c.pending;
  rec.durationMs = c.activeMs;
  rec.endedAt = new Date().toISOString();
  rec.markers.push({ type: 'task-end', label: endType, at: rec.endedAt, t: c.activeMs });
  let ok = !c.saveError && rec.chunks > 0 && rec.bytes > 0;
  if (ok) ok = await playable(rec.id, rec.mimeType, rec.hasVideo);
  rec.status = ok ? (endType === 'interrupted' || endType === 'stopped' ? 'saved-partial' : 'saved') : (c.saveError || rec.chunks ? 'failed' : 'empty');
  rec.error = ok ? '' : c.saveError || (rec.chunks ? 'The saved recording could not be read back.' : 'Nothing was captured.');
  try { await putRec(rec); } catch (e) { rec.status = 'failed'; rec.error = rec.error || e.message; }
  cap.last = { ...rec, unsaved: c.unsaved };
  set({ state: ok ? 'saved' : 'failed', note: ok ? '' : rec.error });
  if (isLive()) setTimeout(() => { if (!cap.current && (cap.state === 'saved' || cap.state === 'failed') && isLive()) set({ state: 'ready' }); }, 0);
  return rec;
}

// Reads the first chunks back from storage and checks the browser can decode the recording's header.
async function playable(recId, mimeType, video) {
  try {
    const chunks = (await getAll('chunks', 'recId', recId)).sort((a, b) => a.seq - b.seq).slice(0, 3);
    if (!chunks.length) return false;
    const url = URL.createObjectURL(new Blob(chunks.map(c => c.blob), { type: mimeType }));
    const el = document.createElement(video ? 'video' : 'audio');
    el.muted = true; el.preload = 'metadata';
    const ok = await new Promise(resolve => {
      el.onloadedmetadata = () => resolve(true);
      el.onerror = () => resolve(false);
      setTimeout(() => resolve(false), 5000);
      el.src = url;
    });
    URL.revokeObjectURL(url);
    return ok;
  } catch (e) { return false; }
}

// ---- facilitator access (same browser, same device) ----
export async function listRecordings(participantId) {
  const list = await getAll('recordings', 'participantId', participantId);
  return list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}
export async function recordingBlob(rec) {
  const chunks = (await getAll('chunks', 'recId', rec.id)).sort((a, b) => a.seq - b.seq);
  return new Blob(chunks.map(c => c.blob), { type: rec.mimeType || 'video/webm' });
}
// Unsaved data from a failed write in this tab, so the participant's facilitator can still download it.
export const lastUnsaved = () => (cap.last && cap.last.unsaved && cap.last.unsaved.length ? new Blob(cap.last.unsaved, { type: cap.last.mimeType }) : null);
export const recExt = mime => (mime || '').includes('mp4') ? 'mp4' : 'webm';

// ---- reset for a test run ----
// Stops this tab's recording without saving it, releases screen and microphone, and deletes every stored recording
// (and its chunks) for the participant. Other participants' recordings are left alone.
export async function resetParticipantMedia(participantId) {
  const c = cap.current;
  if (c && (!cap.participantId || cap.participantId === participantId)) {
    cap.current = null;
    c.mr.ondataavailable = null; c.mr.onerror = null;
    try { if (c.mr.state !== 'inactive') c.mr.stop(); } catch (e) { /* already stopped */ }
    await c.pending.catch(() => {});
  }
  if (!cap.participantId || cap.participantId === participantId) { cap.last = null; discardCapture(); }
  const recs = await getAll('recordings', 'participantId', participantId);
  for (const r of recs) {
    await tx('chunks', 'readwrite', s => { s.delete(IDBKeyRange.bound([r.id, -Infinity], [r.id, Infinity])); });
    await tx('recordings', 'readwrite', s => { s.delete(r.id); });
  }
  return recs.length;
}
