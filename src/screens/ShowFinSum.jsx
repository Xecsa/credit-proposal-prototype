import React from 'react';

export default function ShowFinSum({ v }) {
  return (<>
{(v.showFinSum) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "24px 56px 80px 33px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "none", width: "218px", marginTop: "14px" }}>{' '}
<div style={{ padding: "0 0 12px 10px", maxWidth: "206px" }}>{' '}
<div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "600", color: "#000000" }}>Financial analysis</div>
{' '}
<button onClick={v.finHub} style={{ font: "inherit", lineHeight: "16px", marginTop: "4px", padding: "0", border: "0", background: "transparent", color: "#575757", textDecoration: "underline", cursor: "pointer" }}>Back to Hub</button>
{' '}</div>
{' '}
<ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}><li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Financial Spreading</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Entity Selection</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Risk Ratios</span></li>
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#f4f7fe"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#c4c8d6"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Risk Ratings</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "1 1 600px", minWidth: "0", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "24px", borderRadius: "8px", background: "#ffffff", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>{' '}
<div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}><h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Financial spreading summary</h1>
<button style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", fontWeight: "500", padding: "0", border: "0", background: "transparent", color: "#2765ff", opacity: "0.9", cursor: "pointer", textAlign: "left" }}>Download Financial analysis report</button></div>
{' '}
<button onClick={v.finToEntity} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer", whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="959.7 119.2 20.5 20.5" fill="none"><defs><clipPath id="ifbtnclip0_11890_43994"><rect width="1440" height="4810" fill="white" transform="scale(0.851559)"></rect></clipPath>
<clipPath id="ifbtnclip1_11890_43994"><path d="M946.082 122.625C946.082 116.202 946.082 112.99 948.078 110.995C950.073 109 953.284 109 959.707 109H1144.5C1150.92 109 1154.13 109 1156.13 110.995C1158.12 112.99 1158.12 116.202 1158.12 122.625V136.249C1158.12 142.672 1158.12 145.884 1156.13 147.879C1154.13 149.874 1150.92 149.874 1144.5 149.874H959.707C953.284 149.874 950.073 149.874 948.078 147.879C946.082 145.884 946.082 142.672 946.082 136.249V122.625Z" fill="white"></path></clipPath>
<mask id="ifbtnmask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="959" y="119" width="22" height="21"><g><g><path d="M976.313 123.05C977.488 123.05 978.442 124.003 978.442 125.179V133.695C978.442 134.871 977.488 135.824 976.313 135.824H963.539C962.364 135.824 961.41 134.871 961.41 133.695V125.179C961.41 124.003 962.364 123.05 963.539 123.05H976.313ZM962.262 133.695C962.262 134.4 962.834 134.972 963.539 134.972H976.313C977.018 134.972 977.59 134.4 977.59 133.695V127.939H962.262V133.695ZM963.539 123.902C962.834 123.902 962.262 124.474 962.262 125.179V127.088H977.59V125.179C977.59 124.474 977.018 123.902 976.313 123.902H963.539ZM965.242 124.753C965.713 124.753 966.094 125.135 966.094 125.605C966.094 126.075 965.713 126.457 965.242 126.457C964.772 126.457 964.391 126.075 964.391 125.605C964.391 125.135 964.772 124.753 965.242 124.753ZM967.797 124.753C968.267 124.753 968.649 125.135 968.649 125.605C968.649 126.075 968.267 126.457 967.797 126.457C967.327 126.457 966.946 126.075 966.946 125.605C966.946 125.135 967.327 124.753 967.797 124.753ZM975.064 125.179C975.3 125.179 975.49 125.37 975.49 125.605C975.49 125.84 975.3 126.031 975.064 126.031H971.453C971.218 126.031 971.027 125.84 971.027 125.605C971.027 125.37 971.218 125.179 971.453 125.179H975.064Z" fill="#182F7C"></path></g></g></mask></defs>
<g clipPath="url(#ifbtnclip0_11890_43994)"><g clipPath="url(#ifbtnclip1_11890_43994)"><g mask="url(#ifbtnmask0_11890_43994)"><rect x="959.707" y="119.218" width="20.4374" height="20.4374" fill="white"></rect></g></g></g></svg></span>
Continue to entity selection</button>
{' '}</div>
{' '}
<div style={{ marginTop: "31px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}><div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Current assets</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>43,394,002 AED</div></div>
<div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Non-current Assets</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>38,273,191 AED</div></div>
<div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Current liabilities</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>18,393,112 AED</div></div>
<div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Non-current liabilities</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>57,332,392 AED</div></div>
<div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Non-current liabilities</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>57,332,392 AED</div></div>
<div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Non-current liabilities</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>57,332,392 AED</div></div>
<div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Non-current liabilities</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>57,332,392 AED</div></div>
<div style={{ boxSizing: "border-box", height: "112px", padding: "13px 16px 16px", borderRadius: "8px", background: "#ffffff", color: "#000000" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Non-current liabilities</div>
<div style={{ marginTop: "27px", fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>57,332,392 AED</div></div></div>
{' '}
<h2 style={{ margin: "31px 0 24px", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Statement Metadata</h2>
{' '}
<div style={{ overflowX: "auto" }}><div role="table" aria-label="Statements" style={{ boxSizing: "border-box", minWidth: "760px", border: "1px solid #e5e5e5", borderRadius: "2px", background: "#ffffff", lineHeight: "20px", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", height: "48px", padding: "12px 8px", borderBottom: "1px solid #e5e5e5", fontSize: "20px", lineHeight: "24px" }}>Statements</div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="columnheader" aria-label="Expand" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>Date</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2023</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>2025</div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Method</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Accountant</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,012,148</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,725,402</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>55,593,804</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Analyst</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>27,633,232</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>58,200,003</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>40,468,814</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Statement type</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64,253,647</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>48,367,488</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>48,140,857</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Accounting stnadard</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>79,582,434</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>74,501,918</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>32,799,574</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Status</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>56,515,233</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>53,611,098</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>67,117,049</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Consolidation</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>88,454,530</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>29,199,751</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>88,645,477</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Currency</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>99,344,533</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>38,951,971</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>60,340,585</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Restated</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>82,667,659</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>84,236,023</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>55,557,773</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Auditor Grade</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>67,052,342</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64,810,583</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>43,431,685</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Reconcile to</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>87,801,782</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>99,109,702</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>84,553,630</span></div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 799fr" }}><div role="cell" style={{ height: "32px", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", padding: "0 8px", borderRight: "1px solid #e5e5e5", display: "flex", alignItems: "center" }}>Document</div>
<div role="cell"></div></div>
{' '}</div></div>
{' '}
<h2 style={{ margin: "64px 0 24px", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Current assets | 43,394,002 AED{' '}</h2>
{' '}
<div style={{ overflowX: "auto" }}><div role="table" aria-label="Current Assets" style={{ boxSizing: "border-box", minWidth: "760px", border: "1px solid #e5e5e5", borderRadius: "2px", background: "#ffffff", lineHeight: "20px", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", height: "48px", padding: "12px 8px", borderBottom: "1px solid #e5e5e5", fontSize: "20px", lineHeight: "24px" }}>Current Assets</div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="columnheader" aria-label="Expand" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>Description</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2023</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>2025</div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Cash in hand &amp; banks</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Time/margin/call Deposits</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,012,148</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,725,402</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>55,593,804</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Cash held in Escrows</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>27,633,232</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>58,200,003</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>40,468,814</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Encumbered cash</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64,253,647</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>48,367,488</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>48,140,857</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Marketable Securities (shares/bonds)-AFS</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>79,582,434</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>74,501,918</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>32,799,574</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Accounts/Bills/Notes Receivable - Trade</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>56,515,233</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>53,611,098</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>67,117,049</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Retentions Receivable (less than 1 year)</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>88,454,530</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>29,199,751</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>88,645,477</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Post Dated Cheques</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>99,344,533</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>38,951,971</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>60,340,585</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Advance to Suppliers/Prepayments</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>82,667,659</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>84,236,023</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>55,557,773</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Loans to Affiliates - Current Portion</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>67,052,342</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64,810,583</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>43,431,685</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Due from Affiliates - Current Portion</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>87,801,782</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>99,109,702</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>84,553,630</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Accounts Receivable - Non Trade</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>72,358,325</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>44,682,614</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>75,446,197</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Bad Debt Reserve (-)</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>47,274,721</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>59,051,577</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>37,586,179</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Other provis.-Impair.,slow mov.items etc</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>89,799,814</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>93,371,635</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>19,622,239</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Other Operating Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>95,074,543</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>18,381,207</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>10,756,078</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Costs in Excess of Billings</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>94,311,413</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>35,158,845</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>54,050,999</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Income Tax Receivable</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>83,268,220</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>73,462,302</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>34,535,457</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Deferred Inc Tax Recv – Current Portion</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>67,730,305</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>45,152,708</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>9,303,472</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Prepaid Exp/Deferred Inc-Accruals-CP</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>10,341,584</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>79,011,866</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>76,746,704</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Operating Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>75,648,757</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>54,012,110</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>83,856,173</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Derivative Assets - CP</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>63,746,197</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>40,308,692</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>75,405,130</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Non Operating Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>42,253,392</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>59,194,977</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>69,422,004</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}><svg aria-hidden="true" width="20" height="20" viewBox="246.1 1658.8 17.1 17.1" fill="none"><defs><clipPath id="ifchevdclip0_11890_43994"><rect width="1440" height="4810" fill="white" transform="scale(0.851559)"></rect></clipPath>
<clipPath id="ifchevdclip16_11890_43994"><path d="M240.991 987.809C240.991 986.868 241.754 986.106 242.694 986.106H1174.3C1175.24 986.106 1176 986.868 1176 987.809V1979.02C1176 1979.96 1175.24 1980.73 1174.3 1980.73H242.694C241.754 1980.73 240.991 1979.96 240.991 1979.02V987.809Z" fill="white"></path></clipPath>
<clipPath id="ifchevdclip22_11890_43994"><path d="M240.991 1462.98H268.241V1680.98H240.991V1462.98Z" fill="white"></path></clipPath>
<mask id="ifchevdmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="246" y="1658" width="18" height="18"><g><g><path d="M248.23 1664.51L254.616 1670.9L261.003 1664.51" stroke="#182F7C" strokeWidth="0.851559" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g clipPath="url(#ifchevdclip0_11890_43994)"><g clipPath="url(#ifchevdclip16_11890_43994)"><g clipPath="url(#ifchevdclip22_11890_43994)"><g mask="url(#ifchevdmask1_11890_43994)"><rect x="246.101" y="1658.84" width="17.0312" height="17.0312" fill="#182F7C"></rect></g></g></g></g></svg></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Total Inventory¹</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>83,179,370</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>48,612,848</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>7,179,735</span></div></div>
<div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "299fr 799fr" }}><div style={{ boxSizing: "border-box", borderBottom: "0", height: "32px", borderRight: "1px solid #e5e5e5" }}></div>
<div></div></div>
<div style={{ boxSizing: "border-box", padding: "16px 16px 24px 24px", background: "#f9fafb" }}>{' '}
<div style={{ height: "56px", display: "flex", alignItems: "center", gap: "4px", fontSize: "20px", lineHeight: "24px" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="261.4 1735.5 20.5 20.5" fill="none"><defs><clipPath id="ifarrowclip0_11890_43994"><rect width="1440" height="4810" fill="white" transform="scale(0.851559)"></rect></clipPath>
<clipPath id="ifarrowclip16_11890_43994"><path d="M240.991 987.809C240.991 986.868 241.754 986.106 242.694 986.106H1174.3C1175.24 986.106 1176 986.868 1176 987.809V1979.02C1176 1979.96 1175.24 1980.73 1174.3 1980.73H242.694C241.754 1980.73 240.991 1979.96 240.991 1979.02V987.809Z" fill="white"></path></clipPath>
<mask id="ifarrowmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="261" y="1735" width="21" height="21"><g><g clipPath="url(#ifarrowclip27_11890_43994)"><path d="M266.112 1739.31V1747.83H275.377L274.648 1747.1L271.892 1744.35L272.499 1743.74L277.006 1748.25L272.499 1752.76L271.892 1752.15L274.648 1749.4L275.377 1748.68H265.261V1739.31H266.112Z" fill="#182F7C" stroke="#182F7C"></path></g></g></mask>
<clipPath id="ifarrowclip27_11890_43994"><rect width="24" height="24" fill="white" transform="translate(261.429 1735.48) scale(0.851559)"></rect></clipPath></defs>
<g clipPath="url(#ifarrowclip0_11890_43994)"><g clipPath="url(#ifarrowclip16_11890_43994)"><g mask="url(#ifarrowmask2_11890_43994)"><rect x="261.429" y="1735.48" width="20.4374" height="20.4374" fill="#575757"></rect></g></g></g></svg></span>
Total Inventory¹</div>
{' '}
<div role="table" aria-label="Total Inventory\u00b9" style={{ boxSizing: "border-box", border: "1px solid #e5e5e5", borderRadius: "2px", background: "#ffffff" }}>{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>Description</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2025</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>2023</div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Raw Materials</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>142,857</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>167,432</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>95,340</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Work in Process</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>58,320</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>89,150</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>21,567</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Finished Goods</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>191,204</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>12,784</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>154,893</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Goods in transit</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>73,615</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>105,623</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>67,812</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Other Inventory/store &amp; spares</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>126,498</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>48,209</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>118,045</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Supplies &amp; consummables</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>34,971</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>183,076</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>39,726</span></div></div>
{' '}</div>
{' '}</div>
{' '}</div></div>
{' '}
<h2 style={{ margin: "64px 0 34px", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Non-current Assets | 38,273,191 AED</h2>
{' '}
<div style={{ overflowX: "auto" }}><div role="table" aria-label="Non-current assets" style={{ boxSizing: "border-box", minWidth: "760px", border: "1px solid #e5e5e5", borderRadius: "2px", background: "#ffffff", lineHeight: "20px", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", height: "48px", padding: "12px 8px", borderBottom: "1px solid #e5e5e5", fontSize: "20px", lineHeight: "24px" }}>Non-current assets</div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="columnheader" aria-label="Expand" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>Description</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2023</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>2025</div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}><svg aria-hidden="true" width="20" height="20" viewBox="246.1 1658.8 17.1 17.1" fill="none"><defs><clipPath id="ifchevdclip0_11890_43994"><rect width="1440" height="4810" fill="white" transform="scale(0.851559)"></rect></clipPath>
<clipPath id="ifchevdclip16_11890_43994"><path d="M240.991 987.809C240.991 986.868 241.754 986.106 242.694 986.106H1174.3C1175.24 986.106 1176 986.868 1176 987.809V1979.02C1176 1979.96 1175.24 1980.73 1174.3 1980.73H242.694C241.754 1980.73 240.991 1979.96 240.991 1979.02V987.809Z" fill="white"></path></clipPath>
<clipPath id="ifchevdclip22_11890_43994"><path d="M240.991 1462.98H268.241V1680.98H240.991V1462.98Z" fill="white"></path></clipPath>
<mask id="ifchevdmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="246" y="1658" width="18" height="18"><g><g><path d="M248.23 1664.51L254.616 1670.9L261.003 1664.51" stroke="#182F7C" strokeWidth="0.851559" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g clipPath="url(#ifchevdclip0_11890_43994)"><g clipPath="url(#ifchevdclip16_11890_43994)"><g clipPath="url(#ifchevdclip22_11890_43994)"><g mask="url(#ifchevdmask1_11890_43994)"><rect x="246.101" y="1658.84" width="17.0312" height="17.0312" fill="#182F7C"></rect></g></g></g></g></svg></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Total Fixed Assets - Net</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
<div style={{ boxSizing: "border-box", padding: "16px 16px 24px 24px", background: "#f9fafb" }}>{' '}
<div style={{ height: "56px", display: "flex", alignItems: "center", gap: "4px", fontSize: "20px", lineHeight: "24px" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="261.4 1735.5 20.5 20.5" fill="none"><defs><clipPath id="ifarrowclip0_11890_43994"><rect width="1440" height="4810" fill="white" transform="scale(0.851559)"></rect></clipPath>
<clipPath id="ifarrowclip16_11890_43994"><path d="M240.991 987.809C240.991 986.868 241.754 986.106 242.694 986.106H1174.3C1175.24 986.106 1176 986.868 1176 987.809V1979.02C1176 1979.96 1175.24 1980.73 1174.3 1980.73H242.694C241.754 1980.73 240.991 1979.96 240.991 1979.02V987.809Z" fill="white"></path></clipPath>
<mask id="ifarrowmask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="261" y="1735" width="21" height="21"><g><g clipPath="url(#ifarrowclip27_11890_43994)"><path d="M266.112 1739.31V1747.83H275.377L274.648 1747.1L271.892 1744.35L272.499 1743.74L277.006 1748.25L272.499 1752.76L271.892 1752.15L274.648 1749.4L275.377 1748.68H265.261V1739.31H266.112Z" fill="#182F7C" stroke="#182F7C"></path></g></g></mask>
<clipPath id="ifarrowclip27_11890_43994"><rect width="24" height="24" fill="white" transform="translate(261.429 1735.48) scale(0.851559)"></rect></clipPath></defs>
<g clipPath="url(#ifarrowclip0_11890_43994)"><g clipPath="url(#ifarrowclip16_11890_43994)"><g mask="url(#ifarrowmask2_11890_43994)"><rect x="261.429" y="1735.48" width="20.4374" height="20.4374" fill="#575757"></rect></g></g></g></svg></span>
Total Fixed Assets - Net</div>
{' '}
<div role="table" aria-label="Total Fixed Assets - Net" style={{ boxSizing: "border-box", border: "1px solid #e5e5e5", borderRadius: "2px", background: "#ffffff" }}>{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>Description</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2025</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>2023</div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Freehold Land (&amp; Bldg where inseparable)</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>142,857</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>167,432</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>95,340</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Capital Work in Progress</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>58,320</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>89,150</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>21,567</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Buildings &amp; Improvements</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>191,204</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>12,784</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>154,893</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Plant, Machinery &amp; Equipment</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>73,615</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>105,623</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>67,812</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Furniture,Fixture and Office Equipment</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>126,498</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>48,209</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>118,045</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Leasehold Improvements/Decoration</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>34,971</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>183,076</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>39,726</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Vehicles</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64421</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>145630</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>111666</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Capital Leases</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>102840</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>83203</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>137289</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Operating Leases</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>55011</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>61546</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>146231</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "370fr 229fr 229fr 230fr" }}><div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>Accumulated Depreciation</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>140141</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>104826</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "0", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>149172</span></div></div>
{' '}</div>
{' '}</div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Total Fixed Assets - Net</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Loans to Shareholders</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>973136</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>406431</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>664549</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Investment in Subsidiaries/Associates</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>686494</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>515259</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>934745</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Investments</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>982925</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>970239</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>710315</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Investment in land and property</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64823</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>561179</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>826809</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Prepaid Exp/Deferred Inc - Long Term</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>602102</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>68867</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>210624</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Retentions Receivable (&gt;1 year)</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>805386</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>560774</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>964247</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Def Inc Tax Receivable - Long Term</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>77805</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>374165</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>62868</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Derivative Assets - LTP</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>171359</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>194622</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>517987</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Non Operating Non Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>210000</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>614065</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>594176</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Operating Non Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>317383</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>593598</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>943490</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}><span style={{ display: "flex", transform: "rotate(-90deg)" }}><svg aria-hidden="true" width="20" height="20" viewBox="246.1 1658.8 17.1 17.1" fill="none"><defs><clipPath id="ifchevdclip0_11890_43994"><rect width="1440" height="4810" fill="white" transform="scale(0.851559)"></rect></clipPath>
<clipPath id="ifchevdclip16_11890_43994"><path d="M240.991 987.809C240.991 986.868 241.754 986.106 242.694 986.106H1174.3C1175.24 986.106 1176 986.868 1176 987.809V1979.02C1176 1979.96 1175.24 1980.73 1174.3 1980.73H242.694C241.754 1980.73 240.991 1979.96 240.991 1979.02V987.809Z" fill="white"></path></clipPath>
<clipPath id="ifchevdclip22_11890_43994"><path d="M240.991 1462.98H268.241V1680.98H240.991V1462.98Z" fill="white"></path></clipPath>
<mask id="ifchevdmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="246" y="1658" width="18" height="18"><g><g><path d="M248.23 1664.51L254.616 1670.9L261.003 1664.51" stroke="#182F7C" strokeWidth="0.851559" strokeLinecap="round" strokeLinejoin="round"></path></g></g></mask></defs>
<g clipPath="url(#ifchevdclip0_11890_43994)"><g clipPath="url(#ifchevdclip16_11890_43994)"><g clipPath="url(#ifchevdclip22_11890_43994)"><g mask="url(#ifchevdmask1_11890_43994)"><rect x="246.101" y="1658.84" width="17.0312" height="17.0312" fill="#182F7C"></rect></g></g></g></g></svg></span></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Gross Intangibles</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>977980</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>869237</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>975627</span></div></div>
<div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "299fr 799fr" }}><div style={{ height: "32px", borderRight: "1px solid #e5e5e5" }}></div>
<div></div></div>
{' '}</div></div>
{' '}
<h2 style={{ margin: "64px 0 20px", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Current liabilities | 18,393,112 AED{' '}</h2>
{' '}
<div style={{ overflowX: "auto" }}><div role="table" aria-label="Current Liabilities" style={{ boxSizing: "border-box", minWidth: "760px", border: "1px solid #e5e5e5", borderRadius: "2px", background: "#ffffff", lineHeight: "20px", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", height: "48px", padding: "12px 8px", borderBottom: "1px solid #e5e5e5", fontSize: "20px", lineHeight: "24px" }}>Current Liabilities{' '}</div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="columnheader" aria-label="Expand" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>Description</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2023</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>2025</div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Total Fixed Assets - Net</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Total Fixed Assets - Net</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Loans to Shareholders</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>973136</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>406431</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>664549</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Investment in Subsidiaries/Associates</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>686494</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>515259</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>934745</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Investments</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>982925</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>970239</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>710315</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Investment in land and property</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64823</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>561179</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>826809</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Prepaid Exp/Deferred Inc - Long Term</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>602102</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>68867</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>210624</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Retentions Receivable (&gt;1 year)</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>805386</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>560774</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>964247</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Def Inc Tax Receivable - Long Term</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>77805</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>374165</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>62868</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Derivative Assets - LTP</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>171359</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>194622</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>517987</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Non Operating Non Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>210000</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>614065</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>594176</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Operating Non Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>317383</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>593598</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>943490</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Gross Intangibles</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>977980</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>869237</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>975627</span></div></div>
<div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "299fr 799fr" }}><div style={{ height: "32px", borderRight: "1px solid #e5e5e5" }}></div>
<div></div></div>
{' '}</div></div>
{' '}
<h2 style={{ margin: "64px 0 20px", fontSize: "24px", lineHeight: "32px", fontWeight: "500", color: "#000000" }}>Non-current Liabilities | 57,332,392 AED</h2>
{' '}
<div style={{ overflowX: "auto" }}><div role="table" aria-label="Non-current Liabilities" style={{ boxSizing: "border-box", minWidth: "760px", border: "1px solid #e5e5e5", borderRadius: "2px", background: "#ffffff", lineHeight: "20px", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", height: "48px", padding: "12px 8px", borderBottom: "1px solid #e5e5e5", fontSize: "20px", lineHeight: "24px" }}>Non-current Liabilities{' '}</div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="columnheader" aria-label="Expand" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>Description</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2023</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500", borderRight: "1px solid #e5e5e5" }}>2024</div>
<div role="columnheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "6px", fontWeight: "500" }}>2025</div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Total Fixed Assets - Net</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Total Fixed Assets - Net</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>1,330,526</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>81,614,736</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>4,106,184</span></div></div>
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Loans to Shareholders</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>973136</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>406431</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>664549</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Investment in Subsidiaries/Associates</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>686494</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>515259</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>934745</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Investments</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>982925</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>970239</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>710315</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Investment in land and property</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>64823</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>561179</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>826809</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Prepaid Exp/Deferred Inc - Long Term</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>602102</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>68867</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>210624</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Retentions Receivable (&gt;1 year)</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>805386</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>560774</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>964247</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Def Inc Tax Receivable - Long Term</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>77805</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>374165</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>62868</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Derivative Assets - LTP</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>171359</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>194622</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>517987</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Non Operating Non Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>210000</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>614065</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>594176</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Other Operating Non Current Assets</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>317383</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>593598</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>943490</span></div></div>
{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "32px 267fr 267fr 267fr 265fr" }}><div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e5e5" }}></div>
<div role="rowheader" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", borderRight: "1px solid #e5e5e5" }}><span style={{ minWidth: "0", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "clip" }}>Gross Intangibles</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>977980</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px", borderRight: "1px solid #e5e5e5" }}><span aria-hidden="true" className="dh2"></span>
<span>869237</span></div>
<div role="cell" style={{ boxSizing: "border-box", height: "32px", minWidth: "0", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", padding: "0 8px", justifyContent: "flex-end", gap: "10px" }}><span aria-hidden="true" className="dh2"></span>
<span>975627</span></div></div>
<div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "299fr 799fr" }}><div style={{ height: "32px", borderRight: "1px solid #e5e5e5" }}></div>
<div></div></div>
{' '}</div></div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
