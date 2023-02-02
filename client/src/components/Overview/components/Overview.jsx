import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

import { fetch } from '../../../../../server/utils/fetch.js';
import styles from '../overview.module.css';

function Overview() {
	// Global Context
	const { currentProductId } = useProductContext();
	// Overview Context
	const { products, setProducts, product, setProduct, pStyles, setStyles, selectedStyle, setSelectedStyle } = useOverviewContext();

	// Shared State (TODO: Move to global state)
	// const [starred, setStarred] = useState(false);
	// const [starRating, setStarRating] = useState(0);

	// Fetch and Set All Products
	useEffect(() => {
		fetch('products', (err, payload) => {
			if (err) {
				console.log("Caught Error", err);
			} else {
				setProducts(payload.data);
			}
		})
	}, []);

	// Fetch and Set Selected Product
	useEffect(() => {
		for (var current of products) {
			if (current.id === currentProductId) {
				setProduct(current);
			}
		}

		// Get/Set All Styles for Each Product
		Object.values(products).forEach(item => {
			fetch(`products/${item.id}/styles`, (err, payload) => {
				if (err) {
					console.log('Styles Fetch Err', err);
				} else {
					let newStyles = payload.data.results;
					setSelectedStyle(newStyles[0]);

					setStyles((prevState) => ({
						...prevState,
						[item.id]: newStyles
					}));
				}
			});
		});

	}, [products]);

	return (
		<div className={`${styles.overview} ${styles.grid}`}>
			{/* <h1>Product Overview Widget</h1> */}
			<Images />
			<StyleSelector />
			<ProductInfo />
		</div>
	);
};

export default Overview;