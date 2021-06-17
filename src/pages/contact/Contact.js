import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView  } from 'react-intersection-observer';
import './contact.scss';

const Contact = () => {
  const controls = useAnimation();
  // const [ sectionRef, sectionInView ] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.1,
  // });

  const sectionVariants = {
    visible: {
      y: '0vh',
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        delayChildren: 1
      }
    },
    hidden: {
      opacity: 1,
      y: '100vh',
    },
    exit: {
      y: '-100vh',
      transition: {
        ease: 'easeInOut',
        duration: 2
      }
    }
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }
  

  // useEffect(() => {
  //   if (sectionInView) {
  //     console.log('in view');
  //     controls.start('visible');
  //   }
  // }, [controls, sectionInView]);

  return (
    <motion.section className="contact" id="contact" variants={sectionVariants} animate="visible" initial="hidden">
      <motion.h1 variants={childVariants}>Contact page</motion.h1>
      <motion.p variants={childVariants}>Phone number</motion.p>
      <motion.p variants={childVariants}>Email</motion.p>
    </motion.section>
  )
}

export default Contact
