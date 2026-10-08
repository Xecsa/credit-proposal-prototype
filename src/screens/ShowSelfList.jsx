import React from 'react';

export default function ShowSelfList({ v }) {
  return (<>
{(v.showSelfList) ? (<>{' '}
<div style={{ flex: "1", minWidth: "0", display: "flex", background: "#eaecf3" }}>{' '}
<nav aria-label="Primary" style={{ flex: "none", width: "72px", background: "#1e3266", overflowY: "auto" }}>{' '}
<ul style={{ listStyle: "none", margin: "0", padding: "4px 0" }}><li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.5 12C21.5 17.24 17.24 21.5 12 21.5M21.5 12C21.5 6.75 17.24 2.5 12 2.5M21.5 12H2.5M12 21.5C6.75 21.5 2.5 17.24 2.5 12M12 21.5V2.5M2.5 12C2.5 6.75 6.75 2.5 12 2.5M3 15C7 18 17 18 21 15M21 9C17 6 7 6 3 9M9 3C6 7 6 17 9 21M15 21C18 17 18 7 15 3" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>P360</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.57 14.58C18.32 14.76 19.07 15.00 19.72 15.32C20.88 15.88 21.5 16.55 21.5 17.25V18.5H18.5V17.25C18.5 16.20 18.14 15.31 17.57 14.58ZM9 14.25C10.10 14.25 11.79 14.53 13.19 15.09C13.88 15.37 14.48 15.70 14.89 16.08C15.30 16.46 15.5 16.85 15.5 17.25V18.5H2.5V17.25C2.5 16.85 2.69 16.46 3.10 16.08C3.51 15.70 4.11 15.37 4.80 15.09C6.20 14.53 7.89 14.25 9 14.25ZM9 15.25C8.04 15.25 7.04 15.42 6.17 15.67C5.31 15.92 4.53 16.25 4.05 16.58L2.73 17.5H15.26L13.94 16.58C13.46 16.25 12.68 15.92 11.82 15.67C10.95 15.42 9.95 15.25 9 15.25ZM9 5.5C10.65 5.5 12 6.84 12 8.5C12 10.15 10.65 11.5 9 11.5C7.34 11.5 6 10.15 6 8.5C6 6.84 7.34 5.5 9 5.5ZM15 5.5C16.65 5.5 18 6.84 18 8.5C18 10.15 16.65 11.5 15 11.5C14.73 11.5 14.48 11.46 14.24 11.39C14.72 10.53 15 9.54 15 8.5C15 7.45 14.72 6.46 14.24 5.60C14.48 5.53 14.73 5.5 15 5.5ZM9 6.5C7.89 6.5 7 7.39 7 8.5C7 9.60 7.89 10.5 9 10.5C10.10 10.5 11 9.60 11 8.5C11 7.39 10.10 6.5 9 6.5Z" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>My clients</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 11.5V20.5H13.5V11.5H20.5ZM10.5 15.5V20.5H3.5V15.5H10.5ZM4.5 19.5H9.5V16.5H4.5V19.5ZM14.5 19.5H19.5V12.5H14.5V19.5ZM10.5 3.5V12.5H3.5V3.5H10.5ZM4.5 11.5H9.5V4.5H4.5V11.5ZM20.5 3.5V8.5H13.5V3.5H20.5ZM14.5 7.5H19.5V4.5H14.5V7.5Z" fill="black" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Platforms fdashboard</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 9V6H18V9H15V11H18V14H20V11H23V9H20ZM9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6ZM15.39 14.56C13.71 13.7 11.53 13 9 13C6.47 13 4.29 13.7 2.61 14.56C1.61 15.07 1 16.1 1 17.22V20H17V17.22C17 16.1 16.39 15.07 15.39 14.56ZM15 18H3V17.22C3 16.84 3.2 16.5 3.52 16.34C4.71 15.73 6.63 15 9 15C11.37 15 13.29 15.73 14.48 16.34C14.8 16.5 15 16.84 15 17.22V18Z" fill="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>DAO</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.5 5.32V11C20.5 16.29 16.85 21.23 12 22.48C7.14 21.23 3.5 16.29 3.5 11V5.32L12 1.54L20.5 5.32ZM17.29 8.99L10 16.29L6.70 13L7.41 12.29L9.64 14.52L10.00 14.87L10.35 14.52L16.58 8.28L17.29 8.99ZM19.5 5.97L19.20 5.84L12.20 2.73L12 2.64L11.79 2.73L4.79 5.84L4.5 5.97V11C4.5 15.72 7.60 20.09 11.85 21.40L12 21.45L12.14 21.40C16.39 20.09 19.5 15.72 19.5 11V5.97Z" fill="black" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>KYC reviews</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2.5C17.24 2.5 21.5 6.75 21.5 12C21.5 17.24 17.24 21.5 12 21.5C6.75 21.5 2.5 17.24 2.5 12C2.5 6.75 6.75 2.5 12 2.5ZM12 3.5C7.31 3.5 3.5 7.31 3.5 12C3.5 16.68 7.31 20.5 12 20.5C16.68 20.5 20.5 16.68 20.5 12C20.5 7.31 16.68 3.5 12 3.5ZM11.40 16.89L11.00 16.81C9.82 16.56 8.89 15.91 8.62 14.83H9.34C9.46 15.22 9.67 15.59 10.04 15.88C10.52 16.27 11.21 16.46 12.08 16.46C13.01 16.46 13.67 16.23 14.10 15.84C14.53 15.45 14.67 14.96 14.67 14.58C14.67 14.11 14.54 13.61 14.08 13.18C13.64 12.77 12.96 12.46 11.95 12.22H11.95C10.89 11.97 10.06 11.63 9.50 11.19C8.97 10.76 8.67 10.22 8.67 9.5C8.67 8.32 9.61 7.47 11.00 7.17L11.40 7.09V5.5H12.73V7.10L13.11 7.19C14.28 7.48 14.94 8.26 15.15 9.17H14.45C14.36 8.78 14.19 8.41 13.88 8.12C13.45 7.72 12.83 7.54 12.07 7.54C11.34 7.54 10.71 7.70 10.24 8.03C9.75 8.36 9.46 8.87 9.46 9.46C9.46 10.00 9.69 10.45 10.17 10.81C10.62 11.14 11.28 11.39 12.18 11.62C13.05 11.85 13.88 12.13 14.49 12.59C15.04 13.00 15.41 13.56 15.46 14.39L15.46 14.56C15.46 15.22 15.21 15.71 14.83 16.07C14.42 16.44 13.84 16.70 13.14 16.83L12.74 16.91V18.5H11.40V16.89Z" fill="black" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Transaction reviews</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.34 8.81L14.46 9.09L14.76 9.11L20.77 9.63L16.22 13.59L15.99 13.79L16.06 14.08L17.42 19.96L12.25 16.84L12 16.68L11.74 16.84L6.57 19.96L7.94 14.08L8.01 13.79L7.78 13.59L3.22 9.63L9.23 9.12L9.53 9.10L9.65 8.82L12 3.27L14.34 8.81ZM11.53 5.90L9.95 9.65L5.87 10.01L4.70 10.11L5.59 10.88L8.68 13.56L7.75 17.55L7.48 18.71L8.49 18.09L11.99 15.98L15.51 18.10L16.52 18.72L16.25 17.56L15.32 13.57L18.41 10.89L19.30 10.12L18.13 10.02L14.05 9.66L12.46 5.90L11.99 4.81L11.53 5.90Z" fill="black" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Trade deals</span></li>
<li aria-current="page" style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "#3356ae", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 3.5H19.5C20.32 3.5 21 4.17 21 5V19C21 19.82 20.32 20.5 19.5 20.5H4.5C3.67 20.5 3 19.82 3 19V5C3 4.17 3.67 3.5 4.5 3.5ZM4 19.59H20V4.5H4V19.59ZM16.5 13.5V16.5H15.5V13.5H16.5ZM12.5 7.5V16.5H11.5V7.5H12.5ZM8.5 10.5V16.5H7.5V10.5H8.5Z" fill="black" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Assets</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 8C19.55 8 18.74 9.44 19.07 10.51L15.52 14.07C15.22 13.98 14.78 13.98 14.48 14.07L11.93 11.52C12.27 10.45 11.46 9 10 9C8.55 9 7.73 10.44 8.07 11.52L3.51 16.07C2.44 15.74 1 16.55 1 18C1 19.1 1.9 20 3 20C4.45 20 5.26 18.56 4.93 17.49L9.48 12.93C9.78 13.02 10.22 13.02 10.52 12.93L13.07 15.48C12.73 16.55 13.54 18 15 18C16.45 18 17.27 16.56 16.93 15.48L20.49 11.93C21.56 12.26 23 11.45 23 10C23 8.9 22.1 8 21 8Z" fill="white"></path>
<path d="M15 9L15.94 6.93L18 6L15.94 5.07L15 3L14.08 5.07L12 6L14.08 6.93L15 9Z" fill="white"></path>
<path d="M3.5 11L4 9L6 8.5L4 8L3.5 6L3 8L1 8.5L3 9L3.5 11Z" fill="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Workflow</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.5 2.5V21.5H2.5V2.5H21.5Z" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Doc Hub</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="white"></path>
<path d="M9 12H7V17H9V12Z" fill="white"></path>
<path d="M17 7H15V17H17V7Z" fill="white"></path>
<path d="M13 14H11V17H13V14Z" fill="white"></path>
<path d="M13 10H11V12H13V10Z" fill="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Leads</span></li>
<li style={{ height: "64px", margin: "0 4px 8px", borderRadius: "8px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 3.5H7.5C7.77 3.5 8 3.72 8 4C8 5.30 8.20 6.55 8.59 7.71V7.71C8.64 7.89 8.60 8.09 8.46 8.23L6.00 10.69L6.17 11.01C7.66 13.94 10.06 16.32 12.98 17.82L13.30 17.99L15.75 15.54C15.86 15.43 15.99 15.38 16.12 15.38C16.15 15.38 16.18 15.39 16.20 15.39C16.22 15.39 16.23 15.40 16.24 15.40L16.25 15.41L16.27 15.41C17.44 15.80 18.70 16.00 20 16.00C20.27 16.00 20.49 16.23 20.5 16.50V20C20.5 20.27 20.27 20.5 20 20.5C10.88 20.5 3.5 13.11 3.5 4C3.5 3.72 3.72 3.5 4 3.5ZM4.53 5.03C4.62 6.39 4.89 7.71 5.31 8.95L5.57 9.71L7.55 7.73L7.47 7.45C7.24 6.65 7.09 5.82 7.03 4.96L7.00 4.5H4.49L4.53 5.03ZM19.5 17.00L19.03 16.97C18.18 16.91 17.35 16.76 16.53 16.53L16.25 16.46L16.04 16.66L14.84 17.85L14.26 18.42L15.04 18.68C16.29 19.09 17.60 19.36 18.96 19.45L19.5 19.49V17.00Z" fill="black" stroke="white"></path></svg>
<span style={{ maxWidth: "62px", fontSize: "12px", lineHeight: "16px", color: "#ffffff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Call reports</span></li></ul>
{' '}</nav>
{' '}
<div style={{ flex: "1", minWidth: "0", overflowY: "auto", position: "relative" }}>{' '}
<div style={{ boxSizing: "border-box", padding: "40px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>{' '}
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "48px", fontWeight: "300", color: "#072447", overflowWrap: "anywhere" }}>Credit Proposal Applications</h1>
{' '}
<button onClick={v.goSelfSearch} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", padding: "12px 16px", borderRadius: "8px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", border: "0", color: "#ffffff", background: "linear-gradient(94.48deg, #395fc0 0%, #081f5b 100%)" }}>Create application
<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2.5V21.5M2.5 12H21.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{' '}
<div style={{ width: "310px", maxWidth: "100%", height: "48px", boxSizing: "border-box", padding: "0 16px", background: "#ffffff", border: "1px solid transparent", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" }} className="field">{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.33 14.33L10.33 10.33M10.33 5.99C10.33 8.39 8.39 10.33 6.00 10.33C3.60 10.33 1.66 8.39 1.66 5.99C1.66 3.60 3.60 1.66 6.00 1.66C8.39 1.66 10.33 3.60 10.33 5.99Z" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
{' '}
<input className="bare" type="text" aria-label="Search applications" placeholder="Search by Company, Application, or CIF" value={v.listSearch} onChange={v.setListSearch} style={{ font: "inherit", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#072447", textOverflow: "ellipsis" }} />
{' '}</div>
{' '}
<div style={{ background: "#ffffff", borderRadius: "8px" }}>{' '}
<div style={{ padding: "16px", display: "flex", flexWrap: "wrap", gap: "16px" }}>{' '}
{(v.listFilters || []).map((lf, lf__i) => (<React.Fragment key={lf__i}>{' '}
<div style={{ position: "relative", flex: "0 1 311px", minWidth: "0" }}>{' '}
<button className="field" onClick={lf.toggle} aria-label={lf.aria} aria-haspopup="listbox" aria-expanded={lf.expanded} style={{ font: "inherit", fontSize: "16px", lineHeight: "24px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "0 16px", border: `1px solid ${lf.line}`, borderRadius: "8px", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", color: `${lf.fg}` }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lf.text}</span>
{' '}
<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.33L8 11.33L14 5.33" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
{' '}</button>
{' '}
{(lf.open) ? (<>{' '}
<div role="listbox" aria-label={lf.aria} style={{ position: "absolute", top: "52px", left: "0", right: "0", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(lf.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", height: "44px", padding: "8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#072447" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}
{' '}</div>
{' '}</React.Fragment>))}
{' '}</div>
{' '}
<div style={{ overflowX: "auto" }}>{' '}
<div role="table" aria-label="Credit proposal applications" style={{ minWidth: "900px" }}>{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}><div role="columnheader" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>Company</div>
<div role="columnheader" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>Application ID</div>
<div role="columnheader" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>Product type</div>
<div role="columnheader" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>Status</div>
<div role="columnheader" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>Assigned to</div>
<div role="columnheader" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>Created on</div></div>
{' '}
{(v.listRows || []).map((r, r__i) => (<React.Fragment key={r__i}>{' '}
<div role="row" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", borderTop: "1px solid #f1f3f7", minHeight: "88px" }}>{' '}
<div role="cell" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px" }}><div style={{ color: "#072447" }}>{r.company}</div>
<div style={{ color: "#50647c", marginTop: "8px" }}>{r.cif}</div></div>
{' '}
<div role="cell" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>{r.appId}</div>
{' '}
<div role="cell" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>{r.product}</div>
{' '}
<div role="cell" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px" }}><span style={{ display: "inline-block", fontSize: "12px", lineHeight: "14px", fontWeight: "500", padding: "4px 8px", borderRadius: "4px", background: `${r.tagBg}`, color: `${r.tagFg}` }}>{r.status}</span></div>
{' '}
<div role="cell" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>{r.assigned}</div>
{' '}
<div role="cell" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#072447" }}>{r.created}</div>
{' '}</div>
{' '}</React.Fragment>))}
{' '}
{(v.listEmpty) ? (<>{' '}
<div role="row" style={{ borderTop: "1px solid #f1f3f7" }}><div role="cell" style={{ padding: "20px 16px", minWidth: "0", fontSize: "16px", lineHeight: "24px", color: "#50647c" }}>No applications match your search.</div></div>
{' '}</>) : null}
{' '}</div>
{' '}</div>
{' '}
<div style={{ borderTop: "1px solid #f1f3f7", padding: "14px 24px", display: "flex", flexWrap: "wrap", gap: "8px 32px", alignItems: "center", justifyContent: "flex-end", color: "#50647c" }}>{' '}
<span>{v.listCount}</span>
{' '}
<div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "4px" }}>{' '}
<span style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13.33 2.5L5.83 10L13.33 17.5" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}
<span style={{ width: "40px", height: "44px", boxSizing: "border-box", border: "1px solid #d0d5de", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1b48b5" }}>1</span>
{' '}
<span style={{ width: "40px", textAlign: "center", color: "#1b48b5" }}>2</span>
{' '}
<span style={{ width: "40px", textAlign: "center" }}>...</span>
{' '}
<span style={{ width: "40px", textAlign: "center", color: "#1b48b5" }}>9</span>
{' '}
<span style={{ width: "40px", textAlign: "center", color: "#1b48b5" }}>10</span>
{' '}
<span style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.66 17.5L14.16 10L6.66 2.5" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}
<div aria-hidden="true" style={{ position: "sticky", bottom: "24px", margin: "-128px 32px 24px auto", width: "56px", boxSizing: "border-box", padding: "8px", borderRadius: "28px", background: "#ffffff", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: "8px" }}>{' '}
<span style={{ width: "40px", height: "40px", border: "1px solid #d0d5de", boxSizing: "border-box", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.5 4C19.53 4 22 6.46 22 9.5V13.5C22 16.53 19.53 19 16.5 19H6.51C6.31 19 6.12 19.07 5.98 19.21C4.88 20.32 3.00 19.54 3 17.98V9.33C3 6.38 5.38 4 8.33 4H16.5ZM8.33 5C5.94 5 4 6.94 4 9.33V17.98C4.00 18.65 4.80 18.98 5.28 18.51C5.60 18.18 6.05 18 6.51 18H16.5C18.98 18 21 15.98 21 13.5V9.5C21 7.01 18.98 5 16.5 5H8.33ZM11.39 10.19C12.44 9.84 13.40 10.94 12.90 11.94L11.75 14.24L12.19 14.09C12.52 13.98 12.87 14.16 12.98 14.49C13.09 14.81 12.92 15.17 12.59 15.28L12.14 15.42C11.09 15.78 10.13 14.67 10.63 13.68L11.78 11.38L11.34 11.53C11.01 11.63 10.66 11.46 10.55 11.13C10.44 10.80 10.62 10.45 10.94 10.34L11.39 10.19ZM12.39 7.5C12.91 7.50 13.33 7.91 13.33 8.43C13.33 8.95 12.91 9.37 12.39 9.37C11.87 9.37 11.45 8.95 11.45 8.43C11.45 7.91 11.87 7.5 12.39 7.5Z" fill="#072447"></path></svg></span>
{' '}
<span style={{ width: "40px", height: "40px", border: "1px solid #d0d5de", boxSizing: "border-box", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 3.5C17.70 3.5 19.5 5.29 19.5 7.5V17.5C19.5 19.70 17.70 21.5 15.5 21.5H8.5C6.29 21.5 4.5 19.70 4.5 17.5V7.5C4.5 5.29 6.29 3.5 8.5 3.5M15.5 3.5C15.5 4.05 15.05 4.5 14.5 4.5H9.5C8.94 4.5 8.5 4.05 8.5 3.5M15.5 3.5C15.5 2.94 15.05 2.5 14.5 2.5H9.5C8.94 2.5 8.5 2.94 8.5 3.5M7.5 8.5H16.5M7.5 11.5H16.5M7.5 14.5H11.5" stroke="#1b48b5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
{' '}</div>
{' '}</div>
{' '}</div>
{' '}</>) : null}
  </>);
}
