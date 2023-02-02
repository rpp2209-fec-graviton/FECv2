import React, { useState, useEffect } from 'react';



export function useRatingFilter(reviewLoading, reviewError, reviewResponse, reviewRating) {
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    if (!reviewLoading && !reviewError) {
      if (reviewResponse) {
        // Do processing
        const reviews = reviewResponse.results.filter(review => review.rating === reviewRating);
        setFilteredReviews(reviews);
      }
    }
  }, [reviewLoading, reviewError, reviewResponse, reviewRating]);

  return { filteredReviews };
}


