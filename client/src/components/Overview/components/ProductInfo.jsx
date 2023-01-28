import React from 'react';
import Button from './Button.jsx';
import StarRating from './StarRating.jsx';
import styles from '../overview.module.css';

function ProductInfo({ selected }) {
	return (
		<div className={styles['overview__product-info']}>
			{/* <h3>ProductInfo Component</h3> */}
			<StarRating />
			<p>{selected.category}</p>
			<h2>{selected.name}</h2>
			<p>${selected.default_price}</p>
			{/* <p>$$$ Price with Potential Sales Styling</p> */}
			<p>{selected.description}</p>
		</div>
	);
};

export default ProductInfo;