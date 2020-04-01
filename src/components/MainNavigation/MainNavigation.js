import React from 'react';

import { Link } from "react-router-dom";

import logo from 'assets/img/logo.svg';

import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <nav className="main-navigation" id="main-navigation">
      <ul>
        <li>
          <Link className="main-navigation__logo-link" to="/">
            <img
              src={logo}
              alt="React Logo"
              className="main-navigation__logo-image"
            />
            A11y Examples
          </Link>
        </li>
        <li>
          <Link to="/guide">Guide</Link>
        </li>
        <li>
          <Link to="/links">Useful Links</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
