import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView  } from 'react-intersection-observer';
import './contact.scss';

const Contact = () => {
  const controls = useAnimation();
  const [ sectionRef, sectionInView ] = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  const sectionVariants = {
    visible: { opacity: 1, backgroundColor: 'pink', transition: { duration: 1 } },
    hidden: { opacity: 0,}
  };
  

  useEffect(() => {
    if (sectionInView) {
      console.log('in view');
      controls.start("visible");
    }
  }, [controls, sectionInView]);

  return (
    <motion.section ref={sectionRef} id="contact" variants={sectionVariants} animate={controls} initial="hidden">
      <h1>Contact page</h1>
      <p>Phone number</p>
      <p>Email</p>
    </motion.section>
  )
}

export default Contact
