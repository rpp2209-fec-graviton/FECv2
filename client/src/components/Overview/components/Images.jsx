import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

function Images ({ products }) {
	console.log('products?', products);

	return (
		<div>
			<h3>Images Component</h3>
			<ThumbnailCarousel products={products}/>
		</div>
	)

};

export default Images;