import React from 'react';
import './App.css';
import './components/Navbar';
import './components/Home';
import './components/AboutMe';
import './components/Skills';
import './components/Work';
import './components/Contact';

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