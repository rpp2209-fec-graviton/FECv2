import React, { useState } from "react";
import styles from './RPCard.module.css';
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitItem ({ item, photo, removeFromOutfit }) {
  const { changeProduct } = useRPContext();
  if (item) {
    return (
      <div className={styles.card}>
        <img src={photo} onClick={() => changeProduct(item.id)}/>
        <br/>
        {item.category}
        <br/>
        {item.name}
        <br/>
        {item.default_price}
        <br/>
        <button onClick={() => removeFromOutfit(item.id)}> Remove </button>
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;