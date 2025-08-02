import React from 'react';
import './AboutUs.css';
import aboutImage1 from '../../assets/about-image1.jpg'; // Left image
import aboutImage2 from '../../assets/about-image2.jpg'; // Right secondary image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={aboutImage1} alt="Professional consultation" />
          <button className="about-us-button">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            Get Free Consultation<br />0761-8523-398
          </button>
        </div>
        <div className="about-us-content">
          <h2 className="about-us-title">We're Advocates for <span className="green-text">People Justice and Right</span></h2>
          <p className="about-us-description">
            Welcome to the Chakwal Bar Association, the powerhouse of legal advocacy in Pakistan and the largest Bar Association in Asia, boasting a membership of over 49,000 dedicated lawyers. For decades, we have been the beacon of justice, tirelessly working to uphold the rule of law and protect human rights in our nation.
          </p>
          <button className="about-us-learn-more">Learn More</button>
          <div className="about-us-secondary-image">
            <img src={aboutImage2} alt="Professional handshake" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;