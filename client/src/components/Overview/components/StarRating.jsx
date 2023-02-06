import React, { useEffect } from 'react';

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