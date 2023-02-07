import React, { useState, useEffect } from 'react';
import ReviewsLink from '../Overview/components/ReviewsLink.jsx';

import useRatingsAvg from '../Hooks/useRatingsAvg/useRatingsAvg.jsx';
import { useProductContext } from "../Context/ContextProvider.jsx";

import styles from '../Overview/overview.module.css';

function StarRatingBar() {
	const { currentProductId, ratingsAverage } = useProductContext();
	const { reviewCount } = useRatingsAvg();

	// Average Rating Logger
	// useEffect(() => {
	// 	(currentProductId && ratingsAverage) && console.log('Product Rating Avg', ratingsAverage);
	// }, [currentProductId, ratingsAverage]);

	return (
		<>
		<div className={styles.stars__outer}>
			<div id="stars" className={styles.stars__inner}></div>
		</div>
		{(reviewCount && reviewCount !== 0) && (<ReviewsLink reviewCount={reviewCount} />)}
		</>
	)
}

export default StarRatingBar;