import React from 'react';
import Thumbnail from './Thumbnail.jsx';

// Will have to map over images and render x # of thumbnails for each style.
function ThumbnailCarousel() {
	return (
		<>
			<h3>Carousel Component</h3>
			<Thumbnail />
		</>
	);
};

export default ThumbnailCarousel;