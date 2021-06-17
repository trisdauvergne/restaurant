import React, { useState } from 'react';
import './menuitem.scss';

const MenuItem = ({ menuitem }) => {
  const [visibleIngredients, setVisibleIngredients] = useState(false);
  return (
    <div className="menu-item">
      <p>{menuitem.dishName}</p>
      <p>{menuitem.dishDescription}</p>
      <p>{menuitem.dishPrice} SEK</p>
      <button onClick={() => setVisibleIngredients(!visibleIngredients)}>See ingredients</button>
      {visibleIngredients && menuitem.dishIngredients.map(ingredient => <><p>{ingredient}</p></>)}
    </div>
  )
}

export default MenuItem
