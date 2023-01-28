import React from 'react';
import styles from '../overview.module.css';

function Thumbnail({ type, style }) {
	var photos = style.photos;

	const handleClick = (e) => {
		console.log('Clicked', style.style_id, style.name, style.original_price, style.sale_price);
	};

	return (
		<>
			<img
				onClick={handleClick}
				className={`${styles[type]} ${styles.thumbnail}`}
				src={photos[0].thumbnail_url}
				alt="style-thumbnail-mockup"
			/>
		</>
	)

};

export default Thumbnail;