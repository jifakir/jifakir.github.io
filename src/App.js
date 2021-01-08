import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import About from './About/About';
import './App.scss';
import BgLines from './BgLines/BgLines';
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
        <BgLines/>
        <Navigation />
        <Switch>
          <Route path='/home'  exact>
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
          {/* <Route path='/blogs' exact>
            <Blog />
          </Route> */}
          <Route path='/contact' exact>
            <Contact />
          </Route>
          <Redirect to='/home' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
