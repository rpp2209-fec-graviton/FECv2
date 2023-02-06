import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";
import { useProductContext } from '../Context/ContextProvider.jsx';

function YourOutfitList ({ cp, fetchData, changeProduct }) {
  const {
    outfitItems,
    setOutfitItems,
    addToOutfit,
    removeFromOutfit,
    outfitPhotoUrls,
    setOutfitPhotoUrls
  } = useProductContext();

  // get the items once on first load
  useEffect(() => {
    const storedItems = window.localStorage.getItem('OUTFIT_ITEMS');
    if ( storedItems !== null ) setOutfitItems(JSON.parse(storedItems));

    const storedPhotos = window.localStorage.getItem('OUTFIT_PHOTOS');
    if ( storedPhotos !== null ) setOutfitPhotoUrls(JSON.parse(storedPhotos));
  }, []);
  // set the outfit items in local storage, whenever they change
  useEffect(() => {
    window.localStorage.setItem('OUTFIT_ITEMS', JSON.stringify(outfitItems));
    window.localStorage.setItem('OUTFIT_PHOTOS', JSON.stringify(outfitPhotoUrls));
  }, [outfitItems, outfitPhotoUrls]);

  return (
    <div>
      Your Outfit
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