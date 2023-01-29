import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx'

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {
  // ==================================
  // Ari's Initial Set up
  const [currentProductId, setCurrentProductId] = useState(71698)
  const { response, loading, error } = useFetchProduct(currentProductId)

  const handleCurrentId = (e, productId) => {
    e.preventDefault();
    setCurrentProductId(productId)
  }
  // End Ari's Initial Set up
  // ==================================

  // ==================================
  //     Gabby's Proposed Changes
  // Based on Overview Component Needs
  // ==================================
  const [products, setProducts] = useState([]);

  // Moved Context Data to its own variable
  // instead of passing directly into Provider
  const ctx = {
    loading,
    error,
    response,
    handleCurrentId,
    currentProductId,
    setCurrentProductId, // Overview Component Needs this, handleCurrentId not working for my purposes
    products,
    setProducts
  };
  // End Gabby's Propose Changes
  // ==================================

  // Context Provider With Inserted Global State Values
  return (
    <ProductContext.Provider value={ctx}>
      { children }
      {/* {console.log(response)} */}
    </ProductContext.Provider>
  )
}

export function useProductContext() {
  return useContext(ProductContext);
}

