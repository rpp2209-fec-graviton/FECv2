import { createContext, useContext } from 'react';
import React, { useState } from 'react';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import useFetchProductInfo from '../hooks/useFetchProductInfo.jsx';
import { useRatingFilter } from '../hooks/useRatingFilter.jsx';


const ReviewContext = createContext();

export default function ReviewProvider({ children }) {

  const [sortOrder, setSortOrder] = useState('relevant');
  const [currentCard, setCurrentCard] = useState();
  const [reviewRating, setReviewRating] = useState(5);
  const [showMore, setShowMore] = useState(2);

  const { loading, error, response, handleCurrentId, currentProductId } = useProductContext()

  const { reviewResponse, reviewError, reviewLoading } = useFetchProductInfo(currentProductId, sortOrder)

  const handleShowMoreReviews = (e, length) => {
    e.preventDefault()
    setShowMore(length)

  }


  const handleCurrentReviewRating = (e, rating) => {
    e.preventDefault();
    setReviewRating(rating)
  }


  const { filteredReviews } = useRatingFilter(reviewLoading, reviewError, reviewResponse, reviewRating,)

  const ctx = {
    sortOrder,
    setSortOrder,
    currentCard,
    reviewResponse,
    reviewLoading,
    reviewError,
    filteredReviews,
    handleCurrentReviewRating,
    handleShowMoreReviews,
    showMore
  }

  return (

    <ReviewContext.Provider value={ctx}>
      {console.log('review-response', reviewResponse, sortOrder)}
      {children}
    </ReviewContext.Provider>
  )
}

export function useReviewContext() {
  return useContext(ReviewContext)
}