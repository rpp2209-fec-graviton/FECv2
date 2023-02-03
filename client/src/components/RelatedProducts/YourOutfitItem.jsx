import React, { useState } from "react";
import styles from './YourOutfitItem.module.css';

function YourOutfitItem ({ item, changeProduct, photo, removeFromOutfit }) {
  if (item) {
    return (
      <div className={styles.outfitCard}>
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