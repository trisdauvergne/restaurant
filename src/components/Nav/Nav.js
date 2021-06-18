import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Nav.scss';

const Nav = () => {
  // // Version 1
  // const headerControls = useAnimation();
  // const btnControls = useAnimation();

  // const nameVariants = { 
  //   visible: { opacity: 1 },
  //   hidden: { opacity: 0, transition: { duration: 0.3 }}
  // }

  // const btnVariants = { 
  //   hidden: { y: 0 },
  //   visible: { y: -90, transition: { duration: 0.3 }}
  // }

  // const animateNav = () => {
  //   if(window.scrollY >= 660) {
  //     headerControls.start('hidden');
  //     btnControls.start('visible');
  //   } else if (window.scrollY <= 660) {
  //     headerControls.start('visible');
  //     btnControls.start('hidden');
  //   }
  // }

  // window.addEventListener('scroll', animateNav);

  const pVariants = {
    hovering: {
      scale: 1.9,
      transition: {
        yoyo: Infinity,
        duration: 0.8,
      }
    },
    clicked: {
      scale: 0.9
    }
  };

  return (
    <nav className="header">
      <motion.h1
      className="header-heading"
      initial={{opacity: 1}}
      animate={{opacity: 0, transition: { duration: 3 }}}
      >RESTAURANT
      </motion.h1>
      <div className="header-btns">
        <Link to="/about">
          <motion.p
          className="header-btn"
          variants={pVariants}
          whileHover="hovering"
          whileTap="clicked">
            About
          </motion.p>
        </Link>
        <Link to="/menus">
          <motion.p className="header-btn" variants={pVariants} whileHover="hovering" whileTap="clicked">Menus</motion.p>
        </Link>
        <Link to="/contact">
          <motion.p className="header-btn" variants={pVariants} whileHover="hovering" whileTap="clicked">Contact</motion.p>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
