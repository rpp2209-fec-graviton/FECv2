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
  if (rpStyles) {
    imgUrl = rpStyles[0].photos[0].thumbnail_url;
    var defaultStyle = rpStyles.filter((style) => {
      return style['default?'];
    });
  };

  var originalPrice = null;
  var salePrice = null;
  if (defaultStyle.length > 0) {
    originalPrice = defaultStyle[0].original_price;
    if (defaultStyle[0].sale_price !== null) {
      salePrice = defaultStyle[0].sale_price;
    }
  }

  return (
    <div className={styles.card} onClick={() => changeProduct(rp.id)} data-testid='rpcard'>
      <img src={imgUrl}/>
      <br/>
      <button onClick={starProduct}>Star</button>
      <br/>
      {rp.category}
      <br/>
      {rp.name}
      <br/>
        {salePrice ? <>{salePrice} {originalPrice}</> : <>{originalPrice}</>}
      <br/>
      {/* {props.productInfo.starRating} */}
      <br/>
    </div>
  )
}

export default RPCard;