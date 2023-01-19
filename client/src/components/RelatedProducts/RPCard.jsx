import React from "react";
import comparison from './RPComparison.jsx';

function Card (props) {
  function starProduct (e) {
    var currentProduct;
    var relatedProduct = props.productInfo;
    return comparison(currentProduct, relatedProduct);
  }

  return (
    <div>
      {props.productInfo.image}
      <br/>
      <button onClick={starProduct}></button>
      {props.productInfo.category}
      <br/>
      {props.productInfo.name}
      <br/>
      {props.productInfo.price}
      <br/>
      {props.productInfo.starRating}
      <br/>
    </div>
  )
}

export default Card;