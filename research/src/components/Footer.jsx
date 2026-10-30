import React from 'react';
import { project } from '../config.js';

export default function Footer({ view }) {
  const extras = [project.prototypeVersion, project.researchDate].filter(Boolean);
  return (
    <footer className="r-footer">
      <div className="r-footer-in">
        <span>Research workspace</span>
        {extras.length > 0 && <span>{extras.join(' · ')}</span>}
        {view !== 'participant' && view !== 'overview' && <a className="r-footer-fac" href="#/f">Open the {project.workspaceLabel.toLowerCase()}</a>}
      </div>
    </footer>
  );
}
