import React, { useState } from 'react';
import './menus.scss';

const Menus = () => {
  const [menu, setMenu] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 550) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <section className={menu ? "menus active" : "menus"} id="menus">
      <h1>Menus page</h1>
    </section>
  )
}

export default Menus
