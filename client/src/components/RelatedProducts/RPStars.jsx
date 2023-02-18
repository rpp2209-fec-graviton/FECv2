import React, { useEffect } from "react";
import styles from '../Home/home.module.css';

function RPStars ({ id, rating, prefix }) {
  useEffect(() => {
    if (rating) {
      const fillPercent = (rating / 5) * 100;
      const elem = document.getElementById(prefix + id);
      elem.style.width = `${fillPercent}%`;
    }
  }, [rating]);

  return (
  <div className={styles.stars__outer}>
    <div id={prefix + id } className={styles.stars__inner}></div>
  </div>
  );
}

export default RPStars;