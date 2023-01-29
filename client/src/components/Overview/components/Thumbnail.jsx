import React from 'react';
import styles from '../overview.module.css';

function Thumbnail({ carouselType, type, photos, style }) {
	// console.log('Style', style);

	const handleClick = (e) => {
		console.log('Clicked', style.style_id, style.name, style.original_price, style.sale_price);
		// setSelected(style)
	};

	return (
		<>
			<img
				onClick={handleClick}
				className={`${styles[type]} ${styles.thumbnail}`}
				src={photos[0].thumbnail_url}
				alt="thumbnail image"
			/>
		</>
	)

};

export default Thumbnail;