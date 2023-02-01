import React, { useState } from "react";
import styles from './YourOutfitItem.module.css';

function YourOutfitItem ({ item, fetchData }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  fetchData(`products/${item.id}/styles`)
  .then((styles) => {
    setPhotoUrl(styles.results[0].photos[0].thumbnail_url);
  });

  if (photoUrl) {
    return (
      <div className={styles.outfitCard}>
        <img src={photoUrl}/>
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
}

export default YourOutfitItem;