import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToBag from './AddToBag.jsx';

import styles from '../overview.module.css';

function Overview() {
	// Private State
	const [quantity, setQuantity] = useState(0);
	const [size, setSize] = useState("S");
	const [starred, setStarred] = useState(false);
	const [selected, setSelected] = useState(0);
	const [zoom, setZoom] = useState(0);

	// Shared State (TODO: Move to global state)
	const [starRating, setStarRating] = useState(0);

	return (
		<div className={styles.greyBorder}>
			<h1>Product Overview Widget</h1>
			<div className={styles.greyBorder}>
			<h3>Initial State</h3>
				<p>Quantity: {quantity}</p>
				<p>Size: {size}</p>
				<p>⭐ Starred? {starred ? "True" : "False" }</p>
				<p>Currently Selected: {selected}</p>
				<hr />
				<p>Average Rating: {starRating}</p>
			</div>
			<Images />
			<ProductInfo />
			<StyleSelector />
			<AddToBag />
		</div>
	);
};

export default Overview;