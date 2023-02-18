import React, { useState, useEffect } from 'react';
import RPStars from '../../../../../RelatedProducts/RPStars.jsx';
import { useProductContext } from '../../../../../Context/ContextProvider.jsx';

import styles from './TopBar.module.scss';

function TopBar() {
  const { currentProductId } = useProductContext();


  return (
    <div className={styles.topBar__Container}>
      <h2>Rating and Reviews</h2>
      <div className={styles['topBar__Review-Container']}>
        <div className={styles.topBar__Rating} >
          4.4
        </div>
        <RPStars rating={4.4} id={currentProductId} prefix={''}/>
      </div>
      <div />
    </div>
  );
}

export default TopBar;