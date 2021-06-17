import React, { useState } from 'react';
import './lunchmenu.scss';
import MenuItem from '../menuItem/MenuItem';
import { motion, AnimatePresence } from 'framer-motion';

const LunchMenu = ({menu}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [test, setTest] = useState(true);

  setTimeout(() => {
    setTest(false);
  }, 3000);

  // useEffect(() => {
  //   setLunchItems(menu);
  // }, []);

  return (
    <section className="lunch-section">
      <AnimatePresence>
      {test && <motion.h3 exit={{y: -1000}}>Lunch Menu</motion.h3>}
      </AnimatePresence>
      <motion.button onClick={() => setMenuVisible(!menuVisible)} whileHover={{scale: 4, transition: {duration: 0.3, yoyo: Infinity}}}>View</motion.button>
      {menuVisible && menu && menu.map(item => 
      <>
        <MenuItem menuitem={item} />
      </>)}
    </section>
  )
}

export default LunchMenu
