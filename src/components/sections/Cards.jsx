import React from 'react';
import './Notarizations.css';
import './Legitimacy.css';

function Notarizations() {
  return (
    <section className="notarizations">
      <div className="notarizations-card">
        <div className="notarizations-icon">📜</div> {/* Using a document icon as a placeholder */}
        <h2 className="notarizations-title">Notarizations</h2>
        <p className="notarizations-description">
          Elevate your document with team of experienced professionals ensures your important papers.
        </p>
        <a href="#" className="notarizations-link">Read More &gt;</a>
      </div>
    </section>
  );
}

function Legitimacy() {
  return (
    <section className="legitimacy">
      <div className="legitimacy-card">
        <div className="legitimacy-icon">⚖️</div> {/* Using a scale icon as a placeholder */}
        <h2 className="legitimacy-title">Legitimacy</h2>
        <p className="legitimacy-description">
          Elevate your document with team of experienced professionals ensures your important papers.
        </p>
        <a href="#" className="legitimacy-link">Read More &gt;</a>
      </div>
    </section>
  );
}

export { Notarizations, Legitimacy };