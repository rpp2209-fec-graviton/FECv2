import React, { useState } from "react";
import styles from './RP.module.css';
import { useProductContext } from '../Context/ContextProvider.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitItem ({ item, photo, removeFromOutfit }) {
  const { changeProduct } = useRPContext();
  const { outfitItemRatings } = useProductContext();
  if (item) {
    return (
      <div className={styles.card}>
        <img src={photo} onClick={() => changeProduct(item.id)}/>
        <button className={styles.star} onClick={() => removeFromOutfit(item.id)}>x</button>
        <br/>
        {item.category}
        <br/>
        {item.name}
        <br/>
        {item.default_price}
      </div>
    )
  }
}

export default YourOutfitItem;