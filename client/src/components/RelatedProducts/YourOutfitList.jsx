import React, { useState, useEffect } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";

function YourOutfitList ({ cp, fetchData, changeProduct }) {
  const [outfitItems, setOutfitItems] = useState([]);

  function addToOutfit() {
    if(!outfitItems.includes(cp)) {
      console.log('outfitItems', outfitItems)
      console.log('cp', cp)
      setOutfitItems([outfitItems, cp]);
    }
  };

  function removeFromOutfit(id) {
    // setOutfitItems(outfitItems => {
      // return outfitItems.filter(fruit => fruit !== value)
    // })
  }

  useEffect(() => {
    const data = window.localStorage.getItem('OUTFIT_STATE');
    if ( data !== null ) setOutfitItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('OUTFIT_STATE', JSON.stringify(outfitItems));
  }, [outfitItems]);

  return (
    <div>
      Your Outfit
      <div>
        <button onClick={addToOutfit}> Add to Outfit (+) </button>
      </div>
      {outfitItems && outfitItems.map((item) => {
        return <YourOutfitItem key={item.id} item={item} fetchData={fetchData} changeProduct={changeProduct} removeFromOutfit={removeFromOutfit}/>
      })}
    </div>
  );
};

export default YourOutfitList;