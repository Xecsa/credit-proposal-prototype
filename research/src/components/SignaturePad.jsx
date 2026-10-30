import React, { useEffect, useRef } from 'react';

// Draw-to-sign pad (mouse, pen or touch). Saves a PNG data URL on each stroke end. Clear resets it.
export default function SignaturePad({ value, onChange, labelledBy }) {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const dpr = window.devicePixelRatio || 1;
    const r = c.getBoundingClientRect();
    c.width = Math.round(r.width * dpr); c.height = Math.round(r.height * dpr);
    const x = c.getContext('2d');
    x.scale(dpr, dpr); x.lineWidth = 2; x.lineCap = 'round'; x.lineJoin = 'round'; x.strokeStyle = '#072447';
    if (value) { const img = new Image(); img.onload = () => x.drawImage(img, 0, 0, r.width, r.height); img.src = value; }
    let down = false; let last = null;
    const pos = e => { const b = c.getBoundingClientRect(); return [e.clientX - b.left, e.clientY - b.top]; };
    const start = e => { down = true; last = pos(e); c.setPointerCapture(e.pointerId); x.beginPath(); x.arc(last[0], last[1], 1, 0, Math.PI * 2); x.fillStyle = '#072447'; x.fill(); };
    const move = e => { if (!down) return; const p = pos(e); x.beginPath(); x.moveTo(last[0], last[1]); x.lineTo(p[0], p[1]); x.stroke(); last = p; };
    const end = () => { if (!down) return; down = false; onChange(c.toDataURL('image/png')); };
    c.addEventListener('pointerdown', start); c.addEventListener('pointermove', move);
    c.addEventListener('pointerup', end); c.addEventListener('pointercancel', end);
    return () => { c.removeEventListener('pointerdown', start); c.removeEventListener('pointermove', move); c.removeEventListener('pointerup', end); c.removeEventListener('pointercancel', end); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const clear = () => { const c = ref.current; c.getContext('2d').clearRect(0, 0, c.width, c.height); onChange(''); };

  return (
    <div className="r-sig">
      <canvas ref={ref} className="r-sig-pad" role="img" aria-labelledby={labelledBy} aria-describedby="sig-help" />
      <div className="r-sig-row">
        <span id="sig-help" className="r-hint">Sign with your mouse, pen or finger.</span>
        <button type="button" className="r-link-btn" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
