import React from 'react';

export default function ShowForm({ v }) {
  return (<>
{(v.showForm) ? (<>{' '}
<aside style={{ flex: "none", width: "372px", background: "#ffffff", display: "flex", flexDirection: "column", minHeight: "0" }}>{' '}
<div style={{ padding: "24px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "500" }}>Meetings details</h2>
{' '}</div>
{' '}
<div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: `0 24px ${v.formPadBottom}`, display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<label htmlFor="m-name" style={{ paddingBottom: "8px", color: "#50647c" }}>Meeting name</label>
{' '}
<input id="m-name" type="text" value={v.name} onChange={v.setName} style={{ font: "inherit", height: "34px", padding: "4px 16px", border: "1px solid #d0d5de", borderRadius: "8px", boxSizing: "border-box", width: "100%", color: "#072447", background: "#ffffff" }} />
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<label htmlFor="m-desc" style={{ paddingBottom: "8px", color: "#072447" }}>Meeting description</label>
{' '}
<textarea id="m-desc" value={v.desc} onChange={v.setDesc} style={{ font: "inherit", height: "96px", padding: "7px 16px", border: "1px solid #d0d5de", borderRadius: "8px", boxSizing: "border-box", width: "100%", resize: "none", color: "#072447", background: "#ffffff" }}></textarea>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", position: "relative" }}>{' '}
<label htmlFor="m-cif" style={{ paddingBottom: "8px", color: "#50647c" }}>CIF</label>
{' '}
<div className="field" style={{ display: "flex", alignItems: "center", gap: "12px", height: "34px", padding: "4px 16px", border: "1px solid #d0d5de", borderRadius: "8px", boxSizing: "border-box", background: "#ffffff" }}>{' '}
{(v.hasClient) ? (<>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinecap="round"><circle cx="7" cy="7" r="4.5"></circle>
<path d="M10.5 10.5L14 14"></path></svg>
{' '}</>) : null}
{' '}
<input id="m-cif" className="bare" type="text" placeholder="Search for CIF" autoComplete="off" value={v.cifText} onChange={v.setCif} style={{ font: "inherit", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#072447", textOverflow: "ellipsis" }} />
{' '}</div>
{' '}
{(v.showCifResults) ? (<>{' '}
<div style={{ position: "absolute", top: "66px", left: "0", right: "0", zIndex: "2", background: "#ffffff", border: "1px solid #d0d5de", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "4px" }}>{' '}
<button onClick={v.pickCif} style={{ font: "inherit", width: "100%", textAlign: "left", padding: "8px 12px", border: "0", borderRadius: "6px", background: "transparent", color: "#072447", cursor: "pointer" }}>3438872374234: Orient Insurance</button>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
{(v.hasClient) ? (<>{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<label htmlFor="m-client" style={{ paddingBottom: "8px", color: "#aaadb0" }}>Client name</label>
{' '}
<input id="m-client" type="text" disabled={true} value={v.client} style={{ font: "inherit", height: "34px", padding: "4px 16px", border: "1px solid #d0d5de", borderRadius: "8px", boxSizing: "border-box", width: "100%", color: "#aaadb0", background: "#f9fafb" }} />
{' '}</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", width: "100%", position: "relative" }}>{' '}
<div id="m-date-label" style={{ paddingBottom: "8px", color: "#50647c" }}>Date</div>
{' '}
<button className="field" onClick={v.dpToggle} aria-labelledby="m-date-label" aria-haspopup="dialog" aria-expanded={v.dpExpanded} style={{ font: "inherit", textAlign: "left", height: "34px", padding: "4px 16px", border: `1px solid ${v.dpFieldLine}`, borderRadius: "8px", boxSizing: "border-box", width: "100%", color: `${v.dateFg}`, background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0" }}>{v.dateText}</span>
{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="12" height="11" rx="1.500"></rect>
<path d="M2 6.500h12M5 1.500v3M11 1.500v3M5 9h1M7.500 9h1M10 9h1M5 11.500h1M7.500 11.500h1"></path></svg>
{' '}</button>
{' '}
{(v.dpOpen) ? (<>{' '}
<div ref={v.popRef} role="dialog" aria-label="Choose date" style={{ position: "absolute", top: "70px", left: "0", zIndex: "3", marginBottom: "32px", scrollMargin: "32px", width: "304px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "8px 0 16px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<button onClick={v.dpPrev} aria-label={v.dpPrevLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M10.500 3L5.500 8l5 5"></path></svg>
{' '}</button>
{' '}
<button onClick={v.dpSwitchView} aria-label={v.dpTitleLabel} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0 8px", border: "0", background: "transparent", color: "#072447", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{' '}{v.dpTitle}{' '}
{(v.dpHasChevron) ? (<>{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.500l5 5 5-5"></path></svg>
{' '}</>) : null}
{' '}</button>
{' '}
<button onClick={v.dpNext} aria-label={v.dpNextLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M5.500 3l5 5-5 5"></path></svg>
{' '}</button>
{' '}</div>
{' '}
{(v.dpIsDate) ? (<>{' '}
<div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div aria-hidden="true" style={{ width: "280px", padding: "20px 0 8px", display: "flex", fontSize: "16px", lineHeight: "24px", color: "#50647c", textAlign: "center" }}>{' '}
<span style={{ width: "40px" }}>S</span>
<span style={{ width: "40px" }}>M</span>
<span style={{ width: "40px" }}>T</span>
<span style={{ width: "40px" }}>W</span>
<span style={{ width: "40px" }}>T</span>
<span style={{ width: "40px" }}>F</span>
<span style={{ width: "40px" }}>S</span>
{' '}</div>
{' '}
<div style={{ width: "280px", padding: "12px 0 24px", display: "flex", flexDirection: "column" }}>{' '}
{(v.dpWeeks || []).map((wk, wk__i) => (<React.Fragment key={wk__i}>{' '}
<div style={{ display: "flex", height: "40px" }}>{' '}
{(wk.days || []).map((c, c__i) => (<React.Fragment key={c__i}>{' '}
<span style={{ width: "40px", height: "40px", display: "flex" }}>{' '}
{(c.isDay) ? (<>{' '}
<button onClick={c.pick} aria-label={c.aria} aria-pressed={c.pressed} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "20px", cursor: "pointer", background: `${c.bg}`, color: `${c.fg}`, boxShadow: `${c.ring}` }}>{c.label}</button>
{' '}</>) : null}
{' '}</span>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ width: "100%", boxSizing: "border-box", padding: "8px 16px", display: "flex", justifyContent: "flex-end", gap: "8px" }}>{' '}
<button onClick={v.dpCancel} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", background: "transparent", color: "#182f7c" }}>Cancel</button>
{' '}
<button onClick={v.dpApply} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Apply</button>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.dpIsGrid) ? (<>{' '}
<div style={{ width: "280px", padding: "52px 0 44px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", rowGap: "4px" }}>{' '}
{(v.dpGrid || []).map((mo, mo__i) => (<React.Fragment key={mo__i}>{' '}
<button onClick={mo.pick} aria-label={mo.aria} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0", border: "0", borderRadius: "20px", cursor: "pointer", background: "#ffffff", color: "#072447", boxShadow: `${mo.ring}` }}>{mo.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
{(v.timeFields || []).map((tf, tf__i) => (<React.Fragment key={tf__i}>{' '}
<div style={{ display: "flex", flexDirection: "column", flex: "1 0 0", minWidth: "0", position: "relative" }}>{' '}
<div style={{ paddingBottom: "8px", color: "#50647c" }}>{tf.label}</div>
{' '}
<button className="field" onClick={tf.toggle} aria-label={tf.aria} aria-haspopup="dialog" aria-expanded={tf.expanded} style={{ font: "inherit", textAlign: "left", height: "34px", padding: "4px 16px", border: `1px solid ${tf.line}`, borderRadius: "8px", boxSizing: "border-box", width: "100%", color: `${tf.fg}`, background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0" }}>{tf.text}</span>
{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"></circle>
<path d="M8 4.500V8l2.500 1.500"></path></svg>
{' '}</button>
{' '}
{(tf.open) ? (<>{' '}
<div ref={tf.popRef} role="dialog" aria-label={tf.dialog} style={{ position: "absolute", top: "70px", left: "0", zIndex: "3", marginBottom: "32px", scrollMargin: "32px", width: "170px", background: "#ffffff", borderRadius: "4px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ display: "flex", height: "200px" }}>{' '}
<div role="group" aria-label="Hour" style={{ width: "56px", height: "200px", overflowY: "auto", boxSizing: "border-box", padding: "4px", display: "flex", flexDirection: "column" }}>{' '}
{(v.tpHours || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button onClick={o.pick} aria-pressed={o.pressed} style={{ font: "inherit", flex: "none", width: "48px", height: "36px", padding: "0", border: "0", borderRadius: "4px", cursor: "pointer", background: `${o.bg}`, color: `${o.fg}` }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ width: "1px", background: "#d0d5de" }}></div>
{' '}
<div role="group" aria-label="Minute" style={{ width: "56px", height: "200px", overflowY: "auto", boxSizing: "border-box", padding: "4px", display: "flex", flexDirection: "column" }}>{' '}
{(v.tpMinutes || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button onClick={o.pick} aria-pressed={o.pressed} style={{ font: "inherit", flex: "none", width: "48px", height: "36px", padding: "0", border: "0", borderRadius: "4px", cursor: "pointer", background: `${o.bg}`, color: `${o.fg}` }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ width: "1px", background: "#d0d5de" }}></div>
{' '}
<div role="group" aria-label="AM or PM" style={{ width: "56px", height: "200px", overflowY: "auto", boxSizing: "border-box", padding: "4px", display: "flex", flexDirection: "column" }}>{' '}
{(v.tpPeriods || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button onClick={o.pick} aria-pressed={o.pressed} style={{ font: "inherit", flex: "none", width: "48px", height: "36px", padding: "0", border: "0", borderRadius: "4px", cursor: "pointer", background: `${o.bg}`, color: `${o.fg}` }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}
<div style={{ height: "1px", background: "#d0d5de" }}></div>
{' '}
<div style={{ padding: "8px 16px", display: "flex", justifyContent: "flex-end" }}>{' '}
<button onClick={v.tpOk} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", width: "88px", height: "40px", padding: "8px 16px", border: "0", borderRadius: "8px", background: "transparent", color: "#1b48b5", cursor: "pointer", textAlign: "right" }}>OK</button>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", position: "relative" }}>{' '}
<div id="m-topic-label" style={{ paddingBottom: "8px", color: "#50647c" }}>Topic</div>
{' '}
<button className="field" onClick={v.topicToggle} aria-labelledby="m-topic-label m-topic-value" aria-haspopup="listbox" aria-expanded={v.topicExpanded} style={{ font: "inherit", textAlign: "left", height: "34px", padding: "4px 16px", border: `1px solid ${v.topicLine}`, borderRadius: "8px", boxSizing: "border-box", width: "100%", color: `${v.topicFg}`, background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span id="m-topic-value" style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.topicText}</span>
{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 5l6 6 6-6"></path></svg>
{' '}</button>
{' '}
{(v.topicOpen) ? (<>{' '}
<div ref={v.popRef} role="listbox" aria-labelledby="m-topic-label" style={{ position: "absolute", top: "70px", left: "0", right: "0", zIndex: "3", marginBottom: "32px", scrollMargin: "32px", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.topicOptions || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#072447" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<div id="m-loc-label" style={{ paddingBottom: "8px", color: "#50647c" }}>Location</div>
{' '}
<div role="group" aria-labelledby="m-loc-label" style={{ display: "flex", gap: "8px" }}>{' '}
{(v.locations || []).map((loc, loc__i) => (<React.Fragment key={loc__i}>{' '}
<button onClick={loc.pick} aria-pressed={loc.pressed} style={{ font: "inherit", lineHeight: "16px", padding: "8px 16px", border: "1px solid #1b48b5", borderRadius: "16px", cursor: "pointer", filter: "drop-shadow(0 4px 2px rgba(0,0,0,0.02))", background: `${loc.bg}`, color: `${loc.fg}` }}>{loc.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<div style={{ fontWeight: "500" }}>Participants</div>
{' '}
<button onClick={v.addParticipant} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", padding: "0", border: "0", background: "transparent", color: "#1b48b5", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinecap="round"><circle cx="8" cy="8" r="6"></circle>
<path d="M8 5.5v5M5.5 8h5"></path></svg>
{' '}Add{' '}</button>
{' '}</div>
{' '}
{(v.participantFields || []).map((p, p__i) => (<React.Fragment key={p__i}>{' '}
<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>{' '}
<input type="text" aria-label={p.aria} placeholder="Participant full name" value={p.value} onChange={p.change} style={{ font: "inherit", flex: "1", minWidth: "0", height: "34px", padding: "4px 16px", border: "1px solid #d0d5de", borderRadius: "8px", boxSizing: "border-box", color: "#072447", background: "#ffffff" }} />
{' '}
{(p.canRemove) ? (<>{' '}
<button onClick={p.remove} aria-label="Remove participant" style={{ flex: "none", width: "30px", height: "30px", padding: "0", border: "1px solid #d0d5de", borderRadius: "36px", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a81816" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 4h11M6 4V2.5h4V4M4 4l.6 9.5h6.8L12 4M6.5 6.5v5M9.5 6.5v5"></path></svg>
{' '}</button>
{' '}</>) : null}
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<div style={{ fontWeight: "500" }}>File attachments</div>
{' '}
<button onClick={v.attach} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", padding: "0", border: "0", background: "transparent", color: "#1b48b5", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 7.5l-5.2 5.2a3 3 0 01-4.3-4.3l5.6-5.6a2 2 0 012.9 2.9L6.5 11.2a1 1 0 01-1.5-1.5L10 4.8"></path></svg>
{' '}Attach{' '}</button>
{' '}</div>
{' '}
{(v.fileRows || []).map((f, f__i) => (<React.Fragment key={f__i}>{' '}
<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "8px", background: "#f5f8ff", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"><path d="M4 2h5l3 3v9H4zM6 8h4M6 10.5h4"></path></svg>
{' '}</span>
{' '}
<span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
{' '}</div>
{' '}
<button onClick={f.remove} aria-label="Remove attachment" style={{ flex: "none", width: "30px", height: "30px", padding: "0", border: "1px solid #d0d5de", borderRadius: "36px", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a81816" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 4h11M6 4V2.5h4V4M4 4l.6 9.5h6.8L12 4M6.5 6.5v5M9.5 6.5v5"></path></svg>
{' '}</button>
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}
<div style={{ flex: "none", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
{(v.draftSaved) ? (<>{' '}
<div role="status" style={{ color: "#50647c", fontSize: "12px", lineHeight: "14px" }}>Draft saved</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", gap: "8px" }}>{' '}
<button onClick={v.saveDraft} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", flex: "1 0 0", minWidth: "88px", height: "48px", padding: "12px 16px", border: "1px solid #d3d7e7", borderRadius: "8px", background: "#ffffff", color: "#182f7c", cursor: "pointer" }}>Save draft</button>
{' '}
<button onClick={v.createMeeting} disabled={v.createDisabled} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", flex: "1 0 0", minWidth: "88px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: `${v.createCursor}`, background: `${v.createBg}` }}>{v.createLabel}</button>
{' '}</div>
{' '}</div>
{' '}</aside>
{' '}</>) : null}
  </>);
}
