import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx';
import useClickLogger from '../../components/Hooks/useClickLogger.jsx';

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  // Gabby Comment: Changing the default product ID because the old one
  // (71697) has no image urls to test with (not sure why)
  const [currentProductId, setCurrentProductId] = useState(71697)

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