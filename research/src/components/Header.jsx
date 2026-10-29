import React from 'react';
import { brand, project } from '../config.js';

export default function Header() {
  return (
    <header className="r-header">
      <div className="r-header-in">
        <div className="r-brand">
          <img className="r-logo" src={brand.logo} alt={brand.logoAlt} />
          <span className="r-brand-div" aria-hidden="true" />
          <span className="r-brand-text">
            <span className="r-brand-name">{project.name}</span>
            <span className="r-brand-label">{project.label}</span>
          </span>
        </div>
        <span className="r-tag r-tag-quiet">{project.workspaceLabel}</span>
      </div>
    </header>
  );
}
