import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";
import { useProductContext } from '../Context/ContextProvider.jsx';

function YourOutfitList ({ cp, fetchData, changeProduct }) {
  const { outfitItems, addToOutfit, removeFromOutfit, outfitPhotoUrls } = useProductContext();

  return (
    <div>
      <h2>
      Your Outfit
      </h2>
      <div>
        <button onClick={() => addToOutfit(cp, fetchData)}> Add to Outfit (+) </button>
      </div>
      {outfitItems && outfitItems.map((item) => {
        return <YourOutfitItem key={item.id} photo={outfitPhotoUrls[item.id]}  item={item} changeProduct={changeProduct} removeFromOutfit={removeFromOutfit}/>
      })}
    </div>
  );
};

export default YourOutfitList;