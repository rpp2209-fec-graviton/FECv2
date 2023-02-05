import React, { useState, createContext, useContext } from 'react';

import { useProductContext } from '../../Context/ContextProvider.jsx';
import useStyles from '../hooks/useStyles.jsx';

export const OverviewContext = createContext();

export default function OverviewProvider({ children }) {
	const { currentProductId } = useProductContext();
	const { allProductStyles, selectedStyle } = useStyles(currentProductId);

	const currentProductStyles = allProductStyles[currentProductId];
	const [ product, setProduct ] = useState({});
	const [imgURL, setURL] = useState('');

	// Set Up Overview Context Values
	const ctx = {
		selectedStyle,
		allProductStyles,
		currentProductStyles,
		product,
		setProduct,
		imgURL,
		setURL
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