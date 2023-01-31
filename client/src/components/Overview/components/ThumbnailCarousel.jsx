import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import styles from '../overview.module.css';

function ThumbnailCarousel({ type, selected, productStyles }) {
	if (productStyles[selected.id]) {
		return (
			<div className={`${styles[type]} ${styles.carousel}`}>
				{productStyles[selected.id].map(style => (<Thumbnail
					type={type === 'styles__carousel' ? 'thumbnail-rounded' : 'thumbnail-square' }
					key={style.style_id}
					style={style}
				/>))}
			</div>
		)
	} else {
		return (
			<h3>No Styles to Pass to TN</h3>
		)
	}

};

export default ThumbnailCarousel;