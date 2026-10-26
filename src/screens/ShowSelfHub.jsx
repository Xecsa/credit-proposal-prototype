import React from 'react';
import img_48d1ac8305 from '../assets/48d1ac83055cf739d59eb9a8a7234415.png';
import img_7dbc59854d from '../assets/7dbc59854d08a737f34d6bc92e24e18c.png';
import img_567e0ec047 from '../assets/567e0ec0472f73849c690a5a80845d7e.png';

export default function ShowSelfHub({ v }) {
  return (<>
{(v.showSelfHub) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", padding: "40px 24px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<button onClick={v.hubBack} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#1b48b5", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
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
<span style={{ color: "#50647c" }}>Provide the KYC information for the Company and Shareholders</span>
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
<div style={{ color: "#50647c" }}>Provide supporting documents and references relevant to the application</div>
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
<div style={{ color: "#50647c" }}>Financial statement analysis, risk ratings, cash flows, bureau analysis, bank and VAT analysis</div>
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
{(v.hubShowComments) ? (<>{' '}
<section aria-label="Comments" style={{ background: "#ffffff", borderRadius: "8px", padding: "24px 24px 16px", display: "flex", flexDirection: "column", gap: "4px" }}><h2 style={{ margin: "0", fontSize: "20px", lineHeight: "28px", fontWeight: "400", color: "#000000" }}>Comments</h2>
<p style={{ margin: "0", lineHeight: "20px", color: "#575757" }}>Notes shared between RMs and ARMs</p>
<ol style={{ listStyle: "none", margin: "12px 0 0", padding: "0", display: "flex", flexDirection: "column" }}>{(v.hubCommentList || []).map((c, c__i) => (<React.Fragment key={c__i}><li style={{ display: "flex", gap: "16px", paddingBottom: "12px" }}><span style={{ flex: "none", width: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}><span aria-hidden="true" style={{ width: "40px", height: "40px", borderRadius: "20px", background: "#e7efff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3.5c-3.9 0-6.75 2.5-6.75 5.6 0 1.5.7 2.9 1.9 3.9l-.6 3 3.1-1.5c.75.2 1.55.3 2.35.3 3.9 0 6.75-2.5 6.75-5.7S13.9 3.5 10 3.5Z" stroke="#182f7c" strokeWidth="1.25" strokeLinejoin="round"></path></svg></span>
{(c.line) ? (<><span aria-hidden="true" style={{ flex: "1", minHeight: "12px", borderLeft: "1px solid #c4c8d6" }}></span></>) : null}</span>
<span style={{ minWidth: "0", paddingTop: "2px", display: "flex", flexDirection: "column", gap: "6px", lineHeight: "20px" }}><span style={{ display: "flex", gap: "8px", alignItems: "center" }}><span style={{ fontWeight: "500", color: "#000000" }}>{c.name}</span>
<span style={{ fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: "#e7efff", color: "#1b48b5" }}>{c.role}</span></span>
<span style={{ color: "#575757", overflowWrap: "anywhere" }}>{c.text}</span></span></li></React.Fragment>))}</ol></section>
{' '}</>) : null}
{' '}
{(v.appConfirmed) ? (<><div role="status" style={{ background: "#eaf6ea", borderRadius: "8px", padding: "12px 16px", color: "#1f6b1d" }}>Application confirmed. It has moved to credit review.</div></>) : null}
{' '}
{(v.hubShowSend) ? (<>{' '}
<div style={{ display: "flex", justifyContent: "flex-end" }}>{' '}
<button disabled={v.hubSendBlocked} onClick={v.hubSendClick} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", width: "200px", minWidth: "88px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: `${v.hubSendCursor}`, display: "inline-flex", alignItems: "center", justifyContent: "center", background: `${v.hubSendBg}` }}>{v.hubSendLabel}</button>
{' '}</div>
{' '}</>) : null}
{' '}
{(v.hubArm) ? (<><div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "flex-end" }}><button onClick={v.hubOpenArm} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", minWidth: "200px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Submit to RM</button></div></>) : null}
{' '}
{(v.hubRm) ? (<><div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "flex-end" }}><button onClick={v.hubOpenReturn} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", minWidth: "200px", height: "48px", padding: "12px 16px", border: "1px solid #d3d7e7", borderRadius: "8px", color: "#182f7c", background: "#ffffff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Return to ARM</button>
<button onClick={v.hubOpenConfirm} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", minWidth: "200px", height: "48px", padding: "12px 16px", border: "0", borderRadius: "8px", color: "#ffffff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Confirm application</button></div></>) : null}
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
