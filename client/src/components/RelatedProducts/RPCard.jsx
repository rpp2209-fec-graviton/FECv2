import React from "react";
import { useNavigate } from  'react-router-dom';
import comparison from './RPComparison.jsx';
import styles from './RPCard.module.css';

function RPCard ({ rp, rpStyle }) {
  const navigate = useNavigate();

  function changeProduct () {
    console.log(rp.id);
    navigate(`/${rp.id}`)
  };

  function starProduct (e) {
    // var currentProduct;
    // var relatedProduct = props.productInfo;
    // return comparison(currentProduct, relatedProduct);
  };

  return (
    <div className={styles.card} onClick={changeProduct} data-testid='rpcard'>
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