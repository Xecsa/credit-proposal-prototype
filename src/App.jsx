import React from 'react';
import { ProtoLogic } from './logic.js';
import './styles.css';
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
import ShowDKyc from './screens/ShowDKyc.jsx';
import ShowDFin from './screens/ShowDFin.jsx';
import ShowFinSum from './screens/ShowFinSum.jsx';
import ShowFinRatios from './screens/ShowFinRatios.jsx';
import ShowForm from './screens/ShowForm.jsx';
import img_ac82201241 from './assets/ac82201241fa083b5c835e1c0d63652e.svg';
import img_fc4bf30d25 from './assets/fc4bf30d25fbca7ecb7268c9c31fb40c.png';
import img_0bebde19f0 from './assets/0bebde19f05551d9ac61ea6737d339b0.jpg';
import img_48d1ac8305 from './assets/48d1ac83055cf739d59eb9a8a7234415.png';
import img_7dbc59854d from './assets/7dbc59854d08a737f34d6bc92e24e18c.png';
import img_567e0ec047 from './assets/567e0ec0472f73849c690a5a80845d7e.png';
import img_1ca50b068d from './assets/1ca50b068d67d72ed0779093e9c192fc.png';
import img_eaec68969d from './assets/eaec68969d4a4924638a08e3f1425e53.png';

