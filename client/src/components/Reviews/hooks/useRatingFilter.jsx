import React, { useState, useEffect } from 'react';

export function useRatingFilter(reviewLoading, reviewError, reviewResponse, reviewRating) {
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    if (reviewLoading) {
      return;
    }

    if (reviewError) {
      return;
    }

    if (reviewResponse) {
      const filtered = reviewResponse.results.filter(review => review.rating === reviewRating);
      setFilteredReviews(filtered);
    }
  }, [reviewLoading, reviewError, reviewResponse, reviewRating]);

  return {
    loading: false,
    error: null,
    filteredReviews,
  };
}
