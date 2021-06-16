import React, { useState, useEffect } from 'react';
import LunchMenu from '../../components/lunchMenu/LunchMenu';
import DinnerMenu from '../../components/dinnerMenu/DinnerMenu';
import DrinksMenu from '../../components/drinksMenu/DrinksMenu';
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
  const [page, setPage] = useState(null);

  useEffect(() => {
    console.log('usedeffect');
    console.log('from process.env:', process.env.REACT_APP_SPACE_ID);
    console.log('from process.env:', process.env.REACT_APP_ACCESS_TOKEN);
    console.log('from variables in menus.js:', SPACE_ID);
    console.log('from variables in menus.js:', ACCESS_TOKEN);
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
      setPage(data.restaurantMenuCollection.items);
    });
  }, []);

  if(!page) {
    return 'Loading...';
  } else {
    console.log(page);
  }

  const changeBackground = () => {
    // console.log(window.scrollY);
    if(window.scrollY >= 550) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <motion.section className={menu ? "menus active" : "menus"} id="menus"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
      <motion.h1 initial={{ x: 0 }} animate={{ x: 500 }} transition={{ type: 'tween', duration: 5 }}>
        Menus page
      </motion.h1>
      <LunchMenu />
      <DinnerMenu />
      <DrinksMenu />
    </motion.section>
  )
}

export default Menus
