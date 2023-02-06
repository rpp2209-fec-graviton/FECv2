import React, { useEffect } from 'react';

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import styles from '../overview.module.css';

function Thumbnail({ carouselType, type, photos, style }) {
	const { currentProductId } = useProductContext();
	const { handleStyleChange } = useOverviewContext();
	const urls = carouselType === 'styles__carousel' ? photos : photos[0];

	return (
		<img
			onClick={(e) => handleStyleChange(e, style)}
			className={`${styles[type]} ${styles.thumbnail}`}
			id={urls.url} // figure out a better way to pass this along with thumbnail
			src={urls && urls.thumbnail_url}
			alt="thumbnail image"
		/>
	)

};

export default Thumbnail;