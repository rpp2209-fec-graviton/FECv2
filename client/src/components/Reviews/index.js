import React, { useEffect, useState } from 'react';
import styles from './reviews.module.scss';
import ReviewForm from './Review-Form/index';
import ReviewList from './Review-List/index';
import ReviewRatings from './Review-Ratings/index';
import ReviewCard from './Review-Card/index.js'
import { useReviewContext } from './Context/ReviewProvider.jsx';
import ReviewWrapper from './Review-Wrapper';

export default function Reviews({ reviewData }) {

  const { reviewLoading, reviewResponse, reviewError } = useReviewContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (reviewResponse) {
      setData(reviewResponse);
    }
  }, [reviewResponse]);

  if (reviewLoading) {
    return <div>Loading...</div>;
  }

  if (reviewError) {
    return <div> Error</div>;
  }

  return (
    <div id="reviews" className={styles.reviews}>
      <ReviewForm />
      <ReviewWrapper>
        <ReviewRatings />
        <ReviewList>
          {data && data.results.map((review) => {
            return <ReviewCard key={review.review_id} reviewData={review} />
          })}
        </ReviewList>
      </ReviewWrapper>

    </div>
  );
}
