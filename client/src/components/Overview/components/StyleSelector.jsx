import React, { useState, useEffect, useRef } from 'react';
import Button from './Button.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import styles from '../overview.module.css';

function StyleSelector ({ selected, productStyles }) {
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
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
				<option value="2XL">2XL</option>
			</select>

			<select
				className={styles['drop-down']}
				ref={qtyRef}
				id="qty" value={qty}
				onChange={handleDropdownChange}>
				<option value="Quantity">Quantity</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>

			<div>
				<Button handleClick={handleAddToBag}>+ Add to Bag</Button>
				<Button handleClick={handleStarClick}>⭐</Button>
			</div>
		</div>
	)
};

export default StyleSelector;