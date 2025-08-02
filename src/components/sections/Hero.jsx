import React from 'react';
import './Hero.css';
import Notarizations from './Notarizations';
import Legitimacy from './Legitimacy';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-subtitle-small">Notarial Experience</span>
          <h1 className="hero-title">
            Where <span className="green">Confidence</span> &amp; <span className="green">Legality</span> Converge
          </h1>
          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <div className="hero-buttons">
            <button className="hero-button learn">Learn More</button>
            <button className="hero-button consult">Free Consultation</button>
          </div>
        </div>
        <div className="hero-cards">
          <Notarizations />
          <Legitimacy />
        </div>
      </div>
    </section>
  );
}

export default Hero;