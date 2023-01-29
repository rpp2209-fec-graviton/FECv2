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
	// Global State From Context Provider
	const { currentProductId, setCurrentProductId, products, setProducts } = useProductContext();

	// From Overview Context
	const { pStyles, setStyles, selectedStyle, setSelectedStyle } = useOverviewContext();

	// Private Overview State
	const [productStyles, setProductStyles] = useState({});
	// const [quantity, setQuantity] = useState(0);
	// const [size, setSize] = useState("S");
	// const [starred, setStarred] = useState(false);

	// Shared State (TODO: Move to global state)
	const [selected, setSelected] = useState({});
	// const [starRating, setStarRating] = useState(0);

	// Fetch and Set Product State
	useEffect(() => {
		fetch('products', (err, payload) => {
			if (err) {
				console.log("Caught Error", err);
			} else {
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

			// Get/Set all Styles for each Product
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

					setProductStyles((prevState) => ({
						...prevState,
						[item.id]: newStyles
					}));
				}
			});

		});

	}, [products]);

	// Change To Selected Product Updates Global State Variable
	useEffect(() => {
		const id = selected['id'];
		setCurrentProductId(id);
		console.log('Selected', selected);
	}, [selected]);

	// currentProductId Logger (from Global Context)
	// useEffect(() => {
	// 	console.log('Current Product FROM CONTEXT', currentProductId);
	// }, [currentProductId]);

	return (
		<div className={`${styles.overview} ${styles.grid}`}>
			{/* <h1>Product Overview Widget</h1> */}
			<Images selected={selected} setSelected={setSelected} productStyles={productStyles} pStyles={pStyles}/>
			<StyleSelector selected={selected} productStyles={productStyles} pStyles={pStyles}/>
			<ProductInfo selected={selected} />
		</div>
	);
};

export default Overview;