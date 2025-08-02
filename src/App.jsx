import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;