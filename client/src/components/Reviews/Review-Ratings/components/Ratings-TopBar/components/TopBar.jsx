import React, { useState, useEffect } from 'react';
import styles from './TopBar.module.scss';
import RPStars from '../../../../../RelatedProducts/RPStars.jsx';
function TopBar() {
  return (
    <div className={styles.topBar__Container}>
      <div className={styles.topBar__Title} >
        Rating and Reviews
      </div>
      <div className={styles['topBar__Review-Container']}>
        <div className={styles.topBar__Rating} >
          4.4
        </div>
        <div className={styles.topBar__Stars} >
          <RPStars rating={ 4.4 } />
        </div>
      </div>
      <div />
    </div>
  );
}

export default TopBar;