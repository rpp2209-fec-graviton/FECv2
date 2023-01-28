import React, { useState, createContext, useContext } from 'react';
export const OverviewContext = createContext();

export default function OverviewProvider({ children }) {
	const [selected, setSelected] = useState({});
	const [productStyles, setStyles] = useState({});
	const ctx = { selected, setSelected, productStyles, setStyles };

	return (
		<OverviewContext.Provider value={ctx}>
			{children}
		</OverviewContext.Provider>
	)
}

export function useOverviewContext() {
  return useContext(OverviewContext);
}