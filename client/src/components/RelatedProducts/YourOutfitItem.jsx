import React, { useState } from "react";
import styles from './RPCard.module.css';
import RPStars from './RPStars.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";
import useOutfitList  from "../Hooks/useOutfitList.jsx"

function YourOutfitItem ({ item, photo, removeFromOutfit }) {
  const { changeProduct } = useRPContext();
  const { outfitItemRatings } = useOutfitList();
  if (item) {
    return (
      <div className={styles.card}>
        <img src={photo} onClick={() => changeProduct(item.id)}/>
        <br/>
        {item.category}
        <br/>
        {item.name}
        <br/>
        <span>${item.default_price}</span>
        <br/>
        {outfitItemRatings && <RPStars id={item.id} rating={outfitItemRatings[item.id]}/>}
        <button onClick={() => removeFromOutfit(item.id)}> Remove </button>
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;