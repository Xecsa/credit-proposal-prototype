import React from 'react';

export default function ShowSelfCp({ v }) {
  return (<>
{(v.showSelfCp) ? (<>{' '}
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
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Bank accounts</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Contact point</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review &amp; confirm</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goSelfBank} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Select contact points</h1></div>
{' '}
<button onClick={v.cpAdd} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", whiteSpace: "nowrap", padding: "12px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer", width: "186px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="480.5 435.5 24 24" fill="none"><defs><clipPath id="iplusclip0_12301_232125"><rect width="1504" height="1208" fill="white"></rect></clipPath>
<mask id="iplusmask1_12301_232125" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="480" y="435" width="25" height="25"><g><g><path d="M492.5 438V457M483 447.5H502" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g clipPath="url(#iplusclip0_12301_232125)"><g mask="url(#iplusmask1_12301_232125)"><rect x="480.5" y="435.5" width="24" height="24" fill="#182F7C"></rect></g></g></svg>
Add contact point</button>
{' '}
{(v.cpHas) ? (<>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447", opacity: "0.9" }}>Added contact points</h2>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
{(v.cpRows || []).map((cr, cr__i) => (<React.Fragment key={cr__i}>{' '}
<div style={{ position: "relative" }}><div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>{cr.initials}</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>{cr.name}</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>{cr.rel}</div></div>
<button onClick={cr.toggle} aria-label={cr.menuLabel} aria-haspopup="menu" aria-expanded={cr.expanded} style={{ flex: "none", width: "24px", height: "40px", padding: "8px 0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "flex-start", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.5 4C13.5 4.82 12.82 5.5 12 5.5C11.17 5.5 10.5 4.82 10.5 4C10.5 3.17 11.17 2.5 12 2.5C12.82 2.5 13.5 3.17 13.5 4ZM13.5 12C13.5 12.82 12.82 13.5 12 13.5C11.17 13.5 10.5 12.82 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.82 10.5 13.5 11.17 13.5 12ZM13.5 20C13.5 20.82 12.82 21.5 12 21.5C11.17 21.5 10.5 20.82 10.5 20C10.5 19.17 11.17 18.5 12 18.5C12.82 18.5 13.5 19.17 13.5 20Z" fill="#182f7c" stroke="#182f7c"></path></svg></button></div>
{' '}
{(cr.open) ? (<>{' '}
<div role="menu" style={{ position: "absolute", top: "52px", left: "calc(100% - 40px)", zIndex: "3", width: "209px", background: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}>{' '}
<button role="menuitem" onClick={cr.edit} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="1008 507 24 24" fill="none"><defs><clipPath id="ieditclip1_12301_232125"><rect x="992" y="495" width="209" height="96" rx="8" fill="white"></rect></clipPath></defs>
<g clipPath="url(#ieditclip1_12301_232125)"><path d="M1020.88 512.601C1020.88 512.601 1020.88 514.44 1022.72 516.279C1024.56 518.118 1026.4 518.118 1026.4 518.118M1012.48 527.987L1016.35 527.435C1016.9 527.355 1017.42 527.097 1017.82 526.699L1028.24 516.279C1029.25 515.263 1029.25 513.616 1028.24 512.601L1026.4 510.762C1025.38 509.746 1023.74 509.746 1022.72 510.762L1012.3 521.182C1011.9 521.58 1011.64 522.097 1011.57 522.654L1011.01 526.515C1010.89 527.374 1011.63 528.109 1012.48 527.987Z" stroke="#182F7C" strokeLinecap="round"></path></g></svg>
Edit</button>
{' '}
<button role="menuitem" onClick={cr.del} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#b00000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 8.5V17.5C18.5 19.70 16.70 21.5 14.5 21.5H9.5C7.29 21.5 5.5 19.70 5.5 17.5V8.5M18.5 8.5H19C19.82 8.5 20.5 7.82 20.5 7C20.5 6.17 19.82 5.5 19 5.5H16.5M18.5 8.5H5.5M5.5 8.5H5C4.17 8.5 3.5 7.82 3.5 7C3.5 6.17 4.17 5.5 5 5.5H7.5M7.5 5.5H16.5M7.5 5.5C7.5 3.84 8.84 2.5 10.5 2.5H13.5C15.15 2.5 16.5 3.84 16.5 5.5M8.5 11.5V17.5M12 11.5V17.5M15.5 11.5V17.5" stroke="#9d0000" strokeLinecap="round"></path></svg>
Delete</button>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447", opacity: "0.9" }}>Suggested</h2>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>AA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Ahmed Al-Hassan</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder of Orient Insurance - individual</div></div>
<span style={{ alignSelf: "center", display: "flex" }}><button role="checkbox" aria-checked={v.cpSug.a.on} aria-label="Select Ahmed Al-Hassan as contact point" onClick={v.cpSug.a.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(v.cpSug.a.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(v.cpSug.a.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button></span></div>
<div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>FA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Fatima Ahmed Ali</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder of Orient Insurance - individual</div></div>
<span style={{ alignSelf: "center", display: "flex" }}><button role="checkbox" aria-checked={v.cpSug.b.on} aria-label="Select Fatima Ahmed Ali as contact point" onClick={v.cpSug.b.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(v.cpSug.b.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(v.cpSug.b.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button></span></div>
<div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>MH</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Mostafa Hamed</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder of Orient Insurance - individual</div></div>
<span style={{ alignSelf: "center", display: "flex" }}><button role="checkbox" aria-checked={v.cpSug.c.on} aria-label="Select Mostafa Hamed as contact point" onClick={v.cpSug.c.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(v.cpSug.c.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(v.cpSug.c.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button></span></div></div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button onClick={v.goSelfReview} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Continue</button></div>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}
{(v.cpDelOpen) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>{' '}
<div role="dialog" aria-modal="true" aria-labelledby="cp-del-title" style={{ width: "100%", maxWidth: "442px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "32px", display: "flex", flexDirection: "column", gap: "4px", textAlign: "center" }}>{' '}
<div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={v.cpDelCancel} aria-label="Close" style={{ width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div id="cp-del-title" style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500", color: "#575757", overflowWrap: "anywhere" }}>Delete “{v.cpDelName}”?</div>
{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", color: "#575757" }}>This will delete this record and all its details</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>{' '}
<button onClick={v.cpDelCancel} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "120px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer" }}>Cancel</button>
{' '}
<button onClick={v.cpDelYes} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "120px", border: "0", background: "#b00000", color: "#ffffff", cursor: "pointer" }}>Yes</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}</div>
{' '}</>) : null}
  </>);
}
