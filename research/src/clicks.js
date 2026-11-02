// Click capture for the facilitator heatmaps.
//
// While a participant works in a task, the prototype runs in a same-origin iframe. Each click there is saved
// on this device only: clicks in localStorage (one list per participant), and one page snapshot per prototype
// screen in IndexedDB, used as the heatmap background. Nothing is sent anywhere.
//
// A click is stored in page coordinates of the screen: x from the left edge, y from the top including the
// scroll offset of the panel that scrolls, so it lines up with the expanded snapshot.

const KEY = id => `cp-research:clicks:v1:${id}`;
const MAX_CLICKS = 4000; // per participant, oldest dropped first
const DB = 'cp-research-heat';
const STORE = 'shots';
const listeners = new Set();

export function readClicks(id) {
  try { const v = JSON.parse(localStorage.getItem(KEY(id)) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; }
}
function writeClicks(id, list) {
  try { localStorage.setItem(KEY(id), JSON.stringify(list.slice(-MAX_CLICKS))); } catch (e) { /* storage full or blocked */ }
  listeners.forEach(fn => fn(id));
}
export function clearClicks(id) {
  try { localStorage.removeItem(KEY(id)); } catch (e) { /* ignore */ }
  listeners.forEach(fn => fn(id));
}
export function onClicksChange(fn) {
  listeners.add(fn);
  const onStorage = e => { if (e.key && e.key.startsWith('cp-research:clicks:')) fn(); };
  window.addEventListener('storage', onStorage);
  return () => { listeners.delete(fn); window.removeEventListener('storage', onStorage); };
}

// ---- Snapshots (IndexedDB)
function openDb() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { reject(new Error('IndexedDB unavailable')); return; }
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => { req.result.createObjectStore(STORE, { keyPath: 'key' }); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function tx(mode, fn) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE, mode);
    const out = fn(t.objectStore(STORE));
    t.oncomplete = () => { db.close(); resolve(out && out.result); };
    t.onerror = () => { db.close(); reject(t.error); };
  });
}
export const getShot = key => tx('readonly', s => s.get(key)).catch(() => null);
export const listShotKeys = () => tx('readonly', s => s.getAllKeys()).catch(() => []);
const putShot = shot => tx('readwrite', s => s.put(shot)).catch(() => null);
export const clearShots = () => tx('readwrite', s => s.clear()).catch(() => null);

// ---- Capture inside the prototype frame
const INTERACTIVE = 'button, a[href], input, select, textarea, label, summary, [role="button"], [role="checkbox"], [role="radio"], [role="menuitem"], [role="tab"], [role="option"], [role="switch"], [onclick]';

function screenOf(doc) {
  const root = doc.querySelector('[data-phase]');
  const key = root ? root.getAttribute('data-phase') : 'unknown';
  const h = [...doc.querySelectorAll('h1, h2')].find(el => el.offsetParent !== null && el.textContent.trim());
  return { key, label: h ? h.textContent.trim().replace(/\s+/g, ' ').slice(0, 80) : key };
}
function scrollerOf(el, win) {
  for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
    const oy = win.getComputedStyle(n).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && n.scrollHeight > n.clientHeight + 1) return n;
  }
  return null;
}
const clean = s => (s || '').trim().replace(/\s+/g, ' ');
function nameOf(el, control) {
  if (!el) return '';
  if (control) return clean(el.getAttribute('aria-label') || el.getAttribute('title') || el.getAttribute('alt') || el.value || el.textContent).slice(0, 60);
  // Outside controls: the nearest element with a short text of its own, so a click on a card reads as its title
  for (let n = el; n && n.nodeType === 1 && n.tagName !== 'BODY'; n = n.parentElement) {
    const t = clean(n.getAttribute('aria-label') || n.textContent);
    if (t && t.length <= 60) return t;
    if (t) break;
  }
  return '';
}

// The snapshot: the screen's markup with scripts removed and every scrolling panel opened to its full height.
function buildShot(doc, win, screen) {
  // Mark scrolling panels in the live tree, clone, then remove the marks.
  const marked = [];
  doc.querySelectorAll('body *').forEach(n => {
    const oy = win.getComputedStyle(n).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && n.scrollHeight > n.clientHeight + 1) { n.setAttribute('data-heat-scroll', ''); marked.push(n); }
  });
  const clone = doc.documentElement.cloneNode(true);
  marked.forEach(n => n.removeAttribute('data-heat-scroll'));
  clone.querySelectorAll('script, iframe, video, noscript, link[rel="modulepreload"]').forEach(n => n.remove());
  const head = clone.querySelector('head');
  if (head) {
    const base = doc.createElement('base'); base.href = doc.baseURI; head.insertBefore(base, head.firstChild);
    const st = doc.createElement('style');
    st.textContent = `html,body{height:auto!important;overflow:visible!important}[data-phase]{height:auto!important;min-height:${win.innerHeight}px!important}[data-heat-scroll]{overflow:visible!important;flex:1 0 auto!important;max-height:none!important;height:auto!important}*{animation:none!important;transition:none!important}`;
    head.appendChild(st);
  }
  return { key: screen.key, label: screen.label, w: win.innerWidth, h: win.innerHeight, html: '<!doctype html>' + clone.outerHTML, at: new Date().toISOString() };
}

// Attach to a loaded prototype iframe. Returns a detach function.
export function trackFrame(iframe, pid, journeyId) {
  let doc, win;
  try { doc = iframe.contentDocument; win = iframe.contentWindow; } catch (e) { return () => {}; }
  if (!doc || !win) return () => {};
  const seen = new Set();
  let shotTimer = 0;
  const maybeShot = () => {
    clearTimeout(shotTimer);
    shotTimer = setTimeout(async () => {
      const screen = screenOf(doc);
      if (seen.has(screen.key)) return;
      seen.add(screen.key);
      const have = await getShot(screen.key);
      if (have) return;
      try { await putShot(buildShot(doc, win, screen)); } catch (e) { /* ignore */ }
    }, 700);
  };
  const onDown = e => {
    if (e.button !== undefined && e.button !== 0) return;
    const screen = screenOf(doc);
    const t = e.target && e.target.nodeType === 1 ? e.target : null;
    const sc = t ? scrollerOf(t, win) : null;
    const hit = t && t.closest ? t.closest(INTERACTIVE) : null;
    const list = readClicks(pid);
    list.push({
      j: journeyId, k: screen.key, s: screen.label,
      x: Math.round(e.clientX), y: Math.round(e.clientY + (sc ? sc.scrollTop : 0)),
      w: win.innerWidth, h: win.innerHeight,
      el: hit ? nameOf(hit, true) : nameOf(t, false), i: !!hit, at: Date.now()
    });
    writeClicks(pid, list);
    maybeShot();
  };
  // Screens change without a page load, so watch the phase attribute too.
  const mo = new win.MutationObserver(maybeShot);
  mo.observe(doc.body, { attributes: true, subtree: true, attributeFilter: ['data-phase'] });
  doc.addEventListener('pointerdown', onDown, true);
  maybeShot();
  return () => { clearTimeout(shotTimer); mo.disconnect(); try { doc.removeEventListener('pointerdown', onDown, true); } catch (e) { /* frame gone */ } };
}
