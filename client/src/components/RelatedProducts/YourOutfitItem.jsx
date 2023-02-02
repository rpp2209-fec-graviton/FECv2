import React, { useState } from "react";
import styles from './YourOutfitItem.module.css';

function YourOutfitItem ({ item, fetchData, changeProduct, removeFromOutfit }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loaded, setLoaded] = useState(false);

  fetchData(`products/${item.id}/styles`)
  .then((styles) => {
    setPhotoUrl(styles.results[0].photos[0].thumbnail_url);
    setLoaded(true);
  });

  if (item) {
    return (
      <div onClick={() => changeProduct(item.id)} className={styles.outfitCard}>
        <img src={photoUrl}/>
        <br/>
        {item.category}
        <br/>
        {item.name}
        <br/>
        {item.default_price}
        <br/>
        <button onClick={() => removeFromOutfit(item.id)}> Remove </button>
        <br/>
      </div>
    )
  }
}

export default YourOutfitItem;