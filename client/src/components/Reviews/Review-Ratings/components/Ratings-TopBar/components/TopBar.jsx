import React, { useState, useEffect } from 'react';
import StarRatingBar from '../../../../../StarRatingBar/StarRatingBar.jsx';

import styles from './TopBar.module.scss';
import RPStars from '../../../../../RelatedProducts/RPStars.jsx';
function TopBar() {
  return (
    <div className={styles.topBar__Container}>
      <h2>Rating and Reviews</h2>
      <div className={styles['topBar__Review-Container']}>
        <div className={styles.topBar__Rating} >
          4.4
        </div>
        <StarRatingBar type='default' />
      </div>
      <div />
    </div>
  );
}

export default TopBar;