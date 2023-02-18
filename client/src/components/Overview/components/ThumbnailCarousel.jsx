import React from 'react';
import styles from '../overview.module.css';

import Thumbnail from './Thumbnail.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";

function ThumbnailCarousel({ type }) {
	const { currentProductId } = useProductContext();
	const { currentProductStyles, allProductStyles, setStyles, selectedStyle } = useOverviewContext();

	const productCarousel = currentProductStyles && currentProductStyles.map(style => (
		<Thumbnail
			carouselType={type}
			type={type === 'styles__carousel' ? 'thumbnail-square' : 'thumbnail-rounded'}
			key={style.style_id}
			photos={style.photos}
			style={style}
		/>)
	);

	const styleCarousel = selectedStyle.photos && selectedStyle.photos.map(photo => (
		<Thumbnail
			carouselType={type}
			type={type === 'styles__carousel' ? 'thumbnail-square' : 'thumbnail-rounded'}
			key={photo.thumbnail_url}
			photos={photo}
			style={selectedStyle}
		/>
	));

	return (
		currentProductStyles &&
		<div className={styles[type]}>
			{type === 'images__carousel' ? productCarousel : styleCarousel }
		</div>
	)
};

export default ThumbnailCarousel;