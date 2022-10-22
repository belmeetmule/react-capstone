import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from '../Components/About';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AboutPage = () => (
  <>
    <Navbar />
    <div id="homePage_header" className="text-center">
      <Link className="navbar-brand me-2" to="/">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="icon" />
        <span className="navbar-brand">Home</span>
      </Link>
      <div className="league-stat">
        <h1 id="main-header-text">
          <span className="text-white">
            About
          </span>
        </h1>
      </div>
    </div>
    <About />
    <Footer />
  </>
);

export default AboutPage;
