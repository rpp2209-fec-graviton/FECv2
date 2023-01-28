import React, { useState, useEffect } from 'react';
import styles from './TopBar.scss'
import { useProductContext } from '../../../../Context/ContextProvider.jsx';
import useConvertDate from '../../../hooks/useConvertDate.jsx';


export default function TopBar({ rating, reviewer_name, date }) {

  const convertedDate = useConvertDate(date)


  return (
    <div className={styles.cardTopBar}>
      <div className={styles.cardTopBar__container}>

        <div className={styles.cardTopBar__left}>
          <div className={styles.cardTopBar__rating}>{rating}</div>
        </div>
        <div className={styles.cardTopBar__right}>
          <h2 className={styles.cardTopBar__name}>{reviewer_name}</h2>
          <div className={styles.cardTopBar__date}>{convertedDate}</div>
        </div>


      </div>
    </div>
  );
}

