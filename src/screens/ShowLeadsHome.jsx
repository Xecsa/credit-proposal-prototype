import React from 'react';
import img_ac82201241 from '../assets/ac82201241fa083b5c835e1c0d63652e.svg';

export default function ShowLeadsHome({ v }) {
  return (<>
{(v.showLeadsHome) ? (<>{' '}
<div className="ldshell"><header className="ldhead"><div style={{ display: "flex", alignItems: "center", gap: "24px" }}><button type="button" className="ldicon" aria-label="Menu"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
<img alt="Emirates NBD" src={img_ac82201241} style={{ height: "36px", width: "auto", display: "block" }} /></div>
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}><button type="button" className="ldicon" aria-label="Search"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6.5"></circle>
<path d="m16 16 4.5 4.5"></path></svg></button>
<button type="button" className="ldicon" aria-label="Notifications"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15Z"></path>
<path d="M10 20a2 2 0 0 0 4 0"></path></svg></button>
<span className="ldme" aria-label="Signed in as relationship manager">RM</span></div></header>
<div className="ldbody"><nav className="ldrail" aria-label="Main"><div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"></circle>
<path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17"></path></svg>
<span>P360</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3.5" width="12" height="15" rx="1.5"></rect>
<path d="M8 8h6M8 11h4"></path>
<circle cx="16.5" cy="16.5" r="3"></circle>
<path d="m18.7 18.7 1.8 1.8"></path></svg>
<span>Customer List</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="3"></circle>
<circle cx="16.5" cy="10" r="2.3"></circle>
<path d="M3.5 18.5c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5M14.5 14.3c2.6-.4 5 .9 5.8 4.2"></path></svg>
<span>C360</span></div>
<div className="ldrail-i on" aria-current="page"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7M3 20h18"></path></svg>
<span>Leads</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"></rect>
<path d="M4 9.5h16M8 3v4M16 3v4M8 13h2M12 13h2M16 13h0M8 16.5h2M12 16.5h2"></path></svg>
<span>Calendar</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v5.5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6Z"></path>
<path d="m9 12 2 2 4-4"></path></svg>
<span>KYC Reviews</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3.8 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8Z"></path></svg>
<span>Trade deals</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"></circle>
<path d="M14.5 9.2c-.5-.9-1.4-1.4-2.5-1.4-1.5 0-2.6.8-2.6 2s1.1 1.7 2.6 2c1.5.3 2.7.9 2.7 2.1s-1.2 2-2.7 2c-1.2 0-2.2-.6-2.6-1.5M12 6.2v1.6M12 16.2v1.6"></path></svg>
<span>Transaction Reviews</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect>
<path d="M8 16v-4M12 16V8M16 16v-6"></path></svg>
<span>Assets</span></div>
<div className="ldrail-i"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5A.5.5 0 0 1 6.5 20V4a.5.5 0 0 1 .5-.5Z"></path>
<path d="M14 3.5V8h4"></path></svg>
<span>Document Hub</span></div></nav>
<aside className="ldsub" aria-label="Client"><div className="ldsub-head"><span className="ldsub-ic"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="16.5" rx="1"></rect>
<path d="M8.5 8h1.5M8.5 11.5h1.5M8.5 15h1.5M14 8h1.5M14 11.5h1.5M14 15h1.5M10.5 20.5v-3h3v3"></path></svg></span>
<div className="ldsub-n">Orient Insurance</div>
<div className="ldsub-c">CIF: 12312641
<br />
Open on 15th March 2024</div></div>
<nav><div className="ldsub-i">Overview</div>
<div className="ldsub-i">Balances</div>
<div className="ldsub-i">Incomes</div>
<div className="ldsub-i">Limits</div>
<div className="ldsub-i">Profile</div>
<div className="ldsub-i on">Leads and Insights</div></nav></aside>
<main className="ldmain"><button type="button" className="ldback"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6 9 12l6 6"></path></svg>
To lead dashboard</button>
<div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "16px" }}><h1 className="ldh1">Leads and insights</h1>
<span style={{ color: "#575757", display: "inline-flex", alignItems: "center", gap: "6px" }}>Text
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg></span></div>
<div role="tablist" className="ldtabs">{(v.ldTabs || []).map((tb, tb__i) => (<React.Fragment key={tb__i}><button type="button" role="tab" aria-selected={tb.sel} className="ldtab" onClick={tb.pick} style={{ borderBottomColor: `${tb.line}`, color: `${tb.fg}` }}>{tb.t}</button></React.Fragment>))}</div>
{(v.ldTabOverview) ? (<><div className="ldsec-h"><h2 className="ldh2">{v.ldActiveTitle}</h2>
<div style={{ display: "flex", gap: "8px" }}><button type="button" className="ldround" aria-label="Log a call"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8.6 4.5 6.4 4.1a1.6 1.6 0 0 0-1.7 1C4 7.6 4.6 12 8.3 15.7s8.1 4.3 10.6 3.6a1.6 1.6 0 0 0 1-1.7l-.4-2.2a1 1 0 0 0-.9-.8l-2.7-.3a1 1 0 0 0-.9.4l-1 1.3a10 10 0 0 1-4.5-4.5l1.3-1a1 1 0 0 0 .4-.9l-.3-2.7a1 1 0 0 0-.8-.9Z"></path>
<path d="M14.5 4.5a5 5 0 0 1 5 5M14.5 7.5a2 2 0 0 1 2 2"></path></svg></button>
<button type="button" className="ldround" aria-label="Send an email"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"></rect>
<path d="m4 7 8 6 8-6"></path></svg></button>
<button type="button" className="ldround" aria-label="More actions"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="#182f7c"><circle cx="12" cy="5" r="1.6"></circle>
<circle cx="12" cy="12" r="1.6"></circle>
<circle cx="12" cy="19" r="1.6"></circle></svg></button></div></div>
<div className="ldgrid">{(v.ldActive || []).map((c, c__i) => (<React.Fragment key={c__i}><div className="ldcard" role="group" aria-label={`${c.title} lead`}><div className="ldcard-top"><div style={{ display: "flex", gap: "8px" }}>{(c.chips || []).map((ch, ch__i) => (<React.Fragment key={ch__i}><span className="ldchip">{ch.t}</span></React.Fragment>))}</div>
<button type="button" className="ldlink" onClick={c.view} aria-label={`View ${c.title} lead`}>View</button></div>
<button type="button" className="ldcard-main" onClick={c.open} aria-label={c.openLabel}><span className="ldcard-title">{c.title}</span>
<span className="ldcard-date">{c.date}{' '}
<span style={{ color: "#575757" }}>{c.follow}</span></span></button>
<div className="ldcard-mid"><span className="ldstatus" style={{ background: `${c.sBg}`, color: `${c.sFg}` }}>{c.status}
<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg></span>
<span className="ldav">{(c.avs || []).map((av, av__i) => (<React.Fragment key={av__i}><span className="ldav-i" style={{ background: `${av.bg}` }}>{av.t}</span></React.Fragment>))}</span></div>
<div className="ldrat"><b>Rationale</b>
{(c.isText) ? (<><p>{c.rat}</p></>) : null}
{(c.isTxn) ? (<><p>Avg. transaction: 17 days
<br />
<span style={{ color: "#b00000" }}>Last transaction: 31 days ago</span></p></>) : null}</div>
<div className="ldcard-foot"><div style={{ display: "flex", gap: "8px" }}>{(c.tags || []).map((tg, tg__i) => (<React.Fragment key={tg__i}><span className="ldtag">{tg.t}</span></React.Fragment>))}</div>
<div style={{ display: "flex", gap: "8px" }}><button type="button" className="ldround" onClick={c.call} aria-label={`Log a call for ${c.title}`}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8.6 4.5 6.4 4.1a1.6 1.6 0 0 0-1.7 1C4 7.6 4.6 12 8.3 15.7s8.1 4.3 10.6 3.6a1.6 1.6 0 0 0 1-1.7l-.4-2.2a1 1 0 0 0-.9-.8l-2.7-.3a1 1 0 0 0-.9.4l-1 1.3a10 10 0 0 1-4.5-4.5l1.3-1a1 1 0 0 0 .4-.9l-.3-2.7a1 1 0 0 0-.8-.9Z"></path>
<path d="M14.5 4.5a5 5 0 0 1 5 5M14.5 7.5a2 2 0 0 1 2 2"></path></svg></button>
<button type="button" className="ldround" aria-label={`Email about ${c.title}`}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"></rect>
<path d="m4 7 8 6 8-6"></path></svg></button>
<button type="button" className="ldround" aria-label={`More actions for ${c.title}`}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="#182f7c"><circle cx="12" cy="5" r="1.6"></circle>
<circle cx="12" cy="12" r="1.6"></circle>
<circle cx="12" cy="19" r="1.6"></circle></svg></button></div></div></div></React.Fragment>))}</div>
<div style={{ marginTop: "56px" }}><h2 className="ldh2">Leads with others</h2>
<p style={{ margin: "4px 0 24px", color: "#575757" }}>These leads will not be actionable till they come back into your queue</p></div>
<div className="ldgrid">{(v.ldOthers || []).map((c, c__i) => (<React.Fragment key={c__i}><div className="ldcard ldcard-other" role="group" aria-label={`${c.title} lead`}><div className="ldcard-top"><div style={{ display: "flex", gap: "8px" }}>{(c.chips || []).map((ch, ch__i) => (<React.Fragment key={ch__i}><span className="ldchip">{ch.t}</span></React.Fragment>))}</div>
<button type="button" className="ldlink" onClick={c.view} aria-label={`View ${c.title} lead`}>View</button></div>
<button type="button" className="ldcard-main" onClick={c.open} aria-label={c.openLabel}><span className="ldcard-title">{c.title}</span>
<span className="ldcard-date">{c.date}{' '}
<span style={{ color: "#575757" }}>{c.follow}</span></span></button>
<div className="ldcard-mid"><span className="ldstatus" style={{ background: `${c.sBg}`, color: `${c.sFg}` }}>{c.status}
<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg></span>
<span className="ldav">{(c.avs || []).map((av, av__i) => (<React.Fragment key={av__i}><span className="ldav-i" style={{ background: `${av.bg}` }}>{av.t}</span></React.Fragment>))}</span></div>
<div className="ldrat"><b>Rationale</b>
{(c.isText) ? (<><p>{c.rat}</p></>) : null}
{(c.isTxn) ? (<><p>Avg. transaction: 17 days
<br />
<span style={{ color: "#b00000" }}>Last transaction: 31 days ago</span></p></>) : null}</div>
<div className="ldcard-foot"><div style={{ display: "flex", gap: "8px" }}>{(c.tags || []).map((tg, tg__i) => (<React.Fragment key={tg__i}><span className="ldtag">{tg.t}</span></React.Fragment>))}</div>
<div style={{ display: "flex", gap: "8px" }}><button type="button" className="ldround" onClick={c.call} aria-label={`Log a call for ${c.title}`}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8.6 4.5 6.4 4.1a1.6 1.6 0 0 0-1.7 1C4 7.6 4.6 12 8.3 15.7s8.1 4.3 10.6 3.6a1.6 1.6 0 0 0 1-1.7l-.4-2.2a1 1 0 0 0-.9-.8l-2.7-.3a1 1 0 0 0-.9.4l-1 1.3a10 10 0 0 1-4.5-4.5l1.3-1a1 1 0 0 0 .4-.9l-.3-2.7a1 1 0 0 0-.8-.9Z"></path>
<path d="M14.5 4.5a5 5 0 0 1 5 5M14.5 7.5a2 2 0 0 1 2 2"></path></svg></button>
<button type="button" className="ldround" aria-label={`Email about ${c.title}`}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"></rect>
<path d="m4 7 8 6 8-6"></path></svg></button>
<button type="button" className="ldround" aria-label={`More actions for ${c.title}`}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="#182f7c"><circle cx="12" cy="5" r="1.6"></circle>
<circle cx="12" cy="12" r="1.6"></circle>
<circle cx="12" cy="19" r="1.6"></circle></svg></button></div></div></div></React.Fragment>))}</div></>) : null}
{(v.ldTabMetrics) ? (<><div className="ldsec-h"><div><h2 className="ldh2">Performance metrics</h2>
<p style={{ margin: "4px 0 0", color: "#575757" }}>Data as of April 1, 2025 of monthly averages</p></div></div>
<div className="ldmetrics"><div className="ldmetric"><div className="ldmetric-l">Total Inflow</div>
<div className="ldmetric-v">200,000 AED</div>
<div className="ldmetric-d" style={{ color: "#2c836e" }}>+ 23% from last year</div></div>
<div className="ldmetric"><div className="ldmetric-l">Total Outflow</div>
<div className="ldmetric-v">300,000 AED</div>
<div className="ldmetric-d" style={{ color: "#b00000" }}>- 12% from last year</div></div>
<div className="ldmetric"><div className="ldmetric-l">Total NFI</div>
<div className="ldmetric-v">100,000 AED</div>
<div className="ldmetric-d" style={{ color: "#b00000" }}>- 6% from last year</div></div>
<div className="ldmetric"><div className="ldmetric-l">Average CASA</div>
<div className="ldmetric-v">100,000 AED</div>
<div className="ldmetric-d" style={{ color: "#b00000" }}>- 6% from last year</div></div></div></>) : null}
{(v.ldTabTx) ? (<><div className="ldsec-h"><div><h2 className="ldh2">Products &amp; channel usage insights</h2>
<p style={{ margin: "4px 0 0", color: "#575757" }}>As of Apr 1, 2025</p></div></div>
<div className="ldtxwrap"><table className="ldtx"><thead><tr><th>Product</th>
<th>Currency accounts</th>
<th>Cash management</th>
<th>Trade services</th>
<th>Channel usage</th>
<th>FX</th></tr></thead>
<tbody><tr><td>Active</td>
<td>$ USD, £ GBP, AED</td>
<td>VAT, Credit Card, Debit Card</td>
<td>Import LC, Export Collections, FX, Guarantee, Export LC</td>
<td>Branch, CDM, Online, ATM</td>
<td>Yes</td></tr>
<tr><td>Inactive</td>
<td>£ EUR</td>
<td>Salary, POS</td>
<td>Export LC, Export collections, Guarantee</td>
<td>-</td>
<td>-</td></tr></tbody></table></div></>) : null}</main></div>
{(v.ldToast) ? (<><div role="status" className="ldtoast"><span className="ldtoast-ic"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg></span>
<span style={{ flex: "1" }}>Call report created, and Lead closed</span>
<button type="button" className="ldicon" aria-label="Dismiss" onClick={v.ldToastClose}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182f7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18"></path></svg></button></div></>) : null}</div>
{' '}</>) : null}
  </>);
}
