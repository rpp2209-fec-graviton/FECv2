import React, { useEffect } from 'react';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import useStyles from '../hooks/useStyles.jsx';

import styles from '../overview.module.css';

function Thumbnail({ carouselType, type, photos, style }) {
	const { currentProductId } = useProductContext();
	const { selectedStyle, setSelectedStyle } = useStyles(currentProductId);
	const { setURL } = useOverviewContext();

	const handleStyleChange = (style) => {
		setSelectedStyle(style);
		setURL(style.photos[0].url);
	};

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