import React from 'react';
import styles from './BottomBar.scss';

function BottomBar({helpfulness }) {
  return (
    <div className={styles.bottombar__container}>
      <sub>
        <a> Yes ({helpfulness}) </a>
        | <a> Report </a>
      </sub>
      <div className={styles.bottombar__bottomborder} />

    </div>
  );
}

export default BottomBar;


