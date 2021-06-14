import React, { useState } from 'react';
import './lunchmenu.scss';
import { motion } from 'framer-motion';

const LunchMenu = () => {
  return (
    <div>
      <h3>Lunch Menu</h3>
      <motion.button whileHover={{
        scale: 3,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow:'0px 0px 8px rgb(255,255,255)' }}>
        View
      </motion.button>
      {/* <motion.p className="text-box"
      initial={{ y: '-250px' }}
      animate={{ y: '100px' }}
      transition={{
        delay: .5,
        // duration: 5, // only used with tween
        type: 'spring',
        stiffness: 500 // only works with spring
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a volutpat nibh. Vivamus condimentum ante eros, eget cursus metus ultrices vel. Aenean dapibus volutpat molestie. Maecenas nisl nibh, accumsan at felis nec, ultricies placerat sapien. Morbi pellentesque tincidunt bibendum. Proin eget vehicula purus, non sodales purus. Vestibulum pharetra vehicula dolor, a consequat turpis suscipit vel. Maecenas blandit sapien purus, a semper erat mattis ut. In lacinia non leo vel maximus. Quisque luctus gravida neque, volutpat sodales leo venenatis vehicula.</motion.p> */}
    </div>
  )
}

export default LunchMenu
