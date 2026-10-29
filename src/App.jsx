import React from 'react';
import { ProtoLogic } from './logic.js';
import './styles.css';
import ShowLeadsHome from './screens/ShowLeadsHome.jsx';
import ShowSelfList from './screens/ShowSelfList.jsx';
import ShowSelfFacility from './screens/ShowSelfFacility.jsx';
import ShowSelfDocs from './screens/ShowSelfDocs.jsx';
import TlEditOpen from './screens/TlEditOpen.jsx';
import ShowSelfTl from './screens/ShowSelfTl.jsx';
import ShowSelfOwn from './screens/ShowSelfOwn.jsx';
import ShIsDocs from './screens/ShIsDocs.jsx';
import ShIsDetails from './screens/ShIsDetails.jsx';
import ShEditIsDetails from './screens/ShEditIsDetails.jsx';
import ShowSelfSh from './screens/ShowSelfSh.jsx';
import ShowSelfConsent from './screens/ShowSelfConsent.jsx';
import ShowSelfCob from './screens/ShowSelfCob.jsx';
import ShowSelfKm from './screens/ShowSelfKm.jsx';
import ShowSelfKmForm from './screens/ShowSelfKmForm.jsx';
import BankBefore from './screens/BankBefore.jsx';
import BankAfter from './screens/BankAfter.jsx';
import ShowSelfAcct from './screens/ShowSelfAcct.jsx';
import ShowSelfCp from './screens/ShowSelfCp.jsx';
import ShowSelfReview from './screens/ShowSelfReview.jsx';
import ShowDEjari from './screens/ShowDEjari.jsx';
import ShowDKyc from './screens/ShowDKyc.jsx';
import ShowDStk from './screens/ShowDStk.jsx';
import ShowDFin from './screens/ShowDFin.jsx';
import ShowFinSum from './screens/ShowFinSum.jsx';
import ShowFinCreate from './screens/ShowFinCreate.jsx';
import ShowFinRatios from './screens/ShowFinRatios.jsx';
import ShowFinRatings from './screens/ShowFinRatings.jsx';
import ShowSelfHub from './screens/ShowSelfHub.jsx';
import ShowForm from './screens/ShowForm.jsx';
import img_ac82201241 from './assets/ac82201241fa083b5c835e1c0d63652e.svg';
import img_54ed698967 from './assets/54ed698967b05294cca56c56f3884d39.png';
import img_0956f063e5 from './assets/0956f063e59a95257540e51432f704ce.png';
import img_54e0b6371a from './assets/54e0b6371a984d52d4c9e3542ffdd26c.png';
import img_962156342d from './assets/962156342de4b563feeef4ff8f6e8a9a.png';
import img_051ae1a051 from './assets/051ae1a051e43adbbd9dc7c6aaac305e.png';
import img_fc4bf30d25 from './assets/fc4bf30d25fbca7ecb7268c9c31fb40c.png';
import img_0bebde19f0 from './assets/0bebde19f05551d9ac61ea6737d339b0.jpg';
import img_1ca50b068d from './assets/1ca50b068d67d72ed0779093e9c192fc.png';
import img_eaec68969d from './assets/eaec68969d4a4924638a08e3f1425e53.png';

