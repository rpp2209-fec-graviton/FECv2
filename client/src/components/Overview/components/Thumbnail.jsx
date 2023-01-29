import React, { useEffect } from 'react';
import styles from '../overview.module.css';
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

function Thumbnail({ carouselType, type, photos, style }) {
	const { selectedStyle, setSelectedStyle } = useOverviewContext();

	const handleStyleChange = (e) => {
		setSelectedStyle(style);
	};

	useEffect(() => {
		// console.log('Selected Changed: ', selectedStyle);
	}, [selectedStyle]);

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