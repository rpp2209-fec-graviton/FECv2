import React, { useState, useEffect, useRef } from 'react';
import Button from './Button.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import styles from '../overview.module.css';

function StyleSelector ({ selected, productStyles }) {
	const sizes = ['S', 'M', 'L', 'XL', '2XL'];
	// Controlled Drop-Down Component Values
	const [size, setSize] = useState('');
	const [qty, setQty] = useState(0);
	const [cart, setCart] = useState({
		size: '',
		qty: 0
	});

	// DOM Element Ref Values
	const sizeRef = useRef('');
	const qtyRef = useRef(0);

	// =============================================
	//            FUNCTIONALITY TO-DOs
	// =============================================

	// If the default ‘Select Size’ is currently selected:
	// Clicking this button should open the size dropdown,
	// and a message should appear above the dropdown stating “Please select size”.

	// If there is no stock: This button should be hidden

	// If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.
	const handleAddToBag = (e) => {
		e.preventDefault();
		console.log('Adding to Bag...');

		const currentSize = sizeRef.current[sizeRef.current.selectedIndex].value;
		const currentQty = qtyRef.current[qtyRef.current.selectedIndex].value;

		setCart({
			size: currentSize,
			qty: currentQty
		});

		// switch (status) {
		// 	case ('no stock'): // get product styles to check stock (field is called 'quantity')
		// 		// toggle hide button class
		// 		break;
		// 	case ('valid'):
		// 		console.log('Added to cart!');
		// 		break;
		// 	default ('Select Size'):
		// 		// open select size dropdown TODO
		// 		window.alert('Please select size.')
		// 		break;
		// }
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
			<h3>Style &gt; Selected Style</h3>
			<ThumbnailCarousel type="styles__carousel" selected={selected} productStyles={productStyles} />

			<select
				className={styles['drop-down']}
				ref={sizeRef}
				id="size" value={size}
				onChange={handleDropdownChange}>
				<option value="Select Size">Select Size</option>
				{sizes.map((size, index) => (<option aria-label="size-option" key={index} value={`${size}`}>{size}</option>))}
			</select>

			<select
				className={styles['drop-down']}
				ref={qtyRef}
				id="qty" value={qty}
				onChange={handleDropdownChange}>
				<option value="Quantity">Quantity</option>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (<option aria-label="qty-option" key={num} value={num}>{num}</option>))}
			</select>

			<div>
				<Button handleClick={handleAddToBag}>+ Add to Bag</Button>
				<Button handleClick={handleStarClick}>⭐</Button>
			</div>
		</div>
	)
};

export default StyleSelector;