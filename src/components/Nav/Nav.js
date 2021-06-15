import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import './Nav.scss';

const Nav = () => {
  const controls = useAnimation();
  // const [ headerRef, headerInView ] = useInView({
  //   triggerOnce: false,
  // });

  const nameVariants = { 
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 1 }}
  }

  const hideTitle = () => {
    if(window.scrollY >= 660) {
      console.log('window at 660');
      controls.start('hidden');
    } else if (window.scrollY <= 660) {
      controls.start('visible');
    }
  }

  window.addEventListener('scroll', hideTitle);

  return (
    <nav className="header">
      <motion.h1 className="header-heading" variants={nameVariants} animate={controls} initial="visible">RESTAURANT</motion.h1>
      <div className="header-btns">
        <Link to="about" smooth={true} duration={1000}><p className="header-btn">About</p></Link>
        <Link to="menus" smooth={true} duration={1000}><p className="header-btn">Menus</p></Link>
        <Link to="contact" smooth={true} duration={1000}><p className="header-btn">Contact</p></Link>
      </div>
    </nav>
  )
}

export default Nav
