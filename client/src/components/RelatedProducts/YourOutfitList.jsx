import React, { useState } from "react";
import YourOutfitItem from "./YourOutfitItem.jsx";

function YourOutfitList ({ cp, fetchData }) {
  const [outfitItems, setOutfitItems] = useState([]);

  function addToOutfit() {
    outfitItems.push(cp);
    var newOutfitState = [...new Set(outfitItems)];
    setOutfitItems(newOutfitState)
  };

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
        return <YourOutfitItem key={item.id} item={item} fetchData={fetchData}/>
      })}
    </div>
  );
};

export default YourOutfitList;