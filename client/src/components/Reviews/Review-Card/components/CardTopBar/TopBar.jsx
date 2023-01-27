import React, { useState, useEffect } from 'react';
import styles from './TopBar.scss'
import { useProductContext } from '../../../../Context/ContextProvider.jsx';
import useConvertDate from '../../../hooks/useConvertDate.jsx';


export default function TopBar({ rating, reviewer_name, date }) {

  const convertedDate = useConvertDate(date)


  return (
    <div className={styles.cardTopBar}>
      <div className={styles.text}>{reviewer_name}</div>
      <div className={styles.text}>{rating}</div>
      <div className={styles.text}>{convertedDate}</div>
    </div>
  );
}

