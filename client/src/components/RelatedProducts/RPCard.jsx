import React from "react";
import RPComparison from './RPComparison.jsx';
import styles from './RPCard.module.css';

function RPCard ({ rp, rpStyles, rpRating, changeProduct, setModalIsOpen }) {
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
      <img src={imgUrl} onClick={() => changeProduct(rp.id)}/>
      <h3 className={styles.star} onClick={() => setModalIsOpen(true)}>⭐</h3>
      <br/>
      {rp.category}
      <br/>
      {rp.name}
      <br/>
      {salePrice ? <span className={styles.red}>{salePrice} <strike>{originalPrice}</strike></span> : <span>{originalPrice}</span>}
      <br/>
      {rpRating}
      <br/>
    </div>
  )
}

export default RPCard;