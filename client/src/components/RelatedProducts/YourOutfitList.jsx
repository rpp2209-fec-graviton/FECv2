import React, { useState } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";

function YourOutfitList ({ cp, fetchData }) {
  const [outfitItems, setOutfitItems] = useState([]);

  function addToOutfit() {
    outfitItems.push(cp);
    var newOutfitState = [...new Set(outfitItems)];
    setOutfitItems(newOutfitState)
  };

  return (
    <div>
      Your Outfit
      <div>
        <button onClick={addToOutfit}> Add to Outfit (+) </button>
      </div>
      {outfitItems && outfitItems.map((item) => {
        return <YourOutfitItem key={item.id} item={item} fetchData={fetchData}/>
      })}
    </div>
  );
};

export default YourOutfitList;