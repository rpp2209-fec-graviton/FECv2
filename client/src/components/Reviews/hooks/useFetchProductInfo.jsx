import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProductInfo = (params) => {
  const [reviewResponse, setReviewResponse] = useState(null);
  const [reviewError, setReviewError] = useState(null);
  const [reviewLoading, setReviewLoading] = useState(false);

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
  }, []);

  return { reviewResponse, reviewError, reviewLoading };
};

export default useFetchProductInfo;