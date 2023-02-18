import React, { useState, createContext, useContext } from 'react';

import { useProductContext } from '../../Context/ContextProvider.jsx';
import useStyles from '../hooks/useStyles.jsx';
import styles from '../overview.module.css';

export const OverviewContext = createContext();

export default function OverviewProvider({ children }) {
	const { currentProductId } = useProductContext();
	const { allProductStyles } = useStyles(currentProductId);
	const currentProductStyles = allProductStyles[currentProductId];

	const [selectedStyle, setSelectedStyle] = useState({});

	// Used for rendering Product Image and Info
	const [ imgURL, setURL ] = useState('');
	const [ price, setPrice ] = useState({ price: '', type: 'default'});

	const handleSetImgAspectRatio = () => {
		const img = document.getElementById('image-lg');
		let width, height;

		img.onload = function () {
			width = this.naturalWidth;
			height = this.naturalHeight;

			width <= height ? console.log("Portrait", width, 'x', height) : console.log('Landscape', width, 'x', height);

			if (width !== 0 && height !== 0) {
				if (width > height) {
					img.classList.add(styles['overview__image-landscape']);
					img.classList.remove(styles['overview__image-portrait']);
				} else if (width <= height) {
					img.classList.add(styles['overview__image-portrait']);
					img.classList.remove(styles['overview__image-landscape']);
				}
			}
		};

	};

	// Update Large Image URL and Style Price when selectedStyle changes
	const handleStyleChange = (e, style, type) => {
		// setSelectedStyle(style);
		// setURL(e.target.id && e.target.id);
		// handleSetImgAspectRatio();
		// setPrice(style.sale_price && style.sale_price !== null ? { price: style.sale_price, type: 'sale' } : { price: style.original_price, type: 'default' } );

		if (type === 'thumbnail-rounded') {
			setSelectedStyle(style);
			setURL(e.target.id && e.target.id);
			setPrice(style.sale_price && style.sale_price !== null ? { price: style.sale_price, type: 'sale' } : { price: style.original_price, type: 'default' } );
		} else {
			setURL(e.target.id && e.target.id);
		}
		handleSetImgAspectRatio();
	};

	// Overview Context Values
	const ctx = {
		allProductStyles,
		currentProductStyles,
		selectedStyle,
		setSelectedStyle,
		handleStyleChange,
		handleSetImgAspectRatio,
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