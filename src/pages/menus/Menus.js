import React, { useState, useEffect } from 'react';
import LunchMenu from '../../components/lunchMenu/LunchMenu';
import DinnerMenu from '../../components/dinnerMenu/DinnerMenu';
import { motion } from 'framer-motion';
import './menus.scss';

const query = `
{
  restaurantMenuCollection {
    items {
      dishName
      dishDescription
      dishPrice
      dishIngredients
      course
      menuOption
    }
  }
}
`;

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const Menus = () => {
  const [menu, setMenu] = useState(false);
  const [menus, setMenus] = useState(null);
  const [lunchItems, setLunchItems] = useState(null);
  const [dinnerItems, setDinnerItems] = useState(null);

  useEffect(() => {
    window.fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      setMenus(data.restaurantMenuCollection.items);
    });
  }, []);

  useEffect(() => {
    if(!menus) {
      return 'No menus yet...';
    } else {
      // console.log(menus);
      lunchSorter();
      dinnerSorter();
    }
  }, [menus]);

  useEffect(() => {
    if(!lunchItems) {
      return 'No lunch items yet...';
    } else {
      // console.log('in useEffect for lunchItems', lunchItems);
    }
  }, [lunchItems]);

  useEffect(() => {
    if(!dinnerItems) {
      return 'No dinner items yet...';
    } else {
      // console.log('in useEffect for dinnerItems', dinnerItems);
    }
  }, [dinnerItems]);

  const lunchSorter = () => {
    let lunchMenu = [];
    menus.forEach(option => {
      if(option.menuOption.includes('Lunch')) {
        lunchMenu.push(option);
      }
    });
    setLunchItems(lunchMenu);

  }

  const dinnerSorter = () => {
    let dinnerMenu = [];
    menus.forEach(option => {
      if(option.menuOption.includes('Dinner')) {
        dinnerMenu.push(option);
      }
    });
    setDinnerItems(dinnerMenu);
  }

  // // using window.scrollY to trigger functions
  // const changeBackground = () => {
  //   // console.log(window.scrollY);
  //   if(window.scrollY >= 550) {
  //     setMenu(true);
  //   } else {
  //     setMenu(false);
  //   }
  // }

  // window.addEventListener('scroll', changeBackground);

  const containerVariants = {
    hidden: {
      y: '100vh',
      opacity: 0,
    },
    visible: {
      y: '0vh',
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.5
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        ease: 'easeInOut',
        duration: 2
      }
    }
  }

  return (
    <motion.section
    className="menus"
    id="menus"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
      <motion.h1
      className="menus-heading">
        Menus page
      </motion.h1>
      <LunchMenu menu={lunchItems} />
      <DinnerMenu menu={dinnerItems} />
    </motion.section>
  )
}

export default Menus
