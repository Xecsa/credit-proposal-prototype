import React from 'react';

export default function TlEditOpen({ v }) {
  return (<>
{(v.tlEditOpen) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "18px 16px", boxSizing: "border-box", overflowY: "auto" }}>{' '}
<button onClick={v.tlClose} aria-label="Close" tabIndex="-1" style={{ position: "fixed", inset: "0", border: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-modal="true" aria-labelledby="tl-edit-title" style={{ position: "relative", width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", maxHeight: "100%" }}>{' '}
<div style={{ flex: "none", padding: "24px 32px 15px", borderBottom: "1px solid #d7dae5", display: "flex", alignItems: "center", gap: "24px" }}><h2 id="tl-edit-title" style={{ flex: "1", minWidth: "0", margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Trade license information</h2>
<button onClick={v.tlClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-business" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Business name</label>
<input id="tl-business" type="text" autoComplete="off" value={v.tlF.business} onChange={v.tlSet.business} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-number" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Trade license number</label>
<input id="tl-number" type="text" autoComplete="off" value={v.tlF.number} onChange={v.tlSet.number} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Issuing authority</div>
{' '}
<button className="field" onClick={v.tlS.issuer.toggle} aria-label="Issuing authority" aria-haspopup="listbox" aria-expanded={v.tlS.issuer.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.tlS.issuer.line}`, borderRadius: "8px", background: "#ffffff", color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.tlS.issuer.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#a3accb" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.tlS.issuer.open) ? (<>{' '}
<div role="listbox" aria-label="Issuing authority" style={{ position: "absolute", top: "80px", left: "0", right: "0", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.tlS.issuer.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}
<div style={{ position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Company type</div>
{' '}
<button className="field" onClick={v.tlS.ctype.toggle} aria-label="Company type" aria-haspopup="listbox" aria-expanded={v.tlS.ctype.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.tlS.ctype.line}`, borderRadius: "8px", background: "#ffffff", color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.tlS.ctype.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#a3accb" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.tlS.ctype.open) ? (<>{' '}
<div role="listbox" aria-label="Company type" style={{ position: "absolute", top: "80px", left: "0", right: "0", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.tlS.ctype.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}
<div style={{ position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Nature of business</div>
{' '}
<button className="field" onClick={v.tlS.nature.toggle} aria-label="Nature of business" aria-haspopup="listbox" aria-expanded={v.tlS.nature.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.tlS.nature.line}`, borderRadius: "8px", background: "#ffffff", color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.tlS.nature.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#a3accb" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.tlS.nature.open) ? (<>{' '}
<div role="listbox" aria-label="Nature of business" style={{ position: "absolute", top: "80px", left: "0", right: "0", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.tlS.nature.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-incDate" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Date of incorporation</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", padding: "0 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<input id="tl-incDate" className="bare" type="text" inputMode="numeric" autoComplete="off" aria-describedby="tl-incDate-help" value={v.tlF.incDate} onChange={v.tlSet.incDate} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div>
{' '}
<div id="tl-incDate-help" style={{ paddingTop: "4px", fontSize: "12px", lineHeight: "14px", color: "#575757" }}>Enter the date as DD/MM/YYYY</div></div>
{' '}
<div style={{ position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Country of incorporation</div>
{' '}
<button className="field" onClick={v.tlS.country.toggle} aria-label="Country of incorporation" aria-haspopup="listbox" aria-expanded={v.tlS.country.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.tlS.country.line}`, borderRadius: "8px", background: "#ffffff", color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><defs><clipPath id="tlflagclip"><rect y="2.4" width="16" height="11.2" rx="2"></rect></clipPath></defs>
<g clipPath="url(#tlflagclip)"><rect y="2.4" width="16" height="3.74" fill="#00843d"></rect>
<rect y="6.13" width="16" height="3.74" fill="#ffffff"></rect>
<rect y="9.86" width="16" height="3.74" fill="#000000"></rect>
<rect y="2.4" width="4.57" height="11.2" fill="#ff323e"></rect></g>
<rect x="0.25" y="2.65" width="15.5" height="10.7" rx="1.75" stroke="#000000" strokeOpacity="0.12" strokeWidth="0.5"></rect></svg></span>
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.tlS.country.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#a3accb" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.tlS.country.open) ? (<>{' '}
<div role="listbox" aria-label="Country of incorporation" style={{ position: "absolute", top: "80px", left: "0", right: "0", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.tlS.country.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-expiry" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Expiry date</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", padding: "0 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<input id="tl-expiry" className="bare" type="text" inputMode="numeric" autoComplete="off" aria-describedby="tl-expiry-help" value={v.tlF.expiry} onChange={v.tlSet.expiry} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div>
{' '}
<div id="tl-expiry-help" style={{ paddingTop: "4px", fontSize: "12px", lineHeight: "14px", color: "#575757" }}>Enter the date as DD/MM/YYYY</div></div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-issue" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Issue date</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", padding: "0 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<input id="tl-issue" className="bare" type="text" inputMode="numeric" autoComplete="off" aria-describedby="tl-issue-help" value={v.tlF.issue} onChange={v.tlSet.issue} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div>
{' '}
<div id="tl-issue-help" style={{ paddingTop: "4px", fontSize: "12px", lineHeight: "14px", color: "#575757" }}>Enter the date as DD/MM/YYYY</div></div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-website" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Website (optional)</label>
<input id="tl-website" type="text" autoComplete="off" value={v.tlF.website} onChange={v.tlSet.website} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}</div>
{' '}
<div style={{ flex: "none", padding: "23px 32px 24px", borderTop: "1px solid #d7dae5", display: "flex", justifyContent: "flex-end" }}>{' '}
<button onClick={v.tlUpdate} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Update</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
