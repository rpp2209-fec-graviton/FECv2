import React from "react";
import comparison from './RPComparison.jsx';
import styles from './RPCard.module.css';

function RPCard ({ rp, rpStyles, changeProduct }) {
  function starProduct (e) {
    // var currentProduct;
    // var relatedProduct = props.productInfo;
    // return comparison(currentProduct, relatedProduct);
  };
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
      <img onClick={() => changeProduct(rp.id)} src={imgUrl}/>
      <br/>
      <button onClick={starProduct}>Star</button>
      <br/>
      {rp.category}
      <br/>
      {rp.name}
      <br/>
      {salePrice ? <span className={styles.red}>{salePrice} <strike>{originalPrice}</strike></span> : <span>{originalPrice}</span>}
      <br/>
      {/* {props.productInfo.starRating} */}
      <br/>
    </div>
  )
}

export default RPCard;