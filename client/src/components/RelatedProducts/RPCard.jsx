import React from "react";
import comparison from './RPComparison.jsx';

function RPCard ({ rp }) {
  function starProduct (e) {
    // var currentProduct;
    // var relatedProduct = props.productInfo;
    // return comparison(currentProduct, relatedProduct);
  }

  return (
    <div>
      {/* {props.productInfo.image}
      <br/> */}
      <button onClick={starProduct}>Star</button>
      {rp.category}
      <br/>
      {rp.name}
      <br/>
      {rp.default_price}
      <br/>
      {/* {props.productInfo.starRating} */}
      <br/>
    </div>
  )
}

export default RPCard;