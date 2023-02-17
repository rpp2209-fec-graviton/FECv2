import React, { useState } from "react";
import { useProductContext } from '../Context/ContextProvider.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";
import RPStars from './RPStars.jsx';
import styles from './RP.module.css';

function YourOutfitItem ({ item }) {
  const { outfitItemRatings, outfitPhotoUrls, removeFromOutfit } = useProductContext();
  const { changeProduct } = useRPContext();
  if (item) {
    return (
      <div className={styles.card}>
        <img src={outfitPhotoUrls[item.id]} onClick={() => changeProduct(item.id)}/>
        <button className={styles.action} onClick={() => removeFromOutfit(item.id)}>x</button>
        <br/>
        {item.category}
        <br/>
        {item.name}
        <br/>
        <span>${item.default_price}</span>
        <br/>
        <RPStars rating={outfitItemRatings[item.id]} id={item.id} prefix={'O'}/>
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;