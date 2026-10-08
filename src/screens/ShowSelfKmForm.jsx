import React from 'react';

export default function ShowSelfKmForm({ v }) {
  return (<>
{(v.showSelfKmForm) ? (<>{' '}
<div style={{ position: "fixed", zIndex: "31", top: "73px", left: "8px", right: "8px", bottom: "8px", borderRadius: "0 0 8px 8px", overflowY: "auto", background: "#f1f3f7", color: "#000000", padding: "40px 24px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>{' '}
<div style={{ width: "100%", maxWidth: "648px" }}><div style={{ boxSizing: "border-box", background: "#ffffff", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "40px" }}>{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}><button onClick={v.kmFormClose} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "24px", padding: "0", border: "0", background: "transparent", color: "#182f7c", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "flex-start" }}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg>
Back</button>
<h1 style={{ margin: "0", fontSize: "40px", lineHeight: "40px", fontWeight: "300", color: "#072447" }}>Management details</h1>
<p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#6c7a89", opacity: "0.9" }}>Enter the management’s details below</p></div>
{' '}
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>{' '}
<div style={{ flex: "0 0 96px", minWidth: "0", position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Title</div>
{' '}
<button className="field" onClick={v.kmS.title.toggle} aria-label="Title" aria-haspopup="listbox" aria-expanded={v.kmS.title.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.kmS.title.line}`, borderRadius: "8px", background: "#ffffff", color: `${v.kmS.title.fg}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.kmS.title.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.kmS.title.open) ? (<>{' '}
<div role="listbox" aria-label="Title" style={{ position: "absolute", top: "80px", left: "0", minWidth: "100%", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.kmS.title.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", whiteSpace: "nowrap", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}
<div style={{ flex: "1 1 160px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="km-first" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>First name</label>
<input id="km-first" type="text" autoComplete="off" placeholder="" value={v.kmF.first} onChange={v.kmSet.first} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ flex: "1 1 160px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="km-last" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Last name</label>
<input id="km-last" type="text" autoComplete="off" placeholder="" value={v.kmF.last} onChange={v.kmSet.last} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}</div>
{' '}
<div style={{ display: "flex" }}><div style={{ flex: "0 1 311px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="km-role" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Role</label>
<input id="km-role" type="text" autoComplete="off" placeholder="CEO, CIO, Managing Director etc." value={v.kmF.role} onChange={v.kmSet.role} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="km-years" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>How many years of experience does this person have with {'{'}Parent_company{'}'}?</label>
{' '}
<div className="field" style={{ height: "48px", boxSizing: "border-box", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", display: "flex", alignItems: "center" }}><input id="km-years" className="bare" type="text" inputMode="numeric" autoComplete="off" value={v.kmF.years} onChange={v.kmSet.years} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000", margin: "0 16px" }} />
<span style={{ flex: "none", alignSelf: "stretch", margin: "1px", borderRadius: "0 7px 7px 0", background: "#f4f7fe", color: "#182f7c", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", width: "100px", gap: "8px", fontWeight: "400" }}>year(s)
<span aria-hidden="true" style={{ display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></span></div></div>
{' '}
<div style={{ display: "flex" }}><div style={{ flex: "1 1 200px", minWidth: "0", position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>What is this person&#39;s highest educational qualification?</div>
{' '}
<button className="field" onClick={v.kmS.qual.toggle} aria-label="What is this person's highest educational qualification?" aria-haspopup="listbox" aria-expanded={v.kmS.qual.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.kmS.qual.line}`, borderRadius: "8px", background: "#ffffff", color: `${v.kmS.qual.fg}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.kmS.qual.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.kmS.qual.open) ? (<>{' '}
<div role="listbox" aria-label="What is this person's highest educational qualification?" style={{ position: "absolute", top: "80px", left: "0", minWidth: "100%", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.kmS.qual.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", whiteSpace: "nowrap", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexDirection: "column" }}><label htmlFor="km-summary" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Provide a summary of this person’s professional background</label>
<textarea id="km-summary" placeholder="Type out a summary" value={v.kmF.summary} onChange={v.kmSet.summary} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "96px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000", resize: "none" }}></textarea></div>
{' '}
<div style={{ display: "flex" }}><div style={{ flex: "1 1 200px", minWidth: "0", position: "relative", display: "flex", flexDirection: "column" }}><div style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Nationality</div>
{' '}
<button className="field" onClick={v.kmS.nat.toggle} aria-label="Nationality" aria-haspopup="listbox" aria-expanded={v.kmS.nat.expanded} style={{ font: "inherit", lineHeight: "20px", textAlign: "left", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: `1px solid ${v.kmS.nat.line}`, borderRadius: "8px", background: "#ffffff", color: `${v.kmS.nat.fg}`, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>{' '}
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
<span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.kmS.nat.text}</span>
<span style={{ flex: "none", display: "flex" }}><svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5.3335L8 11.3335L14 5.3335" stroke="#182f7c" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
{' '}
{(v.kmS.nat.open) ? (<>{' '}
<div role="listbox" aria-label="Nationality" style={{ position: "absolute", top: "80px", left: "0", minWidth: "100%", zIndex: "3", boxSizing: "border-box", background: "#ffffff", border: "1px solid #fafafa", borderRadius: "8px", padding: "8px", boxShadow: "0 4px 7px rgba(0,0,0,0.05), 0 16px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>{' '}
{(v.kmS.nat.options || []).map((o, o__i) => (<React.Fragment key={o__i}>{' '}
<button role="option" aria-selected={o.selected} onClick={o.pick} style={{ font: "inherit", textAlign: "left", whiteSpace: "nowrap", height: "50px", padding: "10px 8px 8px", border: "0", borderRadius: "8px", cursor: "pointer", background: `${o.bg}`, color: "#000000" }}>{o.label}</button>
{' '}</React.Fragment>))}
{' '}</div>
{' '}</>) : null}</div>
{' '}</div>
{' '}
<div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="km-email" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Email</label>
<input id="km-email" type="text" autoComplete="off" placeholder="e.g. email@email.com" value={v.kmF.email} onChange={v.kmSet.email} style={{ font: "inherit", lineHeight: "20px", width: "100%", height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "1px solid #d7dae5", borderRadius: "8px", background: "#ffffff", color: "#000000" }} /></div>
{' '}
<div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column" }}><label htmlFor="km-mobile" style={{ paddingBottom: "8px", lineHeight: "20px", color: "#575757" }}>Mobile (optional)</label>
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
<input id="km-mobile" className="bare" type="text" inputMode="tel" autoComplete="off" placeholder="e.g. 050 000 000" value={v.kmF.mobile} onChange={v.kmSet.mobile} style={{ font: "inherit", lineHeight: "20px", flex: "1", minWidth: "0", height: "24px", padding: "0", border: "0", outline: "none", background: "transparent", color: "#000000", margin: "0 12px" }} /></div></div>
{' '}</div>
{' '}</div>
{' '}
<div style={{ paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "flex-end" }}>{(v.kmEditing) ? (<><button onClick={v.kmFormDelete} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", whiteSpace: "nowrap", padding: "12px", border: "1px solid #d3d7e7", background: "#ffffff", color: "#182f7c", cursor: "pointer", width: "200px" }}>Delete record</button></>) : null}
<button disabled={v.kmSaveBlocked} onClick={v.kmSave} style={{ font: "inherit", fontWeight: "500", lineHeight: "16px", height: "48px", minWidth: "88px", padding: "12px 16px", borderRadius: "8px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "200px", border: "0", color: "#ffffff", background: `${v.kmSaveBg}`, cursor: `${v.kmSaveCursor}` }}>Continue</button></div>
{' '}</div></div>
{' '}</div>
{' '}</>) : null}
  </>);
}
