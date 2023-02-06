import React, { useState, createContext, useContext } from 'react';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { fetch } from "../../../../../server/utils/fetch.js"

const RPContext = createContext();

export default function RPProvider({ children }) {
  function changeProduct (id) {
    navigate(`/${id}`)
  };

  const { currentProductId, useClickLogger } = useProductContext();

  const [currentProductData, setCurrentProductData] = useState(null);
  const [rpData, setRpData] = useState(null);
  const [rpStyles, setRpStyles] = useState(null);
  const [rpRatings, setRpRatings] = useState(null);

  const container = { useClickLogger, product_id: currentProductId, changeProduct, currentProductData, setCurrentProductData, rpData, rpStyles, rpRatings, setRpData, setRpStyles, setRpRatings};

  return (
    <RPContext.Provider value={container}>
      {children}
    </RPContext.Provider>
  )
}

export function useRPContext() {
  return useContext(RPContext);
}