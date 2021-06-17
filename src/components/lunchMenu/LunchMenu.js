import React, { useState } from 'react';
import './lunchmenu.scss';
import MenuItem from '../menuItem/MenuItem';
import { motion, AnimatePresence } from 'framer-motion';

const LunchMenu = ({menu}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <article className="lunch-section">
      <h3>Lunch Menu</h3>
      <motion.button onClick={() => setMenuVisible(!menuVisible)} whileHover={{scale: 4, originX: 0, transition: {duration: 0.3, yoyo: Infinity}}}>View</motion.button>
      {menuVisible && menu && menu.map(item => 
      <>
        <MenuItem menuitem={item} />
      </>)}
    </article>
  )
}

export default LunchMenu
