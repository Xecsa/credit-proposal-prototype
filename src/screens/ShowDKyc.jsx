import React from 'react';

export default function ShowDKyc({ v }) {
  return (<>
{(v.showDKyc) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 231px", minWidth: "0" }}>{' '}
<div style={{ padding: "0 0 12px 10px", maxWidth: "190px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#000000" }}>Documents and references</div>
{' '}
<button onClick={v.goHubFromDocs} style={{ font: "inherit", lineHeight: "16px", marginTop: "4px", padding: "0", border: "0", background: "transparent", color: "#575757", textDecoration: "underline", cursor: "pointer" }}>Back to Hub</button>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>KYC documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Stakeholder documents</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Financial documents</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.goHubFromDocs} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>KYC documents</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", opacity: "0.9" }}>Please upload the required documents to continue</p></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
{(v.dKycSecs || []).map((sec, sec__i) => (<React.Fragment key={sec__i}>{' '}
<section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447", opacity: "0.9" }}>{sec.title}</h2>
<p style={{ margin: "0", lineHeight: "20px", color: "#6c7a89" }}>{sec.desc}</p></div>
{' '}
<button onClick={sec.upload} aria-label={sec.uploadAria} style={{ font: "inherit", lineHeight: "16px", alignSelf: "flex-start", height: "56px", padding: "0 24px", border: "1px solid #bbbbbb", borderRadius: "8px", background: "#ffffff", color: "#000000", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "12px" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 396.5 24 24" fill="none"><path d="M456 411.091L456 399M460.318 402.455L456 399L451.682 402.455M446.5 412.818V416C446.5 417.105 447.395 418 448.5 418H463.5C464.605 418 465.5 417.105 465.5 416V412.818" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></svg>
{sec.uploadLabel}</button>
{' '}
{(sec.files || []).map((f, f__i) => (<React.Fragment key={f__i}>{' '}
{(f.ok) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 640 24 24" fill="none"><defs><mask id="idcheckmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="640" width="24" height="24"><g><g><path d="M456 642C461.523 642 466 646.477 466 652C466 657.523 461.523 662 456 662C450.477 662 446 657.523 446 652C446 646.477 450.477 642 456 642ZM461.354 648.646C461.158 648.451 460.842 648.451 460.646 648.646L454.354 654.939C454.158 655.135 453.842 655.135 453.646 654.939L451.354 652.646C451.158 652.451 450.842 652.451 450.646 652.646C450.451 652.842 450.451 653.158 450.646 653.354L452.939 655.646C453.525 656.232 454.475 656.232 455.061 655.646L461.354 649.354C461.549 649.158 461.549 648.842 461.354 648.646Z" fill="#266300"></path></g></g></mask></defs>
<g mask="url(#idcheckmask1_11890_43994)"><rect x="444" y="640" width="24" height="24" fill="#1B5145"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<button style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Preview document</button>
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
<span style={{ color: "#b00000" }}>{f.info}</span></div>
{(f.removable) ? (<><button onClick={f.remove} aria-label={f.removeLabel} style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="980 1158 16 16" fill="none"><defs><mask id="idxmask3_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="980" y="1158" width="16" height="16"><g><g><path d="M993.666 1160.33L982.333 1171.67M982.333 1160.33L993.666 1171.67" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g mask="url(#idxmask3_11890_43994)"><rect x="980" y="1158" width="16" height="16" fill="#182F7C"></rect></g></svg></button></>) : null}</div>
{' '}</>) : null}
{' '}
{(f.warn) ? (<>{' '}
<div style={{ boxSizing: "border-box", minHeight: "72px", padding: "15px 23px", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #bbbbbb" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="444 1834 24 24" fill="none"><defs><mask id="idwarnmask4_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="444" y="1834" width="24" height="24"><g><g><path d="M455.168 1836.5C455.524 1835.83 456.476 1835.83 456.832 1836.5L465.887 1853.59C466.224 1854.23 465.768 1855 465.055 1855H446.945C446.232 1855 445.776 1854.23 446.113 1853.59L455.168 1836.5ZM456 1851C455.724 1851 455.5 1851.22 455.5 1851.5V1852.5C455.5 1852.78 455.724 1853 456 1853C456.276 1853 456.5 1852.78 456.5 1852.5V1851.5C456.5 1851.22 456.276 1851 456 1851ZM456 1841C455.724 1841 455.5 1841.22 455.5 1841.5V1849.5C455.5 1849.78 455.724 1850 456 1850C456.276 1850 456.5 1849.78 456.5 1849.5V1841.5C456.5 1841.22 456.276 1841 456 1841Z" fill="#E88524"></path></g></g></mask></defs>
<g mask="url(#idwarnmask4_11890_43994)"><rect x="444" y="1834" width="24" height="24" fill="#E88524"></rect></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ fontWeight: "500", color: "#000000", overflowWrap: "anywhere" }}>{f.name}</span>
<span style={{ color: "#575757" }}>Document type couldn’t be identified</span>
<button onClick={f.categorize} style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left" }}>Categorize document</button></div>
{(f.removable) ? (<><button onClick={f.remove} aria-label={f.removeLabel} style={{ flex: "none", width: "24px", height: "24px", padding: "0", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="16" height="16" viewBox="980 1158 16 16" fill="none"><defs><mask id="idxmask3_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="980" y="1158" width="16" height="16"><g><g><path d="M993.666 1160.33L982.333 1171.67M982.333 1160.33L993.666 1171.67" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g mask="url(#idxmask3_11890_43994)"><rect x="980" y="1158" width="16" height="16" fill="#182F7C"></rect></g></svg></button></>) : null}</div>
{' '}</>) : null}
{' '}</React.Fragment>))}
{' '}
{(sec.showConfirm) ? (<><div style={{ marginTop: "8px", padding: "0 9px", display: "flex", alignItems: "center", gap: "8px" }}><button role="checkbox" aria-checked={sec.box.on} aria-label="I confirm that I have reviewed and verified the original documents" onClick={sec.box.toggle} style={{ flex: "none", width: "24px", height: "24px", padding: "3px", border: "0", borderRadius: "6px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{' '}
{(sec.box.checked) ? (<><svg aria-hidden="true" width="18" height="18" viewBox="983 503 18 18" fill="none"><path d="M997 503C999.209 503 1001 504.791 1001 507V517C1001 519.209 999.209 521 997 521H987C984.791 521 983 519.209 983 517V507C983 504.791 984.791 503 987 503H997ZM997.707 508.293C997.317 507.902 996.683 507.902 996.293 508.293L991 513.586L988.207 510.793C987.817 510.402 987.183 510.402 986.793 510.793C986.402 511.183 986.402 511.817 986.793 512.207L989.586 515C990.367 515.781 991.633 515.781 992.414 515L997.707 509.707C998.098 509.317 998.098 508.683 997.707 508.293Z" fill="#182F7C"></path></svg></>) : null}
{' '}
{(sec.box.unchecked) ? (<><span style={{ width: "18px", height: "18px", boxSizing: "border-box", border: "1px solid #182f7c", borderRadius: "4px", background: "#ffffff" }}></span></>) : null}
{' '}</button>
<span style={{ lineHeight: "20px", color: "#000000" }}>I confirm that I have reviewed and verified the original documents</span></div></>) : null}
{' '}</section>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button disabled={v.dKycBlocked} onClick={v.dKycContinue} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.dKycBg}`, cursor: `${v.dKycCursor}` }}>Continue</button></div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 231px", minWidth: "0" }}></div>
{' '}</div>
{' '}
{(v.dCatOpen) ? (<>{' '}
<div style={{ position: "fixed", inset: "0", zIndex: "10", background: "rgba(0,0,0,0.32)", display: "flex", justifyContent: "center", alignItems: "center", padding: "18px 16px", boxSizing: "border-box", overflowY: "auto" }}>{' '}
<button onClick={v.dCatClose} aria-label="Close" tabIndex="-1" style={{ position: "fixed", inset: "0", border: "0", background: "transparent", cursor: "default" }}></button>
{' '}
<div role="dialog" aria-modal="true" aria-labelledby="dcat-title" style={{ position: "relative", width: "100%", maxWidth: "648px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ padding: "24px 32px 15px", borderBottom: "1px solid #d7dae5" }}><h2 id="dcat-title" style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Categorise document type</h2></div>
{' '}
<div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "32px" }}>{' '}
<div style={{ padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "20px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 2.01V4.5C15.5 5.60 16.39 6.5 17.5 6.5H19.94M7.5 17H16.5M7.5 14H16.5M7.5 11H16.5M8.26 22H15.73C18.08 22 20 20.11 20 17.78V7.16C20 6.53 19.86 5.91 19.53 5.37C18.64 3.93 17.50 2.81 16.32 2.24C15.94 2.05 15.51 2 15.09 2H8.26C5.91 2 4 3.88 4 6.21V17.78C4 20.11 5.91 22 8.26 22Z" stroke="#182f7c" strokeLinecap="round"></path></svg></span>
<span style={{ fontWeight: "500", lineHeight: "16px", color: "#000000", overflowWrap: "anywhere" }}>{v.dCatName}</span></div>
{' '}
<div style={{ alignSelf: "center", width: "100%", maxWidth: "311px", display: "flex", flexDirection: "column" }}><label htmlFor="dcat-type" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>What document is this?</label>
<input id="dcat-type" type="text" autoComplete="off" placeholder="Enter document type" value={v.dCatType} onChange={v.setDCatType} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}</div>
{' '}
<div style={{ padding: "23px 32px 24px", borderTop: "1px solid #d7dae5", display: "flex", justifyContent: "flex-end" }}><button disabled={v.dCatBlocked} onClick={v.dCatSave} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.dCatBg}`, cursor: `${v.dCatCursor}` }}>Save &amp; continue</button></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</>) : null}
  </>);
}
