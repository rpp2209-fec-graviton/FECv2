import React, { useState, createContext, useContext } from 'react';

import { useProductContext } from '../../Context/ContextProvider.jsx';
import useStyles from '../hooks/useStyles.jsx';
import styles from '../overview.module.css';

export const OverviewContext = createContext();

export default function OverviewProvider({ children }) {
	const { currentProductId } = useProductContext();
	const allProductStyles = useStyles(currentProductId);
	const currentProductStyles = allProductStyles[currentProductId];

	const [selectedStyle, setSelectedStyle] = useState({});

	// Used for rendering Product Image and Info
	const [ imgURL, setURL ] = useState('');
	const [ price, setPrice ] = useState({ price: '', type: 'default'});

	// Debug TODO: Only Updates Aspect Ratio on second click when changing types (P > L or vice versa)
	const handleSetImgAspectRatio = () => {
		const img = document.getElementById('image-lg');
		img.naturalWidth <= img.naturalHeight ? console.log("Portrait", img.naturalWidth, 'x', img.naturalHeight) : console.log('Landscape', img.naturalWidth, 'x', img.naturalHeight);

		if (img.naturalWidth > img.naturalHeight) {
			img.classList.add(styles['overview__image-landscape']);
		} else if (img.naturalWidth <= img.naturalHeight) {
			img.classList.add(styles['overview__image-portrait']);
		}
	};

	// Update Large Image URL and Style Price when selectedStyle changes
	const handleStyleChange = (e, style, type) => {
		if (type === 'thumbnail-rounded') {
			setSelectedStyle(style);
			setURL(e.target.id && e.target.id);
			handleSetImgAspectRatio();
			setPrice(style.sale_price && style.sale_price !== null ? { price: style.sale_price, type: 'sale' } : { price: style.original_price, type: 'default' } );
		} else {
			setURL(e.target.id && e.target.id);
			handleSetImgAspectRatio();
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