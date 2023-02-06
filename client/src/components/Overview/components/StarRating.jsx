import React, { useState, useEffect } from 'react';
import ReviewsLink from './ReviewsLink.jsx';

import useRatingsAvg from '../../Hooks/useRatingsAvg/useRatingsAvg.jsx';
import { useProductContext } from "../../Context/ContextProvider.jsx";

import styles from '../overview.module.css';

function StarRating() {
	const { currentProductId, ratingsAverage } = useProductContext();
	const { reviewCount } = useRatingsAvg();

	useEffect(() => {
		(currentProductId && ratingsAverage) && console.log('Product Rating Avg', ratingsAverage);
	}, [currentProductId, ratingsAverage]);

	return (
		<>
		<div className={styles.stars__outer}>
			<div id="stars" className={styles.stars__inner}></div>
		</div>
		{(reviewCount && reviewCount !== 0) && (<ReviewsLink reviewCount={reviewCount} />)}
		</>
	)
}

export default StarRating;