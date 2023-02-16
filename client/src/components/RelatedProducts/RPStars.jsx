import React, { useEffect } from "react";
import styles from './RP.module.css';

function RPStars ({ id, rating }) {
  useEffect(() => {
    if (rating) {
      const fillPercent = (rating / 5) * 100;
      const elem = document.getElementById(id + 'stars');
      elem.style.width = `${fillPercent}%`;
    }
  }, [rating]);

  return (
  <div className={styles.starsOuter}>
    <div id={id + 'stars'} className={styles.starsInner}></div>
  </div>
  );
}

export default RPStars;