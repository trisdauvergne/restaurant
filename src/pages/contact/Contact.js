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
    hidden: {
      opacity: 1,
      y: '100vh',
    },
    visible: {
      y: '0vh',
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delayChildren: 3
      }
    },
    exit: {
      y: '-100vh',
      transition: {
        ease: 'easeInOut',
        duration: 1.5
      }
    }
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2
      }
    }
  }
  

  // useEffect(() => {
  //   if (sectionInView) {
  //     console.log('in view');
  //     controls.start('visible');
  //   }
  // }, [controls, sectionInView]);

  return (
    <motion.section className="contact" id="contact" variants={sectionVariants} animate="visible" initial="hidden" exit="exit">
      <motion.h1 variants={childVariants}>Contact page</motion.h1>
      <motion.p variants={childVariants}>Phone number</motion.p>
      <motion.p variants={childVariants}>Email</motion.p>
      <div>
        <h3>Test component</h3>
      </div>
    </motion.section>
  )
}

export default Contact
