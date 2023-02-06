import React, { useState, createContext, useContext } from 'react';

import { useProductContext } from '../../Context/ContextProvider.jsx';
import useStyles from '../hooks/useStyles.jsx';

export const OverviewContext = createContext();

export default function OverviewProvider({ children }) {
	const { currentProductId } = useProductContext();
	const allProductStyles = useStyles(currentProductId);
	const currentProductStyles = allProductStyles[currentProductId];

	const [selectedStyle, setSelectedStyle] = useState({});

	// Used for rendering Product Image and Info
	const [ imgURL, setURL ] = useState('');
	const [ price, setPrice ] = useState({ price: '', type: 'default'});

	// Update Large Image URL and Style Price when selectedStyle changes
	const handleStyleChange = (e, style, type) => {
		// console.log('Style', selectedStyle);

		if (type === 'thumbnail-rounded') {
			setSelectedStyle(style);
			setURL(e.target.id && e.target.id);
			setPrice(style.sale_price && style.sale_price !== null ? { price: style.sale_price, type: 'sale' } : { price: style.original_price, type: 'default' } );
		} else {
			setURL(e.target.id && e.target.id);
		}
	};

	// Overview Context Values
	const ctx = {
		allProductStyles,
		currentProductStyles,
		selectedStyle,
		setSelectedStyle,
		handleStyleChange,
		imgURL,
		setURL,
		price,
		setPrice
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