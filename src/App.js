import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="Main">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;