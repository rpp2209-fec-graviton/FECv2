import React, { useState, useEffect } from 'react';
import ReviewsLink from '../Overview/components/ReviewsLink.jsx';

import useRatingsAvg from '../Hooks/useRatingsAvg/useRatingsAvg.jsx';
import { useProductContext } from "../Context/ContextProvider.jsx";

import styles from '../Home/home.module.css';

function StarRatingBar() {
	const { currentProductId, ratingsAverage } = useProductContext();
	const { reviewCount } = useRatingsAvg();

	if (reviewCount && reviewCount !== 0) {
		return (
			<>
			<div className={styles.stars__outer}>
				<div id="stars" className={styles.stars__inner}></div>
			</div>

				<ReviewsLink reviewCount={reviewCount} />
			</>
		)
	} else if (reviewCount === 0) {
		return (<></>)
	}
}

export default StarRatingBar;