import React, { useState } from "react";
import styles from './RP.module.css';
import { useProductContext } from '../Context/ContextProvider.jsx';
import OutfitStars from './OutfitStars.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

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
        <OutfitStars rating={outfitItemRatings[item.id]} id={item.id} />
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;