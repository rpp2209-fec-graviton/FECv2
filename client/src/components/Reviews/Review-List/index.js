import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";
import useFetchProduct from "../../Hooks/useFetchProduct.jsx";
import { useReviewContext } from '../Context/ReviewProvider.jsx'
import styles from './review-list.module.scss'

export default function ReviewList({ children }) {

  const sortOptions = ['Relevance', 'Newest', 'Helpfulness'];

  const { sortOrder, setSortOrder, handleShowMoreReviews, filteredReviews } = useReviewContext();

  const handleChange = event => {
    setSortOrder(event.target.value);
  };


  return (
    <div className={styles.listContainer}>
      <h3>Sort by {sortOrder} </h3>
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
      <button onClick={(e) => { handleShowMoreReviews(e, filteredReviews.length) }}>More Reviews </button>
    </div>
  );
}