export default class App extends ProtoLogic {
  render() {
    const v = this.renderVals();
    return (
<div style={{ height: "100vh", minHeight: "720px", display: "flex", flexDirection: "column", background: "#f1f4f7", color: "#072447", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "14px", lineHeight: "20px", fontFeatureSettings: "'liga' 0" }}>
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
{(v.showAppCrumb) ? (<>{' '}
<button onClick={v.goSelfList} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "0 16px", border: "0", background: "transparent", color: "#a3accb", cursor: "pointer" }}>Assets dashboard</button>
{' '}</>) : null}
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
<button onClick={v.goSelfList} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#1b48b5", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
{' '}
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
<button onClick={v.goSelfSummary} style={{ font: "inherit", textAlign: "left", width: "100%", boxSizing: "border-box", padding: "16px", border: "1px solid transparent", borderRadius: "8px", background: "#ffffff", cursor: "pointer", display: "flex", gap: "16px", alignItems: "flex-start", color: "#072447" }}>{' '}
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
<div style={{ fontWeight: "500", color: "#072447" }}>Orient Insurance Marina LLC</div>
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
<ShowDKyc v={v} />
{' '}
{(v.showDStk) ? (<>{' '}
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
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Stakeholder documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Financial documents</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goDKyc} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Stakeholders documents</h1></div>
{' '}
<div className="field" style={{ height: "44px", boxSizing: "border-box", padding: "0 15px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "8px" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="436 258 16 16" fill="none"><defs><clipPath id="idsearchclip0_11890_43994"><path d="M420 252C420 247.582 423.582 244 428 244H1012C1016.42 244 1020 247.582 1020 252V280C1020 284.418 1016.42 288 1012 288H428C423.582 288 420 284.418 420 280V252Z" fill="white"></path></clipPath>
<mask id="idsearchmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="436" y="258" width="16" height="16"><g><g><path d="M450.334 272.333L446.334 268.333M446.334 264C446.334 266.393 444.394 268.333 442 268.333C439.607 268.333 437.667 266.393 437.667 264C437.667 261.607 439.607 259.667 442 259.667C444.394 259.667 446.334 261.607 446.334 264Z" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g clipPath="url(#idsearchclip0_11890_43994)"><g mask="url(#idsearchmask1_11890_43994)"><rect x="436" y="258" width="16" height="16" fill="#182F7C"></rect></g></g></svg></span>
<input className="bare" type="text" aria-label="Search stakeholders" placeholder="Search" autoComplete="off" value={v.dSearch} onChange={v.setDSearch} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} /></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
{(v.dStkGroups || []).map((sec, sec__i) => (<React.Fragment key={sec__i}>{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447", opacity: "0.9" }}>{sec.title}</h2>
<p style={{ margin: "0", lineHeight: "20px", color: "#6c7a89" }}>{sec.desc}</p></div>
{' '}
{(sec.files || []).map((f, f__i) => (<React.Fragment key={f__i}>{' '}
{(f.ok) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 640 24 24" fill="none"><defs><mask id="idcheckmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="640" width="24" height="24"><g><g><path d="M456 642C461.523 642 466 646.477 466 652C466 657.523 461.523 662 456 662C450.477 662 446 657.523 446 652C446 646.477 450.477 642 456 642ZM461.354 648.646C461.158 648.451 460.842 648.451 460.646 648.646L454.354 654.939C454.158 655.135 453.842 655.135 453.646 654.939L451.354 652.646C451.158 652.451 450.842 652.451 450.646 652.646C450.451 652.842 450.451 653.158 450.646 653.354L452.939 655.646C453.525 656.232 454.475 656.232 455.061 655.646L461.354 649.354C461.549 649.158 461.549 648.842 461.354 648.646Z" fill="#266300"></path></g></g></mask></defs>
<g mask="url(#idcheckmask1_11890_43994)"><rect x="444" y="640" width="24" height="24" fill="#1B5145"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<button style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Preview document</button>
{(f.hasYear) ? (<><span style={{ alignSelf: "flex-start", marginTop: "2px", fontSize: "12px", lineHeight: "14px", padding: "4px 8px", borderRadius: "4px", background: "#eaeaea", color: "#575757", display: "inline-flex", alignItems: "center", gap: "8px" }}>{f.year}
<svg aria-hidden="true" width="12" height="12" viewBox="531 525 12 12" fill="none"><defs><mask id="idchevmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="531" y="525" width="12" height="12"><g><g><path d="M534 529.5L537 532.5L540 529.5" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#idchevmask2_11890_43994)"><rect x="531" y="525" width="12" height="12" fill="#575757"></rect></g></svg></span></>) : null}</div></div>
{' '}</>) : null}
{' '}
{(f.err) ? (<>{' '}
<div role="alert" style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #b00000" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 1154 24 24" fill="none"><defs><mask id="iderrmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="1154" width="24" height="24"><g><g><path d="M455.168 1156.5C455.524 1155.83 456.476 1155.83 456.832 1156.5L465.887 1173.59C466.224 1174.23 465.768 1175 465.055 1175H446.945C446.232 1175 445.776 1174.23 446.113 1173.59L455.168 1156.5ZM456 1171C455.724 1171 455.5 1171.22 455.5 1171.5V1172.5C455.5 1172.78 455.724 1173 456 1173C456.276 1173 456.5 1172.78 456.5 1172.5V1171.5C456.5 1171.22 456.276 1171 456 1171ZM456 1161C455.724 1161 455.5 1161.22 455.5 1161.5V1169.5C455.5 1169.78 455.724 1170 456 1170C456.276 1170 456.5 1169.78 456.5 1169.5V1161.5C456.5 1161.22 456.276 1161 456 1161Z" fill="#E88524"></path></g></g></mask></defs>
<g mask="url(#iderrmask2_11890_43994)"><rect x="444" y="1154" width="24" height="24" fill="#B00000"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<span style={{ color: "#b00000" }}>{f.info}</span></div></div>
{' '}</>) : null}
{' '}
{(f.warn) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 1834 24 24" fill="none"><defs><mask id="idwarnmask4_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="1834" width="24" height="24"><g><g><path d="M455.168 1836.5C455.524 1835.83 456.476 1835.83 456.832 1836.5L465.887 1853.59C466.224 1854.23 465.768 1855 465.055 1855H446.945C446.232 1855 445.776 1854.23 446.113 1853.59L455.168 1836.5ZM456 1851C455.724 1851 455.5 1851.22 455.5 1851.5V1852.5C455.5 1852.78 455.724 1853 456 1853C456.276 1853 456.5 1852.78 456.5 1852.5V1851.5C456.5 1851.22 456.276 1851 456 1851ZM456 1841C455.724 1841 455.5 1841.22 455.5 1841.5V1849.5C455.5 1849.78 455.724 1850 456 1850C456.276 1850 456.5 1849.78 456.5 1849.5V1841.5C456.5 1841.22 456.276 1841 456 1841Z" fill="#E88524"></path></g></g></mask></defs>
<g mask="url(#idwarnmask4_11890_43994)"><rect x="444" y="1834" width="24" height="24" fill="#E88524"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<span style={{ color: "#575757" }}>Document type couldn’t be identified</span>
<button onClick={f.categorize} style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Categorize document</button></div></div>
{' '}</>) : null}
{' '}</React.Fragment>))}
{' '}</section>
{' '}</React.Fragment>))}
{' '}
{(v.dStkEmpty) ? (<><p role="status" style={{ margin: "0", lineHeight: "20px", color: "#575757" }}>No stakeholders match “{v.dSearch}”.</p></>) : null}
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button onClick={v.goDFin} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Continue</button></div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<ShowDFin v={v} />
{' '}
<ShowFinSum v={v} />
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
<span style={{ color: "#575757" }}>ID 7437492734929</span>
<span style={{ color: "#575757" }}>8 statements (last on 21 September 2025)</span></span>
<span aria-hidden="true" style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center", alignSelf: "center" }}><svg aria-hidden="true" width="12" height="20" viewBox="999 266 12 20" fill="none"><path d="M1001 285L1010 276L1001 267" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
<div style={{ font: "inherit", boxSizing: "border-box", width: "100%", minHeight: "96px", padding: "16px 16px 12px", border: "0", borderRadius: "8px", background: "transparent", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="459 266 20 20" fill="none"><defs><mask id="ifavatarmask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="459" y="266" width="20" height="20"><g><g><path d="M472.169 277.25C474.361 278.825 475.25 280.601 475.25 283.917H462.75C462.75 280.601 463.639 278.825 465.831 277.25M472.75 272.667C472.75 274.738 471.071 276.417 469 276.417C466.929 276.417 465.25 274.738 465.25 272.667C465.25 270.596 466.929 268.917 469 268.917C471.071 268.917 472.75 270.596 472.75 272.667Z" stroke="#182F7C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#ifavatarmask0_11890_43994)"><rect x="459" y="266" width="20" height="20" fill="#182F7C"></rect></g></svg></span>
<span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px", textAlign: "left" }}><span style={{ fontWeight: "500", color: "#000000" }}>Orient Insurance LLC</span>
<span style={{ color: "#575757" }}>ID 7437492734929</span>
<span style={{ color: "#575757" }}>8 statements (last on 21 September 2025)</span></span>
<span aria-hidden="true" style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center", alignSelf: "center" }}><svg aria-hidden="true" width="12" height="20" viewBox="999 266 12 20" fill="none"><path d="M1001 285L1010 276L1001 267" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></div>
{' '}
<div style={{ font: "inherit", boxSizing: "border-box", width: "100%", minHeight: "96px", padding: "16px 16px 12px", border: "0", borderRadius: "8px", background: "transparent", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="459 266 20 20" fill="none"><defs><mask id="ifavatarmask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="459" y="266" width="20" height="20"><g><g><path d="M472.169 277.25C474.361 278.825 475.25 280.601 475.25 283.917H462.75C462.75 280.601 463.639 278.825 465.831 277.25M472.75 272.667C472.75 274.738 471.071 276.417 469 276.417C466.929 276.417 465.25 274.738 465.25 272.667C465.25 270.596 466.929 268.917 469 268.917C471.071 268.917 472.75 270.596 472.75 272.667Z" stroke="#182F7C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#ifavatarmask0_11890_43994)"><rect x="459" y="266" width="20" height="20" fill="#182F7C"></rect></g></svg></span>
<span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px", lineHeight: "20px", textAlign: "left" }}><span style={{ fontWeight: "500", color: "#000000" }}>Orient Insurance LLC</span>
<span style={{ color: "#575757" }}>ID 7437492734929</span>
<span style={{ color: "#575757" }}>8 statements (last on 21 September 2025)</span></span>
<span aria-hidden="true" style={{ flex: "none", width: "24px", display: "flex", justifyContent: "center", alignSelf: "center" }}><svg aria-hidden="true" width="12" height="20" viewBox="999 266 12 20" fill="none"><path d="M1001 285L1010 276L1001 267" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></div>
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
{(v.showFinRatings) ? (<>{' '}
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
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Entity Selection</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Risk Ratios</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Risk Ratings &amp; Other</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.finBackRatios} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "16px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#000000" }}>Risk ratings</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", opacity: "0.9" }}>Review the risk ratings calculated for this client</p>
<span style={{ alignSelf: "flex-start", boxSizing: "border-box", height: "22px", padding: "4px 8px", borderRadius: "4px", background: "#efe6ff", color: "#820fd9", fontSize: "12px", lineHeight: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="12" height="12" viewBox="441 261 12 12" fill="none"><defs><mask id="ifspark1mask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="441" y="261" width="12" height="12"><g><g clipPath="url(#ifspark1clip0_11890_43994)"><path d="M450.911 267.715L448.896 270.973C448.79 271.141 448.632 271.212 448.422 271.188C448.213 271.164 448.085 271.049 448.04 270.844L447.263 267.679L439.9 275.061C439.807 275.155 439.693 275.206 439.559 275.214C439.425 275.222 439.303 275.172 439.192 275.061C439.086 274.955 439.033 274.837 439.033 274.707C439.033 274.578 439.086 274.46 439.192 274.354L446.575 266.965L443.429 266.188C443.224 266.143 443.106 266.019 443.075 265.816C443.044 265.613 443.113 265.458 443.281 265.352L446.538 263.342L446.258 259.517C446.237 259.312 446.316 259.16 446.494 259.061C446.672 258.963 446.842 258.983 447.002 259.123L449.935 261.594L453.479 260.146C453.667 260.064 453.836 260.098 453.986 260.248C454.136 260.398 454.17 260.567 454.089 260.756L452.66 264.3L455.131 267.227C455.271 267.387 455.294 267.559 455.202 267.744C455.11 267.929 454.961 268.011 454.756 267.99L450.911 267.715ZM439.131 261.227C439.044 261.139 439 261.042 439 260.934C439 260.827 439.044 260.729 439.131 260.642L439.835 259.938C439.922 259.851 440.019 259.807 440.127 259.807C440.235 259.807 440.332 259.851 440.419 259.938L441.123 260.642C441.21 260.729 441.254 260.827 441.254 260.934C441.254 261.042 441.21 261.139 441.123 261.227L440.419 261.931C440.332 262.018 440.235 262.061 440.127 262.061C440.019 262.061 439.922 262.018 439.835 261.931L439.131 261.227ZM448.714 269.359L450.375 266.673L453.527 266.906L451.488 264.477L452.671 261.557L449.752 262.74L447.323 260.707L447.556 263.854L444.888 265.521L447.946 266.282L448.714 269.359ZM453.027 275.123L452.323 274.419C452.236 274.332 452.192 274.234 452.192 274.127C452.192 274.019 452.236 273.922 452.323 273.834L453.027 273.131C453.114 273.043 453.212 273 453.319 273C453.427 273 453.524 273.043 453.611 273.131L454.316 273.834C454.403 273.922 454.446 274.019 454.446 274.127C454.446 274.234 454.403 274.332 454.316 274.419L453.611 275.123C453.524 275.21 453.427 275.254 453.319 275.254C453.212 275.254 453.114 275.21 453.027 275.123Z" fill="#182F7C"></path></g></g></mask>
<clipPath id="ifspark1clip0_11890_43994"><rect width="12" height="12" fill="white" transform="translate(441 261)"></rect></clipPath></defs>
<g mask="url(#ifspark1mask0_11890_43994)"><rect x="441" y="261" width="12" height="12" fill="#820FD9"></rect></g></svg></span>
Powered by Moody’s</span></div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "0 40px" }}>{' '}
<div style={{ boxSizing: "border-box", flex: "1 1 200px", minWidth: "0", maxWidth: "280px", height: "112px", padding: "16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Rating</div>
<div style={{ marginTop: "24px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>3C</div></div>
{' '}
<div style={{ boxSizing: "border-box", flex: "1 1 200px", minWidth: "0", maxWidth: "280px", height: "112px", padding: "16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Probability Default</div>
<div style={{ marginTop: "24px", fontSize: "24px", lineHeight: "32px", fontWeight: "500", display: "flex", alignItems: "baseline", gap: "8px" }}>0.32
<span style={{ fontSize: "20px", fontWeight: "400", color: "#9f9f9f" }}>%</span></div></div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ marginTop: "16px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#000000" }}>Other documents analysis</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", opacity: "0.9" }}>Review the VAT, AECB, CBRB and Bank Statement analysis in the excel file below</p></div>
{' '}
<div style={{ boxSizing: "border-box", padding: "15px 23px", border: "1px solid #bbbbbb", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="457 661 24 24" fill="none"><defs><clipPath id="ifdocclip3_11890_43994"><rect width="600" height="118" fill="white" transform="translate(433 614)"></rect></clipPath>
<mask id="ifdocmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="457" y="661" width="24" height="24"><g><g><path d="M472.5 663.02V665.5C472.5 666.605 473.395 667.5 474.5 667.5H476.945M464.5 678H473.5M464.5 675H473.5M464.5 672H473.5M465.267 683H472.733C475.09 683 477 681.115 477 678.789V668.166C477 667.538 476.863 666.912 476.533 666.377C475.644 664.934 474.503 663.818 473.326 663.243C472.945 663.056 472.517 663 472.092 663H465.267C462.91 663 461 664.885 461 667.211V678.789C461 681.115 462.91 683 465.267 683Z" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g clipPath="url(#ifdocclip3_11890_43994)"><g mask="url(#ifdocmask1_11890_43994)"><rect x="457" y="661" width="24" height="24" fill="#182F7C"></rect></g></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ lineHeight: "24px", fontWeight: "500", color: "#000000" }}>analysis.xlsx</span>
<span style={{ color: "#575757" }}>Created 12/02/2026</span>
<button onClick={v.finXlsOpen} style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left", alignSelf: "flex-start" }}>Download and open</button>
<span style={{ alignSelf: "flex-start", boxSizing: "border-box", height: "22px", padding: "4px 8px", borderRadius: "4px", background: "#efe6ff", color: "#820fd9", fontSize: "12px", lineHeight: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="12" height="12" viewBox="505 699 12 12" fill="none"><defs><clipPath id="ifspark2clip3_11890_43994"><rect width="600" height="118" fill="white" transform="translate(433 614)"></rect></clipPath>
<mask id="ifspark2mask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="505" y="699" width="12" height="12"><g><g><path d="M513.287 705.818C511.065 705.316 510.721 704.972 510.219 702.75C510.196 702.648 510.105 702.576 510.001 702.576C509.897 702.576 509.806 702.648 509.783 702.75C509.281 704.972 508.937 705.316 506.715 705.818C506.613 705.841 506.541 705.932 506.541 706.036C506.541 706.14 506.613 706.231 506.715 706.254C508.937 706.756 509.281 707.1 509.783 709.322C509.806 709.424 509.897 709.496 510.001 709.496C510.105 709.496 510.196 709.424 510.219 709.322C510.721 707.1 511.065 706.756 513.287 706.254C513.389 706.231 513.461 706.14 513.461 706.036C513.461 705.932 513.388 705.841 513.287 705.818Z" fill="#182F7C"></path>
<path d="M515.357 702.35C514.134 702.074 513.962 701.902 513.686 700.68C513.662 700.575 513.569 700.5 513.461 700.5C513.352 700.5 513.259 700.575 513.235 700.68C512.959 701.902 512.787 702.074 511.565 702.35C511.459 702.374 511.385 702.468 511.385 702.576C511.385 702.684 511.459 702.777 511.565 702.801C512.787 703.077 512.959 703.249 513.235 704.472C513.259 704.577 513.352 704.652 513.461 704.652C513.569 704.652 513.662 704.577 513.686 704.472C513.962 703.249 514.134 703.077 515.357 702.801C515.462 702.777 515.537 702.684 515.537 702.576C515.537 702.468 515.462 702.374 515.357 702.35Z" fill="#182F7C"></path></g></g></mask></defs>
<g clipPath="url(#ifspark2clip3_11890_43994)"><g mask="url(#ifspark2mask2_11890_43994)"><rect x="505" y="699" width="12" height="12" fill="#820FD9"></rect></g></g></svg></span>
Perfios output</span></div></div>
{' '}</div>
{' '}
<div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}><button onClick={v.finSubmit} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer", width: "200px" }}>Submit</button></div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 218px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
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
{(v.showSelfHub) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", padding: "40px 24px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<button onClick={v.goSelfSummary} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#1b48b5", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
{' '}
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447", overflowWrap: "anywhere" }}>Facility Application</h1>
{' '}
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#50647c" }}>Please complete all sections below, review the captured details, and submit the application when you're ready</p>
{' '}</div>
{' '}
<div style={{ background: "#ffffff", borderRadius: "8px", padding: "16px", display: "flex", gap: "16px", alignItems: "flex-start" }}>{' '}
<span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "20px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.59 2.08C9.44 1.50 10.55 1.50 11.40 2.08L17.72 6.38C18.15 6.68 18.41 7.17 18.41 7.69C18.41 8.57 17.70 9.28 16.83 9.28H15.91V14.12C16.36 14.21 16.76 14.50 16.97 14.92L17.63 16.24C18.13 17.23 17.41 18.41 16.29 18.41H3.70C2.58 18.41 1.86 17.23 2.36 16.24L3.02 14.92C3.23 14.50 3.63 14.21 4.08 14.12V9.28H3.16C2.29 9.28 1.58 8.57 1.58 7.69C1.58 7.17 1.84 6.68 2.27 6.38L8.59 2.08ZM4.36 15.09C4.17 15.09 4.00 15.20 3.91 15.36L3.25 16.68C3.09 17.02 3.33 17.41 3.70 17.41H16.29C16.66 17.41 16.90 17.02 16.74 16.68L16.08 15.36C15.99 15.20 15.82 15.09 15.63 15.09H4.36ZM5.08 9.28V14.09H7.41V9.28H5.08ZM8.41 9.28V14.09H11.58V9.28H8.41ZM12.58 9.28V14.09H14.91V9.28H12.58ZM10.84 2.91C10.33 2.56 9.66 2.56 9.15 2.91L2.83 7.21C2.67 7.32 2.58 7.50 2.58 7.69C2.58 8.02 2.84 8.28 3.16 8.28H16.83C17.15 8.28 17.41 8.02 17.41 7.69C17.41 7.50 17.32 7.32 17.16 7.21L10.84 2.91Z" fill="#1b48b5" fillRule="evenodd" clipRule="evenodd"></path></svg></span>
{' '}
<div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", lineHeight: "16px", alignSelf: "center" }}>{' '}
<div style={{ fontWeight: "500", color: "#072447" }}>Orient Insurance</div>
{' '}
<div style={{ color: "#50647c" }}>CIF: 102938859</div>
{' '}</div>
{' '}</div>
{' '}
{(v.finOngoing) ? (<>{' '}
<div role="status" style={{ boxSizing: "border-box", padding: "15px", border: "1px solid #820fd9", borderRadius: "8px", background: "#efe6ff", display: "flex", gap: "8px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="412 416 24 24" fill="none"><defs><mask id="idsparkmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="412" y="416" width="24" height="24"><g><g><path d="M428.574 429.636C424.13 428.632 423.441 427.944 422.438 423.5C422.392 423.296 422.211 423.152 422.002 423.152C421.793 423.152 421.612 423.296 421.566 423.5C420.562 427.944 419.874 428.632 415.43 429.636C415.227 429.682 415.082 429.863 415.082 430.072C415.082 430.28 415.227 430.461 415.43 430.507C419.874 431.511 420.562 432.2 421.566 436.643C421.612 436.847 421.793 436.991 422.002 436.991C422.211 436.991 422.392 436.847 422.438 436.643C423.442 432.2 424.13 431.511 428.574 430.507C428.777 430.461 428.921 430.28 428.921 430.072C428.921 429.863 428.777 429.682 428.574 429.636Z" fill="#182F7C"></path>
<path d="M432.713 422.701C430.268 422.148 429.924 421.805 429.372 419.36C429.324 419.149 429.137 419 428.921 419C428.705 419 428.518 419.149 428.47 419.36C427.918 421.805 427.575 422.148 425.13 422.701C424.919 422.749 424.77 422.935 424.77 423.152C424.77 423.368 424.919 423.555 425.13 423.603C427.575 424.155 427.918 424.498 428.47 426.944C428.518 427.154 428.705 427.304 428.921 427.304C429.137 427.304 429.324 427.154 429.372 426.944C429.924 424.498 430.268 424.155 432.713 423.603C432.923 423.555 433.073 423.368 433.073 423.152C433.073 422.935 432.923 422.749 432.713 422.701Z" fill="#182F7C"></path></g></g></mask></defs>
<g mask="url(#idsparkmask2_11890_43994)"><rect x="412" y="416" width="24" height="24" fill="#820FD9"></rect></g></svg></span>
<div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px", lineHeight: "20px" }}><div style={{ fontWeight: "500", color: "#000000" }}>Perfios Analysis is ongoing</div>
<div style={{ color: "#575757" }}>Financial information will be provided once the analysis is complete.</div></div></div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<button onClick={v.hubClient} style={{ font: "inherit", textAlign: "left", width: "100%", boxSizing: "border-box", padding: "16px", border: "0", borderRadius: "8px", background: "#ffffff", cursor: "pointer", display: "flex", gap: "16px", alignItems: "center", color: "#072447" }}>{' '}
<span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>{' '}
<span style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "500" }}>Client Information</span>
{' '}
<span style={{ color: "#50647c" }}>Provide supporting documents and references relevant to the application</span>
{' '}
<span style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: `${v.hubClientTagBg}`, color: `${v.hubClientTagFg}` }}>{v.hubClientTag}</span>
{' '}</span>
{' '}
<img alt="" src={img_48d1ac8305} style={{ flex: "none", width: "96px", height: "96px" }} />
{' '}</button>
{' '}
<div role="button" tabIndex="0" aria-disabled={v.hubDocsAria} onClick={v.hubDocs} style={{ boxSizing: "border-box", padding: "16px", borderRadius: "8px", background: "#ffffff", display: "flex", gap: "16px", alignItems: "center", cursor: `${v.hubDocsCursor}` }}>{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "500", color: "#072447" }}>Documents and References</div>
{' '}
<div style={{ color: "#50647c" }}>Enter the details of any co-borrower associated with this application</div>
{' '}
{(v.hubDocsLocked) ? (<><div style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: "#d7d7d7", color: "#9f9f9f", display: "flex", alignItems: "center", gap: "8px" }}><svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.75 3.75H3.25C2.14543 3.75 1.25 4.64543 1.25 5.75V8.25C1.25 9.35457 2.14543 10.25 3.25 10.25H8.75C9.85457 10.25 10.75 9.35457 10.75 8.25V5.75C10.75 4.64543 9.85457 3.75 8.75 3.75H8.25M3.75 3.75V3.5C3.75 2.25736 4.75736 1.25 6 1.25C7.24264 1.25 8.25 2.25736 8.25 3.5V3.75M3.75 3.75H8.25M7.25 7C7.25 7.69036 6.69036 8.25 6 8.25C5.30964 8.25 4.75 7.69036 4.75 7C4.75 6.30964 5.30964 5.75 6 5.75C6.69036 5.75 7.25 6.30964 7.25 7Z" stroke="#9f9f9f" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Locked</div></>) : null}
{(v.clientDone) ? (<><div style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: `${v.hubDocsTagBg}`, color: `${v.hubDocsTagFg}` }}>{v.hubDocsTag}</div></>) : null}
{' '}</div>
{' '}
<img alt="" src={img_7dbc59854d} style={{ flex: "none", width: "96px", height: "96px" }} />
{' '}</div>
{' '}
<div role="button" tabIndex="0" aria-disabled={v.hubFinAria} onClick={v.hubFin} style={{ boxSizing: "border-box", padding: "16px", borderRadius: "8px", background: "#ffffff", display: "flex", gap: "16px", alignItems: "center", cursor: `${v.hubFinCursor}` }}>{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "500", color: "#072447" }}>Financial Information</div>
{' '}
<div style={{ color: "#50647c" }}>Financial statements, cash flows, projections, and key financial ratios</div>
{' '}
{(v.finLocked) ? (<><div style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: "#d7d7d7", color: "#9f9f9f", display: "flex", alignItems: "center", gap: "8px" }}><svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.75 3.75H3.25C2.14543 3.75 1.25 4.64543 1.25 5.75V8.25C1.25 9.35457 2.14543 10.25 3.25 10.25H8.75C9.85457 10.25 10.75 9.35457 10.75 8.25V5.75C10.75 4.64543 9.85457 3.75 8.75 3.75H8.25M3.75 3.75V3.5C3.75 2.25736 4.75736 1.25 6 1.25C7.24264 1.25 8.25 2.25736 8.25 3.5V3.75M3.75 3.75H8.25M7.25 7C7.25 7.69036 6.69036 8.25 6 8.25C5.30964 8.25 4.75 7.69036 4.75 7C4.75 6.30964 5.30964 5.75 6 5.75C6.69036 5.75 7.25 6.30964 7.25 7Z" stroke="#9f9f9f" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Locked</div></>) : null}
{(v.finOngoing) ? (<><div style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: "#d7d7d7", color: "#9f9f9f", display: "flex", alignItems: "center", gap: "8px" }}><svg aria-hidden="true" width="12" height="12" viewBox="420 887 12 12" fill="none"><defs><mask id="idclockmask3_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="420" y="887" width="12" height="12"><g><g><path d="M425.25 890.5L426 893L427.75 894.75M431 893C431 895.761 428.761 898 426 898C423.239 898 421 895.761 421 893C421 890.239 423.239 888 426 888C428.761 888 431 890.239 431 893Z" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#idclockmask3_11890_43994)"><rect x="420" y="887" width="12" height="12" fill="#9F9F9F"></rect></g></svg>
Perfois analysis ongoing</div></>) : null}
{(v.finReadyTag) ? (<><div style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: "#eaeaea", color: "#575757" }}>Ready to start</div></>) : null}
{(v.finDone) ? (<><div style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: "#eaf6ea", color: "#54ac51" }}>Submitted</div></>) : null}
{' '}</div>
{' '}
<img alt="" src={img_567e0ec047} style={{ flex: "none", width: "96px", height: "96px" }} />
{' '}</div>
{' '}</div>
{' '}
{(v.hasSelfNote) ? (<>{' '}
<div role="status" style={{ background: "#e7efff", borderRadius: "8px", padding: "12px 16px", color: "#072447" }}>{v.selfNote}</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", justifyContent: "flex-end" }}>{' '}
<button disabled={v.hubSendBlocked} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", width: "200px", minWidth: "88px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: `${v.hubSendCursor}`, display: "inline-flex", alignItems: "center", justifyContent: "center", background: `${v.hubSendBg}` }}>{v.hubSendLabel}</button>
{' '}</div>
{' '}</div>
{' '}</div>
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
<textarea className="bare" aria-label="Message" rows="2" placeholder="Start typing, or tap the mic to record\u2026" value={v.draft} onChange={v.setDraft} onKeyDown={v.draftKey} style={{ font: "inherit", width: "100%", boxSizing: "border-box", height: "48px", padding: "2px 8px", border: "0", outline: "none", resize: "none", background: "transparent", color: "#072447" }}></textarea>
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
