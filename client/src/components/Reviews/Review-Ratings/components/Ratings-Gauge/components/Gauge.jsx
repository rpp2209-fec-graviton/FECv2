import React, { useState } from 'react';
import styles from './gauge.module.scss';



function Gauge({ rating, handleCurrentRating, width}) {
  return (
    <div className={styles.gauge__Container}>
      <a onClick={(e) => {handleCurrentRating(e, rating)}} className={styles.gauge__Text}>{rating} stars</a>
      <div className={styles.gauge__BarContainer}>
        <div style={{width: width}} className={styles.gauge__Bar} />
        <div className={styles.gauge_GhostBar} />
      </div>
    </div>
  );
}

export default Gauge;