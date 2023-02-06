import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx';
import useClickLogger from '../../components/Hooks/useClickLogger.jsx';

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  // Needed by All Widgets
  const [currentProductId, setCurrentProductId] = useState(71697)

  // Needed by Overview, Related Products, and Reviews
  const [ratingsAverage, setRatingsAverage] = useState(null)

  // Neede by Overview and Related Products
  const [outfitItems, setOutfitItems] = useState([])
  const [outfitPhotoUrls, setOutfitPhotoUrls] = useState({});

  const { response, loading, error } = useFetchProduct(currentProductId)

  const handleCurrentId = (e, productId) => {
    e.preventDefault();
    setCurrentProductId(productId)
  }

  const addToOutfit = (fetchData, cp) => {
    if (!outfitItems.some(item => item.id === cp.id)) {
      fetchData(`products/${cp.id}/styles`)
      .then((styles) => {
        var itemPhotoUrl = styles.results[0].photos[0].thumbnail_url;
        setOutfitPhotoUrls({...outfitPhotoUrls, [cp.id]: itemPhotoUrl});
        setOutfitItems([...outfitItems, cp]);
      });
    }
  };

  const removeFromOutfit = (id) => {
    var newState = outfitItems.filter((item) => {
      return item.id !== id;
    });
    setOutfitItems(newState);
  };

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
    setOutfitItems,
    addToOutfit,
    removeFromOutfit,
    outfitPhotoUrls,
    setOutfitPhotoUrls,

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