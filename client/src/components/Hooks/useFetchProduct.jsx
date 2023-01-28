import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProduct = (productId) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (productId) => {
    setLoading(true);
    try {
      const res = await axios({
        method: 'post',
        url: '/products',
        data: {
          product_id: productId
        }
      });

      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(productId);
  }, [productId]);

  return { response, error, loading };
};

export default useFetchProduct;