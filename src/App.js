import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About/About';
import './App.scss';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

function App() {
  return (
    <Router>
      <div className="Portfolio">
        <div className="bg-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navigation />
        <Route path='/'  exact>
          <Home />
        </Route>
        <Route path='/about' exact >
          <About />
        </Route>
        <Route path='/resume'  exact>
          <Resume />
        </Route>
        <Route path='/portfolio' exact>
          <Portfolio />
        </Route>
        <Route path='/blogs' exact>
          <Blog />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
