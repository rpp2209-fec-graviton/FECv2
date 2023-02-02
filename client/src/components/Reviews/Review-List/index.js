import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";
import useFetchProduct from "../../Hooks/useFetchProduct.jsx";
import { useReviewContext } from '../Context/ReviewProvider.jsx'


export default function ReviewList({ children }) {

  const sortOptions = ['Relevance', 'Newest', 'Helpfulness'];

  const { sortOrder, setSortOrder } = useReviewContext();

  const handleChange = event => {
    setSortOrder(event.target.value);
  };


  return (
    <div>
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
    </div>
  );
}