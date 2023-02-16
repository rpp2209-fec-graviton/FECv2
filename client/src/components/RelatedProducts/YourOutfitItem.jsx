import React, { useState } from "react";
import styles from './RP.module.css';
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitItem ({ item, photo, removeFromOutfit }) {
  const { changeProduct } = useRPContext();
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
        <br/>
        {/* <button onClick={() => removeFromOutfit(item.id)}> Remove </button> */}
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;