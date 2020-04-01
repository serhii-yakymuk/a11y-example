import React from 'react';

import twitterLogo from 'assets/img/social-twitter.svg';
import linkedinLogo from 'assets/img/social-linkedin.svg';
import facebookLogo from 'assets/img/social-facebook.svg';

import './SocialNavigation.css';

const SocialNavigation = () => {
  return (
    <nav
      aria-label="Social Media"
      className="social-navigation"
    >
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com/serhii_yakymuk"
          >
            <img
              src={twitterLogo}
              alt="Twitter Logo"
              className="social-navigation__logo"
            />
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100013280199009"
          >
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              className="social-navigation__logo"
            />
            Facebook
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/serhii-yakymuk-229339136/"
          >
            <img
              src={linkedinLogo}
              alt="Linkedin Logo"
              className="social-navigation__logo"
            />
            Linkedin
          </a>
        </li>
      </ul>
  </nav>
  );
}

export default SocialNavigation;
