import React, { useEffect, useState } from 'react';
import { listRecordings, recordingBlob, recExt } from '../recorder.js';
import { REC_LABEL } from './TaskJourney.jsx';

// Facilitator: recordings for one participant, read from this browser's IndexedDB. They exist only on the device
// that captured them; a facilitator window on another device will not see them.
const STATUS = {
  recording: 'Recording now',
  saved: 'Saved',
  'saved-partial': 'Saved (stopped early)',
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
    <section className="r-fac-box" aria-labelledby="rec-h">
      <div className="r-fac-jhead">
        <h2 id="rec-h" className="r-fac-h2">Recordings</h2>
        <button type="button" className="r-link-btn" onClick={load}>Refresh</button>
      </div>
      <p className="r-fac-live">Live status: {live ? `${REC_LABEL[live.state] || live.state}${live.journeyId ? ` · ${title(live.journeyId)}` : ''}${live.note ? ` · ${live.note}` : ''}` : 'No recording activity yet'}</p>
      <p className="r-small r-muted">Stored in this browser on this device only (IndexedDB). They don’t appear on other devices or browsers, and clearing site data deletes them. Download each recording after the session.</p>
      {err && <p className="r-scn-left">Recordings can’t be read in this browser: {err}</p>}
      {list && !list.length && !err && <p className="r-small r-muted">No recordings on this device for {participant.code}.</p>}
      {list && list.length > 0 && (
        <ul className="r-recs">
          {list.map(r => {
            const st = statusOf(r);
            const bad = st === 'failed' || st === 'empty';
            return (
              <li key={r.id} className={`r-rec${bad ? ' is-bad' : ''}`}>
                <div className="r-rec-head">
                  <strong>{title(r.journeyId)}</strong>
                  <span className={`r-tag r-rec-tag is-${st}`}>{STATUS[st] || st}</span>
                </div>
                <p className="r-small r-muted">
                  {fmtTime(r.createdAt)} · {fmtDur(r.durationMs)} · {fmtSize(r.bytes)} · {r.hasVideo ? 'screen' : ''}{r.hasVideo && r.hasAudio ? ' + ' : ''}{r.hasAudio ? 'audio' : ''}
                  {r.hasVideo && r.surface && r.surface !== 'browser' ? ` · shared ${r.surface === 'monitor' ? 'whole screen' : 'a window'}` : ''}
                  {' '}· session {String(r.sessionId).slice(0, 8)} · build {r.prototypeVersion}
                </p>
                {r.error && <p className="r-small r-rec-err">{r.error}{st === 'failed' && r.chunks ? ' Try Play or Download: the captured part may still be usable.' : ''}</p>}
                <ol className="r-marks">
                  {(r.markers || []).map((m, i) => <li key={i}><span>{fmtDur(m.t)}</span>{MARK[m.type] || m.type}{m.label && m.type !== 'task-start' ? `: ${m.label}` : ''}</li>)}
                </ol>
                {r.chunks > 0 && (
                  <div className="r-actions is-start">
                    <button type="button" className="r-btn r-btn-secondary" onClick={() => play(r)}>{open[r.id] ? 'Close player' : 'Play'}</button>
                    <button type="button" className="r-btn r-btn-secondary" onClick={() => save(r)}>Download (.{recExt(r.mimeType)})</button>
                    <button type="button" className="r-link-btn" onClick={() => saveMarkers(r)}>Markers (.json)</button>
                  </div>
                )}
                {open[r.id] && (r.hasVideo
                  ? <video className="r-rec-player" src={open[r.id]} controls preload="metadata" />
                  : <audio src={open[r.id]} controls preload="metadata" />)}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
