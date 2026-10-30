import React, { useEffect, useState } from 'react';
import { listRecordings, recordingBlob, recExt } from '../recorder.js';
import { REC_LABEL } from './TaskJourney.jsx';

// Facilitator: recordings for one participant, read from this browser's IndexedDB. They exist only on the device
// that captured them; a facilitator window on another device will not see them.
const STATUS = {
  recording: 'Recording now',
  saved: 'Saved',
  'saved-partial': 'Partial (stopped early)',
  failed: 'Save failed',
  empty: 'Empty (nothing captured)',
  interrupted: 'Interrupted (partial)'
};
const fmtDur = ms => { const s = Math.round((ms || 0) / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const fmtSize = b => b > 1e6 ? `${(b / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1e3))} kB`;
const fmtTime = iso => iso ? new Date(iso).toLocaleString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '';
const MARK = { 'task-start': 'Task start', 'task-end': 'Task end', paused: 'Paused', resumed: 'Resumed', interruption: 'Interruption', 'recording-stopped': 'Recording stopped' };

export default function RecordingsPanel({ participant, live, journeys }) {
  const [list, setList] = useState(null);
  const [err, setErr] = useState('');
  const [open, setOpen] = useState({});
  const [expanded, setExpanded] = useState({});
  const load = () => listRecordings(participant.id).then(setList).catch(e => { setErr(e.message); setList([]); });
  useEffect(() => { load(); }, [participant.id, live && live.at]); // eslint-disable-line react-hooks/exhaustive-deps

  // A record still marked "recording" that hasn't been written for 20 s belongs to a tab that closed or crashed.
  const statusOf = r => r.status === 'recording' && Date.now() - new Date(r.updatedAt).getTime() > 20000 ? 'interrupted' : r.status;
  const title = jid => (journeys.find(j => j.id === jid) || {}).title || jid;

  const play = async r => {
    if (open[r.id]) { URL.revokeObjectURL(open[r.id]); setOpen(o => ({ ...o, [r.id]: '' })); return; }
    const url = URL.createObjectURL(await recordingBlob(r));
    setOpen(o => ({ ...o, [r.id]: url }));
  };
  const save = async r => {
    const url = URL.createObjectURL(await recordingBlob(r));
    const a = document.createElement('a');
    a.href = url; a.download = `${participant.code.replace(/\s/g, '')}_${r.journeyId}_${r.createdAt.slice(0, 19).replace(/[:T]/g, '-')}.${recExt(r.mimeType)}`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  const saveMarkers = r => {
    const text = JSON.stringify({ participant: participant.code, role: participant.role, sessionId: r.sessionId, journey: r.journeyId, journeyTitle: r.journeyTitle, prototypeVersion: r.prototypeVersion, prototypeStart: r.prototypeStart, createdAt: r.createdAt, endedAt: r.endedAt, durationMs: r.durationMs, status: statusOf(r), markers: r.markers }, null, 2);
    const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = `${participant.code.replace(/\s/g, '')}_${r.journeyId}_markers.json`;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  return (
    <section className="r-fw-card" aria-labelledby="rec-h">
      <div className="r-fw-jhead">
        <h2 id="rec-h" className="r-fw-h2">Recordings</h2>
        <button type="button" className="r-link-btn" onClick={load}>Refresh</button>
      </div>
      <p className="r-fw-hint">Saved on this device only. Download recordings and export notes before clearing browser data. They aren’t visible in other browsers or on other devices, and a separate facilitator window doesn’t restrict who can open them.</p>
      <p className="r-fw-live">Now: {live ? `${REC_LABEL[live.state] || live.state}${live.journeyId ? ` · ${title(live.journeyId)}` : ''}${live.note ? ` · ${live.note}` : ''}` : 'No recording activity yet'}</p>
      {err && <p className="r-scn-left">Recordings can’t be read in this browser: {err}</p>}
      {list && !list.length && !err && <p className="r-fw-a is-empty">No recordings on this device for {participant.code}.</p>}
      {list && list.length > 0 && (
        <ul className="r-fw-recs">
          {list.map(r => {
            const st = statusOf(r);
            const bad = st === 'failed' || st === 'empty';
            const isOpen = !!expanded[r.id];
            return (
              <li key={r.id} className={`r-fw-rec${bad ? ' is-bad' : ''}${isOpen ? ' is-open' : ''}`}>
                <div className="r-fw-recrow">
                  <button type="button" className="r-fw-rectitle" aria-expanded={isOpen} aria-controls={`rd-${r.id}`} onClick={() => setExpanded(x => ({ ...x, [r.id]: !x[r.id] }))}>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m8 5 5 5-5 5" /></svg>
                    {title(r.journeyId)}
                  </button>
                  <span className="r-fw-recdur">{fmtDur(r.durationMs)}</span>
                  <span className={`r-tag r-rec-tag is-${st}`}>{STATUS[st] || st}</span>
                  <span className="r-fw-recact">
                    {r.chunks > 0 && <button type="button" className="r-link-btn" onClick={() => { setExpanded(x => ({ ...x, [r.id]: true })); if (!open[r.id]) play(r); }}>Play</button>}
                    {r.chunks > 0 && <button type="button" className="r-link-btn" onClick={() => save(r)}>Download</button>}
                  </span>
                </div>
                {isOpen && (
                  <div id={`rd-${r.id}`} className="r-fw-recmore">
                    {r.error && <p className="r-small r-rec-err">{r.error}{st === 'failed' && r.chunks ? ' Try Play or Download: the captured part may still be usable.' : ''}</p>}
                    {open[r.id] && (r.hasVideo
                      ? <video className="r-rec-player" src={open[r.id]} controls preload="metadata" />
                      : <audio src={open[r.id]} controls preload="metadata" />)}
                    {open[r.id] && <button type="button" className="r-link-btn" onClick={() => play(r)}>Close player</button>}
                    <p className="r-fw-q">Events</p>
                    <ol className="r-marks">
                      {(r.markers || []).map((m, i) => <li key={i}><span>{fmtDur(m.t)}</span>{MARK[m.type] || m.type}{m.label && m.type !== 'task-start' ? `: ${m.label}` : ''}</li>)}
                    </ol>
                    <details className="r-fw-more"><summary>Technical details</summary>
                      <p className="r-small r-muted">
                        Started {fmtTime(r.createdAt)} · {fmtSize(r.bytes)} · {r.hasVideo ? 'screen' : ''}{r.hasVideo && r.hasAudio ? ' + ' : ''}{r.hasAudio ? 'audio' : ''} · .{recExt(r.mimeType)}
                        {r.hasVideo && r.surface && r.surface !== 'browser' ? ` · shared ${r.surface === 'monitor' ? 'whole screen' : 'a window'}` : ''}
                        {' '}· session {String(r.sessionId).slice(0, 8)} · build {r.prototypeVersion}
                      </p>
                      {r.chunks > 0 && <button type="button" className="r-link-btn" onClick={() => saveMarkers(r)}>Download markers (.json)</button>}
                    </details>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
