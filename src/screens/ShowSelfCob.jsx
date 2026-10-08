import React from 'react';

export default function ShowSelfCob({ v }) {
  return (<>
{(v.showSelfCob) ? (<>{' '}
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
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Review trade license</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Ownership &amp; shareholders</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Consent Request</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Co-borrowers</span></li>
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
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goSelfConsent} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Co-borrowers</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>Select or add any co-borrowers the organization will use</p></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Suggested</h2>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>AA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Ahmed Al-Hassan</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder of {'{'}Company_name{'}'} - Individual</div></div>
<span style={{ alignSelf: "center", display: "flex" }}><button role="checkbox" aria-checked={v.cob.a.on} aria-label="Select Ahmed Al-Hassan as co-borrower" onClick={v.cob.a.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(v.cob.a.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(v.cob.a.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button></span></div>
<div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>FA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Fatima Ahmed Ali</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder of {'{'}Company_name{'}'} - Individual</div></div>
<span style={{ alignSelf: "center", display: "flex" }}><button role="checkbox" aria-checked={v.cob.b.on} aria-label="Select Fatima Ahmed Ali as co-borrower" onClick={v.cob.b.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(v.cob.b.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(v.cob.b.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button></span></div>
<div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>KM</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Khalid Al-Mansoori</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder of {'{'}Company_name{'}'} - Individual</div></div>
<span style={{ alignSelf: "center", display: "flex" }}><button role="checkbox" aria-checked={v.cob.c.on} aria-label="Select Khalid Al-Mansoori as co-borrower" onClick={v.cob.c.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(v.cob.c.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(v.cob.c.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button></span></div>
{(v.cobExtra || []).map((cbx, cbx__i) => (<React.Fragment key={cbx__i}><div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>{cbx.initials}</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>{cbx.name}</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>{cbx.body}</div></div>
<span style={{ alignSelf: "center", display: "flex" }}><button role="checkbox" aria-checked={cbx.on} aria-label={cbx.label} onClick={cbx.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(cbx.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(cbx.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button></span></div></React.Fragment>))}</div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button onClick={v.goSelfKm} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Continue</button></div>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
