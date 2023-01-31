import React from "react";
import comparison from './RPComparison.jsx';
import styles from './RPCard.module.css';

function RPCard ({ rp, rpStyle }) {
  function starProduct (e) {
    // var currentProduct;
    // var relatedProduct = props.productInfo;
    // return comparison(currentProduct, relatedProduct);
  }
  console.log('rpStyle', rpStyle)

  return (
    <div className={styles.card} data-testid='rpcard'>
      <img src={rpStyle[0].photos[0].thumbnail_url}/>
      <br/>
      <button onClick={starProduct}>Star</button>
      <br/>
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