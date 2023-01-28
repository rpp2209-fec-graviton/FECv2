
import React from 'react';
import styles from './wrapper.module.scss'

function ReviewWrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default ReviewWrapper;