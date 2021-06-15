import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import './Nav.scss';

const Nav = () => {
  const headerControls = useAnimation();
  const btnControls = useAnimation();
  // const [ headerRef, headerInView ] = useInView({
  //   triggerOnce: false,
  // });

  const nameVariants = { 
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.3 }}
  }

  const btnVariants = { 
    hidden: { y: 0 },
    visible: { y: -90, transition: { duration: 0.3 }}
  }

  const animateNav = () => {
    if(window.scrollY >= 660) {
      headerControls.start('hidden');
      btnControls.start('visible');
    } else if (window.scrollY <= 660) {
      headerControls.start('visible');
      btnControls.start('hidden');
    }
  }

  // const moveBtns = () => {
  //   if(window.scrollY >= 660) {
  //     console.log('moveBtns function triggered');
  //     btnControls.start('visible');
  //   }
  // }

  window.addEventListener('scroll', animateNav);
  // window.addEventListener('scroll', moveBtns);


  return (
    <nav className="header">
      <motion.h1 className="header-heading" variants={nameVariants} animate={headerControls} initial="visible">RESTAURANT</motion.h1>
      <motion.div className="header-btns" variants={btnVariants} animate={btnControls} initial="hidden">
        <Link to="about" smooth={true} duration={1000}><p className="header-btn">About</p></Link>
        <Link to="menus" smooth={true} duration={1000}><p className="header-btn">Menus</p></Link>
        <Link to="contact" smooth={true} duration={1000}><p className="header-btn">Contact</p></Link>
      </motion.div>
    </nav>
  )
}

export default Nav
