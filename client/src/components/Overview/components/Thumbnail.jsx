import React, { useEffect } from 'react';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import styles from '../overview.module.css';

function Thumbnail({ carouselType, type, photos, style }) {
	const { currentProductId } = useProductContext();
	const { selectedStyle, setSelectedStyle, setURL, handleStyleChange } = useOverviewContext();

	return (
		<img
			onClick={() => handleStyleChange(style)}
			className={`${styles[type]} ${styles.thumbnail}`}
			src={photos[0].thumbnail_url}
			alt="thumbnail image"
		/>
	)

};

export default Thumbnail;