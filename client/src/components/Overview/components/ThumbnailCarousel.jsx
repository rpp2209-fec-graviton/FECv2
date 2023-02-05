import React from 'react';
import styles from '../overview.module.css';

import Thumbnail from './Thumbnail.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

function ThumbnailCarousel({ type }) {
	const { currentProductId } = useProductContext();
	const { currentProductStyles, allProductStyles, setStyles } = useOverviewContext();

	const carousel = currentProductStyles.map(style => (
		<Thumbnail
			carouselType={type}
			type={type === 'styles__carousel' ? 'thumbnail-square' : 'thumbnail-rounded'}
			key={style.style_id}
			photos={style.photos}
			style={style}
		/>)
	);

	return (
		currentProductStyles &&
		<div className={`${styles[type]} ${styles.carousel}`}>
			{carousel}
		</div>
	)
};

export default ThumbnailCarousel;