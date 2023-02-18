import React, { useState, useEffect } from 'react';
import { useReviewContext } from '../../../Context/ReviewProvider.jsx';
import Gauge from "./components/Gauge.jsx";

function RatingGauge() {

  const { handleCurrentReviewRating } = useReviewContext();

  return (
    <>
      <Gauge handleCurrentRating={handleCurrentReviewRating} width = {40} rating={5}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating} width = {20}   rating={4}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating} width = {10}  rating={3}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating}  width = {0} rating={2}></Gauge>
      <Gauge handleCurrentRating={handleCurrentReviewRating}  width = {4} rating={1}></Gauge>
    </>
  );
}

export default RatingGauge;