import React from 'react';
import { brand, project } from '../config.js';

export default function Header() {
  return (
    <header className="r-header">
      <div className="r-header-in">
        <img className="r-logo" src={brand.logo} alt={brand.logoAlt} />
        <span className="r-header-label">{project.workspaceLabel}</span>
      </div>
    </header>
  );
}
