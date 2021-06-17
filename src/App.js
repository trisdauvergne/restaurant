import React from 'react';
import { BrowserRouter as Switch, Route, useLocation } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import Nav from './components/Nav/Nav';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Menus from './pages/menus/Menus';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

export function App() {
  const location = useLocation();

  return (
    // <Router>
      <div>
        <Nav />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path ="/" exact component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/menus" component={Menus} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
        <h1>Checking stuff is still working { new Date().toString() }</h1>
      </div>
    // </Router>
  )
}
