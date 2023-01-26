import React from "react";

import styles from "./review-card.module.scss";
import TopBar from "./components/CardTopBar/TopBar.jsx";
import Body from "./components/CardBody/Body.jsx";
import BottomBar from "./components/CardBottomBar/BottomBar.jsx";


export default function ReviewCard({ reviewData }) {

  const { body, date, helpfulness, photos } = reviewData
  const { ratings, recommend, response, } = reviewData
  const { review_id, reviewer_name, summary } = reviewData


  return (
    <div className={styles.reviewCard}>
      <TopBar  />
      <Body />
      <BottomBar />

    </div>
  );
}

