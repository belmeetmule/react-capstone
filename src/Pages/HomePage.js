import React from 'react';
import Navbar from '../Components/Navbar';
import LeaguesComponent from '../Components/Leagues/LeaguesComponent';
import Footer from '../Components/Footer';

const HomePage = () => (
  <>
    <Navbar />
    <div id="homePage_container">
      <LeaguesComponent />
    </div>
    <Footer />
  </>
);
export default HomePage;
