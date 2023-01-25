import React from 'react';
import StarRating from './StarRating.jsx';

function ProductInfo({ selected }) {
	console.log('Selected', selected);

	const handleClick = () => {
		console.log('Clicked! Adding to Outfit (TODO)...');
	};
	return (
		<div style={{border: "1px solid grey"}}>
			<h3>ProductInfo Component</h3>
			<StarRating />
			<p>{selected.category}</p>
			<p>{selected.name}</p>
			<p>$$$ Price with Potential Sales Styling</p>
			<p>{selected.description}</p>
			<button onClick={handleClick}>⭐ (Outfit Toggle)</button>
		</div>
	);
};

export default ProductInfo;