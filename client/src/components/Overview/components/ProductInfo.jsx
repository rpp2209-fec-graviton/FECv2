import React from 'react';
import Button from './Button.jsx';
import StarRating from './StarRating.jsx';
import styles from '../overview.module.css';

function ProductInfo({ selected }) {
	const handleClick = () => {
		console.log('Clicked! Adding to Outfit (TODO)...');
	};

	return (
		<div className={styles['overview__product-info']}>
			<h3>ProductInfo Component</h3>
			<h4>{selected.name}</h4>
			<StarRating />
			<p>{selected.category}</p>
			<p>$$$ Price with Potential Sales Styling</p>
			<p>{selected.description}</p>
			<Button handleClick={handleClick}>⭐</Button>
		</div>
	);
};

export default ProductInfo;