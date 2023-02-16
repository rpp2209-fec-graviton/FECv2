import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";
import styles from './RP.module.css';
import { useProductContext } from '../Context/ContextProvider.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitList () {
  const { outfitItems, addToOutfit, removeFromOutfit, outfitPhotoUrls } = useProductContext();
  const { fetchData, currentProductData, changeProduct } = useRPContext();
  console.log(currentProductData.id, currentProductData.name)

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
          return <YourOutfitItem key={item.id} photo={outfitPhotoUrls[item.id]} item={item} removeFromOutfit={removeFromOutfit}/>
        })}
      </div>
    </div>
  );
};

export default YourOutfitList;