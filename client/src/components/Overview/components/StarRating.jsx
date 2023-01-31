import React, { useEffect } from 'react';
import styles from '../overview.module.css';

import { useProductContext } from "../../Context/ContextProvider.jsx";

import getRatingsAvg from '../overview-utils/star-ratings-avg.js';

function StarRating() {
	const { currentProductId } = useProductContext();

	const reviews = getRatingsAvg(currentProductId);
	console.log('Star Reviews', reviews);

	return (
		<div className={styles.stars__outer}>
			<div className={styles.stars__inner}></div>
			<a
				className={styles.stars__a}
				href="#reviews"
			>Read all reviews</a>
		</div>
	)
}

export default StarRating;