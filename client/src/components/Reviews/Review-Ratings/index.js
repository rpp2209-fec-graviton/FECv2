import React from "react";
import styles from './ReviewRatings.module.scss'
import RatingBars from "./components/Ratings-Bars";
import RatingGauge from "./components/Ratings-Gauge";
import RatingTopBar from "./components/Ratings-TopBar";


function ReviewRatings() {
  return (
    <>
      <div className = {styles.ratings_wrapper}>
        <RatingTopBar />
        <RatingBars />
        <RatingGauge />
      </div>
    </>

  );
}

export default ReviewRatings;