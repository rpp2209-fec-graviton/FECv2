import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";
import styles from './RPCard.module.css';
import { useProductContext } from '../Context/ContextProvider.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitList () {
  const { outfitItems, addToOutfit, removeFromOutfit, outfitPhotoUrls } = useProductContext();
  const { fetchData, currentProductData, changeProduct } = useRPContext();

  return (
    <div>
      <h2>
      Your Outfit
      </h2>
      <div>
        <div className={styles.card} onClick={() => addToOutfit(currentProductData, fetchData)}>
          <p> Add to Outfit (+) </p>
        </div>
        {outfitItems && outfitItems.map((item) => {
          return <YourOutfitItem key={item.id} photo={outfitPhotoUrls[item.id]}  item={item} changeProduct={changeProduct} removeFromOutfit={removeFromOutfit}/>
        })}
      </div>
    </div>
  );
};

export default YourOutfitList;