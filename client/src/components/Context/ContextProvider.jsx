import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx';
import useClickLogger from '../../components/Hooks/useClickLogger.jsx';
import useOutfitList from '../../components/Hooks/useOutfitList.jsx';

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  // Global State
  const [currentProductId, setCurrentProductId] = useState(71697)

  // Shared: Overview, Related Products, Reviews
  const [ratingsAverage, setRatingsAverage] = useState(null)

  // Shared: Overview and Related Products
  const { outfitItems, outfitPhotoUrls, addToOutfit, removeFromOutfit, outfitItemRatings, setOutfitItemRatings } = useOutfitList()

  // Shared: Overview and Reviews
  const { response, loading, error } = useFetchProduct(currentProductId)

  const handleCurrentId = (e, productId) => {
    e.preventDefault();
    setCurrentProductId(productId)
  }

  // =============================================
  //               Provider Setup
  // =============================================
  const ctx = {
    loading,
    error,
    response,

    handleCurrentId,
    currentProductId,
    setCurrentProductId,

    ratingsAverage,
    setRatingsAverage,

    outfitItems,
    outfitPhotoUrls,
    addToOutfit,
    removeFromOutfit,
    outfitItemRatings,
    setOutfitItemRatings,

    useClickLogger
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