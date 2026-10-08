import React from 'react';

export default function ShowSelfFacility({ v }) {
  return (<>
{(v.showSelfFacility) ? (<>{' '}
<div aria-hidden={v.ovUnder} style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f4f7fe", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "37px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Client Information</div>
{' '}
<div style={{ marginTop: "2px", lineHeight: "16px", color: "#575757" }}>KYC/KYB</div>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Facility Request</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review trade license</span></li>
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
<div style={{ flex: "0 1 648px", minWidth: "0", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<button onClick={v.goSelfHub} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
{' '}
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#182f7c" }}>Facility request</h1>
{' '}
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757" }}>The following details have been captured from the call report and BusinessOne</p>
{' '}
<div style={{ background: "#efe6ff", border: "1px solid #820fd9", borderRadius: "8px", padding: "16px", display: "flex", gap: "8px", alignItems: "flex-start" }}>{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.91 12.71L13.89 15.97C13.78 16.14 13.63 16.21 13.42 16.18C13.21 16.16 13.08 16.04 13.04 15.84L12.26 12.67L4.9 20.06C4.80 20.15 4.69 20.20 4.55 20.21C4.42 20.22 4.30 20.17 4.19 20.06C4.08 19.95 4.03 19.83 4.03 19.70C4.03 19.57 4.08 19.46 4.19 19.35L11.57 11.96L8.42 11.18C8.22 11.14 8.10 11.01 8.07 10.81C8.04 10.61 8.11 10.45 8.28 10.35L11.53 8.34L11.25 4.51C11.23 4.31 11.31 4.16 11.49 4.06C11.67 3.96 11.84 3.98 12.00 4.12L14.93 6.59L18.47 5.14C18.66 5.06 18.83 5.09 18.98 5.24C19.13 5.39 19.17 5.56 19.08 5.75L17.65 9.29L20.13 12.22C20.27 12.38 20.29 12.55 20.20 12.74C20.10 12.92 19.96 13.01 19.75 12.99L15.91 12.71ZM4.13 6.22C4.04 6.13 4 6.04 4 5.93C4 5.82 4.04 5.72 4.13 5.64L4.83 4.93C4.92 4.85 5.01 4.80 5.12 4.80C5.23 4.80 5.33 4.85 5.41 4.93L6.12 5.64C6.21 5.72 6.25 5.82 6.25 5.93C6.25 6.04 6.21 6.13 6.12 6.22L5.41 6.93C5.33 7.01 5.23 7.06 5.12 7.06C5.01 7.06 4.92 7.01 4.83 6.93L4.13 6.22ZM13.71 14.35L15.37 11.67L18.52 11.90L16.48 9.47L17.67 6.55L14.75 7.74L12.32 5.70L12.55 8.85L9.88 10.52L12.94 11.28L13.71 14.35ZM18.02 20.12L17.32 19.41C17.23 19.33 17.19 19.23 17.19 19.12C17.19 19.01 17.23 18.92 17.32 18.83L18.02 18.13C18.11 18.04 18.21 17.99 18.31 17.99C18.42 17.99 18.52 18.04 18.61 18.13L19.31 18.83C19.40 18.92 19.44 19.01 19.44 19.12C19.44 19.23 19.40 19.33 19.31 19.41L18.61 20.12C18.52 20.21 18.42 20.25 18.31 20.25C18.21 20.25 18.11 20.21 18.02 20.12Z" fill="#820fd9"></path></svg></span>
{' '}
<div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>{' '}
<div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>AI has pre-filled this form</div>
{' '}
<div style={{ color: "#575757" }}>This facility request was auto-generated from call reports. Review and update where needed.</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div>{' '}
<div style={{ fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Orient Insurance</div>
{' '}
<div style={{ marginTop: "12px", lineHeight: "16px", color: "#575757" }}>CIF: 102938859</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#182f7c" }}>Facilities</h2>
{' '}
<div><button onClick={v.facAdd} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2.5V21.5M2.5 12H21.5" stroke="#182f7c" strokeLinecap="round"></path></svg>
Add facility</button></div>
{' '}
{(v.facRows || []).map((fc, fc__i) => (<React.Fragment key={fc__i}>{' '}
<div style={{ position: "relative", padding: "16px", display: "flex", gap: "16px", alignItems: "flex-start" }}>{' '}
<span style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10.42 9.79C10.42 10.60 8.55 11.25 6.25 11.25C3.95 11.25 2.08 10.60 2.08 9.79M10.42 11.46C10.42 12.26 8.55 12.91 6.25 12.91C3.95 12.91 2.08 12.26 2.08 11.46M2.08 13.12C2.08 13.93 3.95 14.58 6.25 14.58C7.71 14.58 8.99 14.32 9.73 13.92M2.08 14.79C2.08 15.60 3.95 16.25 6.25 16.25C7.69 16.25 8.96 15.99 9.71 15.61M2.08 8.12L2.08 14.79M10.42 8.12V12.5M17.91 14.79C17.91 15.59 16.05 16.25 13.75 16.25C11.45 16.25 9.58 15.59 9.58 14.79M17.91 16.45C17.91 17.26 16.05 17.91 13.75 17.91C11.45 17.91 9.58 17.26 9.58 16.45M9.58 13.12V16.45M17.91 13.12V16.45M10.42 8.12C10.42 8.93 8.55 9.58 6.25 9.58C3.95 9.58 2.08 8.93 2.08 8.12C2.08 7.32 3.95 6.66 6.25 6.66C8.55 6.66 10.42 7.32 10.42 8.12ZM17.91 13.12C17.91 13.93 16.05 14.58 13.75 14.58C11.45 14.58 9.58 13.93 9.58 13.12C9.58 12.31 11.45 11.66 13.75 11.66C16.05 11.66 17.91 12.31 17.91 13.12Z" stroke="#182f7c"></path></svg></span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>{fc.title}</div>
{' '}
<div style={{ lineHeight: "16px", color: "#575757" }}>{fc.amount}</div>
{' '}
<div style={{ color: "#575757", overflowWrap: "anywhere" }}>{fc.subtitle}</div>
{' '}</div>
{' '}
<button onClick={fc.toggleMenu} aria-label={fc.menuLabel} aria-haspopup="menu" aria-expanded={fc.expanded} style={{ flex: "none", width: "24px", height: "40px", padding: "8px 0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "flex-start", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.5 4C13.5 4.82 12.82 5.5 12 5.5C11.17 5.5 10.5 4.82 10.5 4C10.5 3.17 11.17 2.5 12 2.5C12.82 2.5 13.5 3.17 13.5 4ZM13.5 12C13.5 12.82 12.82 13.5 12 13.5C11.17 13.5 10.5 12.82 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.82 10.5 13.5 11.17 13.5 12ZM13.5 20C13.5 20.82 12.82 21.5 12 21.5C11.17 21.5 10.5 20.82 10.5 20C10.5 19.17 11.17 18.5 12 18.5C12.82 18.5 13.5 19.17 13.5 20Z" fill="#182f7c" stroke="#182f7c"></path></svg></button>
{' '}
{(fc.menuOpen) ? (<>{' '}
<div role="menu" style={{ position: "absolute", top: "56px", right: "16px", zIndex: "3", width: "209px", background: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}>{' '}
<button role="menuitem" onClick={fc.edit} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.88 5.60C12.88 5.60 12.88 7.43 14.72 9.27C16.56 11.11 18.39 11.11 18.39 11.11M4.48 20.98L8.34 20.43C8.90 20.35 9.41 20.09 9.81 19.69L20.23 9.27C21.25 8.26 21.25 6.61 20.23 5.60L18.39 3.76C17.38 2.74 15.73 2.74 14.72 3.76L4.30 14.18C3.90 14.58 3.64 15.09 3.56 15.65L3.01 19.51C2.89 20.37 3.62 21.10 4.48 20.98Z" stroke="#182f7c" strokeLinecap="round"></path></svg>
Edit</button>
{' '}
<button role="menuitem" onClick={fc.del} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", borderTop: "1px solid #e8eaef", background: "#ffffff", color: "#b00000", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 8.5V17.5C18.5 19.70 16.70 21.5 14.5 21.5H9.5C7.29 21.5 5.5 19.70 5.5 17.5V8.5M18.5 8.5H19C19.82 8.5 20.5 7.82 20.5 7C20.5 6.17 19.82 5.5 19 5.5H16.5M18.5 8.5H5.5M5.5 8.5H5C4.17 8.5 3.5 7.82 3.5 7C3.5 6.17 4.17 5.5 5 5.5H7.5M7.5 5.5H16.5M7.5 5.5C7.5 3.84 8.84 2.5 10.5 2.5H13.5C15.15 2.5 16.5 3.84 16.5 5.5M8.5 11.5V17.5M12 11.5V17.5M15.5 11.5V17.5" stroke="#9d0000" strokeLinecap="round"></path></svg>
Delete</button>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", justifyContent: "flex-end" }}>{' '}
<button style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }} onClick={v.facContinue}>Continue</button>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}
{(v.facLoading) ? (<>{' '}
<div role="status" aria-label="Loading" style={{ position: "fixed", inset: "0", zIndex: "11", background: "rgba(0,0,0,0.32)", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
<div style={{ width: "80px", height: "80px", borderRadius: "10px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" className="spin" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2.500a9.500 9.500 0 019.500 9.500" stroke="#182f7c" strokeWidth="2" strokeLinecap="round"></path></svg></div>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.facDeleteOpen) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>{' '}
<div role="dialog" aria-modal="true" aria-labelledby="fac-del-title" style={{ width: "100%", maxWidth: "442px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "32px", display: "flex", flexDirection: "column", gap: "4px", textAlign: "center" }}>{' '}
<div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={v.facDeleteCancel} aria-label="Close" style={{ width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div id="fac-del-title" style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500", color: "#575757", overflowWrap: "anywhere" }}>Delete “{v.facDeleteTitle}”?</div>
{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", color: "#575757" }}>This will delete this facility and all its details</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>{' '}
<button onClick={v.facDeleteCancel} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "120px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer" }}>Cancel</button>
{' '}
<button onClick={v.facDeleteYes} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "120px", border: "0", background: "#b00000", color: "#ffffff", cursor: "pointer" }}>Yes</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}
  </>);
}
