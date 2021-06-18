import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
      },
      opacity: 1,
    },
    clicked: {
      scale: 0.9
    },
    initial: {
      opacity: 1,
    },
    animation: {
      opacity: 0.5,
      transition: {
        duration: 2,
      }
    }
  };

  const restaurantNameVariants = {
    initial: {
      opacity: 0,
    },
    animation: {
      opacity: 1,
      transition: {
        duration: 3,
      }
    }
  }

  return (
    <nav className="header">
      <AnimatePresence>
        <motion.h1
        className="header-heading"
        variants={restaurantNameVariants}
        initial="initial"
        animate="animation"
        >RESTAURANT
        </motion.h1>
      <div className="header-btns">
        <Link to="/about">
          <motion.p
          className="header-btn"
          variants={pVariants}
          whileHover="hovering"
          whileTap="clicked"
          initial="initial"
          animate="animation"
          exit="exit">
            About
          </motion.p>
        </Link>
        <Link to="/menus">
          <motion.p
          className="header-btn"
          variants={pVariants}
          whileHover="hovering"
          whileTap="clicked"
          initial="initial"
          animate="animation">
            Menus
          </motion.p>
        </Link>
        <Link to="/contact">
          <motion.p className="header-btn"
          variants={pVariants}
          whileHover="hovering"
          whileTap="clicked"
          initial="initial"
          animate="animation">
            Contact
          </motion.p>
        </Link>
      </div>
      </AnimatePresence>
    </nav>
  )
}

export default Nav
