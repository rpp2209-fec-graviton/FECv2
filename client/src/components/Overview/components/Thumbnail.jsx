import React from 'react';
import styles from '../overview.module.css';

function Thumbnail({ style }) {
	var photos = style.photos;

	return (
		<>
			<img
				className={`
					${styles.thumbnail}
					${styles['overview-border']}
				`}
				src={photos[0].thumbnail_url}
				alt="style-thumbnail-mockup"
			/>
		</>
	)

};

export default Thumbnail;