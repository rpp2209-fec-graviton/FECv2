import React, { useState, createContext, useContext } from 'react';
export const OverviewContext = createContext();

export default function OverviewProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [selectedStyle, setSelectedStyle] = useState({});
	const [pStyles, setStyles] = useState({});
	const [product, setProduct] = useState({});

	// Set Up Overview Context Values
	const ctx = {
		selectedStyle,
		setSelectedStyle,
		pStyles,
		setStyles,
		product,
		setProduct,
		products,
    setProducts
	};

	return (
		<OverviewContext.Provider value={ctx}>
			{children}
		</OverviewContext.Provider>
	)
}

export function useOverviewContext() {
  return useContext(OverviewContext);
}