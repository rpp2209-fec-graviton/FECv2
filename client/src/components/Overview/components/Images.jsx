import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

function Images ({ selected, styles }) {

	return (
		<div>
			<h3>Images Component</h3>
			<ThumbnailCarousel
				selected={selected}
				styles={styles}
			/>
		</div>
	)

};

export default Images;