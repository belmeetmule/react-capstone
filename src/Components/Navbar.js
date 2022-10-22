import React from 'react';
import { Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Navbar.css';

library.add(fas);

const Navbar = () => (
  <nav className="fixed-top">
    <ul className="container-fluid mb">
      <li className="nav-link">
        <Link className="nav-link-item" to="/">
          <span className="navbar-brand main-header-text mb-2">Famous-Leagues</span>
        </Link>
      </li>
      <li className="nav-link">
        <Link className="nav-link-item" to="/About">
          <span className="navbar-brand main-header-text">About</span>
        </Link>
      </li>
    </ul>

  </nav>
);
export default Navbar;
