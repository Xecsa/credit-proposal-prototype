import React from 'react';

export default function ShIsDetails({ v }) {
  return (<>
{(v.shIsDetails) ? (<>{' '}
<div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.shBack} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>{v.shDetTitle}</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>{v.shDetSub}</p></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>{' '}
<div style={{ flex: "0 0 96px", minWidth: "0", position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Title</div>
{' '}
<button className="field" onClick={v.shS.title.toggle} aria-label="Title" aria-haspopup="listbox" aria-expanded={v.shS.title.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.shS.title.line}`, borderRadius: "8px", background: "#ffffff", color: `${v.shS.title.fg}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.shS.title.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.shS.title.open) ? (<>{' '}
<div role="listbox" aria-label="Title" style={{ position: "absolute", top: "80px", left: "0", minWidth: "100%", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.shS.title.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", whiteSpace: "nowrap", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}
<div style={{ flex: "1 1 160px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="sh-first" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>First name</label>
<input id="sh-first" type="text" autoComplete="off" placeholder="" value={v.shF.first} onChange={v.shSet.first} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ flex: "1 1 160px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="sh-last" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Last name</label>
<input id="sh-last" type="text" autoComplete="off" placeholder="" value={v.shF.last} onChange={v.shSet.last} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}</div>
{' '}
{(v.shShowRole) ? (<>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex" }}><div style={{ flex: "1 1 200px", minWidth: "0", position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Role</div>
{' '}
<button className="field" onClick={v.shS.role.toggle} aria-label="Role" aria-haspopup="listbox" aria-expanded={v.shS.role.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.shS.role.line}`, borderRadius: "8px", background: "#ffffff", color: `${v.shS.role.fg}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.shS.role.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.shS.role.open) ? (<>{' '}
<div role="listbox" aria-label="Role" style={{ position: "absolute", top: "80px", left: "0", minWidth: "100%", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.shS.role.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", whiteSpace: "nowrap", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="sh-pct" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>What percentage of {'{'}Company_name{'}'} is owned by the shareholder?</label>
{' '}
<div style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center" }}><input id="sh-pct" className="bare" type="text" value="50" disabled={true} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000", marginLeft: "16px", color: "#575757" }} />
<span style={{ flex: "none", alignSelf: "stretch", margin: "1px", borderRadius: "0 7px 7px 0", background: "#f4f7fe", color: "#182f7c", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", width: "64px" }}>%</span></div></div>
{' '}</div>
{' '}</>) : null}
{' '}
<div style={{ display: "flex" }}><div style={{ flex: "1 1 200px", minWidth: "0", position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Nationality</div>
{' '}
<button className="field" onClick={v.shS.nat.toggle} aria-label="Nationality" aria-haspopup="listbox" aria-expanded={v.shS.nat.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.shS.nat.line}`, borderRadius: "8px", background: "#ffffff", color: `${v.shS.nat.fg}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="436 632.5 16 16" fill="none"><defs><clipPath id="inatflagclip0_12301_232125"><rect width="1440" height="1121" rx="8" fill="white"></rect></clipPath>
<mask id="inatflagmask4_12301_232125" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="436" y="632" width="16" height="17"><g><g><g><rect x="436" y="634.9" width="16" height="11.2" rx="2" fill="white"></rect>
<mask id="inatflagmask5_12301_232125" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="436" y="634" width="16" height="13"><rect x="436" y="634.9" width="16" height="11.2" rx="2" fill="white"></rect></mask>
<g mask="url(#inatflagmask5_12301_232125)"><rect x="443.617" y="634.9" width="8.38095" height="11.2" fill="#1AB11F"></rect>
<path fillRule="evenodd" clipRule="evenodd" d="M436 646.1H441.333V634.9H436V646.1Z" fill="#242424"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M441.332 646.1H446.665V634.9H441.332V646.1Z" fill="#DC0D18"></path>
<path opacity="0.75" fillRule="evenodd" clipRule="evenodd" d="M442.247 639.7C442.384 639.7 442.495 639.857 442.495 640.051C442.495 640.643 442.726 641.164 443.075 641.445C443.194 641.541 443.235 641.755 443.168 641.923C443.1 642.091 442.949 642.15 442.83 642.054C442.336 641.656 442 640.91 442 640.051C442 639.857 442.111 639.7 442.247 639.7Z" fill="white"></path>
<path opacity="0.75" fillRule="evenodd" clipRule="evenodd" d="M445.742 639.7C445.885 639.7 446.001 639.86 446.001 640.057C446.001 640.896 445.678 641.629 445.197 642.046C445.076 642.15 444.916 642.1 444.84 641.933C444.764 641.766 444.801 641.545 444.922 641.441C445.262 641.147 445.484 640.635 445.484 640.057C445.484 639.86 445.599 639.7 445.742 639.7Z" fill="white"></path>
<path d="M445.201 639.701C445.201 640.584 444.664 641.301 444.001 641.301C443.338 641.301 442.801 640.584 442.801 639.701C442.801 638.817 443.338 638.101 444.001 638.101C444.664 638.101 445.201 638.817 445.201 639.701Z" fill="white" fillOpacity="0.5"></path></g></g></g></g></mask>
<mask id="inatflagmask5_12301_232125" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="436" y="634" width="16" height="13"><rect x="436" y="634.9" width="16" height="11.2" rx="2" fill="white"></rect></mask></defs>
<g clipPath="url(#inatflagclip0_12301_232125)"><g mask="url(#inatflagmask4_12301_232125)"><rect x="436" y="632.5" width="16" height="16" fill="#182F7C"></rect></g></g></svg></span>
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.shS.nat.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.shS.nat.open) ? (<>{' '}
<div role="listbox" aria-label="Nationality" style={{ position: "absolute", top: "80px", left: "0", minWidth: "100%", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.shS.nat.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", whiteSpace: "nowrap", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="sh-email" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Email</label>
<input id="sh-email" type="text" autoComplete="off" placeholder="e.g. email@email.com" value={v.shF.email} onChange={v.shSet.email} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757", display: "flex", justifyContent: "space-between", gap: "8px" }}><label htmlFor="sh-mobile">Mobile</label></div>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center" }}><span style={{ flex: "none", alignSelf: "stretch", margin: "1px", borderRadius: "7px 0 0 7px", background: "#f4f7fe", color: "#182f7c", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", width: "128px", gap: "8px" }}><span aria-hidden="true" style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="17" viewBox="750 732 24 17" fill="none"><defs><clipPath id="iuaeflagclip0_12301_232125"><rect width="1440" height="1121" rx="8" fill="white"></rect></clipPath>
<mask id="iuaeflagmask7_12301_232125" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="750" y="732" width="24" height="17"><rect x="750.25" y="732.35" width="23.5" height="16.3" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"></rect></mask></defs>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><rect x="750.25" y="732.35" width="23.5" height="16.3" rx="1.75" fill="white" stroke="#F4F3F4" strokeWidth="0.5"></rect></g>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><g mask="url(#iuaeflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M756.855 737.7H773.998V732.1H756.855V737.7Z" fill="#12833B"></path></g></g>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><g mask="url(#iuaeflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M756.855 748.9H773.998V743.3H756.855V748.9Z" fill="#242424"></path></g></g>
<g clipPath="url(#iuaeflagclip0_12301_232125)"><g mask="url(#iuaeflagmask7_12301_232125)"><path fillRule="evenodd" clipRule="evenodd" d="M750 748.9H756.857V732.1H750V748.9Z" fill="#FF323E"></path></g></g></svg></span>
+971
<span aria-hidden="true" style={{ display: "flex" }}><svg aria-hidden="true" width="24" height="16" viewBox="826 732 24 16" fill="none"><defs><clipPath id="ichevsmclip0_12301_232125"><rect width="1440" height="1121" rx="8" fill="white"></rect></clipPath></defs>
<g clipPath="url(#ichevsmclip0_12301_232125)"><path d="M832 737.833L838 743.833L844 737.833" stroke="#182F7C" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></span>
<input id="sh-mobile" className="bare" type="text" inputMode="tel" autoComplete="off" placeholder="e.g. 050 000 000" value={v.shF.mobile} onChange={v.shSet.mobile} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000", margin: "0 12px" }} /></div></div>
{' '}</div>
{' '}
<div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", gap: "16px", alignItems: "flex-start", justifyContent: "space-between" }}><div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Is this stakeholder a member of the ruling family?</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>By opting in, you are confirming that the stakeholder is royal family member</div></div>
<button role="switch" aria-checked={v.shT.ruling.on} aria-label="Is this stakeholder a member of the ruling family?" onClick={v.shT.ruling.toggle} style={{ flex: "none", position: "relative", width: "56px", height: "32px", padding: "0", border: "0", borderRadius: "16px", background: "#dde0ec", cursor: "pointer" }}><span style={{ position: "absolute", top: "2px", left: `${v.shT.ruling.left}`, width: "28px", height: "28px", borderRadius: "14px", background: `${v.shT.ruling.bg}`, boxShadow: "0 1px 3px rgba(0,0,0,0.16)", transition: "left 0.15s" }}></span></button></div>
{' '}
<div style={{ display: "flex", gap: "16px", alignItems: "flex-start", justifyContent: "space-between" }}><div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Is this stakeholder an authorized signatory?</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>By opting in, you are confirming that the stakeholder is an Authorized signatory</div></div>
<button role="switch" aria-checked={v.shT.sign.on} aria-label="Is this stakeholder an authorized signatory?" onClick={v.shT.sign.toggle} style={{ flex: "none", position: "relative", width: "56px", height: "32px", padding: "0", border: "0", borderRadius: "16px", background: "#dde0ec", cursor: "pointer" }}><span style={{ position: "absolute", top: "2px", left: `${v.shT.sign.left}`, width: "28px", height: "28px", borderRadius: "14px", background: `${v.shT.sign.bg}`, boxShadow: "0 1px 3px rgba(0,0,0,0.16)", transition: "left 0.15s" }}></span></button></div>
{' '}
<div style={{ display: "flex", gap: "16px", alignItems: "flex-start", justifyContent: "space-between" }}><div style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}><div style={{ fontWeight: "500", lineHeight: "16px", color: "#000000" }}>Is this stakeholder an authorized borrower?</div>
<div style={{ lineHeight: "16px", color: "#575757" }}>By opting in, you are confirming that the stakeholder is an authorized borrower</div></div>
<button role="switch" aria-checked={v.shT.borrow.on} aria-label="Is this stakeholder an authorized borrower?" onClick={v.shT.borrow.toggle} style={{ flex: "none", position: "relative", width: "56px", height: "32px", padding: "0", border: "0", borderRadius: "16px", background: "#dde0ec", cursor: "pointer" }}><span style={{ position: "absolute", top: "2px", left: `${v.shT.borrow.left}`, width: "28px", height: "28px", borderRadius: "14px", background: `${v.shT.borrow.bg}`, boxShadow: "0 1px 3px rgba(0,0,0,0.16)", transition: "left 0.15s" }}></span></button></div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}><button disabled={v.shDetBlocked} onClick={v.shDetContinue} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.shDetBg}`, cursor: `${v.shDetCursor}` }}>Continue</button></div>
{' '}</div>
{' '}</>) : null}
  </>);
}
