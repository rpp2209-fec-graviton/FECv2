import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import styles from '../overview.module.css';

function Images ({ selected, styles }) {
	if (styles[selected.id]) {
		const selectedProductStyles = styles[selected.id];
		const selectedUrl = selectedProductStyles[0].photos[0].url;

		return (
			<div>
				<img className={styles.overview__image} src={selectedUrl} />
				<ThumbnailCarousel
					selected={selected}
					styles={styles}
				/>
			</div>
		)
	}

};

export default Images;