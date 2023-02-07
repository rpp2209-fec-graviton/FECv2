import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Button from './Button.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import useFetchProductInfo from '../../Reviews/hooks/useFetchProductInfo.jsx';

import styles from '../overview.module.css';

function StyleSelector () {
	const sizes = ['S', 'M', 'L', 'XL', '2XL'];

	// Controlled Drop-Down Component Values
	const [size, setSize] = useState('');
	const [qty, setQty] = useState(0);

	// DOM Element Refs
	const sizeRef = useRef('');
	const qtyRef = useRef(0);

	// Overview Context
	const { allProductStyles, currentProductStyles, selectedStyle } = useOverviewContext();

	// =============================================
	//            FUNCTIONALITY TO-DOs
	// =============================================

	// If the default ‘Select Size’ is currently selected:
	// Clicking this button should open the size dropdown,
	// and a message should appear above the dropdown stating “Please select size”.

	// If there is no stock: This button should be hidden

	// If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.
	const handleAddToBag = async (e) => {
		e.preventDefault();

		const currentSize = sizeRef.current[sizeRef.current.selectedIndex].value;
		const currentQty = qtyRef.current[qtyRef.current.selectedIndex].value;

		if (currentSize === 'Select Size') {
			console.log('Please select size');

		} else if (currentQty === 'Quantity') {
			console.log('Please select a Quantity');

		} else {
			const selected = currentProductStyles && currentProductStyles.filter(style => style.style_id === selectedStyle.style_id)
			const skus = selected[0].skus;
			const keys = Object.keys(selected[0].skus);
			var selectedSKU;

			keys.forEach(sku => {
				if (skus[sku].size === currentSize) {
					selectedSKU = sku;
				}
			});

			await axios.post('/api/cart', { sku_id: selectedSKU, count: currentQty });
			console.log(`Added ${currentQty} size ${skus[selectedSKU].size} to Bag!`);
		}

	};

	const handleDropdownChange = (e) => {
		if (e.target.id === 'size') {
			setSize(e.target.value);
		} else if (e.target.id === 'qty') {
			setQty(e.target.value);
		}
	};

	const handleStarClick = () => {
		console.log('Clicked! Adding to Outfit (TODO)...');
	};

	return (
		<div className={styles['overview__style-selector']}>
			<h3 className={styles['style-selector__header']}>Style &gt; <span className={styles['header-undecorated']}>{selectedStyle.name}</span></h3>
			<ThumbnailCarousel type="images__carousel"  />

			<select
				className={styles['drop-down']}
				ref={sizeRef}
				id="size" value={size}
				onChange={handleDropdownChange}
			>
				<option value="Select Size">Select Size</option>
				{sizes.map((size, index) => (<option aria-label="size-option" key={index} value={`${size}`}>{size}</option>))}
			</select>

			<select
				className={styles['drop-down']}
				ref={qtyRef}
				id="qty"
				value={qty}
				onChange={handleDropdownChange}
			>
				<option value="Quantity">Quantity</option>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (<option aria-label="qty-option" key={num} value={num}>{num}</option>))}
			</select>

			<div>
				<Button type='style-selector__button' handleClick={handleAddToBag}>+ Add to Bag</Button>
				<Button type='style-selector__button' handleClick={handleStarClick}>⭐</Button>
			</div>
		</div>
	)
};

export default StyleSelector;