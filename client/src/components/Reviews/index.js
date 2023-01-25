import React, { useEffect } from 'react';
import styles from './reviews.module.scss';
import ReviewCard from './Review-Card/index';
import ReviewForm from './Review-Form/index';
import ReviewList from './Review-List/index';
import ReviewRatings from './Review-Ratings/index';
import testData from '../../../../ExampleData/APIs/reviews'



export default function Reviews() {

  useEffect(() => {
    console.log(testData);
  }, []);

  const data = testData;




  return (
    <div className={styles.reviews}>
      <ReviewCard></ReviewCard>
      <ReviewForm></ReviewForm>
      <ReviewList></ReviewList>
      <ReviewRatings></ReviewRatings>

    </div>
  );
}