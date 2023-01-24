import React, { createContext, useContext, useState } from "react";


const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  const ratingTestData = ['test1', 'test2', 'test3']

  const [ratings, setRatings] = useState(ratingTestData);

  return (
    <ProductContext.Provider value={{ratings}}>
      {children}
    </ProductContext.Provider>
  )
}


export function useProductContext() {
  return useContext(ProductContext);
}

