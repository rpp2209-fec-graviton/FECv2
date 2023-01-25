import React from 'react';
import styles from '../overview.module.css';

function Thumbnail({ style }) {
	var photos = style.photos;

	return (
		<>
			<img className={styles.overview__image} src={photos[0].thumbnail_url} alt="mockup" />
		</>
	)

};

export default Thumbnail;