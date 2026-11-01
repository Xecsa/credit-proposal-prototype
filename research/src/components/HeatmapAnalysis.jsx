import React, { useEffect, useMemo, useRef, useState } from 'react';
import { participants } from '../config.js';
import { journeysByRole, retiredJourneys } from '../script.js';
import { readClicks, onClicksChange, getShot } from '../clicks.js';
import { download } from '../store.js';

// Click heatmaps across the four sessions. Clicks and screen snapshots are saved on this device while each
// participant works in the prototype (see clicks.js). Heat is one hue, light to dark, normalised to the busiest
// spot on the screen shown. The table under the map lists the same data for reading without the picture.

const RAMP = [[253, 217, 168], [247, 147, 76], [215, 48, 31], [127, 23, 10]]; // light → dark, one warm hue family
const RADIUS = 30;

function lut() {
  const out = new Uint8ClampedArray(256 * 3);
  for (let i = 0; i < 256; i++) {
    const t = i / 255 * (RAMP.length - 1);
    const a = Math.min(RAMP.length - 2, Math.floor(t));
    const f = t - a;
    for (let c = 0; c < 3; c++) out[i * 3 + c] = Math.round(RAMP[a][c] + (RAMP[a + 1][c] - RAMP[a][c]) * f);
  }
  return out;
}
const LUT = lut();

const journeyTitles = () => {
  const out = [];
  Object.entries(journeysByRole).forEach(([role, r]) => r.journeys.forEach(j => out.push({ id: j.id, title: `${role} · ${j.title}` })));
  Object.entries(retiredJourneys).forEach(([role, list]) => list.forEach(j => out.push({ id: j.id, title: `${role} · ${j.title} (earlier plan)` })));
  return out;
};
const plural = (n, one, many = one + 's') => `${n} ${n === 1 ? one : many}`;

