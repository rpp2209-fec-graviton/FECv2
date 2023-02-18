import React from "react";

import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import Button from "../../Overview/components/Button.jsx";

import { useReviewContext } from '../Context/ReviewProvider.jsx'

import useFetchProduct from "../../Hooks/useFetchProduct.jsx";
import styles from './review-list.module.scss'
import Form from "../Review-Form/form-index.jsx";

export default function ReviewList({ children }) {

  const sortOptions = ['Relevance', 'Newest', 'Helpfulness'];

  const { sortOrder, setSortOrder, handleShowMoreReviews, filteredReviews } = useReviewContext();

  const handleChange = event => {
    setSortOrder(event.target.value);
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }} className={styles.listContainer}>
      <h3 style = {{}}>Sort by {sortOrder} </h3>
      <select onChange={handleChange}>
        {sortOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ListContainer>
        {children}
      </ListContainer>
      <Form></Form>
      <Button onClick={(e) => { handleShowMoreReviews(e, filteredReviews.length) }}>More Reviews </Button>
    </div>
  );
}