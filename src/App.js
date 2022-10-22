import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './Pages/HomePage';
import LeagueDetails from './Components/Leagues/LeagueDetails';
import About from './Pages/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:leaguesId" element={<LeagueDetails />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
