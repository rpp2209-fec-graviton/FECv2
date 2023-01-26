import React, { useEffect } from 'react';
import styles from './reviews.module.scss';
import ReviewCard from './Review-Card/index';
import ReviewForm from './Review-Form/index';
import ReviewList from './Review-List/index';
import ReviewRatings from './Review-Ratings/index';
import testData from '../../../../ExampleData/APIs/reviews'
import ReviewProvider from './Context/ReviewProvider.jsx';



export default function Reviews({ reviewData }) {
  const { count, page, product } = testData['/reviews/'];
  console.log(testData['/reviews/']);

  const data = testData['/reviews/'].results
  const { body, date, helpfulness, photos } = data[0]
  const { ratings, recommend, response, } = data[0]
  const { review_id, reviewer_name, summary } = data[0];


  console.log(data);



  return (
    <ReviewProvider>
      <div className={styles.reviews}>
        <ReviewForm />
        <ReviewRatings />
        <ReviewList>
          <ReviewCard reviewData={data[0]} />
        </ReviewList>
      </div>
    </ReviewProvider>
  );
}