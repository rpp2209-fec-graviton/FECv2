import { createContext, useContext } from 'react';
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch.jsx';
const ReviewContext = createContext();


export default function ReviewProvider({ children }) {

  const [sort, setSort] = useState();
  const [currentCard, setCurrentCard] = useState();
  const { handleSortOrder } = useFetch();


  return (
    <ReviewContext.Provider value={{ sort, setSort, currentCard, handleSortOrder }}>
      {children}
    </ReviewContext.Provider>
  )
}

export function useReviewContext() {
  return useContext(ReviewContext)
}