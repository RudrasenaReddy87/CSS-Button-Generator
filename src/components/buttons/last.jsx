import React from 'react';
import './laststyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';

const SocialIconsHoverEffect = () => {
  return (
    <div className="social-container">
      <ul className="social-icons">
        <li className="social-item" data-tooltip="Email & Coding">
          <a href="https://rudrasenareddy87.github.io/Coding-Profiles/" className="social-link email">
            <FontAwesomeIcon icon={faEnvelopeSolid} />
            <span className="hover-area"></span>
          </a>
        </li>

        <li className="social-item" data-tooltip="LinkedIn">
          <a 
            href="https://www.linkedin.com/in/bodireddyrudrasenareddy" 
            className="social-link linkedin"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="hover-area"></span>
          </a>
        </li>

        <li className="social-item" data-tooltip="Instagram">
          <a 
            href="https://www.instagram.com/rudrasenareddy_87" 
            className="social-link instagram"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span className="hover-area"></span>
          </a>
        </li>

        <li className="social-item" data-tooltip="GitHub">
          <a 
            href="https://github.com/RudrasenaReddy87" 
            className="social-link github"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="hover-area"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIconsHoverEffect;