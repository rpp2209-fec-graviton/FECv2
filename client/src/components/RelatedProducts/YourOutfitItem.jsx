import React from "react";

function YourOutfitItem ({ item }) {
  console.log('item', item);
  return (
    <div>
      <br/>
      {item.category}
      <br/>
      {item.name}
      <br/>
      {item.default_price}
      <br/>
      {/* {props.productInfo.starRating} */}
      <br/>
    </div>
  )
}

export default YourOutfitItem;