import React from 'react';
import './Legitimacy.css';

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

export default Legitimacy;