export default class App extends ProtoLogic {
  render() {
    const v = this.renderVals();
    return (
<div style={{ height: "100vh", minHeight: "720px", display: "flex", flexDirection: "column", background: "#f1f4f7", color: "#072447", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "14px", lineHeight: "20px", fontFeatureSettings: "'liga' 0" }}>
{' '}
{(v.gdpShow) ? (<><button aria-label="Close calendar" tabIndex="-1" onClick={v.gdpCancel} style={{ position: "fixed", inset: "0", zIndex: "70", border: "0", padding: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-label={v.gdpDialog} style={{ position: "fixed", top: `${v.gdpTop}`, left: `${v.gdpLeft}`, zIndex: "71", marginBottom: "32px", scrollMargin: "32px", width: "304px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "8px 0 16px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<button onClick={v.gdpPrev} aria-label={v.gdpPrevLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M10.500 3L5.500 8l5 5"></path></svg>
{' '}</button>
{' '}
<button onClick={v.gdpSwitchView} aria-label={v.gdpTitleLabel} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0 8px", border: "0", background: "transparent", color: "#072447", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{' '}{v.gdpTitle}{' '}
{(v.gdpHasChevron) ? (<>{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.500l5 5 5-5"></path></svg>
{' '}</>) : null}
{' '}</button>
{' '}
<button onClick={v.gdpNext} aria-label={v.gdpNextLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.500" strokeLinecap="round" strokeLinejoin="round"><path d="M5.500 3l5 5-5 5"></path></svg>
{' '}</button>
{' '}</div>
{' '}
{(v.gdpIsDate) ? (<>{' '}
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
{(v.gdpWeeks || []).map((wk, wk__i) => (<React.Fragment key={wk__i}>{' '}
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
<button onClick={v.gdpCancel} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", background: "transparent", color: "#182f7c" }}>Cancel</button>
{' '}
<button onClick={v.gdpApply} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Apply</button>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.gdpIsGrid) ? (<>{' '}
<div style={{ width: "280px", padding: "52px 0 44px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", rowGap: "4px" }}>{' '}
{(v.gdpGrid || []).map((mo, mo__i) => (<React.Fragment key={mo__i}>{' '}
<button onClick={mo.pick} aria-label={mo.aria} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", height: "40px", padding: "0", border: "0", borderRadius: "20px", cursor: "pointer", background: "#ffffff", color: "#072447", boxShadow: `${mo.ring}` }}>{mo.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}
{' '}
{(v.showOverlay) ? (<><div aria-hidden="true" style={{ position: "fixed", inset: "0", zIndex: "30", background: "rgba(0,0,0,0.32)" }}></div></>) : null}
{' '}
{(v.ovLoading) ? (<><div role="status" aria-label="Loading" style={{ position: "fixed", zIndex: "31", top: "73px", left: "8px", right: "8px", bottom: "8px", borderRadius: "0 0 8px 8px", zIndex: "32", background: "#f1f3f7", overflow: "hidden", padding: "40px 24px", boxSizing: "border-box", display: "flex", justifyContent: "center" }}><div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", alignSelf: "flex-start" }}><div className="shim" style={{ width: "55%", height: "40px", marginTop: "0px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "80%", height: "20px", marginTop: "16px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "30%", height: "16px", marginTop: "40px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "100%", height: "48px", marginTop: "8px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "30%", height: "16px", marginTop: "40px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "100%", height: "48px", marginTop: "8px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "30%", height: "16px", marginTop: "40px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "100%", height: "48px", marginTop: "8px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "30%", height: "16px", marginTop: "40px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div className="shim" style={{ width: "100%", height: "48px", marginTop: "8px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div>
<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "40px" }}><div className="shim" style={{ width: "200px", height: "48px", marginTop: "0px", background: "linear-gradient(90deg, #eceef3 25%, #f7f8fb 37%, #eceef3 63%)", backgroundSize: "400% 100%", borderRadius: "8px" }}></div></div></div></div></>) : null}
{' '}
<ShowLeadsHome v={v} />
{' '}
{(v.showLeadsCall) ? (<>{' '}
<div className="ldshell"><header className="lchead"><h1 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "400", color: "#000000" }}>New Call Report</h1>
<button type="button" className="ldlink" style={{ fontSize: "14px" }} onClick={v.lcCancel}>Cancel</button></header>
<div className="lcbody"><section className="lcpanel" aria-labelledby="lc-title"><div className="lcpanel-h" id="lc-title">Call details</div>
<div className="lcpanel-b"><div style={{ display: "flex", gap: "16px", alignItems: "center" }}><span className="lcav">OI</span>
<div style={{ lineHeight: "24px" }}><div style={{ color: "#000000" }}>Orient Insurance</div>
<div style={{ color: "#575757" }}>CIF: 123456789</div></div></div>
<div className="lcf"><label className="lclabel" htmlFor="lc-date">Date</label>
<div style={{ position: "relative" }}><button type="button" id="lc-date" className="lcinput lcbtn" onClick={v.lcCalToggle} aria-haspopup="dialog" aria-expanded={v.lcCalOpenAria}><span style={{ color: `${v.lcDateFg}` }}>{v.lcDateText}</span>
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#182f7c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5"></rect>
<path d="M2.5 6.5h11M5.5 2v2.5M10.5 2v2.5M5 9h1M7.5 9h1M10 9h1M5 11h1M7.5 11h1"></path></svg></button>
{(v.lcCalOpen) ? (<><button aria-label="Close calendar" tabIndex="-1" onClick={v.lcCalClose} style={{ position: "fixed", inset: "0", zIndex: "30", border: "0", padding: "0", background: "transparent", cursor: "default" }}></button>
<div role="dialog" aria-label="Choose call date" className="lccal"><div className="lccal-h"><button type="button" className="ldicon" aria-label="Previous month" onClick={v.lcCalPrev}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6 9 12l6 6"></path></svg></button>
<span style={{ fontWeight: "500" }}>{v.lcCalTitle}</span>
<button type="button" className="ldicon" aria-label="Next month" onClick={v.lcCalNext} style={{ transform: "scaleX(-1)" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6 9 12l6 6"></path></svg></button></div>
<div className="lccal-g">{(v.lcCalHead || []).map((hd, hd__i) => (<React.Fragment key={hd__i}><span className="lccal-w">{hd.t}</span></React.Fragment>))}
{(v.lcCalDays || []).map((dd, dd__i) => (<React.Fragment key={dd__i}><button type="button" className="lccal-d" disabled={dd.off} aria-label={dd.aria} aria-pressed={dd.sel} onClick={dd.pick} style={{ background: `${dd.bg}`, color: `${dd.fg}`, visibility: `${dd.vis}` }}>{dd.t}</button></React.Fragment>))}</div></div></>) : null}</div></div>
<button type="button" role="switch" aria-checked={v.lcReachAria} onClick={v.lcReachToggle} className="lcswitch"><span className="lcswitch-t" style={{ background: `${v.lcReachTrack}` }}><span className="lcswitch-k" style={{ left: `${v.lcReachLeft}`, background: `${v.lcReachKnob}` }}></span></span>
<span style={{ color: "#000000" }}>Client Reachable</span></button>
<div className="lcf"><div className="lclabel" id="lc-type-l">Call type</div>
<div style={{ position: "relative" }}><button type="button" className="lcinput lcbtn" aria-labelledby="lc-type-l lc-type-v" aria-haspopup="listbox" aria-expanded={v.lcTypeAria} onClick={v.lcTypeToggle}><span id="lc-type-v" style={{ color: "#000000" }}>{v.lcType}</span>
<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg></button>
{(v.lcTypeOpen) ? (<><div role="listbox" aria-label="Call type" className="lcdrop">{(v.lcTypeOpts || []).map((o, o__i) => (<React.Fragment key={o__i}><button type="button" role="option" aria-selected={o.sel} className="lcopt" onClick={o.pick}>{o.t}</button></React.Fragment>))}</div></>) : null}</div></div>
<div className="lcf"><div className="lclabel" id="lc-rel-l">Related leads</div>
<div style={{ position: "relative" }}><button type="button" className="lcinput lcbtn" aria-labelledby="lc-rel-l lc-rel-v" aria-haspopup="dialog" aria-expanded={v.lcRelAria} onClick={v.lcRelToggle} style={{ borderColor: `${v.lcRelLine}` }}><span id="lc-rel-v" style={{ color: `${v.lcRelFg}`, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.lcRelText}</span>
<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg></button>
{(v.lcRelOpen) ? (<><div role="dialog" aria-label="Related leads" className="lcdrop lcrel"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 8px 12px" }}><span style={{ fontSize: "16px", color: "#575757" }}>Related Leads</span>
<button type="button" className="ldlink" onClick={v.lcRelClear}>Clear all</button></div>
<button type="button" role="checkbox" aria-checked={v.lcRelAllAria} className="lccheck" onClick={v.lcRelAll}><span className="lcbox" style={{ background: `${v.lcRelAllBg}`, borderColor: `${v.lcRelAllLine}` }}><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg></span>
Select all</button>
<div style={{ borderTop: "1px solid #e5e7ee", margin: "4px 0 0", padding: "12px 0 4px", fontSize: "12px", color: "#575757" }}>Active leads</div>
{(v.lcRelOpts || []).map((o, o__i) => (<React.Fragment key={o__i}><button type="button" role="checkbox" aria-checked={o.on} className="lccheck" onClick={o.toggle}><span className="lcbox" style={{ background: `${o.bg}`, borderColor: `${o.line}` }}><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg></span>
{o.t}</button></React.Fragment>))}
<div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "8px" }}><button type="button" className="lcprimary" style={{ width: "88px", height: "40px" }} onClick={v.lcRelApply}>Apply</button></div></div></>) : null}</div></div>
<div className="lcf"><div className="lclabel" id="lc-mode-l">Mode of communication</div>
<div role="radiogroup" aria-labelledby="lc-mode-l" style={{ display: "flex", gap: "4px" }}>{(v.lcModes || []).map((m, m__i) => (<React.Fragment key={m__i}><button type="button" role="radio" aria-checked={m.sel} className="lcpill" onClick={m.pick} style={{ background: `${m.bg}`, color: `${m.fg}` }}>{m.t}</button></React.Fragment>))}</div></div>
<div className="lcf"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div className="lclabel" style={{ color: "#000000", margin: "0" }}>Participants</div>
<button type="button" className="ldlink" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px" }} onClick={v.lcPartAdd}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"></circle>
<path d="M12 8.5v7M8.5 12h7"></path></svg>
Add</button></div>
{(v.lcParts || []).map((pt, pt__i) => (<React.Fragment key={pt__i}><div style={{ display: "flex", gap: "8px", marginTop: "8px" }}><input className="lcinput" aria-label={pt.aria} placeholder="Enter Participant name" value={pt.v} onChange={pt.set} style={{ flex: "1", minWidth: "0" }} />
<button type="button" className="lcdel" aria-label={pt.delAria} onClick={pt.del}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b00000" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14M10 4h4M7 7l.8 12a1 1 0 0 0 1 .9h6.4a1 1 0 0 0 1-.9L17 7M10 10.5v6M14 10.5v6"></path></svg></button></div></React.Fragment>))}</div>
<div style={{ flex: "1" }}></div>
<div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "24px" }}><button type="button" className="lcprimary" aria-disabled={v.lcNextBlocked} onClick={v.lcNext} style={{ background: `${v.lcNextBg}`, cursor: `${v.lcNextCursor}` }}>Next</button></div></div></section>
<div className="lcempty"><img alt="" src={img_54ed698967} width="200" height="200" style={{ width: "160px", height: "160px" }} />
<div style={{ fontSize: "24px", lineHeight: "32px", color: "#000000" }}>First, fill in the call details</div></div></div></div>
{' '}</>) : null}
{' '}
{(v.showLeadsNote) ? (<>{' '}
<div className="ldshell"><header className="lchead"><h1 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "400", color: "#000000" }}>Lead</h1>
<div style={{ display: "flex", gap: "24px", alignItems: "center" }}><button type="button" className="ldlink" style={{ fontSize: "14px" }} onClick={v.lnClose}>Close</button>
<button type="button" className="lcprimary" style={{ width: "88px", height: "40px" }} onClick={v.lnSubmit}>Submit</button></div></header>
<div className="lcbody ln3"><section className="lcpanel" aria-labelledby="ln-cd"><div className="lcpanel-h" style={{ height: "auto", padding: "24px" }}><div id="ln-cd">Call details</div>
<div style={{ fontSize: "12px", lineHeight: "16px", color: "#ffffff", opacity: ".85", marginTop: "2px" }}>Created on {v.lnCreated}</div>
<span className="lndraft">Draft</span></div>
<div className="lcpanel-b" style={{ gap: "24px" }}><div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span className="lcav">OI</span>
<div style={{ lineHeight: "20px" }}><div style={{ color: "#000000" }}>Orient Insurance</div>
<div style={{ color: "#575757" }}>CIF: 123456789
<br />
{v.lnDateLong}</div>
<span className="lnreach" style={{ background: `${v.lnReachBg}`, color: `${v.lnReachFg}` }}>{v.lnReach}</span></div></div>
<div className="lnkv"><b>Mode of communication</b>
<span>{v.lcMode}</span></div>
<div className="lnkv"><b>Call type</b>
<span>{v.lcType}</span></div>
<div className="lnkv"><b>Related leads</b>
<span>{v.lcRelText}</span></div>
<div className="lnkv"><b>{v.lnPartLabel}</b>
{(v.lnParts || []).map((pp, pp__i) => (<React.Fragment key={pp__i}><div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "12px" }}><span className="lnini">{pp.ini}</span>
<span style={{ color: "#000000" }}>{pp.n}</span></div></React.Fragment>))}</div></div></section>
<section className="lcpanel" aria-labelledby="ln-mn" style={{ background: "#ffffff" }}><div id="ln-mn" style={{ padding: "24px", borderBottom: "1px solid #e5e7ee", fontSize: "16px", lineHeight: "24px", color: "#000000", fontWeight: "500" }}>Meeting notes</div>
<div className="lnchat" aria-live="polite">{(v.lnMsgs || []).map((mg, mg__i) => (<React.Fragment key={mg__i}><div className="lnmsg"><span style={{ whiteSpace: "pre-line" }}>{mg.t}</span>
<span className="lntime">{mg.time}</span></div>
{(mg.showGen) ? (<><button type="button" className="lnghost" onClick={v.lnGen}>Generate summary</button></>) : null}</React.Fragment>))}
{(v.lnGenBusy) ? (<><div className="lnmsg" style={{ color: "#575757", display: "flex", gap: "8px", alignItems: "center" }}><svg className="spin" aria-hidden="true" width="16" height="16" viewBox="0 0 48 48" fill="none"><circle className="fload" cx="24" cy="24" r="14.5" stroke="#182f7c" strokeWidth="4" strokeLinecap="round"></circle></svg>
Generating summary…</div></>) : null}</div>
<div className="lninput"><textarea aria-label="Add to meeting notes" placeholder={"Start typing, or tap the mic to record\u2026"} value={v.lnDraft} onChange={v.lnSetDraft} onKeyDown={v.lnKey}></textarea>
<div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", alignItems: "center" }}><button type="button" className="ldicon" aria-label={v.lnMicLabel} aria-pressed={v.lnMicAria} onClick={v.lnMic} style={{ color: `${v.lnMicFg}` }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3.5" width="6" height="11" rx="3"></rect>
<path d="M6 11.5a6 6 0 0 0 12 0M12 17.5V20"></path></svg></button>
<button type="button" className="lnsend" aria-label="Add note" onClick={v.lnSend} style={{ background: `${v.lnSendBg}` }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12 20 4.5 15 20l-3-6.5Z"></path>
<path d="M12 13.5 20 4.5"></path></svg></button></div></div></section>
<section className="lcpanel" aria-labelledby="ln-doc" style={{ background: "#ffffff" }}><div className="lcpanel-b" style={{ gap: "16px" }}><div id="ln-doc" style={{ fontSize: "16px", lineHeight: "24px", color: "#000000", fontWeight: "500" }}>Documents{' '}
<span style={{ color: "#9f9f9f", fontWeight: "400" }}>(optional)</span></div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ color: "#000000" }}>File attachments ({v.lnFileCount})</span>
<button type="button" className="ldlink" style={{ display: "inline-flex", gap: "6px", alignItems: "center", fontSize: "14px" }} onClick={v.lnAttach}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="m19 11.5-7 7a4.5 4.5 0 0 1-6.4-6.4l7.4-7.4a3 3 0 0 1 4.2 4.2l-7.3 7.4a1.5 1.5 0 0 1-2.1-2.1l6.7-6.7"></path></svg>
Attach</button></div>
{(v.lnFiles || []).map((lf, lf__i) => (<React.Fragment key={lf__i}><div className="lnfile"><button type="button" className="lnfile-n" onClick={lf.view} aria-label={`Preview ${lf.n}`}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5A.5.5 0 0 1 6.5 20V4a.5.5 0 0 1 .5-.5Z"></path>
<path d="M14 3.5V8h4M9.5 12h5M9.5 15h5"></path></svg>
<span>{lf.n}</span></button>
<button type="button" className="ldicon" aria-label={`Remove ${lf.n}`} onClick={lf.del}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18"></path></svg></button></div></React.Fragment>))}</div></section></div></div>
{' '}</>) : null}
{' '}
{(v.showTakeoverHeader) ? (<>{' '}
<header style={{ flex: "none", background: "#ffffff", borderBottom: "1px solid #b5becd", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>{' '}
<div style={{ minWidth: "0", display: "flex", alignItems: "center", gap: "16px" }}>{' '}
{(v.showStart) ? (<>{' '}
<img alt="Emirates NBD" src={img_ac82201241} style={{ flex: "none", height: "36px", width: "auto", display: "block" }} />
{' '}</>) : null}
{' '}
<h1 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.headerTitle}</h1>
{' '}</div>
{' '}
{(v.showClose) ? (<>{' '}
<button onClick={v.closeTakeover} aria-label="Close" style={{ flex: "none", width: "32px", height: "32px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b48b5" strokeWidth="1.5" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19"></path></svg>
{' '}</button>
{' '}</>) : null}
{' '}</header>
{' '}</>) : null}
{' '}
{(v.showFacForm) ? (<>{' '}
<header style={{ position: "fixed", zIndex: "31", top: "8px", left: "8px", right: "8px", borderRadius: "8px 8px 0 0", boxSizing: "border-box", height: "65px", background: "#ffffff", borderBottom: "1px solid #898d9d", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>{' '}
<h1 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>{v.facFormTitle}</h1>
{' '}
<button onClick={v.facFormClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button>
{' '}</header>
{' '}</>) : null}
{' '}
{(v.showModalHeader) ? (<>{' '}
<header style={{ position: "fixed", zIndex: "31", top: "8px", left: "8px", right: "8px", borderRadius: "8px 8px 0 0", height: "65px", background: "#ffffff", borderBottom: "1px solid #898d9d", boxSizing: "border-box", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>{' '}
<h1 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>{v.modalTitle}</h1>
{' '}
<button onClick={v.modalClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button>
{' '}</header>
{' '}</>) : null}
{' '}
{(v.showAppHeader) ? (<>{' '}
<header style={{ flex: "none", background: "#ffffff", minHeight: "64px", boxSizing: "border-box", padding: "4px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: "40px", rowGap: "4px" }}>{' '}
<button onClick={v.goStart} aria-label="Emirates NBD, back to the dashboard" style={{ flex: "none", padding: "4px", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}>{' '}
<img alt="" src={img_ac82201241} style={{ height: "36px", width: "auto", display: "block" }} />
{' '}</button>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center" }}>{' '}
{(v.showAppCrumb) ? (<>{' '}</>) : null}
{' '}</div>
{' '}
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>{' '}
{(v.showAppCrumb) ? (<>{' '}
<div style={{ padding: "6px 16px", borderRight: "1px solid #f6f6f6", display: "flex", gap: "4px", whiteSpace: "nowrap" }}><span style={{ color: "#50647c" }}>Application ID</span>
<span style={{ color: "#072447" }}>1234-5678</span></div>
{' '}</>) : null}
{' '}
<span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "#f4f7fe", display: "flex" }}><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M18.53 17.00C20.28 18.25 21 19.68 21 22.33H11C11 19.68 11.71 18.25 13.46 17.00M19 13.33C19 14.99 17.65 16.33 16 16.33C14.34 16.33 13 14.99 13 13.33C13 11.67 14.34 10.33 16 10.33C17.65 10.33 19 11.67 19 13.33Z" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}</div>
{' '}</header>
{' '}</>) : null}
{' '}
<div style={{ flex: "1", minHeight: "0", display: "flex" }}>{' '}
{(v.showStart) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px" }}>{' '}
<div style={{ width: "100%", maxWidth: "808px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", borderTop: "4px solid #1b48b5", padding: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>{' '}
<div>{' '}
<h2 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#072447" }}>How is this credit proposal sourced?</h2>
{' '}
<p style={{ margin: "8px 0 0", color: "#50647c" }}>Choose how you want to begin. You can come back to this screen at any time.</p>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "stretch" }}>{' '}
<div style={{ flex: "1 1 280px", minWidth: "0", boxSizing: "border-box", padding: "24px", border: "1px solid #e8eaef", borderRadius: "8px", background: "#f8faff", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<h3 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "500" }}>Call report sourced</h3>
{' '}
<p style={{ margin: "0", color: "#50647c", flex: "1" }}>Begin from a client meeting. Capture the meeting details, record what was said, and start the facility application from the call report.</p>
{' '}
<button onClick={v.startCallReport} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", alignSelf: "flex-start", marginTop: "16px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: "pointer", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Start with a call report</button>
{' '}</div>
{' '}
<div style={{ flex: "1 1 280px", minWidth: "0", boxSizing: "border-box", padding: "24px", border: "1px solid #e8eaef", borderRadius: "8px", background: "#f8faff", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<h3 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "500" }}>Self-sourced</h3>
{' '}
<p style={{ margin: "0", color: "#50647c", flex: "1" }}>Begin without a call report. Start the facility application directly when you already know what the client needs.</p>
{' '}
<button onClick={v.startSelf} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", alignSelf: "flex-start", marginTop: "16px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: "pointer", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Start a facility application</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowSelfList v={v} />
{' '}
{(v.showSelfSearch) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447", overflowWrap: "anywhere" }}>Who are you applying for?</h1>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>{' '}
<div className="field" style={{ flex: "1 1 240px", minWidth: "0", height: "44px", boxSizing: "border-box", padding: "0 16px", border: "1px solid #d0d5de", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" }}>{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.33 14.33L10.33 10.33M10.33 5.99C10.33 8.39 8.39 10.33 6.00 10.33C3.60 10.33 1.66 8.39 1.66 5.99C1.66 3.60 3.60 1.66 6.00 1.66C8.39 1.66 10.33 3.60 10.33 5.99Z" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
{' '}
<input className="bare" type="text" aria-label="Company name or CIF" placeholder="Search by company name or CIF" autoComplete="off" value={v.selfQuery} onChange={v.setSelfQuery} onKeyDown={v.selfQueryKey} style={{ font: "inherit", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#072447" }} />
{' '}
{(v.hasSelfQuery) ? (<>{' '}
<button onClick={v.clearSelfQuery} aria-label="Clear search" style={{ flex: "none", width: "32px", height: "32px", marginRight: "-8px", padding: "0", border: "0", borderRadius: "16px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.66 2.33L2.33 13.66M2.33 2.33L13.66 13.66" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
{' '}</>) : null}
{' '}</div>
{' '}
<button onClick={v.runSelfSearch} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", minWidth: "88px" }}>Search</button>
{' '}</div>
{' '}
{(v.selfHasResult) ? (<>{' '}
<button onClick={v.goMeeting} style={{ font: "inherit", textAlign: "left", width: "100%", boxSizing: "border-box", padding: "16px", border: "1px solid transparent", borderRadius: "8px", background: "#ffffff", cursor: "pointer", display: "flex", gap: "16px", alignItems: "flex-start", color: "#072447" }}>{' '}
<span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "20px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13.16 11.24C15.36 12.82 16.25 14.60 16.25 17.91H3.75C3.75 14.60 4.63 12.82 6.83 11.24M13.75 6.66C13.75 8.73 12.07 10.41 10 10.41C7.92 10.41 6.25 8.73 6.25 6.66C6.25 4.59 7.92 2.91 10 2.91C12.07 2.91 13.75 4.59 13.75 6.66Z" stroke="#1b48b5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}
<span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>{' '}
<span style={{ fontWeight: "500", lineHeight: "16px" }}>Orient insurance</span>
{' '}
<span style={{ color: "#50647c", lineHeight: "16px" }}>CIF: 3333-4445</span>
{' '}
<span style={{ color: "#50647c", lineHeight: "16px" }}>Trade license: 1234567789353</span>
{' '}
<span style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: "#fef3e6", color: "#d79c10" }}>CIF Suspended</span>
{' '}</span>
{' '}
<span style={{ flex: "none", alignSelf: "center", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 21L17 12L8 3" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}</button>
{' '}</>) : null}
{' '}
{(v.selfNeedsQuery) ? (<>{' '}
<div role="status" style={{ color: "#50647c" }}>Enter a company name or CIF, then press Search.</div>
{' '}</>) : null}
{' '}
{(v.hasSelfNote) ? (<>{' '}
<div role="status" style={{ background: "#e7efff", borderRadius: "8px", padding: "12px 16px", color: "#072447" }}>{v.selfNote}</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", justifyContent: "flex-end" }}>{' '}
<button onClick={v.addNtb} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", background: "transparent", color: "#182f7c" }}>Add NTB customer</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.showSelfSummary) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "40px 32px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 216px", minWidth: "0" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "500", color: "#072447", paddingLeft: "10px" }}>Facility application</div>
{' '}
<div style={{ color: "#50647c", paddingLeft: "10px" }}>Marketing clearance</div>
{' '}
<ol style={{ listStyle: "none", margin: "12px 0 0", padding: "0 0 0 10px" }}><li aria-current="step" style={{ display: "flex", alignItems: "center", gap: "18px", fontWeight: "500", color: "#072447" }}><span aria-hidden="true" style={{ flex: "none", width: "20px", height: "20px", boxSizing: "border-box", border: "6px solid #1b48b5", borderRadius: "10px", background: "#ffffff" }}></span>
Request summary</li>
<li aria-hidden="true" style={{ height: "24px", marginLeft: "9px", borderLeft: "1px dashed #c4c8d6" }}></li>
<li style={{ display: "flex", alignItems: "center", gap: "18px", color: "#50647c" }}><span aria-hidden="true" style={{ flex: "none", width: "20px", height: "20px", boxSizing: "border-box", border: "6px solid #c4c8d6", borderRadius: "10px", background: "#f1f3f7" }}></span>
Company ownership</li>
<li aria-hidden="true" style={{ height: "24px", marginLeft: "9px", borderLeft: "1px dashed #c4c8d6" }}></li>
<li style={{ display: "flex", alignItems: "center", gap: "18px", color: "#50647c" }}><span aria-hidden="true" style={{ flex: "none", width: "20px", height: "20px", boxSizing: "border-box", border: "6px solid #c4c8d6", borderRadius: "10px", background: "#f1f3f7" }}></span>
Authorized signatory</li>
<li aria-hidden="true" style={{ height: "24px", marginLeft: "9px", borderLeft: "1px dashed #c4c8d6" }}></li>
<li style={{ display: "flex", alignItems: "center", gap: "18px", color: "#50647c" }}><span aria-hidden="true" style={{ flex: "none", width: "20px", height: "20px", boxSizing: "border-box", border: "6px solid #c4c8d6", borderRadius: "10px", background: "#f1f3f7" }}></span>
Co-borrowers</li>
<li aria-hidden="true" style={{ height: "24px", marginLeft: "9px", borderLeft: "1px dashed #c4c8d6" }}></li>
<li style={{ display: "flex", alignItems: "center", gap: "18px", color: "#50647c" }}><span aria-hidden="true" style={{ flex: "none", width: "20px", height: "20px", boxSizing: "border-box", border: "6px solid #c4c8d6", borderRadius: "10px", background: "#f1f3f7" }}></span>
Review &amp; confirm</li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<button onClick={v.goSelfSearch} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#1b48b5", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
{' '}
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447", overflowWrap: "anywhere" }}>Request summary</h1>
{' '}
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#50647c" }}>These are the basics captured from the call-report and BuisnessOne.</p>
{' '}
<div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#50647c" }}><svg aria-hidden="true" width="21" height="24" viewBox="0 0 21 24" fill="none"><path d="M11.70 2.67C11.86 2.01 12.80 2.01 12.96 2.67L13.82 6.36C13.88 6.59 14.06 6.78 14.30 6.84L17.99 7.70C18.65 7.86 18.65 8.80 17.99 8.96L14.30 9.82C14.06 9.88 13.88 10.06 13.82 10.30L12.96 13.99C12.80 14.65 11.86 14.65 11.70 13.99L10.84 10.30C10.78 10.06 10.59 9.88 10.36 9.82L6.67 8.96C6.01 8.80 6.01 7.86 6.67 7.70L10.36 6.84C10.59 6.78 10.78 6.59 10.84 6.36L11.70 2.67Z" fill="#A44EFF"></path>
<path d="M6.03 13.34C6.19 12.67 7.13 12.67 7.29 13.34L7.84 15.67C7.89 15.91 8.08 16.10 8.32 16.15L10.65 16.70C11.32 16.86 11.32 17.80 10.65 17.96L8.32 18.50C8.08 18.56 7.89 18.75 7.84 18.98L7.29 21.32C7.13 21.98 6.19 21.98 6.03 21.32L5.49 18.98C5.43 18.75 5.24 18.56 5.01 18.50L2.67 17.96C2.01 17.80 2.01 16.86 2.67 16.70L5.01 16.15C5.24 16.10 5.43 15.91 5.49 15.67L6.03 13.34Z" fill="#A44EFF"></path></svg>
Insight generated by AI</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ padding: "16px", display: "flex", gap: "16px", alignItems: "flex-start" }}>{' '}
<span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "20px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.59 2.08C9.44 1.50 10.55 1.50 11.40 2.08L17.72 6.38C18.15 6.68 18.41 7.17 18.41 7.69C18.41 8.57 17.70 9.28 16.83 9.28H15.91V14.12C16.36 14.21 16.76 14.50 16.97 14.92L17.63 16.24C18.13 17.23 17.41 18.41 16.29 18.41H3.70C2.58 18.41 1.86 17.23 2.36 16.24L3.02 14.92C3.23 14.50 3.63 14.21 4.08 14.12V9.28H3.16C2.29 9.28 1.58 8.57 1.58 7.69C1.58 7.17 1.84 6.68 2.27 6.38L8.59 2.08ZM4.36 15.09C4.17 15.09 4.00 15.20 3.91 15.36L3.25 16.68C3.09 17.02 3.33 17.41 3.70 17.41H16.29C16.66 17.41 16.90 17.02 16.74 16.68L16.08 15.36C15.99 15.20 15.82 15.09 15.63 15.09H4.36ZM5.08 9.28V14.09H7.41V9.28H5.08ZM8.41 9.28V14.09H11.58V9.28H8.41ZM12.58 9.28V14.09H14.91V9.28H12.58ZM10.84 2.91C10.33 2.56 9.66 2.56 9.15 2.91L2.83 7.21C2.67 7.32 2.58 7.50 2.58 7.69C2.58 8.02 2.84 8.28 3.16 8.28H16.83C17.15 8.28 17.41 8.02 17.41 7.69C17.41 7.50 17.32 7.32 17.16 7.21L10.84 2.91Z" fill="#1b48b5" fillRule="evenodd" clipRule="evenodd"></path></svg></span>
{' '}
<div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", lineHeight: "16px" }}>{' '}
<div style={{ fontWeight: "500", color: "#072447" }}>Orient Insurance</div>
{' '}
<div style={{ color: "#50647c" }}>TL028843002883</div>
{' '}
<div style={{ color: "#50647c" }}>CIF: 102938859</div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Facilities</h2>
{' '}
<button disabled={true} style={{ font: "inherit", lineHeight: "16px", padding: "4px 0", border: "0", background: "transparent", color: "#aaadb0", display: "inline-flex", alignItems: "center", gap: "8px" }}>Edit
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.58 3.73C8.58 3.73 8.58 4.95 9.81 6.18C11.04 7.41 12.26 7.41 12.26 7.41M2.98 13.99L5.56 13.62C5.93 13.57 6.27 13.39 6.54 13.13L13.49 6.18C14.16 5.50 14.16 4.41 13.49 3.73L12.26 2.50C11.58 1.83 10.49 1.83 9.81 2.50L2.86 9.45C2.60 9.72 2.42 10.06 2.37 10.43L2.00 13.01C1.92 13.58 2.41 14.07 2.98 13.99Z" stroke="#aaadb0" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
{' '}</div>
{' '}
<div><button onClick={v.goSelfHub} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c" }}>Add new facility
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2.5V21.5M2.5 12H21.5" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button></div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Company documents</h2>
{' '}
<dl style={{ margin: "0", border: "1px solid #d0d5de", borderRadius: "8px", padding: "0 16px" }}>{' '}
<div style={{ minHeight: "47px", display: "flex", flexWrap: "wrap", gap: "4px 16px", alignItems: "center", justifyContent: "space-between" }}><dt style={{ color: "#50647c" }}>Trade license</dt>
<dd style={{ margin: "0", color: "#1b48b5" }}>TL.pdf</dd></div>
{' '}
<div style={{ minHeight: "47px", borderTop: "1px solid #d0d5de", display: "flex", flexWrap: "wrap", gap: "4px 16px", alignItems: "center", justifyContent: "space-between" }}><dt style={{ color: "#50647c" }}>Memorandum of Association</dt>
<dd style={{ margin: "0", color: "#1b48b5" }}>Moa.pdf</dd></div>
{' '}
<div style={{ minHeight: "47px", borderTop: "1px solid #d0d5de", display: "flex", flexWrap: "wrap", gap: "4px 16px", alignItems: "center", justifyContent: "space-between" }}><dt style={{ color: "#50647c" }}>Articles of Association</dt>
<dd style={{ margin: "0", color: "#1b48b5" }}>doc.pdf</dd></div>
{' '}
<div style={{ minHeight: "47px", borderTop: "1px solid #d0d5de", display: "flex", flexWrap: "wrap", gap: "4px 16px", alignItems: "center", justifyContent: "space-between" }}><dt style={{ color: "#50647c" }}>Board Resolution</dt>
<dd style={{ margin: "0", color: "#1b48b5" }}>brd_doc.pdf</dd></div>
{' '}
<div style={{ minHeight: "47px", borderTop: "1px solid #d0d5de", display: "flex", flexWrap: "wrap", gap: "4px 16px", alignItems: "center", justifyContent: "space-between" }}><dt style={{ color: "#50647c" }}>Power of Attorney</dt>
<dd style={{ margin: "0", color: "#1b48b5" }}>poa.pdf</dd></div>
{' '}</dl>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Does the customer have a new set of documents?</h2>
{' '}
<p style={{ margin: "0", color: "#50647c" }}>Kindly upload any updated versions or new documents showing the company’s borrowing information</p>
{' '}</div>
{' '}
<button onClick={v.selfUpload} style={{ font: "inherit", textAlign: "left", width: "100%", minHeight: "88px", boxSizing: "border-box", padding: "16px 24px", border: "1px dashed #7a8794", borderRadius: "8px", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", color: "#072447" }}>{' '}
<svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M13 28.5h-2.500a7 7 0 01-1.200-13.900 10 10 0 0119.400 1.900 6.200 6.200 0 01-.700 12H27M20 33V19.500M15 24l5-5 5 5" stroke="#7a8794" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
{' '}
<span style={{ display: "flex", flexDirection: "column", gap: "4px" }}><span>Click or drag file to this area to upload</span>
<span style={{ color: "#50647c" }}>JPG, PNG, or PDF — Max file size is 10 MB</span></span>
{' '}</button>
{' '}
{(v.selfUploadRows || []).map((f, f__i) => (<React.Fragment key={f__i}>{' '}
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2h5l3 3v9H4zM6 8h4M6 10.500h4" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}
<span style={{ flex: "1", minWidth: "0", fontWeight: "500", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
{' '}
<button onClick={f.remove} aria-label="Remove uploaded file" style={{ flex: "none", width: "32px", height: "32px", padding: "0", border: "1px solid #d0d5de", borderRadius: "16px", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.500 4h11M6 4V2.500h4V4M4 4l.600 9.500h6.800L12 4M6.500 6.500v5M9.500 6.500v5" stroke="#a81816" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
{(v.hasSelfNote) ? (<>{' '}
<div role="status" style={{ background: "#e7efff", borderRadius: "8px", padding: "12px 16px", color: "#072447" }}>{v.selfNote}</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "16px" }}>{' '}
<button onClick={v.selfContinue} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", width: "200px" }}>Continue</button>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 216px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowSelfFacility v={v} />
{' '}
{(v.showFacForm) ? (<>{' '}
<div style={{ position: "fixed", zIndex: "31", top: "73px", left: "8px", right: "8px", bottom: "8px", borderRadius: "0 0 8px 8px", overflowY: "auto", background: "#f4f7fe", color: "#000000", padding: "39px 24px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#182f7c" }}>Facility details</h1>
{' '}
{(v.facSelects || []).map((fs, fs__i) => (<React.Fragment key={fs__i}>{' '}
<div style={{ position: "relative", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ paddingBottom: "8px", color: `${fs.labelFg}` }}>{fs.label}</div>
{' '}
<button className="field" onClick={fs.toggle} disabled={fs.disabled} aria-label={fs.aria} aria-haspopup="listbox" aria-expanded={fs.expanded} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${fs.line}`, borderRadius: "8px", background: `${fs.bg}`, color: `${fs.fg}`, cursor: `${fs.cursor}`, display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{fs.text}</span>
{' '}
<span style={{ flex: "none", display: "flex", opacity: `${fs.iconOpacity}` }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.33L8 11.33L14 5.33" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}</button>
{' '}
{(fs.open) ? (<>{' '}
<div role="listbox" aria-label={fs.aria} style={{ position: "absolute", top: "80px", left: "0", right: "0", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(fs.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</React.Fragment>))}
{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<label htmlFor="fac-limit" style={{ paddingBottom: "8px", color: "#575757" }}>Proposed limit</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", padding: "2px 2px 2px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<input id="fac-limit" className="bare" type="text" inputMode="numeric" placeholder="Enter amount" autoComplete="off" value={v.fLimit} onChange={v.setFLimit} style={{ font: "inherit", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
{' '}
<span style={{ flex: "none", height: "44px", boxSizing: "border-box", padding: "12px 16px", borderRadius: "8px", background: "#f4f7fe", color: "#182f7c", display: "flex", alignItems: "center", gap: "8px" }}>AED
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.33L8 11.33L14 5.33" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<label htmlFor="fac-purpose" style={{ paddingBottom: "8px", color: `${v.facPurposeFg}` }}>{v.facPurposeLabel}</label>
{' '}
<textarea id="fac-purpose" placeholder="Enter description" value={v.fPurpose} onChange={v.setFPurpose} style={{ font: "inherit", height: "96px", boxSizing: "border-box", width: "100%", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000", resize: "none" }}></textarea>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", justifyContent: "flex-end" }}>{' '}
<button onClick={v.facSubmit} disabled={v.facSubmitDisabled} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.facSubmitBg}`, cursor: `${v.facSubmitCursor}` }}>Submit</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowSelfDocs v={v} />
{' '}
<ShowSelfTl v={v} />
{' '}
<ShowSelfOwn v={v} />
{' '}
<ShowSelfSh v={v} />
{' '}
<ShowSelfConsent v={v} />
{' '}
<ShowSelfCob v={v} />
{' '}
<ShowSelfKm v={v} />
{' '}
<ShowSelfKmForm v={v} />
{' '}
{(v.showSelfBank) ? (<>{' '}
<div aria-hidden={v.ovUnder} style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Client Information</div>
{' '}
<div style={{ marginTop: "2px", lineHeight: "16px", color: "#575757" }}>KYC/KYB</div>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Facility Request</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review trade license</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Ownership &amp; shareholders</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Consent Request</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Co-borrowers</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Key management</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Bank accounts</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Contact point</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review &amp; confirm</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<BankBefore v={v} />
<BankAfter v={v} />
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}
{(v.bankToast) ? (<>{' '}
<div role="status" style={{ position: "fixed", right: "40px", bottom: "40px", zIndex: "9", maxWidth: "calc(100% - 32px)", boxSizing: "border-box", padding: "18px", borderRadius: "8px", background: "#ffffff", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: "10px" }}>{' '}
<span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="20" height="20" viewBox="1006 1226 20 20" fill="none"><defs><clipPath id="itoastokclip0_12301_232125"><rect width="1440" height="1304" fill="white"></rect></clipPath></defs>
<g clipPath="url(#itoastokclip0_12301_232125)"><path d="M1016 1226C1021.52 1226 1026 1230.48 1026 1236C1026 1241.52 1021.52 1246 1016 1246C1010.48 1246 1006 1241.52 1006 1236C1006 1230.48 1010.48 1226 1016 1226ZM1021.35 1232.65C1021.16 1232.45 1020.84 1232.45 1020.65 1232.65L1014.35 1238.94C1014.16 1239.13 1013.84 1239.13 1013.65 1238.94L1011.35 1236.65C1011.16 1236.45 1010.84 1236.45 1010.65 1236.65C1010.45 1236.84 1010.45 1237.16 1010.65 1237.35L1012.94 1239.65C1013.53 1240.23 1014.47 1240.23 1015.06 1239.65L1021.35 1233.35C1021.55 1233.16 1021.55 1232.84 1021.35 1232.65Z" fill="#266300"></path></g></svg></span>
<span style={{ lineHeight: "20px", color: "#575757" }}>The account details were added successfully</span>
{' '}
<button onClick={v.bankToastClose} aria-label="Dismiss" style={{ flex: "none", marginLeft: "22px", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.66 2.33L2.33 13.66M2.33 2.33L13.66 13.66" stroke="#182f7c" strokeLinecap="round"></path></svg></button>
{' '}</div>
{' '}</>) : null}</div>
{' '}</>) : null}
{' '}
<ShowSelfAcct v={v} />
{' '}
<ShowSelfCp v={v} />
{' '}
{(v.showSelfCpForm) ? (<>{' '}
<div style={{ position: "fixed", zIndex: "31", top: "73px", left: "8px", right: "8px", bottom: "8px", borderRadius: "0 0 8px 8px", overflowY: "auto", background: "#f1f3f7", color: "#000000", padding: "40px 24px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px" }}><div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.cpFormClose} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Contact point details</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>Enter contact point details below</p></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="cp-name" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Full name</label>
<input id="cp-name" type="text" autoComplete="off" placeholder="Juana Carvajal" value={v.cpF.name} onChange={v.cpSet.name} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="cp-rel" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Relationship</label>
<input id="cp-rel" type="text" autoComplete="off" placeholder="" value={v.cpF.rel} onChange={v.cpSet.rel} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="cp-mobile" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Mobile number</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center" }}><span style={{ flex: "none", alignSelf: "stretch", margin: "1px", borderRadius: "7px 0 0 7px", background: "#f4f7fe", color: "#182f7c", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", width: "104px", gap: "8px" }}><span aria-hidden="true" style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="17" viewBox="750 732 24 17" fill="none"><defs><clipPath id="iuaeflagclip0_12301_232125"><rect width="1440" height="1121" rx="8" fill="white"></rect></clipPath>
<mask id="iuaeflagmask7_12301_232125" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="750" y="732" width="24" height="17"><rect x="750.25" y="732.35" width="23.5" height="16.3" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"></rect></mask></defs>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><rect x="750.25" y="732.35" width="23.5" height="16.3" rx="1.75" fill="white" stroke="#F4F3F4" strokeWidth="0.5"></rect></g>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><g mask="url(#iuaeflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M756.855 737.7H773.998V732.1H756.855V737.7Z" fill="#12833B"></path></g></g>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><g mask="url(#iuaeflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M756.855 748.9H773.998V743.3H756.855V748.9Z" fill="#242424"></path></g></g>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><g mask="url(#iuaeflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M750 748.9H756.857V732.1H750V748.9Z" fill="#FF323E"></path></g></g></svg></span>
+971</span>
<input id="cp-mobile" className="bare" type="text" inputMode="tel" autoComplete="off" placeholder="55 509 1266" value={v.cpF.mobile} onChange={v.cpSet.mobile} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000", margin: "0 12px" }} /></div></div>
{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="cp-email" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Email</label>
<input id="cp-email" type="text" autoComplete="off" placeholder="example@abc.com" value={v.cpF.email} onChange={v.cpSet.email} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}>{(v.cpEditing) ? (<><button onClick={v.cpFormDelete} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", whiteSpace: "nowrap", padding: "12px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer", width: "200px" }}>Delete record</button></>) : null}
<button disabled={v.cpSaveBlocked} onClick={v.cpSave} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.cpSaveBg}`, cursor: `${v.cpSaveCursor}` }}>Continue</button></div>
{' '}</div></div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowSelfReview v={v} />
{' '}
{(v.showSelfDone) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000", boxSizing: "border-box", padding: "160px 16px 80px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}><img src={img_0956f063e5} alt="" width="112" height="112" style={{ width: "112px", height: "112px" }} />
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447" }}>Client information completed</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", maxWidth: "560px" }}>Application consent requests have been sent. You may continue to Documents and references.</p>
<div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}><button onClick={v.doneBack} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", minWidth: "200px" }}>Back to dashboard</button>
<button onClick={v.doneDocs} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", cursor: "pointer", minWidth: "200px", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Continue to Documents &amp; references</button></div></div></div>
{' '}</>) : null}
{' '}
{(v.showEjSent) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000", boxSizing: "border-box", padding: "160px 16px 80px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}><img src={img_54e0b6371a} alt="" width="112" height="112" style={{ width: "112px", height: "112px" }} />
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447" }}>Documents sent</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", maxWidth: "560px" }}>Documents have been successfully sent to Perfios.</p>
<div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}><button onClick={v.ejSentContinue} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", cursor: "pointer", minWidth: "200px", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Continue</button></div></div></div>
{' '}</>) : null}
{' '}
{(v.showArmSent) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000", boxSizing: "border-box", padding: "160px 16px 80px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}><img src={img_0956f063e5} alt="" width="112" height="112" style={{ width: "112px", height: "112px" }} />
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447" }}>Application submitted to ARM</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", maxWidth: "560px" }}>Your application has been submitted successfully. You’ll be notified once there’s an update on its status.</p>
<div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}><button onClick={v.armSentContinue} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", cursor: "pointer", minWidth: "200px", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Continue</button></div></div></div>
{' '}</>) : null}
{' '}
{(v.showTerminated) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000", boxSizing: "border-box", padding: "160px 16px 80px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}><img src={img_962156342d} alt="" width="112" height="112" style={{ width: "112px", height: "112px" }} />
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447" }}>Application has been terminated</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", maxWidth: "560px" }}>The application is now archived</p>
<div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}><button onClick={v.endToDash} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", cursor: "pointer", minWidth: "200px", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Go to dashboard</button></div></div></div>
{' '}</>) : null}
{' '}
{(v.showAppConfirmed) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000", boxSizing: "border-box", padding: "160px 16px 80px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}><img src={img_051ae1a051} alt="" width="112" height="112" style={{ width: "112px", height: "112px" }} />
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447" }}>Application confirmed</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", maxWidth: "560px" }}>You’ve confirmed the facility application for Orient Insurance Marina LLC. It now moves to credit review, and you’ll be notified when there’s an update.</p>
<div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}><button onClick={v.confToHub} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", cursor: "pointer", minWidth: "200px", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Back to HUB</button></div></div></div>
{' '}</>) : null}
{' '}
{(v.showReturned) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000", boxSizing: "border-box", padding: "160px 16px 80px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}><img src={img_0956f063e5} alt="" width="112" height="112" style={{ width: "112px", height: "112px" }} />
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447" }}>Application returned to ARM</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", maxWidth: "560px" }}>The application has been returned to the ARM, along with your comments. You’ll be notified once the RM confirms or sends it back.</p>
<div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}><button onClick={v.endToDash} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", cursor: "pointer", minWidth: "200px", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Back to dashboard</button></div></div></div>
{' '}</>) : null}
{' '}
{(v.showDFinLocked) ? (<>{' '}
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
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Financial documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Ejari documents</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}><div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goDStk} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#182F7C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447" }}>Financial documents</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757" }}>Please upload the required documents to continue</p></div>
<div role="status" style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "12px 16px", border: "1px solid #b07cf2", borderRadius: "8px", background: "#f5eefe" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 2.5l1.3 3.7L13 7.5l-3.7 1.3L8 12.5 6.7 8.8 3 7.5l3.7-1.3L8 2.5zM14.5 11l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" fill="#7b3fe4"></path></svg>
<div style={{ display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" }}><div style={{ fontWeight: "500", color: "#000000" }}>Perfios Analysis is ongoing</div>
<div style={{ color: "#575757" }}>Uploading, removing, or editing financial documents has been disabled for the time being.</div></div></div>
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>{(v.dLockRows || []).map((lr, lr__i) => (<React.Fragment key={lr__i}>{(lr.head) ? (<><div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>{lr.title}</h2>
<p style={{ margin: "0", lineHeight: "20px", color: "#6c7a89" }}>{lr.desc}</p></div></>) : null}
{(lr.file) ? (<><div style={{ padding: "16px", border: "1px solid #d7dae5", borderRadius: "8px", display: "flex", gap: "16px", alignItems: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1d4f3a"></circle>
<path d="M6 10.2l2.6 2.6L14 7.4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<div style={{ display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px" }}><div style={{ fontWeight: "500", color: "#000000" }}>{lr.name}</div>
<button type="button" onClick={lr.preview} style={{ font: "inherit", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Preview document</button></div></div></>) : null}
{(lr.none) ? (<><div style={{ padding: "16px 0", textAlign: "center", lineHeight: "20px", color: "#575757" }}>No documents uploaded</div></>) : null}</React.Fragment>))}</div>
<div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={v.goDEjari} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", cursor: "pointer", width: "200px", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Continue</button></div></div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowDEjari v={v} />
{' '}
{(v.ejWidgetShow) ? (<><div role="status" aria-label="Ejari upload progress" style={{ position: "fixed", right: "24px", bottom: "0", zIndex: "20", width: "300px", maxWidth: "calc(100vw - 32px)", background: "#ffffff", borderRadius: "8px 8px 0 0", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.12)" }}><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}><span style={{ fontWeight: "500", lineHeight: "20px" }}>Ejari documents</span>
<span style={{ display: "flex", gap: "4px" }}><button type="button" onClick={v.ejWidgetToggle} aria-label={v.ejWidgetToggleLabel} style={{ width: "28px", height: "28px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{(v.ejWidgetOpen) ? (<><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#182F7C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg></>) : null}
{(v.ejWidgetMin) ? (<><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 10l4-4 4 4" stroke="#182F7C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg></>) : null}</button>
<button type="button" onClick={v.ejWidgetClose} aria-label="Close upload progress" style={{ width: "28px", height: "28px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="#182F7C" strokeWidth="1.3" strokeLinecap="round"></path></svg></button></span></div>
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", background: `${v.ejWidgetBg}`, lineHeight: "20px", color: "#000000" }}>{(v.ejWidgetDone) ? (<><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1d4f3a"></circle>
<path d="M6 10.2l2.6 2.6L14 7.4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg></>) : null}
{(v.ejWidgetBusy) ? (<><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#d7dae5" strokeWidth="2"></circle>
<path d="M10 2a8 8 0 018 8" stroke="#2765ff" strokeWidth="2" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" from="0 10 10" to="360 10 10" dur="0.9s" repeatCount="indefinite"></animateTransform></path></svg></>) : null}
{v.ejWidgetText}</div>
{(v.ejWidgetOpen) ? (<><div style={{ maxHeight: "280px", overflowY: "auto", padding: "4px 0" }}>{(v.ejBatch || []).map((eb, eb__i) => (<React.Fragment key={eb__i}><div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 16px" }}>{(eb.done) ? (<><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1d4f3a"></circle>
<path d="M6 10.2l2.6 2.6L14 7.4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg></>) : null}
{(eb.busy) ? (<><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#d7dae5" strokeWidth="2"></circle>
<path d="M10 2a8 8 0 018 8" stroke="#2765ff" strokeWidth="2" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" from="0 10 10" to="360 10 10" dur="0.9s" repeatCount="indefinite"></animateTransform></path></svg></>) : null}
<span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", lineHeight: "20px" }}><span style={{ overflowWrap: "anywhere" }}>{eb.name}</span>
<span style={{ fontSize: "14px", color: "#575757" }}>{eb.status}</span></span></div></React.Fragment>))}</div></>) : null}</div></>) : null}
{' '}
<ShowDKyc v={v} />
{' '}
<ShowDStk v={v} />
{' '}
<ShowDFin v={v} />
{' '}
<ShowFinSum v={v} />
{' '}
<ShowFinCreate v={v} />
{' '}
{(v.showFinEnt) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 244px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px", maxWidth: "206px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "600", color: "#000000" }}>Financial analysis</div>
{' '}
<button onClick={v.finHub} style={{ font: "inherit", lineHeight: "16px", marginTop: "4px", padding: "0", border: "0", background: "transparent", color: "#575757", textDecoration: "underline", cursor: "pointer" }}>Back to Hub</button>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Financial Spreading</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#072447" }}>Entity Selection</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Risk Ratios</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Risk Ratings</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.finBackSum} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "16px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#000000" }}>Entity selection</h1></div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<button onClick={v.finPick} style={{ font: "inherit", boxSizing: "border-box", width: "100%", minHeight: "96px", padding: "16px 16px 12px", border: "0", borderRadius: "8px", background: "transparent", display: "flex", gap: "16px", alignItems: "flex-start", cursor: "pointer" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="459 266 20 20" fill="none"><defs><mask id="ifavatarmask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="459" y="266" width="20" height="20"><g><g><path d="M472.169 277.25C474.361 278.825 475.25 280.601 475.25 283.917H462.75C462.75 280.601 463.639 278.825 465.831 277.25M472.75 272.667C472.75 274.738 471.071 276.417 469 276.417C466.929 276.417 465.25 274.738 465.25 272.667C465.25 270.596 466.929 268.917 469 268.917C471.071 268.917 472.75 270.596 472.75 272.667Z" stroke="#182F7C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#ifavatarmask0_11890_43994)"><rect x="459" y="266" width="20" height="20" fill="#182F7C"></rect></g></svg></span>
<span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px", textAlign: "left" }}><span style={{ fontWeight: "500", color: "#000000" }}>Orient Insurance LLC</span>
<span style={{ color: "#575757" }}>Entity ID 7437492734929</span>
<span style={{ color: "#575757" }}>8 statements (last on 21 September 2025)</span></span>
<span aria-hidden="true" style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center", alignSelf: "center" }}><svg aria-hidden="true" width="12" height="20" viewBox="999 266 12 20" fill="none"><path d="M1001 285L1010 276L1001 267" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
<button onClick={v.finPick} style={{ font: "inherit", boxSizing: "border-box", width: "100%", minHeight: "96px", padding: "16px 16px 12px", border: "0", borderRadius: "8px", background: "transparent", display: "flex", gap: "16px", alignItems: "flex-start", cursor: "pointer" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="459 266 20 20" fill="none"><defs><mask id="ifavatarmask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="459" y="266" width="20" height="20"><g><g><path d="M472.169 277.25C474.361 278.825 475.25 280.601 475.25 283.917H462.75C462.75 280.601 463.639 278.825 465.831 277.25M472.75 272.667C472.75 274.738 471.071 276.417 469 276.417C466.929 276.417 465.25 274.738 465.25 272.667C465.25 270.596 466.929 268.917 469 268.917C471.071 268.917 472.75 270.596 472.75 272.667Z" stroke="#182F7C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#ifavatarmask0_11890_43994)"><rect x="459" y="266" width="20" height="20" fill="#182F7C"></rect></g></svg></span>
<span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px", textAlign: "left" }}><span style={{ fontWeight: "500", color: "#000000" }}>Orient Forex LLC</span>
<span style={{ color: "#575757" }}>Entity ID 7437492734929</span>
<span style={{ color: "#575757" }}>5 statements (last on 30 June 2025)</span></span>
<span aria-hidden="true" style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center", alignSelf: "center" }}><svg aria-hidden="true" width="12" height="20" viewBox="999 266 12 20" fill="none"><path d="M1001 285L1010 276L1001 267" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
<button onClick={v.finPick} style={{ font: "inherit", boxSizing: "border-box", width: "100%", minHeight: "96px", padding: "16px 16px 12px", border: "0", borderRadius: "8px", background: "transparent", display: "flex", gap: "16px", alignItems: "flex-start", cursor: "pointer" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="459 266 20 20" fill="none"><defs><mask id="ifavatarmask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="459" y="266" width="20" height="20"><g><g><path d="M472.169 277.25C474.361 278.825 475.25 280.601 475.25 283.917H462.75C462.75 280.601 463.639 278.825 465.831 277.25M472.75 272.667C472.75 274.738 471.071 276.417 469 276.417C466.929 276.417 465.25 274.738 465.25 272.667C465.25 270.596 466.929 268.917 469 268.917C471.071 268.917 472.75 270.596 472.75 272.667Z" stroke="#182F7C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#ifavatarmask0_11890_43994)"><rect x="459" y="266" width="20" height="20" fill="#182F7C"></rect></g></svg></span>
<span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px", textAlign: "left" }}><span style={{ fontWeight: "500", color: "#000000" }}>Orient Takaful PJSC</span>
<span style={{ color: "#575757" }}>Entity ID 7437492734929</span>
<span style={{ color: "#575757" }}>3 statements (last on 31 March 2025)</span></span>
<span aria-hidden="true" style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center", alignSelf: "center" }}><svg aria-hidden="true" width="12" height="20" viewBox="999 266 12 20" fill="none"><path d="M1001 285L1010 276L1001 267" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 218px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.showFinLaunch) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", background: "#f1f3f7", display: "flex" }}>{' '}
<div role="status" style={{ flex: "1", minWidth: "0", marginRight: "24px", borderTopRightRadius: "40px", background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>{' '}
<svg className="spin" aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle className="fload" cx="24" cy="24" r="14.5" stroke="#141414" strokeWidth="3" strokeLinecap="round"></circle></svg>
{' '}
<div style={{ marginTop: "16px", fontSize: "20px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Launching CreditLens</div>
{' '}
<div style={{ marginTop: "16px", lineHeight: "20px", fontWeight: "500", color: "#9f9f9f" }}>This might take a moment</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.showClientLoad) ? (<>{' '}
<div className="hubfade" style={{ flex: "1", minWidth: "0", background: "#f1f3f7", display: "flex" }}>{' '}
<div role="status" style={{ flex: "1", minWidth: "0", marginRight: "24px", borderTopRightRadius: "40px", background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>{' '}
<svg className="spin" aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle className="fload" cx="24" cy="24" r="14.5" stroke="#141414" strokeWidth="3" strokeLinecap="round"></circle></svg>
{' '}
<div style={{ marginTop: "16px", fontSize: "20px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Loading client information</div>
{' '}
<div style={{ marginTop: "16px", lineHeight: "20px", fontWeight: "500", color: "#9f9f9f" }}>Fetching data from Finacle and BusinessOne…</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.showFinCl) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7" }}>{' '}
<button onClick={v.finClDone} aria-label="CreditLens risk grading. Continue to the application" style={{ display: "block", width: "100%", padding: "0", border: "0", background: "transparent", cursor: "pointer" }}><img src={img_fc4bf30d25} alt="" style={{ display: "block", width: "100%", height: "auto" }} /></button>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.showFinRedir) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", background: "#f1f3f7", display: "flex" }}>{' '}
<div role="status" style={{ flex: "1", minWidth: "0", marginRight: "24px", borderTopRightRadius: "40px", background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>{' '}
<svg className="spin" aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle className="fload" cx="24" cy="24" r="14.5" stroke="#141414" strokeWidth="3" strokeLinecap="round"></circle></svg>
{' '}
<div style={{ marginTop: "16px", fontSize: "20px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Redirecting to application</div>
{' '}
<div style={{ marginTop: "16px", lineHeight: "20px", fontWeight: "500", color: "#9f9f9f" }}>This might take a moment</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowFinRatios v={v} />
{' '}
<ShowFinRatings v={v} />
{' '}
{(v.showFinXls) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", justifyContent: "center", alignItems: "center", padding: "24px", boxSizing: "border-box" }}>{' '}
<button onClick={v.finXlsClose} aria-label="Close" tabIndex="-1" style={{ position: "fixed", inset: "0", border: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-modal="true" aria-labelledby="fin-xls-title" style={{ position: "relative", width: "100%", maxWidth: "1280px", maxHeight: "100%", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ flex: "none", padding: "24px 32px 15px", borderBottom: "1px solid #d7dae5", display: "flex", alignItems: "center", gap: "24px" }}><h2 id="fin-xls-title" style={{ flex: "1", minWidth: "0", margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>analysis.xlsx</h2>
<button onClick={v.finXlsClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ flex: "1", minHeight: "0", overflow: "auto", padding: "16px" }}><img src={img_0bebde19f0} alt="Perfios cashflow summary in analysis.xlsx: cross analysis of bank statements and VAT, quarter-on-quarter income and expense comparisons, top customers and vendors, with charts" style={{ display: "block", width: "100%", minWidth: "900px", height: "auto", borderRadius: "4px" }} /></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowSelfHub v={v} />
{' '}
{(v.hubModalOpen) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "20", background: "rgba(0,0,0,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}><div role="dialog" aria-modal="true" aria-labelledby="hub-modal-title" style={{ width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", display: "flex", flexDirection: "column", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}><div style={{ padding: "24px 32px 16px", borderBottom: "1px solid #e8eaef", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}><h2 id="hub-modal-title" style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "400", color: "#000000" }}>{v.hubModalTitle}</h2>
<button aria-label="Close" onClick={v.hubModalClose} style={{ flex: "none", width: "32px", height: "32px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round"></path></svg></button></div>
<div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}><p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757" }}>{v.hubModalSub}</p>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><label htmlFor="hub-modal-text" style={{ lineHeight: "20px", color: "#575757" }}>{v.hubModalLabel}</label>
<textarea id="hub-modal-text" placeholder={v.hubModalPh} value={v.hubModalText} onChange={v.setHubModalText} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "96px", boxSizing: "border-box", padding: "16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000", resize: "none" }}></textarea></div></div>
<div style={{ padding: "24px 32px", borderTop: "1px solid #e8eaef", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "flex-end" }}><button onClick={v.hubModalClose} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", width: "200px", height: "48px", padding: "12px 16px", border: "1px solid #d3d7e7", borderRadius: "8px", color: "#182f7c", background: "#ffffff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Cancel</button>
<button aria-disabled={v.hubModalBlocked} onClick={v.hubModalSubmit} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", width: "200px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: `${v.hubModalCursor}`, display: "inline-flex", alignItems: "center", justifyContent: "center", background: `${v.hubModalBg}` }}>{v.hubModalCta}</button></div></div></div>
{' '}</>) : null}
{' '}
{(v.pvOpen) ? (<>{' '}
<div onClick={v.pvBackdrop} style={{ position: "fixed", inset: "0", zIndex: "90", background: "rgba(0,0,0,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}><div role="dialog" aria-modal="true" aria-labelledby="pv-title" onClick={v.pvStop} style={{ position: "relative", width: "100%", maxWidth: "648px", maxHeight: "calc(100vh - 32px)", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}><div style={{ flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "24px 24px 20px", borderBottom: "1px solid #e8eaef" }}><h2 id="pv-title" style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "400", color: "#000000", overflowWrap: "anywhere" }}>{v.pv.title}</h2>
<button type="button" aria-label="Close preview" onClick={v.pvClose} style={{ flex: "none", width: "32px", height: "32px", padding: "0", border: "0", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round"></path></svg></button></div>
<div style={{ flex: "1", minHeight: "0", overflow: "auto", padding: "24px 24px 88px", position: "relative", background: "#ffffff" }}><div style={{ lineHeight: "20px", color: "#000000", marginBottom: "24px", overflowWrap: "anywhere" }}>{v.pv.file}</div>
<div style={{ overflow: "auto", padding: "4px 4px 12px" }}>{(v.pvIsPage) ? (<><div className="pvpage" style={{ zoom: `${v.pvZoomCss}` }}><div aria-hidden="true" className="pvwm">SAMPLE</div>
<div className="pvtop"><div><div className="pvissuer">{v.pv.issuer}</div>
<div className="pvissub">{v.pv.issuerSub}</div></div>
<div className="pvref">{v.pv.ref}</div></div>
<div className="pvtitle">{v.pv.docTitle}</div>
<div className="pvsub">{v.pv.docSub}</div>
{(v.pv.sections || []).map((ps, ps__i) => (<React.Fragment key={ps__i}><div className="pvsec"><div className="pvhead">{ps.head}</div>
{(ps.isKv) ? (<><div className="pvkv">{(ps.kv || []).map((kv, kv__i) => (<React.Fragment key={kv__i}><div className="pvk">{kv.k}</div>
<div className="pvv">{kv.v}</div></React.Fragment>))}</div></>) : null}
{(ps.isTable) ? (<><table className="pvtbl"><thead><tr>{(ps.cols || []).map((pc, pc__i) => (<React.Fragment key={pc__i}><th>{pc.t}</th></React.Fragment>))}</tr></thead>
<tbody>{(ps.trs || []).map((pr, pr__i) => (<React.Fragment key={pr__i}><tr>{(pr.cells || []).map((pd, pd__i) => (<React.Fragment key={pd__i}><td>{pd.t}</td></React.Fragment>))}</tr></React.Fragment>))}</tbody></table></>) : null}
{(ps.isText) ? (<>{(ps.paras || []).map((pp, pp__i) => (<React.Fragment key={pp__i}><p className="pvp">{pp.t}</p></React.Fragment>))}</>) : null}</div></React.Fragment>))}
<div className="pvsig"><div><span>{v.pv.sig1}</span></div>
<div><span>{v.pv.sig2}</span></div></div>
<div className="pvfoot">Sample document generated for this prototype. Not a real record.</div></div></>) : null}
{(v.pvIsCard) ? (<><div className="pvcardwrap" style={{ zoom: `${v.pvZoomCss}` }}><div className="pvcard" role="img" aria-label={v.pv.cardAria}><div aria-hidden="true" className="pvcwm">SPECIMEN</div>
<div className="pvchead"><div><div className="pvctitle">IDENTITY CARD</div>
<div className="pvcsub">Resident identity card · specimen</div></div>
<div className="pvcbadge">SPECIMEN</div></div>
{(v.pv.cardFront) ? (<><div className="pvcbody"><div className="pvcleft"><div className="pvcphoto"><svg aria-hidden="true" viewBox="0 0 90 110" width="100%" height="100%"><rect width="90" height="110" fill="#dfe4ea"></rect>
<circle cx="45" cy="42" r="19" fill="#aeb7c2"></circle>
<path d="M10 110c2-24 17-36 35-36s33 12 35 36Z" fill="#aeb7c2"></path></svg></div>
<div className="pvcchip"><svg aria-hidden="true" width="46" height="36" viewBox="0 0 46 36"><rect x="0.5" y="0.5" width="45" height="35" rx="6" fill="#d9b768" stroke="#b8963f"></rect>
<path d="M15 0.5v35M31 0.5v35M0.5 12h15M0.5 24h15M31 12h14.5M31 24h14.5M15 18h16" stroke="#b8963f" strokeWidth="1.2" fill="none"></path></svg></div></div>
<div className="pvcfields"><div className="pvcf"><span className="pvcl">ID number</span>
<b className="pvcv">{v.pv.cIdNo}</b></div>
<div className="pvcf"><span className="pvcl">Name</span>
<b className="pvcv">{v.pv.cName}</b></div>
<div className="pvcrow"><div className="pvcf"><span className="pvcl">Date of birth</span>
<b className="pvcv">{v.pv.cDob}</b></div>
<div className="pvcf"><span className="pvcl">Sex</span>
<b className="pvcv">{v.pv.cSex}</b></div></div>
<div className="pvcf"><span className="pvcl">Nationality</span>
<b className="pvcv">{v.pv.cNat}</b></div>
<div className="pvcrow"><div className="pvcf"><span className="pvcl">Issue date</span>
<b className="pvcv">{v.pv.cIssue}</b></div>
<div className="pvcf"><span className="pvcl">Expiry date</span>
<b className="pvcv">{v.pv.cExpiry}</b></div></div>
<div className="pvcsig"><span className="pvcl">Signature</span>
<i className="pvcs">{v.pv.cSig}</i></div></div></div></>) : null}
{(v.pv.cardBack) ? (<><div className="pvcbody pvcback"><div className="pvcfields"><div className="pvcrow"><div className="pvcf"><span className="pvcl">Card number</span>
<b className="pvcv">{v.pv.cCardNo}</b></div>
<div className="pvcf"><span className="pvcl">Issuing place</span>
<b className="pvcv">{v.pv.cPlace}</b></div></div>
<div className="pvcf"><span className="pvcl">Occupation</span>
<b className="pvcv">{v.pv.cOcc}</b></div>
<div className="pvcf"><span className="pvcl">Employer</span>
<b className="pvcv">{v.pv.cEmp}</b></div>
<div className="pvcf"><span className="pvcl">ID number</span>
<b className="pvcv">{v.pv.cIdNo}</b></div></div>
<div className="pvcqr" aria-hidden="true"></div>
<div className="pvcbars" aria-hidden="true"><i></i>
<i></i>
<i></i></div></div></>) : null}
<div className="pvcfoot">Specimen for this prototype – not a valid identity document</div></div></div></>) : null}</div></div>
<div style={{ position: "absolute", left: "0", right: "0", bottom: "0", pointerEvents: "none", display: "flex", justifyContent: "center", paddingBottom: "20px" }}><div role="toolbar" aria-label="Document controls" style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: "8px", height: "40px", padding: "4px 12px", background: "#ffffff", border: "1px solid #e8eaef", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}><button type="button" aria-label="Zoom out" onClick={v.pvZoomOut} style={{ width: "32px", height: "32px", padding: "0", border: "0", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#182f7c" strokeWidth="1.5"></circle>
<path d="M8 12h8" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round"></path></svg></button>
<span aria-live="polite" style={{ minWidth: "48px", textAlign: "center", lineHeight: "20px", color: "#000000" }}>{v.pvZoomLabel}</span>
<button type="button" aria-label="Zoom in" onClick={v.pvZoomIn} style={{ width: "32px", height: "32px", padding: "0", border: "0", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#182f7c" strokeWidth="1.5"></circle>
<path d="M8 12h8M12 8v8" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round"></path></svg></button>
<span aria-hidden="true" style={{ width: "1px", height: "24px", background: "#e8eaef", margin: "0 8px" }}></span>
<button type="button" aria-label="Previous page" disabled={true} style={{ width: "32px", height: "32px", padding: "0", border: "0", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 15l6-6 6 6" stroke="#c4c8d6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
<span style={{ lineHeight: "20px", color: "#000000" }}>1 of 1</span>
<button type="button" aria-label="Next page" disabled={true} style={{ width: "32px", height: "32px", padding: "0", border: "0", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#c4c8d6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button></div></div></div></div>
{' '}</>) : null}
{' '}
<ShowForm v={v} />
{' '}
{(v.showDetails) ? (<>{' '}
<aside style={{ flex: "none", width: "372px", background: "#ffffff", display: "flex", flexDirection: "column", minHeight: "0" }}>{' '}
<div style={{ padding: "20px 24px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "500" }}>Meetings details</h2>
{' '}
<button onClick={v.togglePanel} aria-label="Collapse meeting details" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "#e7efff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1b48b5" strokeWidth="1.3" strokeLinejoin="round"><rect x="3" y="3.5" width="14" height="13" rx="1.5"></rect>
<path d="M7.5 3.5v13"></path></svg>
{' '}</button>
{' '}</div>
{' '}
<div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "8px 24px 16px", display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>{' '}
<span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "20px", background: "#f5f8ff", color: "#1b48b5", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>{v.clientInitials}</span>
{' '}
<div style={{ minWidth: "0" }}>{' '}
<div style={{ fontWeight: "500" }}>{v.name}</div>
{' '}
<div style={{ color: "#50647c", lineHeight: "16px", marginTop: "2px" }}>{v.whenText}</div>
{' '}
<div style={{ color: "#50647c", lineHeight: "16px" }}>{v.client}</div>
{' '}
<div style={{ color: "#50647c", lineHeight: "16px" }}>{v.locationText}</div>
{' '}</div>
{' '}</div>
{' '}
{(v.hasDesc) ? (<>{' '}
<div>{' '}
<div style={{ fontWeight: "500", paddingBottom: "8px" }}>Meeting description</div>
{' '}
<div style={{ color: "#50647c", whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{v.desc}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<div>{' '}
<div style={{ fontWeight: "500", paddingBottom: "8px" }}>Topic</div>
{' '}
<div style={{ color: "#50647c" }}>{v.topic}</div>
{' '}</div>
{' '}
{(v.hasPeople) ? (<>{' '}
<div>{' '}
<div style={{ fontWeight: "500", paddingBottom: "12px" }}>Participants ({v.peopleCount})</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>{' '}
{(v.people || []).map((person, person__i) => (<React.Fragment key={person__i}>{' '}
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>{' '}
<span aria-hidden="true" style={{ flex: "none", width: "32px", height: "32px", border: "1px solid #d0d5de", borderRadius: "8px", boxSizing: "border-box", fontSize: "12px", color: "#1b48b5", display: "flex", alignItems: "center", justifyContent: "center" }}>{person.initials}</span>
{' '}
<span style={{ fontWeight: "500", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{person.name}</span>
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.hasFiles) ? (<>{' '}
<div>{' '}
<div style={{ fontWeight: "500", paddingBottom: "12px" }}>File attachments ({v.fileCount})</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
{(v.fileRows || []).map((f, f__i) => (<React.Fragment key={f__i}>{' '}
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>{' '}
<span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "8px", background: "#f5f8ff", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"><path d="M4 2h5l3 3v9H4zM6 8h4M6 10.5h4"></path></svg>
{' '}</span>
{' '}
<span style={{ fontWeight: "500", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
<div style={{ flex: "none", padding: "16px 24px 24px", display: "flex", gap: "8px" }}>{' '}
<button onClick={v.deleteMeeting} aria-label="Delete meeting" style={{ flex: "none", width: "48px", height: "48px", padding: "0", border: "1px solid #d0d5de", borderRadius: "36px", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#a81816" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 4h11M6 4V2.5h4V4M4 4l.6 9.5h6.8L12 4M6.5 6.5v5M9.5 6.5v5"></path></svg>
{' '}</button>
{' '}
<button onClick={v.editMeeting} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", flex: "1", height: "48px", padding: "12px 16px", border: "1px solid #d3d7e7", borderRadius: "8px", background: "#ffffff", color: "#182f7c", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>{' '}
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1b48b5" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round"><path d="M3.5 16.5l.8-3.6 9-9a1.6 1.6 0 012.3 0l.5.5a1.6 1.6 0 010 2.3l-9 9z"></path>
<path d="M12 5.2l2.8 2.8"></path></svg>
{' '}Edit meeting{' '}</button>
{' '}</div>
{' '}</aside>
{' '}</>) : null}
{' '}
{(v.showRail) ? (<>{' '}
<aside style={{ flex: "none", width: "72px", background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0", gap: "32px" }}>{' '}
<button onClick={v.togglePanel} aria-label="Expand meeting details" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "#e7efff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1b48b5" strokeWidth="1.3" strokeLinejoin="round"><rect x="3" y="3.5" width="14" height="13" rx="1.5"></rect>
<path d="M7.5 3.5v13"></path></svg>
{' '}</button>
{' '}
<button onClick={v.togglePanel} aria-label="Meeting information" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinecap="round"><circle cx="11" cy="11" r="8.5"></circle>
<path d="M11 10v5M11 7v.5"></path></svg>
{' '}</button>
{' '}
<button onClick={v.togglePanel} aria-label="Participants" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="7.5" r="3.5"></circle>
<path d="M4 19c.6-3.6 3.4-5.5 7-5.5s6.400 1.900 7 5.500z"></path></svg>
{' '}</button>
{' '}
<button onClick={v.togglePanel} aria-label="Date and time" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinecap="round"><circle cx="11" cy="11" r="8.5"></circle>
<path d="M11 6v5l3 2"></path></svg>
{' '}</button>
{' '}
<button onClick={v.togglePanel} aria-label="Location" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#1b48b5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 13.500c3-3 4.500-5 4.500-7a4.500 4.500 0 00-9 0c0 2 1.500 4 4.500 7z"></path>
<circle cx="11" cy="6.500" r="1.500"></circle>
<path d="M6 14.500c-1.800.5-3 1.300-3 2.200C3 18.300 6.600 19.500 11 19.500s8-1.200 8-2.800c0-.9-1.200-1.700-3-2.200"></path></svg>
{' '}</button>
{' '}
<button onClick={v.togglePanel} aria-label="File attachments" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="#1b48b5" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"><path d="M13 7.5l-5.2 5.2a3 3 0 01-4.3-4.3l5.6-5.6a2 2 0 012.9 2.9L6.5 11.2a1 1 0 01-1.5-1.5L10 4.8"></path></svg>
{' '}</button>
{' '}
<button onClick={v.editMeeting} aria-label="Add participants" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M22.81 22.97C22.97 22.74 23.28 22.69 23.51 22.85C24.58 23.63 25.37 24.47 25.88 25.56C26.39 26.63 26.60 27.91 26.60 29.50C26.60 29.77 26.37 30.00 26.10 30.00H14.41C14.13 30.00 13.91 29.77 13.91 29.50C13.91 27.91 14.12 26.63 14.62 25.56C15.13 24.47 15.92 23.63 17.00 22.85C17.22 22.69 17.53 22.74 17.69 22.97C17.85 23.19 17.80 23.51 17.58 23.67C16.60 24.37 15.95 25.09 15.53 25.98C15.16 26.78 14.96 27.74 14.91 29.00H25.59C25.55 27.74 25.35 26.78 24.97 25.98C24.55 25.09 23.90 24.37 22.92 23.67C22.70 23.51 22.65 23.19 22.81 22.97ZM13.08 17.59C13.31 17.43 13.62 17.48 13.78 17.71C13.94 17.93 13.88 18.25 13.66 18.40C12.86 18.96 12.34 19.53 12.00 20.23C11.71 20.83 11.55 21.55 11.51 22.5H15C15.27 22.5 15.5 22.72 15.5 23C15.5 23.27 15.27 23.5 15 23.5H11C10.72 23.5 10.5 23.27 10.5 23C10.5 21.71 10.67 20.68 11.10 19.79C11.53 18.90 12.19 18.21 13.08 17.59ZM20.25 14.96C22.47 14.96 24.26 16.76 24.26 18.97C24.26 21.19 22.47 22.98 20.25 22.98C18.04 22.98 16.24 21.19 16.24 18.97C16.24 16.76 18.04 14.96 20.25 14.96ZM20.25 15.96C18.59 15.96 17.24 17.31 17.24 18.97C17.24 20.63 18.59 21.98 20.25 21.98C21.91 21.98 23.26 20.63 23.26 18.97C23.26 17.31 21.91 15.96 20.25 15.96ZM15.87 10.48C17.76 10.48 19.29 12.02 19.29 13.91C19.29 14.18 19.07 14.41 18.79 14.41C18.52 14.41 18.29 14.18 18.29 13.91C18.29 12.57 17.21 11.48 15.87 11.48C14.53 11.48 13.44 12.57 13.44 13.91C13.44 15.16 14.40 16.20 15.63 16.32C15.91 16.34 16.11 16.59 16.08 16.86C16.06 17.14 15.81 17.34 15.54 17.31C13.80 17.15 12.44 15.68 12.44 13.91C12.44 12.02 13.98 10.48 15.87 10.48ZM26.10 10C26.37 10.00 26.60 10.22 26.60 10.5V12.82L29.02 12.82C29.30 12.82 29.52 13.05 29.52 13.32C29.52 13.60 29.30 13.82 29.02 13.82L26.60 13.82V16.34C26.60 16.62 26.37 16.84 26.10 16.84C25.82 16.84 25.60 16.62 25.60 16.34V13.82H23.17C22.90 13.82 22.67 13.60 22.67 13.32C22.68 13.04 22.90 12.82 23.17 12.82H25.60V10.5C25.60 10.22 25.82 10 26.10 10Z" fill="#1b48b5"></path></svg>
{' '}</button>
{' '}</aside>
{' '}</>) : null}
{' '}
{(v.showMain) ? (<>{' '}
<main style={{ flex: "0 1 648px", minWidth: "0", margin: `${v.mainMargin}`, background: "#ffffff", display: "flex", flexDirection: "column", minHeight: "0" }}>{' '}
{(v.showForm) ? (<>{' '}
<div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>{' '}
<div style={{ position: "relative", width: "208px", height: "200px" }}>{' '}
<img alt="" src={img_1ca50b068d} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
{' '}
<img alt="" src={img_eaec68969d} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
{' '}</div>
{' '}
<div style={{ fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>First, add some meeting details</div>
{' '}
<div style={{ lineHeight: "16px", color: "#50647c" }}>Finish creating the meeting to be able to create a report</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.showChat) ? (<>{' '}
<div ref={v.chatRef} style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
{(v.messages || []).map((m, m__i) => (<React.Fragment key={m__i}>{' '}
<div style={{ display: "flex", flexDirection: "column", alignItems: `${m.align}` }}>{' '}
{(m.isBotText) ? (<>{' '}
<div style={{ maxWidth: "448px", minWidth: "80px", boxSizing: "border-box", background: "#fafafa", borderRadius: "12px", padding: "6px 8px 8px", display: "flex", gap: "8px", alignItems: "flex-end" }}>{' '}
<div style={{ flex: "1", whiteSpace: "pre-wrap" }}>{m.text}</div>
{' '}
<div style={{ flex: "none", fontSize: "12px", lineHeight: "14px", color: "#50647c" }}>{m.time}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(m.isMeText) ? (<>{' '}
<div style={{ maxWidth: "434px", minWidth: "80px", boxSizing: "border-box", background: "#ededf0", borderRadius: "12px", padding: "6px 8px 8px", display: "flex", gap: "8px", alignItems: "flex-end" }}>{' '}
<div style={{ flex: "1", whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{m.text}</div>
{' '}
<div style={{ flex: "none", fontSize: "12px", lineHeight: "14px", color: "#50647c" }}>{m.time}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(m.isAudio) ? (<>{' '}
<div style={{ width: "448px", maxWidth: "100%", height: "48px", boxSizing: "border-box", background: "#f5f8ff", borderRadius: "24px", padding: "9px 16px", display: "flex", alignItems: "center", gap: "8px" }}>{' '}
<svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" fill="#1b48b5"></circle>
<path d="M13.500 11.500v9l7-4.500z" fill="#ffffff"></path></svg>
{' '}
<div style={{ flex: "1", minWidth: "0", height: "30px", overflow: "hidden", display: "flex", alignItems: "center", gap: "4px" }}>{' '}
{(m.bars || []).map((b, b__i) => (<React.Fragment key={b__i}>{' '}
<span style={{ flex: "none", width: "2px", borderRadius: "1px", background: "#072447", opacity: "0.66", height: `${b.h}px` }}></span>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ flex: "none", fontSize: "12px", lineHeight: "14px", fontWeight: "500", color: "#072447" }}>{m.text}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(m.isTyping) ? (<>{' '}
<div role="status" style={{ background: "#fafafa", borderRadius: "12px", padding: "6px 8px 8px", color: "#50647c" }}>Writing the summary…</div>
{' '}</>) : null}
{' '}
{(m.isSummary) ? (<>{' '}
<div style={{ position: "relative", width: "448px", maxWidth: "100%", boxSizing: "border-box", background: "#fafafa", borderRadius: "12px", padding: "6px 8px 24px" }}>{' '}
<p style={{ margin: "0 0 20px" }}>Based on your inputs, the summary is:</p>
{' '}
<p style={{ margin: "0 0 20px" }}>Meeting Objective: Discuss the client's current requirement for a new term loan facility.</p>
{' '}
<p style={{ margin: "0 0 20px" }}>Key Discussion: The client purchased an office in DIFC last year for captive usage and is looking for an equity release on the property, with the funds to be reinvested in the business. The company and its corporate guarantor are cash rich and route their entire cash flow through accounts with the bank.</p>
{' '}
<p style={{ margin: "0", fontWeight: "700" }}>Client background</p>
{' '}
<ul style={{ margin: "0 0 20px", paddingLeft: "21px" }}><li>Part of a multi-billion USD group with operations in more than 10 countries</li>
<li>Average balances of AED 18 MN to AED 55 MN held in company accounts</li></ul>
{' '}
<p style={{ margin: "0", fontWeight: "700" }}>Action items</p>
{' '}
<ul style={{ margin: "0", paddingLeft: "21px" }}><li>Start a new credit proposal application</li>
<li>Initiate marketing clearance</li>
<li>Request for further approval</li></ul>
{' '}
<div style={{ position: "absolute", right: "5px", bottom: "5px", fontSize: "12px", lineHeight: "14px", color: "#50647c" }}>{m.time}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(m.isActions) ? (<>{' '}
<div style={{ width: "320px", maxWidth: "100%", boxSizing: "border-box", background: "#fafafa", borderRadius: "12px", padding: "8px" }}>{' '}
<div style={{ padding: "8px", color: "#50647c" }}>A new facility opportunity has been detected from this conversation.</div>
{' '}
{(m.open) ? (<>{' '}
<div style={{ display: "flex", flexDirection: "column" }}>{' '}
<button onClick={m.startFacility} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", border: "0", borderTop: "1px solid #e8eaef", background: "transparent", color: "#2765ff", cursor: "pointer" }}>Start Facility application</button>
{' '}
<button onClick={m.followUp} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", border: "0", borderTop: "1px solid #e8eaef", background: "transparent", color: "#1b48b5", cursor: "pointer" }}>Schedule follow-up</button>
{' '}
<button onClick={m.closeLead} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", border: "0", borderTop: "1px solid #e8eaef", background: "transparent", color: "#a81816", cursor: "pointer" }}>Close lead</button>
{' '}</div>
{' '}</>) : null}
{' '}
<div style={{ paddingTop: "8px", textAlign: "right", fontSize: "12px", lineHeight: "14px", color: "#50647c" }}>{m.time}</div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ flex: "none", padding: "0 24px 24px" }}>{' '}
<div className="field" style={{ border: "1px solid #d0d5de", borderRadius: "8px", padding: "12px 8px 8px", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
{(v.notRecording) ? (<>{' '}
<textarea className="bare" aria-label="Message" rows="2" placeholder={"Start typing, or tap the mic to record\u2026"} value={v.draft} onChange={v.setDraft} onKeyDown={v.draftKey} style={{ font: "inherit", width: "100%", boxSizing: "border-box", height: "48px", padding: "2px 8px", border: "0", outline: "none", resize: "none", background: "transparent", color: "#072447" }}></textarea>
{' '}</>) : null}
{' '}
{(v.recording) ? (<>{' '}
<div role="status" style={{ height: "48px", padding: "2px 8px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "8px", color: "#a81816", fontWeight: "500" }}>{' '}
<span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", background: "#a81816" }}></span>
{' '}Recording {v.recTime}{' '}</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>{' '}
<button onClick={v.attach} aria-label="Attach a file" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "20px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1b48b5" strokeWidth="1.3" strokeLinecap="round"><path d="M10 3.500v13M3.500 10h13"></path></svg>
{' '}</button>
{' '}
<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>{' '}
<button onClick={v.toggleRecord} aria-label={v.micLabel} style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "20px", background: `${v.micBg}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(v.notRecording) ? (<>{' '}
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1b48b5" strokeWidth="1.3" strokeLinecap="round"><rect x="7.500" y="2.500" width="5" height="9" rx="2.500"></rect>
<path d="M5 9.500a5 5 0 0010 0M10 14.500v3"></path></svg>
{' '}</>) : null}
{' '}
{(v.recording) ? (<>{' '}
<svg width="20" height="20" viewBox="0 0 20 20"><rect x="5.500" y="5.500" width="9" height="9" rx="1.500" fill="#a81816"></rect></svg>
{' '}</>) : null}
{' '}</button>
{' '}
<button onClick={v.send} disabled={v.sendDisabled} aria-label="Send" style={{ width: "40px", height: "40px", padding: "0", border: "0", borderRadius: "20px", cursor: `${v.sendCursor}`, background: `${v.sendBg}`, display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#ffffff" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round"><path d="M4 4l12.500 6L4 16l2-6zM6 10h5"></path></svg>
{' '}</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</main>
{' '}</>) : null}
{' '}</div>
{' '}
</div>
    );
  }
}
