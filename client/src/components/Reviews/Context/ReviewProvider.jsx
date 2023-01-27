import { createContext, useContext } from 'react';
import React, { useState } from 'react';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import useFetchProductInfo from '../hooks/useFetchProductInfo.jsx';


const ReviewContext = createContext();

export default function ReviewProvider({ children }) {

  const [sort, setSort] = useState();
  const [currentCard, setCurrentCard] = useState();

  const { loading, error, response, handleCurrentId, currentProductId } = useProductContext()

  const yes = 2;
  const { reviewResponse, reviewError, reviewLoading } = useFetchProductInfo({
    method: 'post',
    url: '/reviews/results',
    data: {
      product_id: currentProductId
    }
  })



  return (

    <ReviewContext.Provider value={{ sort, yes,  setSort, currentCard, reviewResponse, reviewLoading}}>
      {children}
    </ReviewContext.Provider>
  )
}

export function useReviewContext() {
  return useContext(ReviewContext)
}