import React from 'react';
import Thumbnail from './Thumbnail.jsx';

function ThumbnailCarousel({ products }) {
	if (products.length) {
		return (
			<div>
				{products.map(item => (<Thumbnail
					key={item.id}
					product={item}
				/>))}
			</div>
		);
	}

};

export default ThumbnailCarousel;