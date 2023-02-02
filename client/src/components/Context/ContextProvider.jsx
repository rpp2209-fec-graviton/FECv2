import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx';
import useClickLogger from '../../components/Hooks/useClickLogger.jsx';

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  const [currentProductId, setCurrentProductId] = useState(71697)
  const [ratingsAverage, setRatingsAverage] = useState(null)

  const { response, loading, error } = useFetchProduct(currentProductId)

  const handleCurrentId = (e, productId) => {
    e.preventDefault();
    setCurrentProductId(productId)
  }

  const ctx = {
    loading,
    error,
    response,
    handleCurrentId,
    currentProductId,
    setCurrentProductId,
    ratingsAverage,
    setRatingsAverage
  };

  return (
    <ProductContext.Provider value={ctx}>
      {children}
    </ProductContext.Provider>
  )
}


export function useProductContext() {
  return useContext(ProductContext);
}