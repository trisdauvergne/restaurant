import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="header">
      <h1 className="header-txt">RESTAURANT</h1>
      <div className="header-btns">
        <button>About</button>
        <button>Menus</button>
        <button>Contact</button>
      </div>
    </nav>
  )
}

export default Nav
