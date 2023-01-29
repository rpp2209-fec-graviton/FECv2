import React, { useState, createContext, useContext } from 'react';
export const OverviewContext = createContext();

export default function OverviewProvider({ children }) {
	const [selectedStyle, setSelectedStyle] = useState({});
	const [pStyles, setStyles] = useState({});

	const ctx = { selectedStyle, setSelectedStyle, pStyles, setStyles };

	return (
		<OverviewContext.Provider value={ctx}>
			{children}
		</OverviewContext.Provider>
	)
}

export function useOverviewContext() {
  return useContext(OverviewContext);
}