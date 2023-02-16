import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";
import { useProductContext } from '../Context/ContextProvider.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

import RPstyles from './RP.module.css';
import styles from './RPCard.module.css';

function YourOutfitList () {
  const { outfitItems, addToOutfit, removeFromOutfit, outfitPhotoUrls } = useProductContext();
  const { fetchData, currentProductData, changeProduct } = useRPContext();

  return (
    <div>
      <h2>
      Your Outfit
      </h2>
      <div className={outfitItems && outfitItems.length > 5 ? RPstyles['flex-with-scroll'] : RPstyles['flex-center']}>
        <div className={`${styles.card} ${styles.addToOutfit}`} onClick={() => addToOutfit(currentProductData, fetchData)}>
          <p> Add to Outfit (+) </p>
        </div>
        {outfitItems && outfitItems.map((item) => {
          return <YourOutfitItem className={RPstyles['flex-child']} key={item.id} photo={outfitPhotoUrls[item.id]}  item={item} changeProduct={changeProduct} removeFromOutfit={removeFromOutfit}/>
        })}
      </div>
    </div>
  );
};

export default YourOutfitList;