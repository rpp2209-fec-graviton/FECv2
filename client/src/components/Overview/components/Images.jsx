import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import imageStyles from '../overview.module.css';

function Images ({ selected, styles }) {

	if (styles[selected.id]) {
		const selectedProductStyles = styles[selected.id];
		const selectedUrl = selectedProductStyles[0].photos[0].url;

		return (
			<div>
				<img
					className={`
						${imageStyles.overview__image}
						${imageStyles['overview-border']}
					`}
					src={selectedUrl}
				/>
				<ThumbnailCarousel
					selected={selected}
					styles={styles}
				/>
			</div>
		)
	} else {
		return (<h2>No Images to Display</h2>)
	}

};

export default Images;