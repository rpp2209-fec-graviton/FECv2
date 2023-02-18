import React, { useEffect } from "react";
import styles from '../Home/home.module.css';

function RPStars ({ id, rating }) {
  useEffect(() => {
    if (rating) {
      const fillPercent = (rating / 5) * 100;
      const elem = document.getElementById(id + 'stars');
      elem.style.width = `${fillPercent}%`;
    }
  }, [rating]);

  return (
  <div className={styles.stars__outer}>
    <div id={id + 'stars'} className={styles.stars__inner}></div>
  </div>
  );
}

export default RPStars;