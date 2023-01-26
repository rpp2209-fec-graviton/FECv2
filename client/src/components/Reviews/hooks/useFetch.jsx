import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch() {

  const [sortOrder, setSortOrder] = useState();

  const handleSortOrder = async () => {
    try {
      const sortedReviews = await axios({
        method: 'get',
        url: '/reviews/sort',
      })
      return sortedReviews;
    } catch (error) {
      console.log('error from useFetch/ handleSortOrder');
      throw new Error(error);
    }
  }

  return { handleSortOrder }
}

export default useFetch