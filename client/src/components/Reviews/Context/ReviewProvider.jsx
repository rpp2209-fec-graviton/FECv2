import { createContext, useContext } from 'react';
import React, { useState } from 'react';
const ReviewContext = createContext();


export default function ReviewProvider({ children }) {

  const [sort, setSort] = useState();
  const [currentCard, setCurrentCard] = useState();


  return (
    <ReviewContext.Provider value={{ sort, setSort, currentCard, }}>
      {children}
    </ReviewContext.Provider>
  )
}

export function useReviewContext() {
  return useContext(ReviewContext)
}