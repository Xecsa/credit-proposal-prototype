import React from 'react';

export default function ShowSelfOwn({ v }) {
  return (<>
{(v.showSelfOwn) ? (<>{' '}
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
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Ownership &amp; shareholders</span></li>
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
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
{(v.ownTodo) ? (<><div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goSelfTl} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Ownership &amp; shareholders</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>Add shareholders who own 5% or more. Ensure total shareholding equals 100%.</p></div></>) : null}
{' '}
{(v.ownDone) ? (<><div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goSelfTl} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Ownership &amp; shareholders</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>Review the company’s ownership and update shareholder information as needed</p></div>
{' '}
<div role="status" style={{ boxSizing: "border-box", padding: "15px", border: "1px solid #bae3b9", borderRadius: "8px", background: "#f3faf3", display: "flex", gap: "8px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="436 328 24 24" fill="none"><defs><mask id="ialertokmask1_12301_232125" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="436" y="328" width="24" height="24"><g><g><path d="M448 330C453.523 330 458 334.477 458 340C458 345.523 453.523 350 448 350C442.477 350 438 345.523 438 340C438 334.477 442.477 330 448 330ZM453.354 336.646C453.158 336.451 452.842 336.451 452.646 336.646L446.354 342.939C446.158 343.135 445.842 343.135 445.646 342.939L443.354 340.646C443.158 340.451 442.842 340.451 442.646 340.646C442.451 340.842 442.451 341.158 442.646 341.354L444.939 343.646C445.525 344.232 446.475 344.232 447.061 343.646L453.354 337.354C453.549 337.158 453.549 336.842 453.354 336.646Z" fill="#266300"></path></g></g></mask></defs>
<g mask="url(#ialertokmask1_12301_232125)"><rect x="436" y="328" width="24" height="24" fill="#1B5145"></rect></g></svg></span>
<div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px", lineHeight: "20px" }}><div style={{ fontWeight: "500", color: "#000000" }}>Total shareholding is 100%</div>
<div style={{ color: "#575757" }}>All required shareholders declared. Ownership of 10%+ captured for each, totaling 100%.</div></div></div>
{' '}</>) : null}
{' '}
<div role="table" aria-label="Company documents" style={{ border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", padding: "0 16px" }}>{' '}
<div role="row" style={{ boxSizing: "border-box", padding: "15px 0 16px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Trade license</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#2765ff" }}>TL.pdf</span></div>
{' '}
<div role="row" style={{ borderTop: "1px solid #d7dae5", boxSizing: "border-box", padding: "15px 0 15px", display: "flex", gap: "16px", justifyContent: "space-between", alignItems: "flex-start", lineHeight: "16px" }}><span role="rowheader" style={{ color: "#575757" }}>Memorandum of Association</span>
<span role="cell" style={{ textAlign: "right", minWidth: "0", overflowWrap: "anywhere", color: "#2765ff" }}>Moa.pdf</span></div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>{' '}
<button onClick={v.ownAdd} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", whiteSpace: "nowrap", padding: "12px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer", width: "200px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="480.5 435.5 24 24" fill="none"><defs><clipPath id="iplusclip0_12301_232125"><rect width="1504" height="1208" fill="white"></rect></clipPath>
<mask id="iplusmask1_12301_232125" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="480" y="435" width="25" height="25"><g><g><path d="M492.5 438V457M483 447.5H502" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g clipPath="url(#iplusclip0_12301_232125)"><g mask="url(#iplusmask1_12301_232125)"><rect x="480.5" y="435.5" width="24" height="24" fill="#182F7C"></rect></g></g></svg>
Add shareholder</button>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>{' '}
<div style={{ padding: "0 12px", display: "flex", gap: "16px", alignItems: "center" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="474 501.5 20 20" fill="none"><defs><clipPath id="ibankclip0_12301_232125"><rect width="1504" height="1208" fill="white"></rect></clipPath>
<mask id="ibankmask2_12301_232125" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="474" y="501" width="20" height="21"><g><g><path d="M482.591 503.585C483.44 503.007 484.557 503.007 485.406 503.585L491.723 507.889C492.156 508.184 492.415 508.675 492.415 509.2C492.415 510.075 491.705 510.786 490.829 510.786H489.915V515.624C490.367 515.711 490.761 516.001 490.973 516.421L491.635 517.741C492.136 518.738 491.41 519.913 490.294 519.913H477.703C476.587 519.913 475.862 518.738 476.362 517.741L477.025 516.421C477.237 516.001 477.63 515.712 478.082 515.624V510.786H477.168C476.292 510.785 475.582 510.075 475.582 509.2C475.582 508.675 475.841 508.185 476.274 507.889L482.591 503.585ZM478.365 516.594C478.177 516.594 478.004 516.701 477.919 516.87L477.256 518.19C477.089 518.522 477.331 518.913 477.703 518.913H490.294C490.666 518.913 490.908 518.522 490.741 518.19L490.079 516.87C489.994 516.701 489.821 516.594 489.632 516.594H478.365ZM479.082 510.786V515.594H481.415V510.786H479.082ZM482.415 510.786V515.594H485.582V510.786H482.415ZM486.582 510.786V515.594H488.915V510.786H486.582ZM484.844 504.412C484.334 504.064 483.664 504.064 483.154 504.412L476.838 508.715C476.678 508.824 476.582 509.006 476.582 509.2C476.582 509.523 476.845 509.785 477.168 509.786H478.573C478.576 509.786 478.579 509.785 478.582 509.785C478.585 509.785 478.588 509.786 478.591 509.786H481.906C481.909 509.786 481.912 509.785 481.915 509.785C481.918 509.785 481.921 509.786 481.924 509.786H486.073C486.076 509.786 486.079 509.785 486.082 509.785C486.085 509.785 486.088 509.786 486.091 509.786H489.406C489.409 509.786 489.412 509.785 489.415 509.785C489.418 509.785 489.421 509.786 489.424 509.786H490.829C491.153 509.786 491.415 509.523 491.415 509.2C491.415 509.006 491.319 508.824 491.159 508.715L484.844 504.412Z" fill="#182F7C"></path></g></g></mask></defs>
<g clipPath="url(#ibankclip0_12301_232125)"><g mask="url(#ibankmask2_12301_232125)"><rect x="474" y="501.5" width="20" height="20" fill="#182F7C"></rect></g></g></svg></span>
<span style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Orient Insurance</span></div>
{' '}
<div style={{ marginLeft: "29px", paddingLeft: "29px", borderLeft: "2px solid #eaeaea", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
{(v.ownTodo) ? (<>{' '}
{(v.ownFirst) ? (<><div style={{ borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "flex-start" }}>{' '}
<button onClick={v.ownOpen} aria-label="Ahmed Al-Hassan, additional information required. Add stakeholder information" style={{ font: "inherit", textAlign: "left", flex: "1", minWidth: "0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", padding: "0" }}><div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>AA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Ahmed Al-Hassan</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder - Individual</div>
<span style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "8px", background: "#fef3e6", color: "#d79c10" }}>Additional information required</span></div></div></button>
{' '}
<span style={{ padding: "16px 12px 0 0", display: "flex" }}><button onClick={v.ownDelOpen} aria-label="Delete Ahmed Al-Hassan" style={{ font: "inherit", fontSize: "12px", fontWeight: "500", lineHeight: "16px", flex: "none", height: "40px", padding: "0 24px", border: "1px solid #d3d7e7", borderRadius: "8px", background: "#ffffff", color: "#9d0000", cursor: "pointer" }}>Delete</button></span>
{' '}</div></>) : null}
{' '}
<div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>AA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Ahmed Al-Hassan</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder - Individual</div></div></div>
{' '}</>) : null}
{' '}
{(v.ownDone) ? (<>{' '}
{(v.ownFirst) ? (<><div style={{ borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "flex-start" }}><div style={{ flex: "1", minWidth: "0" }}><div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>AA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Ahmed Al-Hassan</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder - Individual</div></div></div></div>
<span style={{ padding: "14px 12px 0 0", display: "flex" }}><button onClick={v.ownDelOpen} aria-label="Delete Ahmed Al-Hassan" style={{ font: "inherit", fontSize: "12px", fontWeight: "500", lineHeight: "16px", flex: "none", height: "40px", padding: "0 24px", border: "1px solid #d3d7e7", borderRadius: "8px", background: "#ffffff", color: "#9d0000", cursor: "pointer" }}>Delete</button></span></div></>) : null}
{' '}
<div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="474 501.5 20 20" fill="none"><defs><clipPath id="ibankclip0_12301_232125"><rect width="1504" height="1208" fill="white"></rect></clipPath>
<mask id="ibankmask2_12301_232125" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="474" y="501" width="20" height="21"><g><g><path d="M482.591 503.585C483.44 503.007 484.557 503.007 485.406 503.585L491.723 507.889C492.156 508.184 492.415 508.675 492.415 509.2C492.415 510.075 491.705 510.786 490.829 510.786H489.915V515.624C490.367 515.711 490.761 516.001 490.973 516.421L491.635 517.741C492.136 518.738 491.41 519.913 490.294 519.913H477.703C476.587 519.913 475.862 518.738 476.362 517.741L477.025 516.421C477.237 516.001 477.63 515.712 478.082 515.624V510.786H477.168C476.292 510.785 475.582 510.075 475.582 509.2C475.582 508.675 475.841 508.185 476.274 507.889L482.591 503.585ZM478.365 516.594C478.177 516.594 478.004 516.701 477.919 516.87L477.256 518.19C477.089 518.522 477.331 518.913 477.703 518.913H490.294C490.666 518.913 490.908 518.522 490.741 518.19L490.079 516.87C489.994 516.701 489.821 516.594 489.632 516.594H478.365ZM479.082 510.786V515.594H481.415V510.786H479.082ZM482.415 510.786V515.594H485.582V510.786H482.415ZM486.582 510.786V515.594H488.915V510.786H486.582ZM484.844 504.412C484.334 504.064 483.664 504.064 483.154 504.412L476.838 508.715C476.678 508.824 476.582 509.006 476.582 509.2C476.582 509.523 476.845 509.785 477.168 509.786H478.573C478.576 509.786 478.579 509.785 478.582 509.785C478.585 509.785 478.588 509.786 478.591 509.786H481.906C481.909 509.786 481.912 509.785 481.915 509.785C481.918 509.785 481.921 509.786 481.924 509.786H486.073C486.076 509.786 486.079 509.785 486.082 509.785C486.085 509.785 486.088 509.786 486.091 509.786H489.406C489.409 509.786 489.412 509.785 489.415 509.785C489.418 509.785 489.421 509.786 489.424 509.786H490.829C491.153 509.786 491.415 509.523 491.415 509.2C491.415 509.006 491.319 508.824 491.159 508.715L484.844 504.412Z" fill="#182F7C"></path></g></g></mask></defs>
<g clipPath="url(#ibankclip0_12301_232125)"><g mask="url(#ibankmask2_12301_232125)"><rect x="474" y="501.5" width="20" height="20" fill="#182F7C"></rect></g></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>GETAX Agrifert DMCC</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50% Shareholder - Entity</div></div></div>
{' '}</>) : null}
{' '}
{(v.ownExtra || []).map((ox, ox__i) => (<React.Fragment key={ox__i}>{' '}
<div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>{ox.initials}</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>{ox.name}</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>{ox.body}</div></div></div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button disabled={v.ownBlocked} onClick={v.ownContinue} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.ownBg}`, cursor: `${v.ownCursor}` }}>Continue</button></div>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}
{(v.ownDelShow) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>{' '}
<div role="dialog" aria-modal="true" aria-labelledby="own-del-title" style={{ width: "100%", maxWidth: "442px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "32px", display: "flex", flexDirection: "column", gap: "4px", textAlign: "center" }}>{' '}
<div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={v.ownDelCancel} aria-label="Close" style={{ width: "24px", height: "24px", padding: "0", border: "0", background: "transparent", cursor: "pointer", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 3.5L3.5 20.5M3.5 3.5L20.5 20.5" stroke="#182f7c" strokeLinecap="round"></path></svg></button></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div id="own-del-title" style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500", color: "#575757", overflowWrap: "anywhere" }}>Delete “Ahmed Al-Hassan”?</div>
{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", color: "#575757" }}>This will remove this shareholder from the application.</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>{' '}
<button onClick={v.ownDelCancel} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "120px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer" }}>Cancel</button>
{' '}
<button onClick={v.ownDelYes} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "120px", border: "0", background: "#d11f1b", color: "#ffffff", cursor: "pointer" }}>Delete</button>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</>) : null}
  </>);
}
