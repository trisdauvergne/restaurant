import React from 'react';
import { Link } from 'react-scroll'
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="header">
      <h1 className="header-heading">RESTAURANT</h1>
      <div className="header-btns">
        <Link to="about" smooth={true} duration={1000}><p className="header-btn">About</p></Link>
        <Link to="menus" smooth={true} duration={1000}><p className="header-btn">Menus</p></Link>
        <Link to="contact" smooth={true} duration={1000}><p className="header-btn">Contact</p></Link>
      </div>
    </nav>
  )
}

export default Nav
