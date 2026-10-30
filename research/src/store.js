import { useCallback, useEffect, useState } from 'react';

// Session data lives only in this browser (localStorage), one record per participant code.
// Nothing is sent anywhere. The facilitator exports JSON/CSV at the end and can reset a session.
// Every read and write is guarded so the site still works where storage is blocked.
const KEY = id => `cp-research:v1:${id}`;
const listeners = new Set();

export function readSession(id) {
  try { return JSON.parse(localStorage.getItem(KEY(id)) || 'null') || {}; } catch (e) { return {}; }
}
export function writeSession(id, data) {
  try { localStorage.setItem(KEY(id), JSON.stringify(data)); } catch (e) { /* storage unavailable: keep in memory only */ }
  listeners.forEach(fn => fn(id));
}
export function clearSession(id) {
  try { localStorage.removeItem(KEY(id)); } catch (e) { /* ignore */ }
  listeners.forEach(fn => fn(id));
}

export function statusOf(data) {
  if (data && data.completedAt) return 'completed';
  if (data && data.consent && data.consent.at) return 'in-progress';
  return 'not-started';
}

// Live session record. Updates when this tab writes, and when another tab (e.g. the facilitator view
// on a second screen) writes, through the storage event.
export function useSession(id) {
  const [data, setData] = useState(() => readSession(id));
  useEffect(() => {
    setData(readSession(id));
    const onLocal = changed => { if (changed === id) setData(readSession(id)); };
    const onStorage = e => { if (e.key === KEY(id)) setData(readSession(id)); };
    listeners.add(onLocal);
    window.addEventListener('storage', onStorage);
    return () => { listeners.delete(onLocal); window.removeEventListener('storage', onStorage); };
  }, [id]);
  const update = useCallback(fn => {
    const next = fn(readSession(id));
    writeSession(id, next);
  }, [id]);
  return [data, update];
}

// Statuses for all participants, kept live for the home page.
export function useStatuses(ids) {
  const read = () => Object.fromEntries(ids.map(id => [id, statusOf(readSession(id))]));
  const [s, setS] = useState(read);
  useEffect(() => {
    const refresh = () => setS(read());
    listeners.add(refresh);
    window.addEventListener('storage', refresh);
    return () => { listeners.delete(refresh); window.removeEventListener('storage', refresh); };
  }, [ids.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps
  return s;
}

export function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Facilitator mode for this tab only: set when a facilitator route is opened in it, so the home page modal can show
// facilitator actions and notes in that tab. A convenience, not access control.
const FAC = 'cp-research:facilitator-tab';
export function markFacilitatorTab() { try { sessionStorage.setItem(FAC, '1'); } catch (e) { /* ignore */ } }
export function isFacilitatorTab() { try { return sessionStorage.getItem(FAC) === '1'; } catch (e) { return false; } }
