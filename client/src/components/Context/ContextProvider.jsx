import React, { createContext, useContext, useState } from "react";
import useFetchProduct from '../../components/Hooks/useFetchProduct.jsx';
import useClickLogger from '../../components/Hooks/useClickLogger.jsx';

const ProductContext = createContext(null);

export default function ContextProvider({ children }) {

  // =============================================
  //                Global State
  // =============================================
  const [currentProductId, setCurrentProductId] = useState(71697)

  // =============================================
  //  Shared: Overview, Related Products, Reviews
  // =============================================
  const [ratingsAverage, setRatingsAverage] = useState(null)

  // =============================================
  //    Shared: Overview and Related Products
  // =============================================
  const [outfitItems, setOutfitItems] = useState([])
  const [outfitPhotoUrls, setOutfitPhotoUrls] = useState({});

  const { response, loading, error } = useFetchProduct(currentProductId)

  const handleCurrentId = (e, productId) => {
    e.preventDefault();
    setCurrentProductId(productId)
  }

  const addToOutfit = (product, ...args) => {
    // Related Product Logic
    if (typeof args[1] === 'function') {
      console.log('yes');
      const cp = args[0];
      const fetchData = args[1];

      if (!outfitItems.some(item => item.id === cp.id)) {
        fetchData(`products/${cp.id}/styles`)
        .then((styles) => {
          var itemPhotoUrl = styles.results[0].photos[0].thumbnail_url;
          setOutfitPhotoUrls({...outfitPhotoUrls, [cp.id]: itemPhotoUrl});
          setOutfitItems([...outfitItems, cp]);
        });
      }
    } else { // Overview Logic
      const url = args[0];
      console.log('product', url);
      setOutfitPhotoUrls({...outfitPhotoUrls, [product.id]: url});
      setOutfitItems([...outfitItems, product]);
    }
  };

  const removeFromOutfit = (id) => {
    var newState = outfitItems.filter((item) => {
      return item.id !== id;
    });
    setOutfitItems(newState);
  };

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