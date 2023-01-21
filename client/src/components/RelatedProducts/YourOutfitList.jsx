import React, { useState } from "react";

function YourOutfitList (props) {
  const [outfitItems, setOutfitItems] = useState([]);

  return (
    <div>
    {props.outfit.map((product) => {
      return <YourOutfitItem productInfo={product} outfitItems={outfitItems} setOutfitItems={setOutfitItems}/>
    })}
    </div>
  );
};

export default YourOutfitList;