import React, { useState, useEffect } from 'react';
import styles from './TopBar.module.scss';
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
          1-2-3-4-5
        </div>
      </div>
      <div />
    </div>
  );
}

export default TopBar;