export default function HeatmapAnalysis() {
  const [ver, setVer] = useState(0);
  useEffect(() => onClicksChange(() => setVer(v => v + 1)), []);
  const all = useMemo(() => participants.flatMap(p => readClicks(p.id).map(c => ({ ...c, pid: p.id, code: p.code }))), [ver]);
  const [who, setWho] = useState(() => Object.fromEntries(participants.map(p => [p.id, true])));
  const [journey, setJourney] = useState('all');
  const titles = useMemo(journeyTitles, []);
  const usedJourneys = titles.filter(j => all.some(c => c.j === j.id));

  const filtered = all.filter(c => who[c.pid] && (journey === 'all' || c.j === journey));
  const screens = useMemo(() => {
    const m = new Map();
    filtered.forEach(c => {
      const s = m.get(c.k) || { key: c.k, label: c.s || c.k, n: 0, pids: new Set(), last: 0 };
      s.n++; s.pids.add(c.code); if (c.at >= s.last) { s.last = c.at; s.label = c.s || c.k; }
      m.set(c.k, s);
    });
    return [...m.values()].sort((a, b) => b.n - a.n);
  }, [filtered]);
  const [screenKey, setScreenKey] = useState('');
  const cur = screens.find(s => s.key === screenKey) || screens[0];
  const pts = cur ? filtered.filter(c => c.k === cur.key) : [];
  const withData = participants.filter(p => all.some(c => c.pid === p.id));

  const exportCsv = () => {
    const head = ['participant', 'journey', 'screen', 'screen_heading', 'x', 'y', 'viewport_width', 'viewport_height', 'element', 'on_control', 'time'];
    const q = v => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`;
    const rows = filtered.map(c => [c.code, c.j, c.k, c.s, c.x, c.y, c.w, c.h, c.el, c.i ? 'yes' : 'no', new Date(c.at).toISOString()].map(q).join(','));
    download('click-heatmap-data.csv', [head.join(','), ...rows].join('\n'), 'text/csv');
  };

  return (
    <main id="main" className="r-ov r-heat">
      <div className="r-ov-in">
        <div className="r-ov-head">
          <div>
            <p className="r-heat-crumb"><a href="#/f">Research sessions</a> <span aria-hidden="true">/</span> Analysis</p>
            <h1 className="r-ov-h">Click heatmaps</h1>
            <p className="r-ov-sub">Where participants clicked in the prototype during their tasks, combined across sessions.</p>
          </div>
          {all.length > 0 && <button type="button" className="r-btn r-btn-secondary" onClick={exportCsv}>Download click data (CSV)</button>}
        </div>

        <dl className="r-heat-stats">
          <div><dt>Sessions with click data</dt><dd>{withData.length} of {participants.length}</dd></div>
          <div><dt>Clicks shown</dt><dd>{filtered.length}</dd></div>
          <div><dt>Screens</dt><dd>{screens.length}</dd></div>
        </dl>

        {all.length === 0 ? (
          <section className="r-heat-empty">
            <h2>No clicks recorded yet</h2>
            <p>Heatmaps build up as participants work through their tasks. Each click in the prototype is saved in this browser, so run the sessions on this device and come back after them. The map gets more useful with every session; after all four you can compare RM and ARM side by side using the filters.</p>
          </section>
        ) : (
          <>
            <div className="r-heat-filters" role="group" aria-label="Filters">
              <fieldset className="r-heat-who">
                <legend>Participants</legend>
                {participants.map(p => {
                  const n = all.filter(c => c.pid === p.id).length;
                  return (
                    <label key={p.id} className={`r-heat-chip${who[p.id] ? ' is-on' : ''}${n ? '' : ' is-empty'}`}>
                      <input type="checkbox" checked={!!who[p.id]} onChange={e => setWho({ ...who, [p.id]: e.target.checked })} />
                      {p.code}<span className="r-heat-chip-n">{n}</span>
                    </label>
                  );
                })}
              </fieldset>
              <label className="r-heat-sel">
                <span>Task</span>
                <select value={journey} onChange={e => setJourney(e.target.value)}>
                  <option value="all">All tasks</option>
                  {usedJourneys.map(j => <option key={j.id} value={j.id}>{j.title}</option>)}
                </select>
              </label>
            </div>

            {screens.length === 0 ? (
              <p className="r-heat-note">No clicks match these filters.</p>
            ) : (
              <div className="r-heat-grid">
                <nav className="r-heat-screens" aria-label="Prototype screens">
                  <p className="r-heat-side-h">Screens <span>by clicks</span></p>
                  <ul>
                    {screens.map(s => (
                      <li key={s.key}>
                        <button type="button" aria-current={cur && s.key === cur.key ? 'true' : undefined} onClick={() => setScreenKey(s.key)}>
                          <span className="r-heat-s-t">{s.label}</span>
                          <span className="r-heat-s-m">{plural(s.n, 'click')} · {[...s.pids].join(', ')}</span>
                          <span className="r-heat-s-bar" aria-hidden="true"><span style={{ width: `${Math.max(4, s.n / screens[0].n * 100)}%` }} /></span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                <section className="r-heat-main" aria-labelledby="heat-h">
                  <div className="r-heat-main-head">
                    <h2 id="heat-h">{cur.label}</h2>
                    <div className="r-heat-legend" aria-hidden="true"><span>Fewer clicks</span><i /><span>More clicks</span></div>
                  </div>
                  <HeatMap key={cur.key + journey} screen={cur} pts={pts} />
                  <TopTargets pts={pts} />
                </section>
              </div>
            )}
          </>
        )}
        <p className="r-heat-note">Click data and screen snapshots are kept in this browser only, with the session records. Resetting a session also deletes its clicks. Export the CSV to keep a copy.</p>
      </div>
    </main>
  );
}

function HeatMap({ screen, pts }) {
  const [shot, setShot] = useState(undefined);
  const [cw, setCw] = useState(0);
  const [docH, setDocH] = useState(0);
  const [tip, setTip] = useState(null);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => { let live = true; getShot(screen.key).then(s => { if (live) setShot(s || null); }); return () => { live = false; }; }, [screen.key]);
  useEffect(() => {
    const el = wrapRef.current; if (!el) return undefined;
    const ro = new ResizeObserver(() => setCw(el.clientWidth));
    ro.observe(el); setCw(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Base width: the snapshot's width, otherwise the most common participant screen width.
  const widths = pts.map(p => p.w).filter(Boolean);
  const count = {}; widths.forEach(w => { count[w] = (count[w] || 0) + 1; });
  const modeW = Number(Object.keys(count).sort((a, b) => count[b] - count[a])[0]) || 1280;
  const baseW = shot ? shot.w : modeW;
  const baseMinH = shot ? shot.h : Math.max(...pts.map(p => p.h || 0), 720);
  const placed = useMemo(() => pts.map(p => ({ ...p, px: p.w ? p.x * baseW / p.w : p.x, py: p.y })), [pts, baseW]);
  const H = Math.max(baseMinH, docH, ...placed.map(p => p.py + RADIUS * 2));
  const scale = cw ? Math.min(1, cw / baseW) : 1;
  const minW = Math.min(...widths), maxW = Math.max(...widths);

  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const W = Math.ceil(baseW), Hh = Math.ceil(H);
    c.width = W; c.height = Hh;
    const ctx = c.getContext('2d');
    const off = document.createElement('canvas'); off.width = W; off.height = Hh;
    const o = off.getContext('2d');
    placed.forEach(p => {
      const g = o.createRadialGradient(p.px, p.py, 0, p.px, p.py, RADIUS);
      g.addColorStop(0, 'rgba(0,0,0,0.5)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      o.fillStyle = g; o.fillRect(p.px - RADIUS, p.py - RADIUS, RADIUS * 2, RADIUS * 2);
    });
    const img = o.getImageData(0, 0, W, Hh); const d = img.data;
    let max = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > max) max = d[i];
    if (max) {
      for (let i = 0; i < d.length; i += 4) {
        const a = d[i + 3]; if (!a) continue;
        const v = Math.min(255, Math.round(a / max * 255));
        d[i] = LUT[v * 3]; d[i + 1] = LUT[v * 3 + 1]; d[i + 2] = LUT[v * 3 + 2];
        d[i + 3] = Math.round(255 * Math.min(0.88, 0.3 + v / 255 * 0.6));
      }
    }
    ctx.clearRect(0, 0, W, Hh); ctx.putImageData(img, 0, 0);
  }, [placed, baseW, H]);

  const measure = e => { try { const doc = e.currentTarget.contentDocument; if (doc) setDocH(doc.documentElement.scrollHeight); } catch (err) { /* ignore */ } };
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / scale, y = (e.clientY - r.top) / scale;
    const near = placed.filter(p => (p.px - x) ** 2 + (p.py - y) ** 2 <= RADIUS * RADIUS);
    if (!near.length) { setTip(null); return; }
    const by = {}; near.forEach(p => { const k = p.el || 'Blank area or body text'; by[k] = (by[k] || 0) + 1; });
    const top = Object.entries(by).sort((a, b) => b[1] - a[1])[0][0];
    setTip({ x: e.clientX - r.left, y: e.clientY - r.top, n: near.length, top, who: [...new Set(near.map(p => p.code))].join(', ') });
  };

  return (
    <div className="r-heat-figure">
      <div ref={wrapRef} className="r-heat-stage" style={{ height: Math.ceil(H * scale) }}>
        <div className="r-heat-layer" style={{ width: baseW, height: H, transform: `scale(${scale})` }}>
          {shot
            ? <iframe className="r-heat-shot" sandbox="allow-same-origin" srcDoc={shot.html} onLoad={measure} tabIndex={-1} aria-hidden="true" title="" style={{ width: baseW, height: H }} />
            : <div className="r-heat-blank" aria-hidden="true" />}
          <div className="r-heat-veil" aria-hidden="true" />
          <canvas ref={canvasRef} className="r-heat-canvas" role="img" aria-label={`Heatmap of ${plural(pts.length, 'click')} on ${screen.label}. The table below lists the same clicks.`} onMouseMove={onMove} onMouseLeave={() => setTip(null)} />
        </div>
        {tip && (
          <div className="r-heat-tip" style={{ left: Math.min(tip.x + 14, (cw || 0) - 220), top: tip.y + 14 }} role="presentation">
            <strong>{plural(tip.n, 'click')} here</strong>
            <span>Mostly: {tip.top}</span>
            <span>{tip.who}</span>
          </div>
        )}
      </div>
      <p className="r-heat-cap">
        {shot ? `Snapshot taken the first time this screen was opened, ${new Date(shot.at).toLocaleString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}. Content may differ slightly between participants.` : 'No snapshot of this screen yet, so clicks are shown on a blank page at the participant’s screen size.'}
        {widths.length > 0 && minW !== maxW ? ` Clicks came from screens ${minW}–${maxW}px wide and are scaled to ${baseW}px, so positions are approximate.` : ''}
      </p>
    </div>
  );
}

function TopTargets({ pts }) {
  const rows = useMemo(() => {
    const m = new Map();
    pts.forEach(p => {
      const k = (p.i ? 'c:' : 'n:') + (p.el || '');
      const r = m.get(k) || { el: p.el || 'Blank area or body text', ctl: p.i, n: 0, who: new Set() };
      r.n++; r.who.add(p.code); m.set(k, r);
    });
    return [...m.values()].sort((a, b) => b.n - a.n);
  }, [pts]);
  const off = pts.filter(p => !p.i).length;
  const shown = rows.slice(0, 12);
  return (
    <div className="r-heat-table">
      <h3>Most clicked on this screen</h3>
      {off > 0 && <p className="r-heat-note">{plural(off, 'click')} ({Math.round(off / pts.length * 100)}%) landed outside buttons, links and fields. These can show where participants expected something to respond.</p>}
      <table>
        <thead><tr><th scope="col">Element</th><th scope="col">Type</th><th scope="col" className="is-num">Clicks</th><th scope="col" className="is-num">Share</th><th scope="col">Participants</th></tr></thead>
        <tbody>
          {shown.map((r, i) => (
            <tr key={i}>
              <th scope="row">{r.el}</th>
              <td>{r.ctl ? 'Control' : <span className="r-heat-flag">Not a control</span>}</td>
              <td className="is-num">{r.n}</td>
              <td className="is-num">{Math.round(r.n / pts.length * 100)}%</td>
              <td>{[...r.who].join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length > shown.length && <p className="r-heat-note">{plural(rows.length - shown.length, 'more element')} with fewer clicks are in the CSV.</p>}
    </div>
  );
}
