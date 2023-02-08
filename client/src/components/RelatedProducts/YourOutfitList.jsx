import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";
import { useRPContext } from "./Context/RPProvider.jsx";

function YourOutfitList () {
  const { fetchData, currentProductData, changeProduct } = useRPContext();
  const [outfitItems, setOutfitItems] = useState([]);
  const [outfitPhotoUrls, setOutfitPhotoUrls] = useState({});

  function addToOutfit() {
    if (!outfitItems.some(item => item.id === currentProductData.id)) {
      fetchData(`products/${currentProductData.id}/styles`)
      .then((styles) => {
        var itemPhotoUrl = styles.results[0].photos[0].thumbnail_url;
        setOutfitPhotoUrls({...outfitPhotoUrls, [currentProductData.id]: itemPhotoUrl});
        setOutfitItems([...outfitItems, currentProductData]);
      });
    }
  };

  function removeFromOutfit(id) {
    var newState = outfitItems.filter((item) => {
      return item.id !== id;
    });
    setOutfitItems(newState);
  }
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
      <h2>
      Your Outfit
      </h2>
      <div>
        <button onClick={addToOutfit}> Add to Outfit (+) </button>
      </div>
      {outfitItems && outfitItems.map((item) => {
        return <YourOutfitItem key={item.id} photo={outfitPhotoUrls[item.id]}  item={item} changeProduct={changeProduct} removeFromOutfit={removeFromOutfit}/>
      })}
    </div>
  );
};

export default YourOutfitList;