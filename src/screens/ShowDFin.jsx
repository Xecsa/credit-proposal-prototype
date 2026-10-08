import React from 'react';

export default function ShowDFin({ v }) {
  return (<>
{(v.showDFin) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px", maxWidth: "190px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Documents and references</div>
{' '}
<button onClick={v.goHubFromDocs} style={{ font: "inherit", lineHeight: "16px", marginTop: "4px", padding: "0", border: "0", background: "transparent", color: "#575757", textDecoration: "underline", cursor: "pointer" }}>Back to Hub</button>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>KYC documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Stakeholder documents</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Financial documents</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goDStk} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Financial documents</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", opacity: "0.9" }}>Please upload the required documents to continue</p></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
{(v.dFinSecs || []).map((sec, sec__i) => (<React.Fragment key={sec__i}>{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447", opacity: "0.9" }}>{sec.title}</h2>
<p style={{ margin: "0", lineHeight: "20px", color: "#6c7a89" }}>{sec.desc}</p></div>
{' '}
{(sec.hasDates) ? (<><div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}><div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column", position: "relative" }}><label htmlFor="fin-from" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>From</label>
<div className="field" style={{ height: "48px", boxSizing: "border-box", padding: "0 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "12px" }}><input id="fin-from" className="bare" type="text" inputMode="numeric" autoComplete="off" placeholder="Select start date" value={sec.from} onChange={sec.setFrom} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
<button onClick={v.fdpToggleFrom} aria-label="Choose start date" aria-haspopup="dialog" aria-expanded={v.fdpExpFrom} style={{ flex: "none", width: "24px", height: "24px", marginRight: "-4px", padding: "0", border: "0", borderRadius: "4px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{(v.fdpOpenFrom) ? (<><div role="dialog" aria-label={v.fdpDialog} style={{ position: "absolute", top: "80px", left: "0", zIndex: "3", marginBottom: "32px", scrollMargin: "32px", width: "304px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "8px 0 16px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<button onClick={v.fdpPrev} aria-label={v.fdpPrevLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M10.500 3L5.500 8l5 5"></path></svg>
{' '}</button>
{' '}
<button onClick={v.fdpSwitchView} aria-label={v.fdpTitleLabel} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0 8px", border: "0", background: "transparent", color: "#072447", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{' '}{v.fdpTitle}{' '}
{(v.fdpHasChevron) ? (<>{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.500l5 5 5-5"></path></svg>
{' '}</>) : null}
{' '}</button>
{' '}
<button onClick={v.fdpNext} aria-label={v.fdpNextLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M5.500 3l5 5-5 5"></path></svg>
{' '}</button>
{' '}</div>
{' '}
{(v.fdpIsDate) ? (<>{' '}
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
{(v.fdpWeeks || []).map((wk, wk__i) => (<React.Fragment key={wk__i}>{' '}
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
<button onClick={v.fdpCancel} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", background: "transparent", color: "#182f7c" }}>Cancel</button>
{' '}
<button onClick={v.fdpApply} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Apply</button>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.fdpIsGrid) ? (<>{' '}
<div style={{ width: "280px", padding: "52px 0 44px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", rowGap: "4px" }}>{' '}
{(v.fdpGrid || []).map((mo, mo__i) => (<React.Fragment key={mo__i}>{' '}
<button onClick={mo.pick} aria-label={mo.aria} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0", border: "0", borderRadius: "20px", cursor: "pointer", background: "#ffffff", color: "#072447", boxShadow: `${mo.ring}` }}>{mo.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}</div>
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column", position: "relative" }}><label htmlFor="fin-to" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>To</label>
<div className="field" style={{ height: "48px", boxSizing: "border-box", padding: "0 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "12px" }}><input id="fin-to" className="bare" type="text" inputMode="numeric" autoComplete="off" placeholder="Select end date" value={sec.to} onChange={sec.setTo} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
<button onClick={v.fdpToggleTo} aria-label="Choose end date" aria-haspopup="dialog" aria-expanded={v.fdpExpTo} style={{ flex: "none", width: "24px", height: "24px", marginRight: "-4px", padding: "0", border: "0", borderRadius: "4px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{(v.fdpOpenTo) ? (<><div role="dialog" aria-label={v.fdpDialog} style={{ position: "absolute", top: "80px", left: "0", zIndex: "3", marginBottom: "32px", scrollMargin: "32px", width: "304px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "8px 0 16px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<button onClick={v.fdpPrev} aria-label={v.fdpPrevLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M10.500 3L5.500 8l5 5"></path></svg>
{' '}</button>
{' '}
<button onClick={v.fdpSwitchView} aria-label={v.fdpTitleLabel} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0 8px", border: "0", background: "transparent", color: "#072447", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{' '}{v.fdpTitle}{' '}
{(v.fdpHasChevron) ? (<>{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.500l5 5 5-5"></path></svg>
{' '}</>) : null}
{' '}</button>
{' '}
<button onClick={v.fdpNext} aria-label={v.fdpNextLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M5.500 3l5 5-5 5"></path></svg>
{' '}</button>
{' '}</div>
{' '}
{(v.fdpIsDate) ? (<>{' '}
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
{(v.fdpWeeks || []).map((wk, wk__i) => (<React.Fragment key={wk__i}>{' '}
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
<button onClick={v.fdpCancel} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", background: "transparent", color: "#182f7c" }}>Cancel</button>
{' '}
<button onClick={v.fdpApply} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Apply</button>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.fdpIsGrid) ? (<>{' '}
<div style={{ width: "280px", padding: "52px 0 44px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", rowGap: "4px" }}>{' '}
{(v.fdpGrid || []).map((mo, mo__i) => (<React.Fragment key={mo__i}>{' '}
<button onClick={mo.pick} aria-label={mo.aria} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0", border: "0", borderRadius: "20px", cursor: "pointer", background: "#ffffff", color: "#072447", boxShadow: `${mo.ring}` }}>{mo.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}</div></div></>) : null}
<button onClick={sec.upload} aria-label={sec.uploadAria} style={{ font: "inherit", lineHeight: "16px", alignSelf: "flex-start", height: "56px", padding: "0 24px", border: "1px solid #bbbbbb", borderRadius: "8px", background: "#ffffff", color: "#000000", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "12px" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 396.5 24 24" fill="none"><path d="M456 411.091L456 399M460.318 402.455L456 399L451.682 402.455M446.5 412.818V416C446.5 417.105 447.395 418 448.5 418H463.5C464.605 418 465.5 417.105 465.5 416V412.818" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg>
{sec.uploadLabel}</button>
{' '}
{(sec.files || []).map((f, f__i) => (<React.Fragment key={f__i}>{' '}
{(f.ok) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 640 24 24" fill="none"><defs><mask id="idcheckmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="640" width="24" height="24"><g><g><path d="M456 642C461.523 642 466 646.477 466 652C466 657.523 461.523 662 456 662C450.477 662 446 657.523 446 652C446 646.477 450.477 642 456 642ZM461.354 648.646C461.158 648.451 460.842 648.451 460.646 648.646L454.354 654.939C454.158 655.135 453.842 655.135 453.646 654.939L451.354 652.646C451.158 652.451 450.842 652.451 450.646 652.646C450.451 652.842 450.451 653.158 450.646 653.354L452.939 655.646C453.525 656.232 454.475 656.232 455.061 655.646L461.354 649.354C461.549 649.158 461.549 648.842 461.354 648.646Z" fill="#266300"></path></g></g></mask></defs>
<g mask="url(#idcheckmask1_11890_43994)"><rect x="444" y="640" width="24" height="24" fill="#1B5145"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<button style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Preview document</button>
{(f.hasYear) ? (<><span style={{ alignSelf: "flex-start", marginTop: "2px", fontSize: "12px", lineHeight: "14px", padding: "4px 8px", borderRadius: "4px", background: "#eaeaea", color: "#575757", display: "inline-flex", alignItems: "center", gap: "8px" }}>{f.year}
<svg aria-hidden="true" width="12" height="12" viewBox="531 525 12 12" fill="none"><defs><mask id="idchevmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="531" y="525" width="12" height="12"><g><g><path d="M534 529.5L537 532.5L540 529.5" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#idchevmask2_11890_43994)"><rect x="531" y="525" width="12" height="12" fill="#575757"></rect></g></svg></span></>) : null}</div>
{(f.removable) ? (<><button onClick={f.remove} aria-label={f.removeLabel} style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="980 1158 16 16" fill="none"><defs><mask id="idxmask3_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="980" y="1158" width="16" height="16"><g><g><path d="M993.666 1160.33L982.333 1171.67M982.333 1160.33L993.666 1171.67" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g mask="url(#idxmask3_11890_43994)"><rect x="980" y="1158" width="16" height="16" fill="#182F7C"></rect></g></svg></button></>) : null}</div>
{' '}</>) : null}
{' '}
{(f.err) ? (<>{' '}
<div role="alert" style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #b00000" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 1154 24 24" fill="none"><defs><mask id="iderrmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="1154" width="24" height="24"><g><g><path d="M455.168 1156.5C455.524 1155.83 456.476 1155.83 456.832 1156.5L465.887 1173.59C466.224 1174.23 465.768 1175 465.055 1175H446.945C446.232 1175 445.776 1174.23 446.113 1173.59L455.168 1156.5ZM456 1171C455.724 1171 455.5 1171.22 455.5 1171.5V1172.5C455.5 1172.78 455.724 1173 456 1173C456.276 1173 456.5 1172.78 456.5 1172.5V1171.5C456.5 1171.22 456.276 1171 456 1171ZM456 1161C455.724 1161 455.5 1161.22 455.5 1161.5V1169.5C455.5 1169.78 455.724 1170 456 1170C456.276 1170 456.5 1169.78 456.5 1169.5V1161.5C456.5 1161.22 456.276 1161 456 1161Z" fill="#E88524"></path></g></g></mask></defs>
<g mask="url(#iderrmask2_11890_43994)"><rect x="444" y="1154" width="24" height="24" fill="#B00000"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<span style={{ color: "#b00000" }}>{f.info}</span></div>
{(f.removable) ? (<><button onClick={f.remove} aria-label={f.removeLabel} style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="980 1158 16 16" fill="none"><defs><mask id="idxmask3_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="980" y="1158" width="16" height="16"><g><g><path d="M993.666 1160.33L982.333 1171.67M982.333 1160.33L993.666 1171.67" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g mask="url(#idxmask3_11890_43994)"><rect x="980" y="1158" width="16" height="16" fill="#182F7C"></rect></g></svg></button></>) : null}</div>
{' '}</>) : null}
{' '}
{(f.warn) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 1834 24 24" fill="none"><defs><mask id="idwarnmask4_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="1834" width="24" height="24"><g><g><path d="M455.168 1836.5C455.524 1835.83 456.476 1835.83 456.832 1836.5L465.887 1853.59C466.224 1854.23 465.768 1855 465.055 1855H446.945C446.232 1855 445.776 1854.23 446.113 1853.59L455.168 1836.5ZM456 1851C455.724 1851 455.5 1851.22 455.5 1851.5V1852.5C455.5 1852.78 455.724 1853 456 1853C456.276 1853 456.5 1852.78 456.5 1852.5V1851.5C456.5 1851.22 456.276 1851 456 1851ZM456 1841C455.724 1841 455.5 1841.22 455.5 1841.5V1849.5C455.5 1849.78 455.724 1850 456 1850C456.276 1850 456.5 1849.78 456.5 1849.5V1841.5C456.5 1841.22 456.276 1841 456 1841Z" fill="#E88524"></path></g></g></mask></defs>
<g mask="url(#idwarnmask4_11890_43994)"><rect x="444" y="1834" width="24" height="24" fill="#E88524"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<span style={{ color: "#575757" }}>Document type couldn’t be identified</span>
<button onClick={f.categorize} style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Categorize document</button></div>
{(f.removable) ? (<><button onClick={f.remove} aria-label={f.removeLabel} style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="980 1158 16 16" fill="none"><defs><mask id="idxmask3_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="980" y="1158" width="16" height="16"><g><g><path d="M993.666 1160.33L982.333 1171.67M982.333 1160.33L993.666 1171.67" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g mask="url(#idxmask3_11890_43994)"><rect x="980" y="1158" width="16" height="16" fill="#182F7C"></rect></g></svg></button></>) : null}</div>
{' '}</>) : null}
{' '}</React.Fragment>))}
{' '}
{(sec.showConfirm) ? (<><div style={{ marginTop: "8px", padding: "0 9px", display: "flex", alignItems: "center", gap: "8px" }}><button role="checkbox" aria-checked={sec.box.on} aria-label="I confirm that I have reviewed and verified the original documents" onClick={sec.box.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(sec.box.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(sec.box.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button>
<span style={{ lineHeight: "20px", color: "#000000" }}>I confirm that I have reviewed and verified the original documents</span></div></>) : null}
{' '}</section>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button disabled={v.dFinBlocked} onClick={v.dFinSend} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.dFinBg}`, cursor: `${v.dFinCursor}` }}>Send for Perfios Analysis</button></div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
