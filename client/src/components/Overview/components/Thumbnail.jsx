import React, { useEffect } from 'react';
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import styles from '../overview.module.css';

function Thumbnail({ carouselType, type, photos, style }) {
	const { selectedStyle, setSelectedStyle } = useOverviewContext();

	const handleStyleChange = (e) => {
		setSelectedStyle(style);
	};

	// Style Logger
	// useEffect(() => {
	// 	console.log('Style Changed: ', selectedStyle.style_id);
	// }, [selectedStyle]);

	return (
		<>
			<img
				onClick={handleStyleChange}
				className={`${styles[type]} ${styles.thumbnail}`}
				src={photos[0].thumbnail_url}
				alt="thumbnail image"
			/>
		</>
	)

};

export default Thumbnail;