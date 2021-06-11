import React, { useState } from 'react';
import LunchMenu from '../../components/lunchMenu/LunchMenu';
import DinnerMenu from '../../components/dinnerMenu/DinnerMenu';
import DrinksMenu from '../../components/drinksMenu/DrinksMenu';
import { motion } from 'framer-motion';
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
    <motion.section className={menu ? "menus active" : "menus"} id="menus"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
      <motion.h1 initial={{ x: 0 }} animate={{ x: 500 }} transition={{ type: 'tween', duration: 5 }}>
        Menus page
      </motion.h1>
      <LunchMenu />
      <DinnerMenu />
      <DrinksMenu />
    </motion.section>
  )
}

export default Menus
