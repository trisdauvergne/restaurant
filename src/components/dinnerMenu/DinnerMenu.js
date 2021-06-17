import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from '../menuItem/MenuItem';

const DinnerMenu = ({menu}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <article className="dinner-section">
      <h3>Dinner Menu</h3>
      <motion.button onClick={() => setMenuVisible(!menuVisible)} whileHover={{scale: 4, originX: 0, transition: {duration: 0.3, yoyo: Infinity}}}>View</motion.button>
      {menuVisible && menu && menu.map(item =>
        <>
          <MenuItem menuitem={item} />
        </>)}
    </article>
  )
}

export default DinnerMenu
