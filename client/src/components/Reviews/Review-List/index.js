import ListContainer from "./components/Review-List-Container/ListContainer.jsx";
import React from "react";
import ListSort from "./components/Review-List-Sort/ListSort.jsx";
import { useReviewContext } from "../Context/ReviewProvider.jsx";


export default function ReviewList({ children }) {

  const { sort, setSort, currentCard } = useReviewContext();

  return (
    <div>
      <h1>Review List</h1>
      <ListSort />

      <ListContainer>
        {children}
      </ListContainer>
    </div>
  );
}
