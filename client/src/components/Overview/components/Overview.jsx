import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';

import { fetch } from '../../../../../server/fetch.js';
import styles from '../overview.module.css';

function Overview() {
	// Private State
	const [quantity, setQuantity] = useState(0);
	const [size, setSize] = useState("S");
	const [starred, setStarred] = useState(false);

	const [selected, setSelected] = useState({});

	// Shared State (TODO: Move to global state)
	const [products, setProducts] = useState([]);
	const [productStyles, setStyles] = useState({});
	const [starRating, setStarRating] = useState(0);

	// Fetch and Set Product State
	useEffect(() => {
		fetch('products', (err, payload) => {
			if (err) {
				console.log("Caught Error", err);
			} else {
				// console.log('Data', payload.data);
				setProducts(payload.data);
			}
		})
	}, []);

	// Fetch and Set Styles for Selected Product
	useEffect(() => {
		// For Testing Purposes, Set Selected Product to the First In List
		// To-Do: Implement Routing for different product IDs?
		let selected = products[0];
		setSelected({...selected});

		products.forEach(item => {
			fetch(`products/${item.id}/styles`, (err, payload) => {
				if (err) {
					console.log('Styles Fetch Err', err);
				} else {
					let newStyles = payload.data.results;

					setStyles((prevState) => ({
						...prevState,
						[item.id]: newStyles
					}));
				}
			});
		});
	}, [products]);

	return (
		<div className={`${styles.overview} ${styles.grid} ${styles.border}`}>
			{/* <h1>Product Overview Widget</h1> */}
			<Images selected={selected} productStyles={productStyles} />
			<StyleSelector selected={selected} productStyles={productStyles} />
			<ProductInfo selected={selected} />
		</div>
	);
};

export default Overview;