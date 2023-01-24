import React from 'react';
import styles from './TopBar.scss'
import { useProductContext } from '../../../../Context/ContextProvider.jsx';


export default function TopBar() {

  const { ratings } = useProductContext();

  const ratingsMapped = ratings.map((item) => {
    return (
      <div>
        {item}
      </div>
    )
  })

  return (
    <div className={styles.cardTopBar}>

      <h1 className={styles.text}>Testc</h1>
      {ratingsMapped}
    </div>
  );
}

