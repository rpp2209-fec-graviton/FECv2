import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProductInfo = (product_id, sortOrder) => {
  const [reviewResponse, setReviewResponse] = useState(null);
  const [reviewError, setReviewError] = useState(null);
  const [reviewLoading, setReviewLoading] = useState(false);

  const params = {
    method: 'post',
    url: '/reviews/results',
    data: {
      product_id: product_id,
      sortOrder: sortOrder,
      count: 20
    }
  }

  const fetchData = async (params) => {
    setReviewLoading(true);
    try {
      const res = await axios.request(params);
      setReviewResponse(res.data);
      setReviewError(null);
    } catch (err) {
      setReviewError(err);
    } finally {
      setReviewLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, [product_id, sortOrder]);

  return { reviewResponse, reviewError, reviewLoading };
};

export default useFetchProductInfo;