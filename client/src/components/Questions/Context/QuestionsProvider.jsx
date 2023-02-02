import React, { useState, createContext, useContext, useRef } from 'react';
import { useProductContext } from "../../Context/ContextProvider.jsx";


const QuestionsContext = createContext(null);

export default function QuestionsProvider({ children }) {
  const modalAnchor = useRef();
  const { currentProductId } = useProductContext();
  const container = { modalAnchor, product_id: currentProductId };


  return (
    <QuestionsContext.Provider value={container}>
      {children}
    </QuestionsContext.Provider>
  )
}

export function useQuestionsContext() {
  return useContext(QuestionsContext);
}