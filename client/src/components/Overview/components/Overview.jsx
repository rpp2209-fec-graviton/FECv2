import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";

import { fetch } from '../../../../../server/utils/fetch.js';
import styles from '../overview.module.css';

function Overview() {
	// This Now Comes From Global State/Global Context Provider
	const { currentProductId, setCurrentProductId, products, setProducts } = useProductContext();
	// console.log('CURRENT PRODUCT FROM CONTEXT', currentProductId);
	// console.log('PRODUCTS FROM CONTEXT', products[0]);

	// Private State
	const [quantity, setQuantity] = useState(0);
	const [size, setSize] = useState("S");
	const [starred, setStarred] = useState(false);
	const [productStyles, setStyles] = useState({});

	// Shared State (TODO: Move to global state)
	const [selected, setSelected] = useState({});
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

		// console.log('PRODUCTS FROM CONTEXT', products);
		Object.values(products).forEach(item => {
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

	// Updated Styles Logger
	// useEffect(() => {
	// 	console.log('Updated Styles', productStyles);
	// }, [productStyles]);

	// Change To Selected Product Updates Global State Variable
	useEffect(() => {
		const id = selected['id'];
		setCurrentProductId(id);
		console.log('Selected', currentProductId);

	}, [selected]);

	return (
		<div className={`${styles.overview} ${styles.grid}`}>
			{/* <h1>Product Overview Widget</h1> */}
			<Images selected={selected} productStyles={productStyles} />
			<StyleSelector selected={selected} productStyles={productStyles} />
			<ProductInfo selected={selected} />
		</div>
	);
};

export default Overview;