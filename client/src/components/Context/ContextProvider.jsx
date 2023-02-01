import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx'

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  const [currentProductId, setProductID] = useState(71698)

  const { response, loading, error } = useFetchProduct(currentProductId)

  // This was throwing an error when I tried to use it in Home.jsx
  // Using setProductID to update the currentProductId instead
  const handleCurrentId = (e, productId) => {
    e.preventDefault();
    setCurrentProductId(productId)
  }

  const ctx = { loading, error, response, handleCurrentId, currentProductId, setProductID };

  return (
    <ProductContext.Provider value={ctx}>
      {children}
    </ProductContext.Provider>
  )
}


export function useProductContext() {
  return useContext(ProductContext);
}

