import React, { useEffect } from "react";
import RPComparison from './RPComparison.jsx';
import styles from './RP.module.css';
import RPStars from './RPStars.jsx';
import { useRPContext } from "./Context/RPProvider.jsx";

function RPCard ({ rp, rpStyles, rpRating, toggleComparison }) {
  const { changeProduct } = useRPContext();
  var imgUrl = null;
  var defaultStyle = [];
  if (rpStyles) {
    imgUrl = rpStyles[0].photos[0].thumbnail_url;
    defaultStyle = rpStyles.filter((style) => {
      return style['default?'];
    });
  }

  var originalPrice = null;
  var salePrice = null;
  if (defaultStyle.length > 0) {
    originalPrice = defaultStyle[0].original_price;
    if (defaultStyle[0].sale_price !== null) {
      salePrice = defaultStyle[0].sale_price;
    }
  }

  return (
    <div className={styles.card} data-testid='rpcard'>
      <img src={imgUrl} onClick={() => changeProduct(rp.id)}/>
      <h3 className={styles.action} onClick={() => toggleComparison(rp.id)}>⭐</h3>
      <br/>
      {rp.category}
      <br/>
      {rp.name}
      <br/>
      {salePrice && <span className={styles.red}>${salePrice} <strike>${originalPrice}</strike></span>}
      {originalPrice && <span>${originalPrice}</span>}
      <br/>
      <RPStars id={rp.id} rating={rpRating}/>
      <br/>
    </div>
  )
}

export default RPCard;