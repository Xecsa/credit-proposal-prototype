import React from 'react';
import img_2f361bdfa2 from '../assets/2f361bdfa21630f52b5ebfd36f6c2f7c.png';
import img_d02549cd8e from '../assets/d02549cd8eeb7d417260cfa40882c3b3.png';

export default function ShIsDocs({ v }) {
  return (<>
{(v.shIsDocs) ? (<>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.shBack} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>{v.shDocsTitle}</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>Upload each document as an individual file. They will be categorized accordingly.</p></div>
{' '}
{(v.shExisting) ? (<><div style={{ padding: "12px", display: "flex", gap: "16px", alignItems: "flex-start" }}><span aria-hidden="true" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "8px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.4px", color: "#072447" }}>AA</span>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", paddingTop: "2px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Ahmed Al-Hassan</div>
<div style={{ lineHeight: "16px", color: "#575757", overflowWrap: "anywhere" }}>50%&nbsp; Shareholder - GETAX</div></div></div></>) : null}
{' '}
{(v.shAdding) ? (<>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><h2 style={{ margin: "0", fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#072447" }}>Stakeholder type</h2>
{' '}
<div role="radiogroup" aria-label="Stakeholder type" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}><button role="radio" aria-checked={v.shTypes.sh.on} onClick={v.shTypes.sh.pick} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", textAlign: "left", flex: "1 1 240px", minWidth: "0", height: "88px", boxSizing: "border-box", padding: "0 16px 0 22px", border: `1px solid ${v.shTypes.sh.line}`, borderRadius: "8px", background: `${v.shTypes.sh.bg}`, color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px" }}><img alt="" src={img_2f361bdfa2} style={{ flex: "none", width: "64px", height: "64px", mixBlendMode: "multiply" }} />
Shareholder</button>
<button role="radio" aria-checked={v.shTypes.poa.on} onClick={v.shTypes.poa.pick} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", textAlign: "left", flex: "1.2 1 280px", minWidth: "0", height: "88px", boxSizing: "border-box", padding: "0 16px 0 22px", border: `1px solid ${v.shTypes.poa.line}`, borderRadius: "8px", background: `${v.shTypes.poa.bg}`, color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px" }}><img alt="" src={img_d02549cd8e} style={{ flex: "none", width: "64px", height: "64px", mixBlendMode: "multiply" }} />
Power of Attorney (POA)</button></div></div>
{' '}</>) : null}
{' '}
<div style={{ padding: "8px 0" }}><div style={{ display: "flex", gap: "16px", alignItems: "flex-start", justifyContent: "space-between" }}><div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>{v.shUaeLabel}</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>{v.shUaeBody}</div></div>
<button role="switch" aria-checked={v.shT.uae.on} aria-label={v.shUaeLabel} onClick={v.shT.uae.toggle} style={{ flex: "none", position: "relative", width: "56px", height: "32px", padding: "0", border: "0", borderRadius: "16px", background: "#dde0ec", cursor: "pointer" }}><span style={{ position: "absolute", top: "2px", left: `${v.shT.uae.left}`, width: "28px", height: "28px", borderRadius: "14px", background: `${v.shT.uae.bg}`, boxShadow: "0 1px 3px rgba(0,0,0,0.16)", transition: "left 0.15s" }}></span></button></div></div>
{' '}
<button onClick={v.shUpload} style={{ font: "inherit", textAlign: "left", width: "100%", minHeight: "88px", boxSizing: "border-box", padding: "24px", border: "1px dashed #9e9e9e", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", color: "#000000" }}>{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="37" height="37" viewBox="0 0 37 37" fill="none"><path d="M24.15 24.15L18.11 18.11L12.07 24.15M18.11 18.11V31.70M30.78 27.76C32.25 26.96 33.41 25.69 34.09 24.15C34.76 22.61 34.89 20.89 34.48 19.27C34.07 17.64 33.12 16.20 31.80 15.17C30.48 14.14 28.85 13.58 27.17 13.58H25.27C24.81 11.81 23.96 10.17 22.78 8.78C21.59 7.39 20.11 6.29 18.44 5.55C16.77 4.82 14.95 4.47 13.13 4.54C11.31 4.60 9.52 5.08 7.91 5.94C6.30 6.80 4.90 8.01 3.82 9.48C2.75 10.96 2.02 12.65 1.69 14.45C1.37 16.25 1.45 18.09 1.94 19.85C2.43 21.61 3.32 23.24 4.52 24.60" stroke="#9e9e9e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}
<span style={{ display: "flex", flexDirection: "column", gap: "8px", lineHeight: "16px" }}><span style={{ fontWeight: "500" }}>Click or drag file here to upload</span>
<span style={{ color: "#575757" }}>Max. file size: 10 MB. Supported formats: JPG, PNG, PDF.</span></span>
{' '}</button>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<h2 style={{ margin: "0", fontSize: "20px", lineHeight: "28px", fontWeight: "400", color: "#072447" }}>List of documents</h2>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<div style={{ position: "relative", padding: "12px 16px", display: "flex", gap: "16px", alignItems: "center" }}>{' '}
<span style={{ flex: "none", position: "relative", width: "48px", height: "48px", borderRadius: "24px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 2.01V4.5C15.5 5.60 16.39 6.5 17.5 6.5H19.94M7.5 17H16.5M7.5 14H16.5M7.5 11H16.5M8.26 22H15.73C18.08 22 20 20.11 20 17.78V7.16C20 6.53 19.86 5.91 19.53 5.37C18.64 3.93 17.50 2.81 16.32 2.24C15.94 2.05 15.51 2 15.09 2H8.26C5.91 2 4 3.88 4 6.21V17.78C4 20.11 5.91 22 8.26 22Z" stroke="#182f7c" strokeLinecap="round"></path></svg>
{' '}
{(v.shUploaded) ? (<><span style={{ position: "absolute", left: "30px", top: "30px", display: "flex", filter: "drop-shadow(0 1px 2px rgba(10,10,13,0.05))" }}><svg aria-hidden="true" width="20" height="20" viewBox="4 3 20 20" fill="none"><path d="M4 5C4 3.89 4.89 3 6 3H22C23.10 3 24 3.89 24 5V21C24 22.10 23.10 23 22 23H6C4.89 23 4 22.10 4 21V5Z" fill="white"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M13.99 6.33C17.68 6.33 20.66 9.31 20.66 13C20.66 16.68 17.68 19.66 13.99 19.66C10.31 19.66 7.33 16.68 7.33 13C7.33 9.31 10.31 6.33 13.99 6.33ZM17.68 10.64C17.49 10.45 17.17 10.45 16.97 10.64L13.01 14.60C12.82 14.80 12.50 14.80 12.31 14.60L11.01 13.31C10.82 13.11 10.50 13.11 10.31 13.31C10.11 13.50 10.11 13.82 10.31 14.02L11.60 15.31C12.19 15.89 13.14 15.89 13.72 15.31L17.68 11.35C17.88 11.15 17.88 10.84 17.68 10.64Z" fill="#1b5145"></path></svg></span></>) : null}</span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Emirates ID front</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>The front side of a valid Emirates ID</div></div>
{' '}
<button onClick={v.shMenus.front.toggle} aria-label="Actions for Emirates ID front" aria-haspopup="menu" aria-expanded={v.shMenus.front.expanded} style={{ flex: "none", width: "24px", height: "40px", padding: "8px 0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "flex-start", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.5 4C13.5 4.82 12.82 5.5 12 5.5C11.17 5.5 10.5 4.82 10.5 4C10.5 3.17 11.17 2.5 12 2.5C12.82 2.5 13.5 3.17 13.5 4ZM13.5 12C13.5 12.82 12.82 13.5 12 13.5C11.17 13.5 10.5 12.82 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.82 10.5 13.5 11.17 13.5 12ZM13.5 20C13.5 20.82 12.82 21.5 12 21.5C11.17 21.5 10.5 20.82 10.5 20C10.5 19.17 11.17 18.5 12 18.5C12.82 18.5 13.5 19.17 13.5 20Z" fill="#182f7c" stroke="#182f7c"></path></svg></button>
{' '}
{(v.shMenus.front.open) ? (<>{' '}
<div role="menu" style={{ position: "absolute", top: "12px", left: "calc(100% + 40px)", zIndex: "3", width: "209px", background: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}>{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.00 15.09L12.00 3M16.31 6.45L12.00 3L7.68 6.45M2.5 16.81V20C2.5 21.10 3.39 22 4.5 22H19.5C20.60 22 21.5 21.10 21.5 20V16.81" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Upload</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 12C15 13.65 13.65 15 12 15C10.34 15 9 13.65 9 12C9 10.34 10.34 9 12 9C13.65 9 15 10.34 15 12Z" stroke="#182f7c"></path>
<path d="M21.5 12.5C21.5 14.5 16.5 18.5 12 18.5C7.5 18.5 2.5 14.5 2.5 12.5C2.5 10.5 7 5.5 12 5.5C17 5.5 21.5 10.5 21.5 12.5Z" stroke="#182f7c"></path></svg>
View</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#b00000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 8.5V17.5C18.5 19.70 16.70 21.5 14.5 21.5H9.5C7.29 21.5 5.5 19.70 5.5 17.5V8.5M18.5 8.5H19C19.82 8.5 20.5 7.82 20.5 7C20.5 6.17 19.82 5.5 19 5.5H16.5M18.5 8.5H5.5M5.5 8.5H5C4.17 8.5 3.5 7.82 3.5 7C3.5 6.17 4.17 5.5 5 5.5H7.5M7.5 5.5H16.5M7.5 5.5C7.5 3.84 8.84 2.5 10.5 2.5H13.5C15.15 2.5 16.5 3.84 16.5 5.5M8.5 11.5V17.5M12 11.5V17.5M15.5 11.5V17.5" stroke="#9d0000" strokeLinecap="round"></path></svg>
Delete</button>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
<div style={{ position: "relative", padding: "12px 16px", display: "flex", gap: "16px", alignItems: "center" }}>{' '}
<span style={{ flex: "none", position: "relative", width: "48px", height: "48px", borderRadius: "24px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 2.01V4.5C15.5 5.60 16.39 6.5 17.5 6.5H19.94M7.5 17H16.5M7.5 14H16.5M7.5 11H16.5M8.26 22H15.73C18.08 22 20 20.11 20 17.78V7.16C20 6.53 19.86 5.91 19.53 5.37C18.64 3.93 17.50 2.81 16.32 2.24C15.94 2.05 15.51 2 15.09 2H8.26C5.91 2 4 3.88 4 6.21V17.78C4 20.11 5.91 22 8.26 22Z" stroke="#182f7c" strokeLinecap="round"></path></svg>
{' '}
{(v.shUploaded) ? (<><span style={{ position: "absolute", left: "30px", top: "30px", display: "flex", filter: "drop-shadow(0 1px 2px rgba(10,10,13,0.05))" }}><svg aria-hidden="true" width="20" height="20" viewBox="4 3 20 20" fill="none"><path d="M4 5C4 3.89 4.89 3 6 3H22C23.10 3 24 3.89 24 5V21C24 22.10 23.10 23 22 23H6C4.89 23 4 22.10 4 21V5Z" fill="white"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M13.99 6.33C17.68 6.33 20.66 9.31 20.66 13C20.66 16.68 17.68 19.66 13.99 19.66C10.31 19.66 7.33 16.68 7.33 13C7.33 9.31 10.31 6.33 13.99 6.33ZM17.68 10.64C17.49 10.45 17.17 10.45 16.97 10.64L13.01 14.60C12.82 14.80 12.50 14.80 12.31 14.60L11.01 13.31C10.82 13.11 10.50 13.11 10.31 13.31C10.11 13.50 10.11 13.82 10.31 14.02L11.60 15.31C12.19 15.89 13.14 15.89 13.72 15.31L17.68 11.35C17.88 11.15 17.88 10.84 17.68 10.64Z" fill="#1b5145"></path></svg></span></>) : null}</span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Emirates ID back</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>The back side of a valid Emirates ID</div></div>
{' '}
<button onClick={v.shMenus.back.toggle} aria-label="Actions for Emirates ID back" aria-haspopup="menu" aria-expanded={v.shMenus.back.expanded} style={{ flex: "none", width: "24px", height: "40px", padding: "8px 0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "flex-start", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.5 4C13.5 4.82 12.82 5.5 12 5.5C11.17 5.5 10.5 4.82 10.5 4C10.5 3.17 11.17 2.5 12 2.5C12.82 2.5 13.5 3.17 13.5 4ZM13.5 12C13.5 12.82 12.82 13.5 12 13.5C11.17 13.5 10.5 12.82 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.82 10.5 13.5 11.17 13.5 12ZM13.5 20C13.5 20.82 12.82 21.5 12 21.5C11.17 21.5 10.5 20.82 10.5 20C10.5 19.17 11.17 18.5 12 18.5C12.82 18.5 13.5 19.17 13.5 20Z" fill="#182f7c" stroke="#182f7c"></path></svg></button>
{' '}
{(v.shMenus.back.open) ? (<>{' '}
<div role="menu" style={{ position: "absolute", top: "12px", left: "calc(100% + 40px)", zIndex: "3", width: "209px", background: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}>{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.00 15.09L12.00 3M16.31 6.45L12.00 3L7.68 6.45M2.5 16.81V20C2.5 21.10 3.39 22 4.5 22H19.5C20.60 22 21.5 21.10 21.5 20V16.81" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Upload</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 12C15 13.65 13.65 15 12 15C10.34 15 9 13.65 9 12C9 10.34 10.34 9 12 9C13.65 9 15 10.34 15 12Z" stroke="#182f7c"></path>
<path d="M21.5 12.5C21.5 14.5 16.5 18.5 12 18.5C7.5 18.5 2.5 14.5 2.5 12.5C2.5 10.5 7 5.5 12 5.5C17 5.5 21.5 10.5 21.5 12.5Z" stroke="#182f7c"></path></svg>
View</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#b00000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 8.5V17.5C18.5 19.70 16.70 21.5 14.5 21.5H9.5C7.29 21.5 5.5 19.70 5.5 17.5V8.5M18.5 8.5H19C19.82 8.5 20.5 7.82 20.5 7C20.5 6.17 19.82 5.5 19 5.5H16.5M18.5 8.5H5.5M5.5 8.5H5C4.17 8.5 3.5 7.82 3.5 7C3.5 6.17 4.17 5.5 5 5.5H7.5M7.5 5.5H16.5M7.5 5.5C7.5 3.84 8.84 2.5 10.5 2.5H13.5C15.15 2.5 16.5 3.84 16.5 5.5M8.5 11.5V17.5M12 11.5V17.5M15.5 11.5V17.5" stroke="#9d0000" strokeLinecap="round"></path></svg>
Delete</button>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
<div style={{ position: "relative", padding: "12px 16px", display: "flex", gap: "16px", alignItems: "center" }}>{' '}
<span style={{ flex: "none", position: "relative", width: "48px", height: "48px", borderRadius: "24px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 2.01V4.5C15.5 5.60 16.39 6.5 17.5 6.5H19.94M7.5 17H16.5M7.5 14H16.5M7.5 11H16.5M8.26 22H15.73C18.08 22 20 20.11 20 17.78V7.16C20 6.53 19.86 5.91 19.53 5.37C18.64 3.93 17.50 2.81 16.32 2.24C15.94 2.05 15.51 2 15.09 2H8.26C5.91 2 4 3.88 4 6.21V17.78C4 20.11 5.91 22 8.26 22Z" stroke="#182f7c" strokeLinecap="round"></path></svg>
{' '}
{(v.shUploaded) ? (<><span style={{ position: "absolute", left: "30px", top: "30px", display: "flex", filter: "drop-shadow(0 1px 2px rgba(10,10,13,0.05))" }}><svg aria-hidden="true" width="20" height="20" viewBox="4 3 20 20" fill="none"><path d="M4 5C4 3.89 4.89 3 6 3H22C23.10 3 24 3.89 24 5V21C24 22.10 23.10 23 22 23H6C4.89 23 4 22.10 4 21V5Z" fill="white"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M13.99 6.33C17.68 6.33 20.66 9.31 20.66 13C20.66 16.68 17.68 19.66 13.99 19.66C10.31 19.66 7.33 16.68 7.33 13C7.33 9.31 10.31 6.33 13.99 6.33ZM17.68 10.64C17.49 10.45 17.17 10.45 16.97 10.64L13.01 14.60C12.82 14.80 12.50 14.80 12.31 14.60L11.01 13.31C10.82 13.11 10.50 13.11 10.31 13.31C10.11 13.50 10.11 13.82 10.31 14.02L11.60 15.31C12.19 15.89 13.14 15.89 13.72 15.31L17.68 11.35C17.88 11.15 17.88 10.84 17.68 10.64Z" fill="#1b5145"></path></svg></span></>) : null}</span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Passport</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>The first and last pages of a valid passport</div></div>
{' '}
<button onClick={v.shMenus.pass.toggle} aria-label="Actions for Passport" aria-haspopup="menu" aria-expanded={v.shMenus.pass.expanded} style={{ flex: "none", width: "24px", height: "40px", padding: "8px 0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "flex-start", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.5 4C13.5 4.82 12.82 5.5 12 5.5C11.17 5.5 10.5 4.82 10.5 4C10.5 3.17 11.17 2.5 12 2.5C12.82 2.5 13.5 3.17 13.5 4ZM13.5 12C13.5 12.82 12.82 13.5 12 13.5C11.17 13.5 10.5 12.82 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.82 10.5 13.5 11.17 13.5 12ZM13.5 20C13.5 20.82 12.82 21.5 12 21.5C11.17 21.5 10.5 20.82 10.5 20C10.5 19.17 11.17 18.5 12 18.5C12.82 18.5 13.5 19.17 13.5 20Z" fill="#182f7c" stroke="#182f7c"></path></svg></button>
{' '}
{(v.shMenus.pass.open) ? (<>{' '}
<div role="menu" style={{ position: "absolute", top: "12px", left: "calc(100% + 40px)", zIndex: "3", width: "209px", background: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}>{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.00 15.09L12.00 3M16.31 6.45L12.00 3L7.68 6.45M2.5 16.81V20C2.5 21.10 3.39 22 4.5 22H19.5C20.60 22 21.5 21.10 21.5 20V16.81" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Upload</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 12C15 13.65 13.65 15 12 15C10.34 15 9 13.65 9 12C9 10.34 10.34 9 12 9C13.65 9 15 10.34 15 12Z" stroke="#182f7c"></path>
<path d="M21.5 12.5C21.5 14.5 16.5 18.5 12 18.5C7.5 18.5 2.5 14.5 2.5 12.5C2.5 10.5 7 5.5 12 5.5C17 5.5 21.5 10.5 21.5 12.5Z" stroke="#182f7c"></path></svg>
View</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#b00000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 8.5V17.5C18.5 19.70 16.70 21.5 14.5 21.5H9.5C7.29 21.5 5.5 19.70 5.5 17.5V8.5M18.5 8.5H19C19.82 8.5 20.5 7.82 20.5 7C20.5 6.17 19.82 5.5 19 5.5H16.5M18.5 8.5H5.5M5.5 8.5H5C4.17 8.5 3.5 7.82 3.5 7C3.5 6.17 4.17 5.5 5 5.5H7.5M7.5 5.5H16.5M7.5 5.5C7.5 3.84 8.84 2.5 10.5 2.5H13.5C15.15 2.5 16.5 3.84 16.5 5.5M8.5 11.5V17.5M12 11.5V17.5M15.5 11.5V17.5" stroke="#9d0000" strokeLinecap="round"></path></svg>
Delete</button>
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}
{(v.shIsPoa) ? (<><div style={{ position: "relative", padding: "12px 16px", display: "flex", gap: "16px", alignItems: "center" }}>{' '}
<span style={{ flex: "none", position: "relative", width: "48px", height: "48px", borderRadius: "24px", background: "#f4f7fe", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 2.01V4.5C15.5 5.60 16.39 6.5 17.5 6.5H19.94M7.5 17H16.5M7.5 14H16.5M7.5 11H16.5M8.26 22H15.73C18.08 22 20 20.11 20 17.78V7.16C20 6.53 19.86 5.91 19.53 5.37C18.64 3.93 17.50 2.81 16.32 2.24C15.94 2.05 15.51 2 15.09 2H8.26C5.91 2 4 3.88 4 6.21V17.78C4 20.11 5.91 22 8.26 22Z" stroke="#182f7c" strokeLinecap="round"></path></svg>
{' '}
{(v.shUploaded) ? (<><span style={{ position: "absolute", left: "30px", top: "30px", display: "flex", filter: "drop-shadow(0 1px 2px rgba(10,10,13,0.05))" }}><svg aria-hidden="true" width="20" height="20" viewBox="4 3 20 20" fill="none"><path d="M4 5C4 3.89 4.89 3 6 3H22C23.10 3 24 3.89 24 5V21C24 22.10 23.10 23 22 23H6C4.89 23 4 22.10 4 21V5Z" fill="white"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M13.99 6.33C17.68 6.33 20.66 9.31 20.66 13C20.66 16.68 17.68 19.66 13.99 19.66C10.31 19.66 7.33 16.68 7.33 13C7.33 9.31 10.31 6.33 13.99 6.33ZM17.68 10.64C17.49 10.45 17.17 10.45 16.97 10.64L13.01 14.60C12.82 14.80 12.50 14.80 12.31 14.60L11.01 13.31C10.82 13.11 10.50 13.11 10.31 13.31C10.11 13.50 10.11 13.82 10.31 14.02L11.60 15.31C12.19 15.89 13.14 15.89 13.72 15.31L17.68 11.35C17.88 11.15 17.88 10.84 17.68 10.64Z" fill="#1b5145"></path></svg></span></>) : null}</span>
{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Power of Attorney (POA)</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>Document outlining the POA status of the stakeholder</div></div>
{' '}
<button onClick={v.shMenus.poa.toggle} aria-label="Actions for Power of Attorney (POA)" aria-haspopup="menu" aria-expanded={v.shMenus.poa.expanded} style={{ flex: "none", width: "24px", height: "40px", padding: "8px 0", border: "0", borderRadius: "8px", background: "transparent", cursor: "pointer", display: "flex", alignItems: "flex-start", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.5 4C13.5 4.82 12.82 5.5 12 5.5C11.17 5.5 10.5 4.82 10.5 4C10.5 3.17 11.17 2.5 12 2.5C12.82 2.5 13.5 3.17 13.5 4ZM13.5 12C13.5 12.82 12.82 13.5 12 13.5C11.17 13.5 10.5 12.82 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.82 10.5 13.5 11.17 13.5 12ZM13.5 20C13.5 20.82 12.82 21.5 12 21.5C11.17 21.5 10.5 20.82 10.5 20C10.5 19.17 11.17 18.5 12 18.5C12.82 18.5 13.5 19.17 13.5 20Z" fill="#182f7c" stroke="#182f7c"></path></svg></button>
{' '}
{(v.shMenus.poa.open) ? (<>{' '}
<div role="menu" style={{ position: "absolute", top: "12px", left: "calc(100% + 40px)", zIndex: "3", width: "209px", background: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)" }}>{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.00 15.09L12.00 3M16.31 6.45L12.00 3L7.68 6.45M2.5 16.81V20C2.5 21.10 3.39 22 4.5 22H19.5C20.60 22 21.5 21.10 21.5 20V16.81" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Upload</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#000000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 12C15 13.65 13.65 15 12 15C10.34 15 9 13.65 9 12C9 10.34 10.34 9 12 9C13.65 9 15 10.34 15 12Z" stroke="#182f7c"></path>
<path d="M21.5 12.5C21.5 14.5 16.5 18.5 12 18.5C7.5 18.5 2.5 14.5 2.5 12.5C2.5 10.5 7 5.5 12 5.5C17 5.5 21.5 10.5 21.5 12.5Z" stroke="#182f7c"></path></svg>
View</button>
{' '}
<button role="menuitem" onClick={v.shMenuClose} style={{ font: "inherit", textAlign: "left", width: "100%", height: "48px", padding: "12px 16px", border: "0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid #e8eaef", color: "#b00000" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.5 8.5V17.5C18.5 19.70 16.70 21.5 14.5 21.5H9.5C7.29 21.5 5.5 19.70 5.5 17.5V8.5M18.5 8.5H19C19.82 8.5 20.5 7.82 20.5 7C20.5 6.17 19.82 5.5 19 5.5H16.5M18.5 8.5H5.5M5.5 8.5H5C4.17 8.5 3.5 7.82 3.5 7C3.5 6.17 4.17 5.5 5 5.5H7.5M7.5 5.5H16.5M7.5 5.5C7.5 3.84 8.84 2.5 10.5 2.5H13.5C15.15 2.5 16.5 3.84 16.5 5.5M8.5 11.5V17.5M12 11.5V17.5M15.5 11.5V17.5" stroke="#9d0000" strokeLinecap="round"></path></svg>
Delete</button>
{' '}</div>
{' '}</>) : null}
{' '}</div></>) : null}
{' '}</div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}>{(v.shAdding) ? (<><button onClick={v.shLater} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", whiteSpace: "nowrap", padding: "12px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer", width: "200px" }}>Upload later</button></>) : null}
<button disabled={v.shDocsBlocked} onClick={v.shDocsContinue} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.shDocsBg}`, cursor: `${v.shDocsCursor}` }}>Continue</button></div>
{' '}</div>
{' '}</>) : null}
  </>);
}
