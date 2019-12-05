import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/skills'>
              <Skills />
            </Route>
            <Route path='work'>
              <Work />
            </Route>
            <Route path='contact'>
              <Contact />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;