import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { useProductContext } from "../../Context/ContextProvider.jsx";
import { useOverviewContext } from "../Context/OverviewProvider.jsx";
import styles from '../overview.module.css';

function Thumbnail({ carouselType, type, photos, style }) {
	const { currentProductId } = useProductContext();
	const { selectedStyle, imgURL, handleStyleChange } = useOverviewContext();
	const urls = carouselType === 'styles__carousel' ? photos : photos[0];

	return (
		<div className={styles.relative}>
			{(carouselType === 'images__carousel' && style === selectedStyle) ? (<FontAwesomeIcon className={`icon ${styles['thumbnail-round-active']}`} icon={faCircleCheck} />) : (<></>)}
			{(carouselType === 'styles__carousel' && urls.url === imgURL) ? (<hr className={styles['thumbnail-square-active']} />) : (<></>)}

			<img
				onClick={(e) => handleStyleChange(e, style, type)}
				className={`${styles[type]} ${styles.thumbnail}`}
				id={urls.url} // figure out a better way to pass this along with thumbnail
				src={urls && urls.thumbnail_url}
				alt="thumbnail image"
			/>
		</div>
	)

};

export default Thumbnail;