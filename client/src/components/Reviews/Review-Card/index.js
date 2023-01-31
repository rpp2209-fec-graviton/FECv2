import React from "react";
import styles from "./review-card.module.scss";
import TopBar from "./components/CardTopBar/TopBar.jsx";
import Body from "./components/CardBody/Body.jsx";
import BottomBar from "./components/CardBottomBar/BottomBar.jsx";
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useReviewContext } from "../Context/ReviewProvider.jsx";


export default function ReviewCard({ reviewData }) {

  console.log(reviewData, 'reviewData');
  const { body, date, photos, rating, recommend, response, reviewer_name, summary, helpfulness } = reviewData

  return (
    <div className={styles.reviewCard}>
      <TopBar rating={rating} reviewer_name={reviewer_name} date={date} />
      <Body body={body} response={response} recommend={recommend} summary = {summary} photos={photos} />
      <BottomBar helpfulness={helpfulness} />
    </div>
  );
}

