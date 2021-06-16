import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import Nav from './components/Nav/Nav';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Menus from './pages/menus/Menus';
import './App.scss';

export function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path ="/" exact component={Welcome} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/menus" component={Menus} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <h1>Checking stuff is still working { new Date().toString() }</h1>
      </div>
    </Router>
  )
}
