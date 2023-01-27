import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx'

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  const [currentProductId, setCurrentProductId] = useState(71697)

  const { response, loading, error } = useFetchProduct(currentProductId)

  const handleCurrentId = (productId) => {
    setCurrentProductId(productId)
  }

  return (
    <ProductContext.Provider value={{loading, error, response, handleCurrentId}}>
      {children}
    </ProductContext.Provider>
  )
}


export function useProductContext() {
  return useContext(ProductContext);
}

