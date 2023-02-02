import React from "react";
import styles from './ReviewRatings.module.scss'
import RatingBars from "./components/Ratings-Bars";
import RatingGauge from "./components/Ratings-Gauge";
import RatingTopBar from "./components/Ratings-TopBar";
import { useReviewContext } from '../Context/ReviewProvider.jsx'
import useRatingFilter from '../hooks/useRatingFilter.jsx'

function ReviewRatings() {

  const { reviewResponse, reviewError, reviewLoading, filteredReviews } = useReviewContext()

  // useRatingFilter({ reviewResponse, reviewError, reviewLoading });







  return (
    <>
      <div className={styles.ratings_wrapper}>
        <RatingTopBar />
        <RatingBars />
        <RatingGauge />
      </div>
    </>

  );
}

export default ReviewRatings;