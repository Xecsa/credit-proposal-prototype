import React from 'react';

export default function ShowFinRatios({ v }) {
  return (<>
{(v.showFinRatios) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
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
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Risk Ratios</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Risk Ratings</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 748px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.finBackEnt} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "16px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#000000" }}>Risk ratios</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", opacity: "0.9" }}>Review the risk ratios as received from credit lens analysis</p>
<span style={{ alignSelf: "flex-start", boxSizing: "border-box", height: "22px", padding: "4px 8px", borderRadius: "4px", background: "#efe6ff", color: "#820fd9", fontSize: "12px", lineHeight: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="12" height="12" viewBox="378 261 12 12" fill="none"><defs><mask id="ifspark3mask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="378" y="261" width="12" height="12"><g><g clipPath="url(#ifspark3clip0_11890_43994)"><path d="M387.911 267.715L385.896 270.973C385.79 271.141 385.632 271.212 385.422 271.188C385.213 271.164 385.085 271.049 385.04 270.844L384.263 267.679L376.9 275.061C376.807 275.155 376.693 275.206 376.559 275.214C376.425 275.222 376.303 275.172 376.192 275.061C376.086 274.955 376.033 274.837 376.033 274.707C376.033 274.578 376.086 274.46 376.192 274.354L383.575 266.965L380.429 266.188C380.224 266.143 380.106 266.019 380.075 265.816C380.044 265.613 380.113 265.458 380.281 265.352L383.538 263.342L383.258 259.517C383.237 259.312 383.316 259.16 383.494 259.061C383.672 258.963 383.842 258.983 384.002 259.123L386.935 261.594L390.479 260.146C390.667 260.064 390.836 260.098 390.986 260.248C391.136 260.398 391.17 260.567 391.089 260.756L389.66 264.3L392.131 267.227C392.271 267.387 392.294 267.559 392.202 267.744C392.11 267.929 391.961 268.011 391.756 267.99L387.911 267.715ZM376.131 261.227C376.044 261.139 376 261.042 376 260.934C376 260.827 376.044 260.729 376.131 260.642L376.835 259.938C376.922 259.851 377.019 259.807 377.127 259.807C377.235 259.807 377.332 259.851 377.419 259.938L378.123 260.642C378.21 260.729 378.254 260.827 378.254 260.934C378.254 261.042 378.21 261.139 378.123 261.227L377.419 261.931C377.332 262.018 377.235 262.061 377.127 262.061C377.019 262.061 376.922 262.018 376.835 261.931L376.131 261.227ZM385.714 269.359L387.375 266.673L390.527 266.906L388.488 264.477L389.671 261.557L386.752 262.74L384.323 260.707L384.556 263.854L381.888 265.521L384.946 266.282L385.714 269.359ZM390.027 275.123L389.323 274.419C389.236 274.332 389.192 274.234 389.192 274.127C389.192 274.019 389.236 273.922 389.323 273.834L390.027 273.131C390.114 273.043 390.212 273 390.319 273C390.427 273 390.524 273.043 390.611 273.131L391.316 273.834C391.403 273.922 391.446 274.019 391.446 274.127C391.446 274.234 391.403 274.332 391.316 274.419L390.611 275.123C390.524 275.21 390.427 275.254 390.319 275.254C390.212 275.254 390.114 275.21 390.027 275.123Z" fill="#182F7C"></path></g></g></mask>
<clipPath id="ifspark3clip0_11890_43994"><rect width="12" height="12" fill="white" transform="translate(378 261)"></rect></clipPath></defs>
<g mask="url(#ifspark3mask0_11890_43994)"><rect x="378" y="261" width="12" height="12" fill="#820FD9"></rect></g></svg></span>
AI-powered extraction</span></div>
{' '}
<div style={{ boxSizing: "border-box", padding: "15px", border: "1px solid #820fd9", borderRadius: "8px", background: "#efe6ff", display: "flex", gap: "8px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="386 334 24 24" fill="none"><defs><mask id="ifalertmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="386" y="334" width="24" height="24"><g><g><path d="M401.911 346.715L399.896 349.973C399.79 350.141 399.632 350.212 399.422 350.188C399.213 350.164 399.085 350.049 399.04 349.844L398.263 346.679L390.9 354.061C390.807 354.155 390.693 354.206 390.559 354.214C390.425 354.222 390.303 354.172 390.192 354.061C390.086 353.955 390.033 353.837 390.033 353.707C390.033 353.578 390.086 353.46 390.192 353.354L397.575 345.965L394.429 345.188C394.224 345.143 394.106 345.019 394.075 344.816C394.044 344.613 394.113 344.458 394.281 344.352L397.538 342.342L397.258 338.517C397.237 338.312 397.316 338.16 397.494 338.061C397.672 337.963 397.842 337.983 398.002 338.123L400.935 340.594L404.479 339.146C404.667 339.064 404.836 339.098 404.986 339.248C405.136 339.398 405.17 339.567 405.089 339.756L403.66 343.3L406.131 346.227C406.271 346.387 406.294 346.559 406.202 346.744C406.11 346.929 405.961 347.011 405.756 346.99L401.911 346.715ZM390.131 340.227C390.044 340.139 390 340.042 390 339.934C390 339.827 390.044 339.729 390.131 339.642L390.835 338.938C390.922 338.851 391.019 338.807 391.127 338.807C391.235 338.807 391.332 338.851 391.419 338.938L392.123 339.642C392.21 339.729 392.254 339.827 392.254 339.934C392.254 340.042 392.21 340.139 392.123 340.227L391.419 340.931C391.332 341.018 391.235 341.061 391.127 341.061C391.019 341.061 390.922 341.018 390.835 340.931L390.131 340.227ZM399.714 348.359L401.375 345.673L404.527 345.906L402.488 343.477L403.671 340.557L400.752 341.74L398.323 339.707L398.556 342.854L395.888 344.521L398.946 345.282L399.714 348.359ZM404.027 354.123L403.323 353.419C403.236 353.332 403.192 353.234 403.192 353.127C403.192 353.019 403.236 352.922 403.323 352.834L404.027 352.131C404.114 352.043 404.212 352 404.319 352C404.427 352 404.524 352.043 404.611 352.131L405.316 352.834C405.403 352.922 405.446 353.019 405.446 353.127C405.446 353.234 405.403 353.332 405.316 353.419L404.611 354.123C404.524 354.21 404.427 354.254 404.319 354.254C404.212 354.254 404.114 354.21 404.027 354.123Z" fill="#182F7C"></path></g></g></mask></defs>
<g mask="url(#ifalertmask1_11890_43994)"><rect x="386" y="334" width="24" height="24" fill="#820FD9"></rect></g></svg></span>
<div style={{ minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><div style={{ fontWeight: "500", color: "#000000" }}>AI-generated Narrative</div>
<div style={{ color: "#575757" }}>Elevated leverage at 3.8x Net Debt/EBITDA and high sector concentration in F&amp;B wholesale present moderate downside risk. Conditional approval is recommended at AED 3,800,000 with a DSCR covenant floor of 1.20x tested semi-annually.</div>
<button style={{ font: "inherit", lineHeight: "20px", marginTop: "4px", padding: "0", border: "0", background: "transparent", color: "#182f7c", textDecoration: "underline", cursor: "pointer", alignSelf: "flex-start" }}>Edit</button></div></div>
{' '}
<div role="table" aria-label="Risk ratios" style={{ lineHeight: "20px", color: "#000000" }}>{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="columnheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>Description</div>
<div role="columnheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", justifyContent: "flex-end" }}>2023</div>
<div role="columnheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", justifyContent: "flex-end" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", justifyContent: "flex-end" }}>2025</div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Revenue</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>181,127</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>182,292</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>177,825</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Revenue Growth</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>126,836</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>164,471</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>71,469</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Gross Profit</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>125,060</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>118,888</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>136,992</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Gross Profit Margin</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>70,221</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>61,709</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>144,827</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>NP</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>29,898</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>41,718</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>74,714</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Profit Retention %</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>177,927</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>24,733</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>92,105</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>EBITDA</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>138,176</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>45,627</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>169,079</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>EBITDA Margin</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>85,279</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>175,347</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>123,876</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>NCAO</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>33,657</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>191,423</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>63,659</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>CADA</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>97,294</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>43,901</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>108,726</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Historic DSCR</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>168,877</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>42,537</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>68,013</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Interest Coverage Ratio</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>75,523</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>114,059</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>165,452</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Gross Debt</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>69,396</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>134,497</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>45,441</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Gross Bank Debt</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>125,703</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>116,542</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>121,513</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Other Debt instruments including Bonds</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>115,134</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>106,338</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>138,753</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Lease Obligation ( Current &amp; non-current)</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>66,352</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>161,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>199,532</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Free Cash &amp; Cash Equivalents</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>22,062</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>191,173</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>136,258</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Net Debt to EBITDA</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>190,090</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>73,316</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>141,456</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Total Liabilities</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>143,487</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>95,942</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>161,688</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Dues from Related Parties</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>32,701</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>128,477</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>34,505</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Adjusted TNW</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>88,650</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>123,403</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>111,197</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Leverage</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>78,117</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>92,853</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>56,144</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Gearing</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>196,409</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>117,777</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>88,781</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Balance Sheet Weight</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>131,370</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>78,663</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>23,383</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Working Capital Cycle Days (S+D - C)</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>71,129</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>26,798</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>59,601</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Working Capital Cycle Days (S+D - C) Incl. Retentions</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>138,241</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>84,092</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>180,988</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Working Capital Requirement</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>145,004</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>96,843</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>90,174</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Current Ratio</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>97,733</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>102,718</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>155,146</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Contingent Liabilities</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>112,349</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>36,549</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>29,229</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Operating Profit Margin</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>125,781</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>103,505</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>65,349</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Inventory Ageing</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>88,962</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>189,319</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>20,331</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Receivables aging</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>189,015</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>92,692</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>26,192</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Receivables aging (incl. Retentions)</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>98,200</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>83,012</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>129,819</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Payables Ageing</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>32,388</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>122,779</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>29,221</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Quick Ratio</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>114,434</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>76,690</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>179,989</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Total Assets Turnover</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>119,006</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>32,457</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>108,353</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Fixed Assets Turnover</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>145,954</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>196,982</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>41,161</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Funded Debt to EBITDA</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>152,498</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>195,935</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>52,302</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Return on Assets</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>52,331</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>137,076</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>120,495</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Return on Equity</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>43,511</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>117,941</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>99,878</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Net Worth</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>197,614</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>115,693</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>135,303</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Adjusted Gearing</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>28,189</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>155,048</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>91,239</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Adjusted Leverage</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>46,208</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>115,870</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>39,679</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Gearing (including contingent / OBSL)</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>37,280</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>51,735</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>197,406</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Leverage (including contingent / OBSL)</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>89,705</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>186,963</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>101,638</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Gross Term Debt / EBITDA</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>68,849</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>43,077</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>186,375</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Adjusted EBITDA (pre-IFRS 16)</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>69,839</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>39,946</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>196,019</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Net Debt / Adjusted EBITDA</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>143,713</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>63,868</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>160,810</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Adjusted Historic DSCR</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>67,989</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>41,646</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>156,177</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Interest</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>103,975</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>129,709</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>97,169</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "350fr 116.7fr 116.7fr 116.6fr" }}><div role="rowheader" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "4px 8px", whiteSpace: "nowrap" }}>Depreciation</div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>109,416</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>177,465</span></div>
<div role="cell" style={{ boxSizing: "border-box", minHeight: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh1"></span>
<span style={{ minWidth: "53px", textAlign: "right" }}>119,889</span></div></div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ margin: "32px 24px 0 0", display: "flex", justifyContent: "flex-end" }}><button onClick={v.finToRatings} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer", width: "200px" }}>Continue</button></div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
