import React, { useState, useEffect } from 'react';
import { useReviewContext } from '../../../Context/ReviewProvider.jsx';
import Gauge from "./components/Gauge.jsx";

function RatingGauge() {

  const { handleCurrentReviewRating } = useReviewContext();

  return (
    <>
      <Gauge handleCurrentRating={handleCurrentReviewRating} rating={5}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating} rating={4}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating} rating={3}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating} rating={2}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating} rating={1}></Gauge>
    </>
  );
}

export default RatingGauge;