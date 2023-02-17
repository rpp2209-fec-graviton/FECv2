import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";
import styles from './RP.module.css';
import { useProductContext } from '../Context/ContextProvider.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitList () {
  const { outfitItems, addToOutfit, setOutfitItemRatings, outfitItemRatings, ratingsAverage } = useProductContext();
  const { fetchData, currentProductData } = useRPContext();

  function handleAddToOutfit() {
    setOutfitItemRatings({...outfitItemRatings, [currentProductData.id]: ratingsAverage});
    addToOutfit(currentProductData, fetchData);
  }

  return (
    <div>
      <h2>
      Your Outfit
      </h2>
      <div>
        <div className={styles.card} onClick={handleAddToOutfit}>
          <p> Add to Outfit (+) </p>
        </div>
        {outfitItems && outfitItems.map((item) => {
          return <YourOutfitItem key={item.id} item={item}/>
        })}
      </div>
    </div>
  );
};

export default YourOutfitList;