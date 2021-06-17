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
        duration: 2
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
  

  // useEffect(() => {
  //   if (sectionInView) {
  //     console.log('in view');
  //     controls.start('visible');
  //   }
  // }, [controls, sectionInView]);

  return (
    <motion.section id="contact" variants={sectionVariants} animate="visible" initial="hidden">
      <h1>Contact page</h1>
      <p>Phone number</p>
      <p>Email</p>
    </motion.section>
  )
}

export default Contact
