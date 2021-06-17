import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './menuitem.scss';

const MenuItem = ({ menuitem }) => {
  const [visibleIngredients, setVisibleIngredients] = useState(false);
  return (
      <div className="menu-item" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} exit={{y: -1000}}>
        <p>{menuitem.dishName}</p>
        <p>{menuitem.dishDescription}</p>
        <p>{menuitem.dishPrice} SEK</p>
        <button onClick={() => setVisibleIngredients(!visibleIngredients)}>See ingredients</button>
        <AnimatePresence>
        {visibleIngredients && menuitem.dishIngredients.map(ingredient => <><motion.p exit={{opacity: 0, transition: {duration: 1}}}>{ingredient}</motion.p></>)}
        </AnimatePresence>
      </div>
  )
}

export default MenuItem
