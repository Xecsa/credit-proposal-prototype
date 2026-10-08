import React from 'react';
import ShEditIsDetails from './ShEditIsDetails.jsx';
import ShIsDetails from './ShIsDetails.jsx';
import ShIsDocs from './ShIsDocs.jsx';

export default function ShowSelfSh({ v }) {
  return (<>
{(v.showSelfSh) ? (<>{' '}
<div style={{ position: "fixed", zIndex: "31", top: "73px", left: "8px", right: "8px", bottom: "8px", borderRadius: "0 0 8px 8px", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
{(v.shIsDocs) ? (<><div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>{v.shWho}</div>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Documents upload</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>{v.shStep2}</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review</span></li></ol>
{' '}</div></>) : null}
{(v.shIsDetails) ? (<><div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>{v.shWho}</div>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Documents upload</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>{v.shStep2}</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review</span></li></ol>
{' '}</div></>) : null}
{(v.shIsReview) ? (<><div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>{v.shWho}</div>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Documents upload</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>{v.shStep2}</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Review</span></li></ol>
{' '}</div></>) : null}
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<ShIsDocs v={v} />
<ShIsDetails v={v} />
{(v.shIsReview) ? (<>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "6px" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px" }}><div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.shBack} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Review details</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>{v.shRevSub}</p></div></div>
{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>{v.shDetTitle}</h2>
<button onClick={v.shEditDetails} aria-label={`Edit ${v.shDetTitle}`} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", color: "#2765ff", cursor: "pointer" }}>Edit</button></div>
{' '}
<div role="table" aria-label="Stakeholder details" style={{ border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", padding: "0 16px" }}>{' '}
<div role="row" style={{ boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Title</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.title}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Full name</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.name}</span></div>
{' '}
{(v.shShowRole) ? (<><div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Role</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.role}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Ownership of {'{'}Company_name{'}'}</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>50%</span></div></>) : null}
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Nationality</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.nat}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Email</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.email}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Mobile</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.mobile}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Member of ruling family?</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.ruling}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Authorized signatory?</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.sign}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 15px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Authorized borrower?</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.shV.borrow}</span></div>
{' '}</div>
{' '}</section>
{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Emirates ID details</h2>
<button onClick={v.shEditEid} aria-label="Edit Emirates ID details" style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", color: "#2765ff", cursor: "pointer" }}>Edit</button></div>
{' '}
<div role="table" aria-label="Emirates ID details" style={{ border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", padding: "0 16px" }}>{' '}
<div role="row" style={{ boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Emirates ID front</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#182f7c" }}>Emirates-ID_front.jpeg</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Emirates ID back</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#182f7c" }}>Emirates-ID_back.jpeg</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>ID Number</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.mf.eidNo}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Issue date</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.mf.eidIssue}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 15px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Expiry date</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.mf.eidExpiry}</span></div>
{' '}</div>
{' '}</section>
{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Passport details</h2>
<button onClick={v.shEditPass} aria-label="Edit Passport details" style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", color: "#2765ff", cursor: "pointer" }}>Edit</button></div>
{' '}
<div role="table" aria-label="Passport details" style={{ border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", padding: "0 16px" }}>{' '}
<div role="row" style={{ boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Document</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#182f7c" }}>passport.jpeg</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Passport number</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>A1234567</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Expiry date</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>17 April 2025</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Issue date</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>18 April 2035</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Date of birth</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>15 May 1978</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 15px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Gender</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>Male</span></div>
{' '}</div>
{' '}</section>
{' '}
<div style={{ paddingTop: "16px", display: "flex", justifyContent: "flex-end" }}><button onClick={v.shSave} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Save and continue</button></div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}
{(v.shUploading) ? (<>{' '}
<div role="status" aria-label="Uploading 3 documents" style={{ position: "fixed", right: "48px", bottom: "0", zIndex: "9", width: "312px", maxWidth: "calc(100% - 32px)", background: "#ffffff", boxShadow: "0 4px 4px rgba(0,0,0,0.02)" }}>{' '}
<div style={{ height: "48px", boxSizing: "border-box", padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}><span style={{ flex: "1", fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Company Documents</span>
<span aria-hidden="true" style={{ display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 11.33L8 5.33L2 11.33" stroke="#072447" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></div>
{' '}
<div style={{ background: "#f4f7fe", padding: "16px", display: "flex", alignItems: "center", gap: "8px", lineHeight: "16px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM10.35 6.52C10.09 6.60 9.94 6.87 10.02 7.14L11.52 12.14L11.55 12.26L15.14 15.85C15.34 16.04 15.65 16.04 15.85 15.85C16.04 15.65 16.04 15.34 15.85 15.14L12.44 11.73L10.97 6.85C10.89 6.59 10.62 6.44 10.35 6.52Z" fill="#182f7c"></path></svg>
<span style={{ fontWeight: "500", color: "#000000" }}>3</span>
<span style={{ marginLeft: "-4px", color: "#575757" }}>Uploading</span></div>
{' '}
<div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<div style={{ height: "64px", boxSizing: "border-box", padding: "10px 24px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px" }}>{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" className="spin" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#e8e8e8"></rect>
<path d="M12 0.5C13.89 0.50 15.75 0.96 17.42 1.85C19.08 2.74 20.51 4.03 21.56 5.61C22.61 7.18 23.25 8.99 23.44 10.87C23.63 12.75 23.34 14.65 22.62 16.40C21.90 18.14 20.75 19.68 19.29 20.88C17.83 22.08 16.09 22.91 14.24 23.27C12.38 23.64 10.47 23.55 8.66 23.00C6.85 22.45 5.20 21.46 3.86 20.13" stroke="#182f7c"></path></svg></span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>{' '}
<div style={{ fontWeight: "500", lineHeight: "20px", color: "#000000" }}>EmiratesIDfront.png</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><div style={{ lineHeight: "16px", color: "#575757", whiteSpace: "nowrap", overflow: "hidden" }}>3.00 MB: Upload in progress</div>
{' '}
<div aria-hidden="true" style={{ height: "2px", background: "#ffffff" }}><div style={{ width: "25%", height: "2px", background: "#6284f2" }}></div></div></div>
{' '}</div>
{' '}
<span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.66 2.33L2.33 13.66M2.33 2.33L13.66 13.66" stroke="#182f7c" strokeLinecap="round"></path></svg></span>
{' '}</div>
<div style={{ height: "64px", boxSizing: "border-box", padding: "10px 24px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px" }}>{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" className="spin" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#e8e8e8"></rect>
<path d="M12 0.5C13.89 0.50 15.75 0.96 17.42 1.85C19.08 2.74 20.51 4.03 21.56 5.61C22.61 7.18 23.25 8.99 23.44 10.87C23.63 12.75 23.34 14.65 22.62 16.40C21.90 18.14 20.75 19.68 19.29 20.88C17.83 22.08 16.09 22.91 14.24 23.27C12.38 23.64 10.47 23.55 8.66 23.00C6.85 22.45 5.20 21.46 3.86 20.13" stroke="#182f7c"></path></svg></span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>{' '}
<div style={{ fontWeight: "500", lineHeight: "20px", color: "#000000" }}>EmiratesIDback.png</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><div style={{ lineHeight: "16px", color: "#575757", whiteSpace: "nowrap", overflow: "hidden" }}>3.00 MB: Upload in progress</div>
{' '}
<div aria-hidden="true" style={{ height: "2px", background: "#ffffff" }}><div style={{ width: "25%", height: "2px", background: "#6284f2" }}></div></div></div>
{' '}</div>
{' '}
<span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.66 2.33L2.33 13.66M2.33 2.33L13.66 13.66" stroke="#182f7c" strokeLinecap="round"></path></svg></span>
{' '}</div>
<div style={{ height: "64px", boxSizing: "border-box", padding: "10px 24px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px" }}>{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" className="spin" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#e8e8e8"></rect>
<path d="M12 0.5C13.89 0.50 15.75 0.96 17.42 1.85C19.08 2.74 20.51 4.03 21.56 5.61C22.61 7.18 23.25 8.99 23.44 10.87C23.63 12.75 23.34 14.65 22.62 16.40C21.90 18.14 20.75 19.68 19.29 20.88C17.83 22.08 16.09 22.91 14.24 23.27C12.38 23.64 10.47 23.55 8.66 23.00C6.85 22.45 5.20 21.46 3.86 20.13" stroke="#182f7c"></path></svg></span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>{' '}
<div style={{ fontWeight: "500", lineHeight: "20px", color: "#000000" }}>Passport.pdf</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><div style={{ lineHeight: "16px", color: "#575757", whiteSpace: "nowrap", overflow: "hidden" }}>3.00 MB: Upload in progress</div>
{' '}
<div aria-hidden="true" style={{ height: "2px", background: "#ffffff" }}><div style={{ width: "25%", height: "2px", background: "#6284f2" }}></div></div></div>
{' '}</div>
{' '}
<span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.66 2.33L2.33 13.66M2.33 2.33L13.66 13.66" stroke="#182f7c" strokeLinecap="round"></path></svg></span>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
<ShEditIsDetails v={v} />
{' '}
{(v.shEditIsEid) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", justifyContent: "center", alignItems: "center", padding: "18px 16px", boxSizing: "border-box", overflowY: "auto" }}>{' '}
<button onClick={v.shEditClose} aria-label="Close" tabIndex="-1" style={{ position: "fixed", inset: "0", border: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-modal="true" aria-labelledby="sh-m2" style={{ position: "relative", width: "100%", maxWidth: "648px", maxHeight: "100%", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ flex: "none", padding: "24px 32px 15px", borderBottom: "1px solid #d7dae5", display: "flex", alignItems: "center", gap: "24px" }}><h2 id="sh-m2" style={{ flex: "1", minWidth: "0", margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Emirates ID details</h2>
<button onClick={v.shEditClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ flex: "none", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="eid-no" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Emirates ID number</label>
<input id="eid-no" type="text" autoComplete="off" placeholder="" value={v.mf.eidNo} onChange={v.mfSet.eidNo} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}><div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="eid-issue" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Issue date</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", padding: "0 16px", gap: "12px" }}><input id="eid-issue" className="bare" type="text" inputMode="numeric" autoComplete="off" value={v.mf.eidIssue} onChange={v.mfSet.eidIssue} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div></div>
{' '}
<div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="eid-exp" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Expiry date</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", padding: "0 16px", gap: "12px" }}><input id="eid-exp" className="bare" type="text" inputMode="numeric" autoComplete="off" value={v.mf.eidExpiry} onChange={v.mfSet.eidExpiry} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div></div>
{' '}</div></div>
{' '}
<div style={{ flex: "none", padding: "23px 32px 24px", borderTop: "1px solid #d7dae5", display: "flex", justifyContent: "flex-end" }}>{' '}
<button onClick={v.shEditClose} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Save</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.shEditIsPass) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", justifyContent: "center", alignItems: "center", padding: "18px 16px", boxSizing: "border-box", overflowY: "auto" }}>{' '}
<button onClick={v.shEditClose} aria-label="Close" tabIndex="-1" style={{ position: "fixed", inset: "0", border: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-modal="true" aria-labelledby="sh-m3" style={{ position: "relative", width: "100%", maxWidth: "648px", maxHeight: "100%", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ flex: "none", padding: "24px 32px 15px", borderBottom: "1px solid #d7dae5", display: "flex", alignItems: "center", gap: "24px" }}><h2 id="sh-m3" style={{ flex: "1", minWidth: "0", margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Passport details</h2>
<button onClick={v.shEditClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ flex: "1", minHeight: "0", overflowY: "auto", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ flex: "none", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="pp-no" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Passport number</label>
<input id="pp-no" type="text" autoComplete="off" placeholder="" value={v.mf.ppNo} onChange={v.mfSet.ppNo} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}><div style={{ flex: "1 1 200px", minWidth: "0", position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Gender</div>
{' '}
<button className="field" onClick={v.shS.gender.toggle} aria-label="Gender" aria-haspopup="listbox" aria-expanded={v.shS.gender.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.shS.gender.line}`, borderRadius: "8px", background: "#ffffff", color: `${v.shS.gender.fg}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.shS.gender.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.shS.gender.open) ? (<>{' '}
<div role="listbox" aria-label="Gender" style={{ position: "absolute", top: "80px", left: "0", minWidth: "100%", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.shS.gender.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", whiteSpace: "nowrap", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}
<div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="pp-dob" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Date of birth</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", padding: "0 16px", gap: "12px" }}><input id="pp-dob" className="bare" type="text" inputMode="numeric" autoComplete="off" value={v.mf.ppDob} onChange={v.mfSet.ppDob} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div></div>
{' '}</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}><div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="pp-exp" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Expiry date</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", padding: "0 16px", gap: "12px" }}><input id="pp-exp" className="bare" type="text" inputMode="numeric" autoComplete="off" value={v.mf.ppExpiry} onChange={v.mfSet.ppExpiry} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div></div>
{' '}
<div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="pp-issue" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Issue date</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", padding: "0 16px", gap: "12px" }}><input id="pp-issue" className="bare" type="text" inputMode="numeric" autoComplete="off" value={v.mf.ppIssue} onChange={v.mfSet.ppIssue} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} />
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.0013 2.3335V4.3335M11.0013 2.3335V4.3335M3.66797 7.00016H5.66797M7.0013 7.00016H9.0013M10.3346 7.00016H12.3346M3.66797 9.66683H5.66797M7.0013 9.66683H9.0013M10.3346 9.66683H12.3346M4.33464 13.0002H11.668C13.1407 13.0002 14.3346 11.8063 14.3346 10.3335V5.66683C14.3346 4.19407 13.1407 3.00016 11.668 3.00016H4.33464C2.86188 3.00016 1.66797 4.19407 1.66797 5.66683V10.3335C1.66797 11.8063 2.86188 13.0002 4.33464 13.0002Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span></div></div>
{' '}</div></div>
{' '}
<div style={{ flex: "none", padding: "23px 32px 24px", borderTop: "1px solid #d7dae5", display: "flex", justifyContent: "flex-end" }}>{' '}
<button onClick={v.shEditClose} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Save</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}
  </>);
}
