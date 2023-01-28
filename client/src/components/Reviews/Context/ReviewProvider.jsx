import { createContext, useContext } from 'react';
import React, { useState } from 'react';
const ReviewContext = createContext();
import { useProductContext } from "../../Context/ContextProvider.jsx";

export default function ReviewProvider({ children }) {

  const [sort, setSort] = useState();
  const [currentCard, setCurrentCard] = useState();


  const { loading, yes,  error, response, handleCurrentId } = useProductContext()



  return (

    <ReviewContext.Provider value={{ sort, setSort, currentCard, }}>
      {children}
    </ReviewContext.Provider>
  )
}

export function useReviewContext() {
  return useContext(ReviewContext)
}