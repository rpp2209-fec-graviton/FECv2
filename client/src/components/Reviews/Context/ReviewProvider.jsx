import { createContext, useContext } from 'react';
import React, { useState } from 'react';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import useFetchProductInfo from '../hooks/useFetchProductInfo.jsx';
import { useRatingFilter } from '../hooks/useRatingFilter.jsx';


const ReviewContext = createContext();

export default function ReviewProvider({ children }) {

  const [sort, setSort] = useState();
  const [currentCard, setCurrentCard] = useState();
  const [reviewRating, setReviewRating] = useState(5);

  const { loading, error, response, handleCurrentId, currentProductId } = useProductContext()

  const { reviewResponse, reviewError, reviewLoading } = useFetchProductInfo({
    method: 'post',
    url: '/reviews/results',
    data: {
      product_id: currentProductId
    }
  })

  const handleCurrentReviewRating = (e, rating) => {
    e.preventDefault();
    setReviewRating(rating)
  }

  // pass review repsonse to a hook that wil process it and pass it to the rest of the app
  // I need something that will change the filter depending on the filter function passed to it.

  // i need a rating filter that will change the review ratings that it outputs based on ther starts input

  // wait untill the reviews are loaded before continuing the processing of information
  const { filteredReviews } = useRatingFilter(reviewLoading, reviewError, reviewResponse, reviewRating,)

  return (

    <ReviewContext.Provider value={{ sort, setSort, currentCard, reviewResponse, reviewLoading, reviewError, filteredReviews, handleCurrentReviewRating }}>
      {children}
      {/* { console.log(response, 'resposne ')} */}

    </ReviewContext.Provider>
  )
}

export function useReviewContext() {
  return useContext(ReviewContext)
}