import React from "react";
import styles from "./review-card.module.scss";
import TopBar from "./components/CardTopBar/TopBar.jsx";
import Body from "./components/CardBody/Body.jsx";
import BottomBar from "./components/CardBottomBar/BottomBar.jsx";
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useReviewContext } from "../Context/ReviewProvider.jsx";


export default function ReviewCard({ reviewData }) {







  return (
    <div className={styles.reviewCard}>
      <TopBar />
      <Body />
      <BottomBar />

    </div>
  );
}

