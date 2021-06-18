import React from 'react';
import { motion } from 'framer-motion';
import './about.scss';

const About = () => {
  const containerVariants = {
    hidden: {
      y: '100vh',
      opacity: 0,
      transition: {
        duration: 2,
      }
    },
    visible: {
      y: '30vh',
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        ease: 'easeInOut',
        duration: 1
      }
    }
  }

  return (
    <motion.section className="about" id="about"
    initial={{opacity: 0,transition: {duration: 1}}}
    animate={{opacity: 1, transition: {duration: 1}}}
    exit={{transition: {ease: 'easeInOut', duration: 1}}}>
      <motion.div className="about-div" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        <motion.article className="about-copy" whileHover={{scale: 1.1}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor pharetra urna, eget consectetur nulla commodo ac. Donec imperdiet rhoncus enim, sed tempor nunc tristique vitae. Praesent ut nunc in ipsum pretium scelerisque in at justo. Curabitur vitae mi nec ligula suscipit lacinia ut ac lacus. Praesent luctus turpis nec odio tempus, non egestas dui tincidunt. Duis finibus nec metus vitae euismod. Vestibulum accumsan nec leo quis ornare. Phasellus sollicitudin iaculis elit, hendrerit mollis purus hendrerit ac. Ut ullamcorper, neque id elementum iaculis, massa nibh dictum magna, nec lobortis lorem turpis et ante.</p>
        </motion.article>
      </motion.div>
    </motion.section>
  )
}

export default About
