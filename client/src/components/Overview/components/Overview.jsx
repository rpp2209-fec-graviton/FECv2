import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import Images from './Images.jsx';
import StyleSelector from './StyleSelector.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

import getRatingsAvg from '../overview-utils/star-ratings-avg.js';
import { fetch } from '../../../../../server/utils/fetch.js';
import styles from '../overview.module.css';

function Overview() {
	// Global Context
	const { currentProductId, ratingsAverage, setRatingsAverage } = useProductContext();
	// Overview Context
	const { products, setProducts, product, setProduct, pStyles, setStyles, selectedStyle, setSelectedStyle } = useOverviewContext();

	// Shared State (TODO: Move to global state)
	// const [starred, setStarred] = useState(false);
	// const [starRating, setStarRating] = useState(0);

	// =============================================
	//   TO-DO: Figure out why avg calculation
	// 			wont run inside useEffect call
	// =============================================
	getRatingsAvg(currentProductId);
	// console.log('Star Reviews', ratingsAverage);

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
		products &&
		<div data-testid="overview" className={`${styles.overview} ${styles.grid}`}>
			<Images />
			<StyleSelector />
			<ProductInfo />
		</div>
	);
};

export default Overview;