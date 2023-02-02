import React, { useState, createContext, useContext, useRef } from 'react';

const QuestionsContext = createContext(null);

export default function QuestionsProvider({ children }) {
  const modalAnchor = useRef();
  const container = { modalAnchor };


  return (
    <QuestionsContext.Provider value={container}>
      {children}
    </QuestionsContext.Provider>
  )
}

export function useQuestionsContext() {
  return useContext(QuestionsContext);
}