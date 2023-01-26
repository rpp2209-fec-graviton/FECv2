import React from 'react';
import StarRating from './StarRating.jsx';
import styles from '../overview.module.css';

function ProductInfo({ selected }) {
	const handleClick = () => {
		console.log('Clicked! Adding to Outfit (TODO)...');
	};

	return (
		<div className={styles['overview-border']}>
			<h3>ProductInfo Component</h3>
			<StarRating />
			<p>{selected.category}</p>
			<p>{selected.name}</p>
			<p>$$$ Price with Potential Sales Styling</p>
			<p>{selected.description}</p>
			<button onClick={handleClick}>⭐</button>
		</div>
	);
};

export default ProductInfo;