import React, { useState } from "react";
import styles from './RP.module.css';
import { useProductContext } from '../Context/ContextProvider.jsx';
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
        <button className={styles.star} onClick={() => removeFromOutfit(item.id)}>x</button>
        <br/>
        {item.category}
        <br/>
        {item.name}
        <br/>
        <span>${item.default_price}</span>
        <br/>
        {outfitItemRatings && <RPStars id={item.id} rating={outfitItemRatings[item.id]}/>}
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;