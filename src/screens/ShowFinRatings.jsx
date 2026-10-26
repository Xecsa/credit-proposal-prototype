import React from 'react';

export default function ShowFinRatings({ v }) {
  return (<>
{(v.showFinRatings) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", background: "#f1f3f7", color: "#000000" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "38px 33px 80px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start" }}>{' '}
<div className="steps" style={{ flex: "1 0 244px", minWidth: "0" }}>{' '}
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
<li style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.52 2 22 6.47 22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2ZM17.35 8.64C17.15 8.45 16.84 8.45 16.64 8.64L10.35 14.93C10.15 15.13 9.84 15.13 9.64 14.93L7.35 12.64C7.15 12.45 6.84 12.45 6.64 12.64C6.45 12.84 6.45 13.15 6.64 13.35L8.93 15.64C9.52 16.23 10.47 16.23 11.06 15.64L17.35 9.35C17.54 9.15 17.54 8.84 17.35 8.64Z" fill="#5ec05a"></path></svg>
<span aria-hidden="true" style={{ flex: "1", borderLeft: "1px dashed #c4c8d6" }}></span></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", color: "#575757" }}>Risk Ratios</span></li>
<li aria-current="step" style={{ height: "44px", padding: "0 8px", display: "flex", gap: "16px" }}><span style={{ flex: "none", width: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 18.62 5.37 24 12 24C18.62 24 24 18.62 24 12C24 5.37 18.62 0 12 0ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#edf2ff"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.97 3 21 7.02 21 12C21 16.97 16.97 21 12 21C7.02 21 3 16.97 3 12C3 7.02 7.02 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.20 9.79 16 12 16C14.20 16 16 14.20 16 12C16 9.79 14.20 8 12 8Z" fill="#6284f2"></path></svg></span>
<span style={{ paddingTop: "4px", lineHeight: "16px", fontWeight: "500", color: "#000000" }}>Risk Ratings &amp; Other</span></li></ol>
{' '}</div>
{' '}
<div style={{ flex: "0 1 648px", minWidth: "0", marginTop: "2px", display: "flex", flexDirection: "column" }}>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.finBackRatios} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "16px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#000000" }}>Risk ratings</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", opacity: "0.9" }}>Review the risk ratings calculated for this client</p>
<span style={{ alignSelf: "flex-start", boxSizing: "border-box", height: "22px", padding: "4px 8px", borderRadius: "4px", background: "#efe6ff", color: "#820fd9", fontSize: "12px", lineHeight: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="12" height="12" viewBox="441 261 12 12" fill="none"><defs><mask id="ifspark1mask0_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="441" y="261" width="12" height="12"><g><g clipPath="url(#ifspark1clip0_11890_43994)"><path d="M450.911 267.715L448.896 270.973C448.79 271.141 448.632 271.212 448.422 271.188C448.213 271.164 448.085 271.049 448.04 270.844L447.263 267.679L439.9 275.061C439.807 275.155 439.693 275.206 439.559 275.214C439.425 275.222 439.303 275.172 439.192 275.061C439.086 274.955 439.033 274.837 439.033 274.707C439.033 274.578 439.086 274.46 439.192 274.354L446.575 266.965L443.429 266.188C443.224 266.143 443.106 266.019 443.075 265.816C443.044 265.613 443.113 265.458 443.281 265.352L446.538 263.342L446.258 259.517C446.237 259.312 446.316 259.16 446.494 259.061C446.672 258.963 446.842 258.983 447.002 259.123L449.935 261.594L453.479 260.146C453.667 260.064 453.836 260.098 453.986 260.248C454.136 260.398 454.17 260.567 454.089 260.756L452.66 264.3L455.131 267.227C455.271 267.387 455.294 267.559 455.202 267.744C455.11 267.929 454.961 268.011 454.756 267.99L450.911 267.715ZM439.131 261.227C439.044 261.139 439 261.042 439 260.934C439 260.827 439.044 260.729 439.131 260.642L439.835 259.938C439.922 259.851 440.019 259.807 440.127 259.807C440.235 259.807 440.332 259.851 440.419 259.938L441.123 260.642C441.21 260.729 441.254 260.827 441.254 260.934C441.254 261.042 441.21 261.139 441.123 261.227L440.419 261.931C440.332 262.018 440.235 262.061 440.127 262.061C440.019 262.061 439.922 262.018 439.835 261.931L439.131 261.227ZM448.714 269.359L450.375 266.673L453.527 266.906L451.488 264.477L452.671 261.557L449.752 262.74L447.323 260.707L447.556 263.854L444.888 265.521L447.946 266.282L448.714 269.359ZM453.027 275.123L452.323 274.419C452.236 274.332 452.192 274.234 452.192 274.127C452.192 274.019 452.236 273.922 452.323 273.834L453.027 273.131C453.114 273.043 453.212 273 453.319 273C453.427 273 453.524 273.043 453.611 273.131L454.316 273.834C454.403 273.922 454.446 274.019 454.446 274.127C454.446 274.234 454.403 274.332 454.316 274.419L453.611 275.123C453.524 275.21 453.427 275.254 453.319 275.254C453.212 275.254 453.114 275.21 453.027 275.123Z" fill="#182F7C"></path></g></g></mask>
<clipPath id="ifspark1clip0_11890_43994"><rect width="12" height="12" fill="white" transform="translate(441 261)"></rect></clipPath></defs>
<g mask="url(#ifspark1mask0_11890_43994)"><rect x="441" y="261" width="12" height="12" fill="#820FD9"></rect></g></svg></span>
Powered by Moody’s</span></div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}><div style={{ boxSizing: "border-box", flex: "1 1 220px", minWidth: "0", padding: "16px", border: "1px solid #c9d6f5", borderRadius: "8px", background: "#f4f7fe", color: "#000000", display: "flex", flexDirection: "column", gap: "16px" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Model grade</div>
<div style={{ fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>5A</div>
<div style={{ lineHeight: "20px" }}><span style={{ fontWeight: "500" }}>41.6286%</span>
{' '}
<span style={{ color: "#575757" }}>Probability of default</span></div></div>
<div style={{ boxSizing: "border-box", flex: "1 1 220px", minWidth: "0", padding: "16px", border: "1px solid #c9d6f5", borderRadius: "8px", background: "#f4f7fe", color: "#000000", display: "flex", flexDirection: "column", gap: "16px" }}><div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>Override grade</div>
<div style={{ fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>4A</div>
<div style={{ lineHeight: "20px" }}><span style={{ fontWeight: "500" }}>5.1941%</span>
{' '}
<span style={{ color: "#575757" }}>Probability of default</span></div></div></div>
{' '}</div>
{' '}
<div style={{ marginTop: "16px", boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#000000" }}>Other documents analysis</h2>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#575757", opacity: "0.9" }}>Review the VAT, AECB, CBRB and Bank Statement analysis in the excel file below</p></div>
{' '}
<div style={{ boxSizing: "border-box", padding: "15px 23px", border: "1px solid #bbbbbb", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center", gap: "16px" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="24" height="24" viewBox="457 661 24 24" fill="none"><defs><clipPath id="ifdocclip3_11890_43994"><rect width="600" height="118" fill="white" transform="translate(433 614)"></rect></clipPath>
<mask id="ifdocmask1_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="457" y="661" width="24" height="24"><g><g><path d="M472.5 663.02V665.5C472.5 666.605 473.395 667.5 474.5 667.5H476.945M464.5 678H473.5M464.5 675H473.5M464.5 672H473.5M465.267 683H472.733C475.09 683 477 681.115 477 678.789V668.166C477 667.538 476.863 666.912 476.533 666.377C475.644 664.934 474.503 663.818 473.326 663.243C472.945 663.056 472.517 663 472.092 663H465.267C462.91 663 461 664.885 461 667.211V678.789C461 681.115 462.91 683 465.267 683Z" stroke="#182F7C" strokeLinecap="round"></path></g></g></mask></defs>
<g clipPath="url(#ifdocclip3_11890_43994)"><g mask="url(#ifdocmask1_11890_43994)"><rect x="457" y="661" width="24" height="24" fill="#182F7C"></rect></g></g></svg></span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "20px" }}><span style={{ lineHeight: "24px", fontWeight: "500", color: "#000000" }}>analysis.xlsx</span>
<span style={{ color: "#575757" }}>Created 12/02/2026</span>
<button type="button" style={{ font: "inherit", lineHeight: "20px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", textAlign: "left", alignSelf: "flex-start" }}>Download and open</button>
<span style={{ alignSelf: "flex-start", boxSizing: "border-box", height: "22px", padding: "4px 8px", borderRadius: "4px", background: "#efe6ff", color: "#820fd9", fontSize: "12px", lineHeight: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}><span aria-hidden="true" style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="12" height="12" viewBox="505 699 12 12" fill="none"><defs><clipPath id="ifspark2clip3_11890_43994"><rect width="600" height="118" fill="white" transform="translate(433 614)"></rect></clipPath>
<mask id="ifspark2mask2_11890_43994" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="505" y="699" width="12" height="12"><g><g><path d="M513.287 705.818C511.065 705.316 510.721 704.972 510.219 702.75C510.196 702.648 510.105 702.576 510.001 702.576C509.897 702.576 509.806 702.648 509.783 702.75C509.281 704.972 508.937 705.316 506.715 705.818C506.613 705.841 506.541 705.932 506.541 706.036C506.541 706.14 506.613 706.231 506.715 706.254C508.937 706.756 509.281 707.1 509.783 709.322C509.806 709.424 509.897 709.496 510.001 709.496C510.105 709.496 510.196 709.424 510.219 709.322C510.721 707.1 511.065 706.756 513.287 706.254C513.389 706.231 513.461 706.14 513.461 706.036C513.461 705.932 513.388 705.841 513.287 705.818Z" fill="#182F7C"></path>
<path d="M515.357 702.35C514.134 702.074 513.962 701.902 513.686 700.68C513.662 700.575 513.569 700.5 513.461 700.5C513.352 700.5 513.259 700.575 513.235 700.68C512.959 701.902 512.787 702.074 511.565 702.35C511.459 702.374 511.385 702.468 511.385 702.576C511.385 702.684 511.459 702.777 511.565 702.801C512.787 703.077 512.959 703.249 513.235 704.472C513.259 704.577 513.352 704.652 513.461 704.652C513.569 704.652 513.662 704.577 513.686 704.472C513.962 703.249 514.134 703.077 515.357 702.801C515.462 702.777 515.537 702.684 515.537 702.576C515.537 702.468 515.462 702.374 515.357 702.35Z" fill="#182F7C"></path></g></g></mask></defs>
<g clipPath="url(#ifspark2clip3_11890_43994)"><g mask="url(#ifspark2mask2_11890_43994)"><rect x="505" y="699" width="12" height="12" fill="#820FD9"></rect></g></g></svg></span>
Perfios output</span></div></div>
{' '}</div>
{' '}
<div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}><button onClick={v.finSubmit} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)", cursor: "pointer", width: "200px" }}>Submit</button></div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ flex: "1 0 218px", minWidth: "0" }}></div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
