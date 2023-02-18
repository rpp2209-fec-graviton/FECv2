import React, { useState, useEffect } from "react";
import YourOutfitCard from "./YourOutfitCard.jsx";
import { useProductContext } from '../Context/ContextProvider.jsx';

import RPstyles from './RP.module.css';

function YourOutfitList () {
  const { outfitItems, addToOutfit, setOutfitItemRatings, outfitItemRatings, ratingsAverage } = useProductContext();
  const { fetchData, currentProductData } = useRPContext();

  function handleAddToOutfit() {
    setOutfitItemRatings({...outfitItemRatings, [currentProductData.id]: ratingsAverage});
    addToOutfit(currentProductData, fetchData);
  }

  return (
    <div data-testid='outfitlist'>
      Your Outfit

      <div className={outfitItems && outfitItems.length > 5 ? RPstyles['flex-with-scroll'] : RPstyles['flex-center']}>
        <div className={`${RPstyles.card} ${RPstyles.addToOutfit}`} onClick={handleAddToOutfit}>
          <p> Add to Outfit (+) </p>
        </div>
        {outfitItems && outfitItems.map((item) => {
          return <YourOutfitCard className={RPstyles['flex-child']} key={item.id} item={item}/>
        })}
      </div>
    </div>
  );
};

export default YourOutfitList;