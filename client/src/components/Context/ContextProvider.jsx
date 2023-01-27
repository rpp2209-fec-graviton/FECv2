import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx'

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  const [currentProductId, setCurrentProductId] = useState(71798)

  const { response, loading, error } = useFetchProduct(currentProductId)

  const handleCurrentId = (e, productId) => {
    e.preventDefault();
    setCurrentProductId(productId)
  }

  return (
    <ProductContext.Provider value={{ loading, error, response, handleCurrentId, currentProductId }}>
      {children}
      {console.log(response)}
    </ProductContext.Provider>
  )
}


export function useProductContext() {
  return useContext(ProductContext);
}

