import React from 'react';
import styles from './CardBody.scss';


export default function Body({ body, response, recommend }) {
  return (
    <div className={styles.cardBody}>
      <div>{body}</div>
      <div>{response}</div>
      <div>{recommend}</div>
    </div>

  );
}

