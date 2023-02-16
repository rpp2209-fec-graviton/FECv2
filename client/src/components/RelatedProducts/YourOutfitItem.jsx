import React, { useState } from "react";
import styles from './RP.module.css';
import { useProductContext } from '../Context/ContextProvider.jsx';
import OutfitRating from './OutfitRating.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitItem ({ item, photo, removeFromOutfit }) {
  const { outfitItemRatings } = useProductContext();
  const { changeProduct } = useRPContext();
  if (item) {
    return (
      <div className={styles.card}>
        <img src={photo} onClick={() => changeProduct(item.id)}/>
        <button className={styles.action} onClick={() => removeFromOutfit(item.id)}>x</button>
        <br/>
        {item.category}
        <br/>
        {item.name}
        <br/>
        <span>${item.default_price}</span>
        <br/>
        <OutfitRating rating={outfitItemRatings[item.id]} id={item.id} />
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;