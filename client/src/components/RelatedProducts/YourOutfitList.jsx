import React, { useState } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";

function YourOutfitList ({ cp }) {
  const [outfitItems, setOutfitItems] = useState([]);
  console.log('cp', cp)

  function addToOutfit() {
    setOutfitItems([...outfitItems, cp])
  };

  return (
    <div>
      Your Outfit
      <div>
        <button onClick={addToOutfit}> Add to Outfit (+) </button>
      </div>
      {outfitItems && outfitItems.map((item) => {
        return <YourOutfitItem item={item}/>
      })}
    </div>
  );
};

export default YourOutfitList;