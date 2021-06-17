import React, { useState, useEffect } from 'react';
import './lunchmenu.scss';
import MenuItem from '../menuItem/MenuItem';
import { motion } from 'framer-motion';

const LunchMenu = ({menu}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  // useEffect(() => {
  //   setLunchItems(menu);
  // }, []);

  const clicked = () => {
    console.log('clicked');
    setMenuVisible(true);
  }

  return (
    <section className="lunch-section">
      <h3>Lunch Menu</h3>
      <button onClick={clicked}>View</button>
      {menuVisible && menu && menu.map(item => <><MenuItem menuitem={item} />
      </>)}
    </section>
  )
}

export default LunchMenu
