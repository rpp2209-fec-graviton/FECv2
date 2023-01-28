import React from 'react';
import styles from './CardBody.scss';


export default function Body({ body, response, recommend, summary }) {
  return (
    <div className={styles.cardBody__container}>
      <div className={styles.cardBody__summary} >
        {summary}
      </div>
      <div className={styles.cardBody__body}>
        {body}
      </div>
      <div className={styles.cardBody__recommend}>
        {recommend ? 'I recommend this product' : 'I do not recommend this product'}
      </div>

      {response ?
        <div className={styles.cardBody__response}>
          <div className={styles.cardBody__response__title}>
            Response from seller:
          </div>
          <div className={styles.cardBody__response__body}>
            {response}
          </div>
        </div>
        : null}
    </div>
  );
}
