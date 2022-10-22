import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './Pages/HomePage';
import LeaguePage from './Pages/LeaguePage';
import AboutPage from './Pages/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/League/:leaguesId" element={<LeaguePage />} />
      <Route path="/About" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
