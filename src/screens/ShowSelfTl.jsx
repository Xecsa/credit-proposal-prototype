import React from 'react';
import img_dfba22df25 from '../assets/dfba22df256b035f794ad91e426b177b.png';
import TlEditOpen from './TlEditOpen.jsx';

export default function ShowSelfTl({ v }) {
  return (<>
{(v.showSelfTl) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
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
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Review trade license</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Ownership &amp; shareholders</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Consent Request</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Co-borrowers</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Key management</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Bank accounts</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Contact point</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review &amp; confirm</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<button onClick={v.goSelfDocs} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
{' '}
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Review Trade license information</h1>
{' '}</div>
{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Contact information</h2>
<button onClick={v.tlContactEdit} aria-label="Edit Contact information" style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", color: "#2765ff", cursor: "pointer" }}>Edit</button></div>
{' '}
<div role="table" aria-label="Contact information" style={{ border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", padding: "0 16px" }}>{' '}
<div role="row" style={{ boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Registered email</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>orienntorg@orient.com</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 15px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Company number</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlCompanyNumber}</span></div>
{' '}</div>
{' '}</section>
{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Trade license</h2>
<button onClick={v.tlEdit} aria-label="Edit Trade license" style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", padding: "0", border: "0", borderRadius: "8px", background: "transparent", color: "#2765ff", cursor: "pointer" }}>Edit</button></div>
{' '}
<div role="table" aria-label="Trade license" style={{ border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", padding: "0 16px" }}>{' '}
<div role="row" style={{ boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Business name</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.business}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Trade license number</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.number}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Trade license document</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}><button onClick={v.tlPreview} style={{ font: "inherit", lineHeight: "16px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer" }}>TL.pdf</button></span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Issuing authority</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.issuer}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Company type</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.ctype}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Nature of business</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.nature}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Date of incorporation</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.incDate}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Country of incorporation</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.country}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Expiry date</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.expiry}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Issue date</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#000000" }}>{v.tlV.issue}</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 15px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Website</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#182f7c" }}>{v.tlV.website}</span></div>
{' '}</div>
{' '}</section>
{' '}
<div style={{ paddingTop: "16px", display: "flex", justifyContent: "flex-end" }}>{' '}
<button style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }} onClick={v.goSelfOwn}>Continue</button>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}
<TlEditOpen v={v} />
{' '}
{(v.tlContactOpen) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "136px 16px 18px", boxSizing: "border-box", overflowY: "auto" }}>{' '}
<button onClick={v.tlClose} aria-label="Close" tabIndex="-1" style={{ position: "fixed", inset: "0", border: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-modal="true" aria-labelledby="tl-contact-title" style={{ position: "relative", width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ flex: "none", padding: "24px 32px 15px", borderBottom: "1px solid #d7dae5", display: "flex", alignItems: "center", gap: "24px" }}><h2 id="tl-contact-title" style={{ flex: "1", minWidth: "0", margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Contact Information</h2>
<button onClick={v.tlClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-ct-email" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#9f9f9f" }}>Email</label>
<input id="tl-ct-email" type="text" value="orienntorg@orient.com" disabled={true} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#f9fafb", color: "#9f9f9f" }} /></div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="tl-ct-mobile" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Mobile (optional)</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center" }}><span style={{ flex: "none", alignSelf: "stretch", margin: "1px", borderRadius: "7px 0 0 7px", background: "#f4f7fe", color: "#182f7c", fontWeight: "500", width: "128px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}><span aria-hidden="true" style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="17" viewBox="750 732 24 17" fill="none"><defs><clipPath id="ictflagclip0_12301_232125"><rect width="1440" height="1121" rx="8" fill="white"></rect></clipPath>
<mask id="ictflagmask7_12301_232125" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="750" y="732" width="24" height="17"><rect x="750.25" y="732.35" width="23.5" height="16.3" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"></rect></mask></defs>
<g clipPath="url(#ictflagclip0_12301_232125)"><rect x="750.25" y="732.35" width="23.5" height="16.3" rx="1.75" fill="white" stroke="#F4F3F4" strokeWidth="0.5"></rect></g>
<g clipPath="url(#ictflagclip0_12301_232125)"><g mask="url(#ictflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M756.855 737.7H773.998V732.1H756.855V737.7Z" fill="#12833B"></path></g></g>
<g clipPath="url(#ictflagclip0_12301_232125)"><g mask="url(#ictflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M756.855 748.9H773.998V743.3H756.855V748.9Z" fill="#242424"></path></g></g>
<g clipPath="url(#ictflagclip0_12301_232125)"><g mask="url(#ictflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M750 748.9H756.857V732.1H750V748.9Z" fill="#FF323E"></path></g></g></svg></span>
+971
<span aria-hidden="true" style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="16" viewBox="826 732 24 16" fill="none"><defs><clipPath id="ictchevclip0_12301_232125"><rect width="1440" height="1121" rx="8" fill="white"></rect></clipPath></defs>
<g clipPath="url(#ictchevclip0_12301_232125)"><path d="M832 737.833L838 743.833L844 737.833" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></span>
<input id="tl-ct-mobile" className="bare" type="text" inputMode="tel" autoComplete="off" placeholder="e.g. 050 000 000" value={v.tlCtMobile} onChange={v.setTlCtMobile} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000", margin: "0 12px" }} /></div></div>
{' '}</div>
{' '}
<div style={{ flex: "none", padding: "23px 32px 24px", borderTop: "1px solid #d7dae5", display: "flex", justifyContent: "flex-end" }}>{' '}
<button onClick={v.tlContactUpdate} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", width: "200px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Update</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.tlPreviewOpen) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "82px 16px", boxSizing: "border-box", overflowY: "auto" }}>{' '}
<button onClick={v.tlClose} aria-label="Close" tabIndex="-1" style={{ position: "fixed", inset: "0", border: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-modal="true" aria-labelledby="tl-prev-title" style={{ position: "relative", width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ flex: "none", padding: "24px 32px 15px", borderBottom: "1px solid #d7dae5", display: "flex", alignItems: "center", gap: "24px" }}><h2 id="tl-prev-title" style={{ flex: "1", minWidth: "0", margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Trade license</h2>
<button onClick={v.tlClose} aria-label="Close" style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ lineHeight: "20px", color: "#000000" }}>Zenith_Tradelicense.pdf</div>
{' '}
<div style={{ position: "relative", borderRadius: "16px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}>{' '}
<img src={img_dfba22df25} alt="Trade license document: DMCC Trading License" width="584" height="824" style={{ display: "block", width: "100%", height: "auto", borderRadius: "16px" }} />
{' '}
<div aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "15px", transform: "translateX(-50%)", width: "319px", maxWidth: "calc(100% - 16px)", height: "48px", boxSizing: "border-box", padding: "0 11px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", alignItems: "center" }}>{' '}
<span style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="36 20 24 24" fill="none"><path d="M48 21.5C53.799 21.5 58.5 26.201 58.5 32C58.5 37.799 53.799 42.5 48 42.5C42.201 42.5 37.5 37.799 37.5 32C37.5 26.201 42.201 21.5 48 21.5ZM48 23.5C43.3056 23.5 39.5 27.3056 39.5 32C39.5 36.6944 43.3056 40.5 48 40.5C52.6944 40.5 56.5 36.6944 56.5 32C56.5 27.3056 52.6944 23.5 48 23.5ZM52.6426 31.5C52.8398 31.5 53 31.7239 53 32C53 32.2761 52.8398 32.5 52.6426 32.5H43.3574C43.1602 32.5 43 32.2761 43 32C43 31.7239 43.1602 31.5 43.3574 31.5H52.6426Z" fill="#182f7c"></path></svg></span>
<span style={{ width: "48px", margin: "0 12px", lineHeight: "20px", color: "#000000" }}>100%</span>
<span style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="132 20 24 24" fill="none"><path d="M153.5 32C153.5 37.2467 149.247 41.5 144 41.5C138.753 41.5 134.5 37.2467 134.5 32C134.5 26.7533 138.753 22.5 144 22.5C149.247 22.5 153.5 26.7533 153.5 32Z" stroke="#182f7c"></path>
<path d="M144.001 26.3431V32M144.001 32V37.6569M144.001 32H138.344M144.001 32H149.657" stroke="#182f7c" strokeLinecap="round"></path></svg></span>
{' '}
<span style={{ width: "1px", height: "32px", margin: "0 16px 0 15px", background: "#d7dae5" }}></span>
{' '}
<span style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="188 20 24 24" fill="none"><path d="M209 37L200 28L191 37" stroke="#a3accb" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
<span style={{ width: "28px", marginLeft: "8px", textAlign: "center", lineHeight: "20px", color: "#000000" }}>1</span>
<span style={{ width: "13px", margin: "0 5px", lineHeight: "20px", color: "#000000" }}>of</span>
<span style={{ width: "28px", marginRight: "8px", textAlign: "center", lineHeight: "20px", color: "#000000" }}>1</span>
<span style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="307 20 24 24" fill="none"><path d="M310 28L319 37L328 28" stroke="#a3accb" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}
  </>);
}
