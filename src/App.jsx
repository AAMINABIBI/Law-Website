import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="white-background">
        <AboutUs />
      </div>
    </div>
  );
}

export default App;