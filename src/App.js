import React from 'react';
import Nav from './components/Nav/Nav';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Menus from './pages/menus/Menus';
import './App.scss';

export function App() {
  return (
    <div>
      <Nav />
      <About />
      <Menus />
      <Contact />
      <h1>Checking stuff is still working { new Date().toString() }</h1>
    </div>
  )
}
