import React, { useState } from 'react';
import styles from './gauge.module.scss';
function Gauge() {
  return (
      <div className={styles.gauge__Container}>
        <div className={styles.gauge__Text}>5 stars</div>
        <div className={styles.gauge__BarContainer}>
          <div className={styles.gauge__Bar} />
          <div className={styles.gauge_GhostBar} />
        </div>
      </div>
  );
}

export default Gauge;