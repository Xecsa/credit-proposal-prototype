import React from 'react';

export default function ShowDStk({ v }) {
  return (<>
{(v.showDStk) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px", maxWidth: "190px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Documents and references</div>
{' '}
<button onClick={v.goHubFromDocs} style={{ font: "inherit", lineHeight: "16px", marginTop: "4px", padding: "0", border: "0", background: "transparent", color: "#575757", textDecoration: "underline", cursor: "pointer" }}>Back to Hub</button>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>KYC documents</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Stakeholder documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Financial documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Ejari documents</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goDKyc} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Stakeholders documents</h1></div>
{' '}
<div className="field" style={{ height: "44px", boxSizing: "border-box", padding: "0 15px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "8px" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="436 258 16 16" fill="none"><defs><clipPath id="idsearchclip0_11890_43994"><path d="M420 252C420 247.582 423.582 244 428 244H1012C1016.42 244 1020 247.582 1020 252V280C1020 284.418 1016.42 288 1012 288H428C423.582 288 420 284.418 420 280V252Z" fill="white"></path></clipPath>
<mask id="idsearchmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="436" y="258" width="16" height="16"><g><g><path d="M450.334 272.333L446.334 268.333M446.334 264C446.334 266.393 444.394 268.333 442 268.333C439.607 268.333 437.667 266.393 437.667 264C437.667 261.607 439.607 259.667 442 259.667C444.394 259.667 446.334 261.607 446.334 264Z" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g clipPath="url(#idsearchclip0_11890_43994)"><g mask="url(#idsearchmask1_11890_43994)"><rect x="436" y="258" width="16" height="16" fill="#182F7C"></rect></g></g></svg></span>
<input className="bare" type="text" aria-label="Search stakeholders" placeholder="Search" autoComplete="off" value={v.dSearch} onChange={v.setDSearch} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000" }} /></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
{(v.dStkGroups || []).map((sec, sec__i) => (<React.Fragment key={sec__i}>{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447", opacity: "0.9" }}>{sec.title}</h2>
<p style={{ margin: "0", lineHeight: "20px", color: "#6c7a89" }}>{sec.desc}</p></div>
{' '}
{(sec.files || []).map((f, f__i) => (<React.Fragment key={f__i}>{' '}
{(f.ok) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 640 24 24" fill="none"><defs><mask id="idcheckmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="640" width="24" height="24"><g><g><path d="M456 642C461.523 642 466 646.477 466 652C466 657.523 461.523 662 456 662C450.477 662 446 657.523 446 652C446 646.477 450.477 642 456 642ZM461.354 648.646C461.158 648.451 460.842 648.451 460.646 648.646L454.354 654.939C454.158 655.135 453.842 655.135 453.646 654.939L451.354 652.646C451.158 652.451 450.842 652.451 450.646 652.646C450.451 652.842 450.451 653.158 450.646 653.354L452.939 655.646C453.525 656.232 454.475 656.232 455.061 655.646L461.354 649.354C461.549 649.158 461.549 648.842 461.354 648.646Z" fill="#266300"></path></g></g></mask></defs>
<g mask="url(#idcheckmask1_11890_43994)"><rect x="444" y="640" width="24" height="24" fill="#1B5145"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<button type="button" onClick={f.preview} style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Preview document</button>
{(f.hasYear) ? (<><span style={{ alignSelf: "flex-start", marginTop: "2px", fontSize: "12px", lineHeight: "14px", padding: "4px 8px", borderRadius: "4px", background: "#eaeaea", color: "#575757", display: "inline-flex", alignItems: "center", gap: "8px" }}>{f.year}
<svg aria-hidden="true" width="12" height="12" viewBox="531 525 12 12" fill="none"><defs><mask id="idchevmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="531" y="525" width="12" height="12"><g><g><path d="M534 529.5L537 532.5L540 529.5" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g mask="url(#idchevmask2_11890_43994)"><rect x="531" y="525" width="12" height="12" fill="#575757"></rect></g></svg></span></>) : null}</div>
{(f.removable) ? (<><button onClick={f.remove} aria-label={f.removeLabel} style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="980 1158 16 16" fill="none"><defs><mask id="idxmask3_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="980" y="1158" width="16" height="16"><g><g><path d="M993.666 1160.33L982.333 1171.67M982.333 1160.33L993.666 1171.67" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g mask="url(#idxmask3_11890_43994)"><rect x="980" y="1158" width="16" height="16" fill="#182F7C"></rect></g></svg></button></>) : null}</div>
{' '}</>) : null}
{' '}
{(f.err) ? (<>{' '}
<div role="alert" style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #b00000" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 1154 24 24" fill="none"><defs><mask id="iderrmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="1154" width="24" height="24"><g><g><path d="M455.168 1156.5C455.524 1155.83 456.476 1155.83 456.832 1156.5L465.887 1173.59C466.224 1174.23 465.768 1175 465.055 1175H446.945C446.232 1175 445.776 1174.23 446.113 1173.59L455.168 1156.5ZM456 1171C455.724 1171 455.5 1171.22 455.5 1171.5V1172.5C455.5 1172.78 455.724 1173 456 1173C456.276 1173 456.5 1172.78 456.5 1172.5V1171.5C456.5 1171.22 456.276 1171 456 1171ZM456 1161C455.724 1161 455.5 1161.22 455.5 1161.5V1169.5C455.5 1169.78 455.724 1170 456 1170C456.276 1170 456.5 1169.78 456.5 1169.5V1161.5C456.5 1161.22 456.276 1161 456 1161Z" fill="#E88524"></path></g></g></mask></defs>
<g mask="url(#iderrmask2_11890_43994)"><rect x="444" y="1154" width="24" height="24" fill="#B00000"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<span style={{ color: "#b00000" }}>{f.info}</span></div></div>
{' '}</>) : null}
{' '}
{(f.warn) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 1834 24 24" fill="none"><defs><mask id="idwarnmask4_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="1834" width="24" height="24"><g><g><path d="M455.168 1836.5C455.524 1835.83 456.476 1835.83 456.832 1836.5L465.887 1853.59C466.224 1854.23 465.768 1855 465.055 1855H446.945C446.232 1855 445.776 1854.23 446.113 1853.59L455.168 1836.5ZM456 1851C455.724 1851 455.5 1851.22 455.5 1851.5V1852.5C455.5 1852.78 455.724 1853 456 1853C456.276 1853 456.5 1852.78 456.5 1852.5V1851.5C456.5 1851.22 456.276 1851 456 1851ZM456 1841C455.724 1841 455.5 1841.22 455.5 1841.5V1849.5C455.5 1849.78 455.724 1850 456 1850C456.276 1850 456.5 1849.78 456.5 1849.5V1841.5C456.5 1841.22 456.276 1841 456 1841Z" fill="#E88524"></path></g></g></mask></defs>
<g mask="url(#idwarnmask4_11890_43994)"><rect x="444" y="1834" width="24" height="24" fill="#E88524"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<span style={{ color: "#575757" }}>Document type couldn’t be identified</span>
<button onClick={f.categorize} style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Categorize document</button></div></div>
{' '}</>) : null}
{' '}</React.Fragment>))}
{' '}</section>
{' '}</React.Fragment>))}
{' '}
{(v.dStkEmpty) ? (<><p role="status" style={{ margin: "0", lineHeight: "20px", color: "#575757" }}>No stakeholders match “{v.dSearch}”.</p></>) : null}
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button onClick={v.goDFin} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer" }}>Continue</button></div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
