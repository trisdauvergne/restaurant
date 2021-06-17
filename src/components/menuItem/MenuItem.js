import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './menuitem.scss';

const MenuItem = ({ menuitem }) => {
  const [visibleIngredients, setVisibleIngredients] = useState(false);

  const exitVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
      <motion.div className="menu-item" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} exit={{y: -1000}}>
        <motion.p className="dish-name" whileHover={{scale: 1.5, originX: 0}} >{menuitem.dishName}</motion.p>
        <p>{menuitem.dishDescription}</p>
        <p>{menuitem.dishPrice} SEK</p>
        <button onClick={() => setVisibleIngredients(!visibleIngredients)}>View Ingredients</button>
        <AnimatePresence>
        {visibleIngredients && <motion.p variants={exitVariants} initial="hidden" animate="visible" exit="exit">Ingredients: {menuitem.dishIngredients.join(', ')}</motion.p>}
        </AnimatePresence>
      </motion.div>
  )
}

export default MenuItem
