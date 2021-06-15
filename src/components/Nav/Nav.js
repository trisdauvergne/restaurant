import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import {
  motion,
  useAnimation,
  useViewportScroll, 
  useTransform } from 'framer-motion';
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

  // Version 2
  const { scrollYProgress } = useViewportScroll();

  return (
    // // Version 1
    // <nav className="header">
    //   <motion.h1 className="header-heading"
    //   variants={nameVariants}
    //   animate={{ opacity: 0, transition: { duration: 0.5 } }}
    //   initial={{ opacity: 1}}>RESTAURANT</motion.h1>
    //   <motion.div className="header-btns" variants={btnVariants} animate={btnControls} initial="hidden">
    //     <Link to="about" smooth={true} duration={1000}><p className="header-btn">About</p></Link>
    //     <Link to="menus" smooth={true} duration={1000}><p className="header-btn">Menus</p></Link>
    //     <Link to="contact" smooth={true} duration={1000}><p className="header-btn">Contact</p></Link>
    //   </motion.div>
    // </nav>
    // Version 2
    <nav className="header">
      <motion.h1
      className="header-heading"
      initial={{opacity: 1}}
      animate={{opacity: 0}}
      >RESTAURANT
      </motion.h1>
      <div className="header-btns">
        <Link to="about" smooth={true} duration={1000}><p className="header-btn">About</p></Link>
        <Link to="menus" smooth={true} duration={1000}><p className="header-btn">Menus</p></Link>
        <Link to="contact" smooth={true} duration={1000}><p className="header-btn">Contact</p></Link>
      </div>
    </nav>
  )
}

export default Nav
