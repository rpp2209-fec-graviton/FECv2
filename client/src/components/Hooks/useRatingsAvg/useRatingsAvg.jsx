import React, { useState, useEffect } from 'react';

import useFetchProductInfo from '../../Reviews/hooks/useFetchProductInfo.jsx';

import { fetch } from '../../../../../server/utils/data-utils.js';
import { useProductContext } from "../../Context/ContextProvider.jsx";

export default function useRatingsAvg(id) {
	const { currentProductId, sortOrder, ratingsAverage, setRatingsAverage } = useProductContext();
	const [reviewCount, setCount] = useState(0);
	const [ratingSum, setSum] = useState(0);

	const { reviewResponse } = useFetchProductInfo(currentProductId, sortOrder);

	// =============================================
	// Effect: Get Reviews, set Review Count and Sum
	//   whenever the Review Response changes
	// =============================================
	useEffect(() => {
		try {
			if (reviewResponse) {
				// Get Selected Product Reviews
				const reviews = reviewResponse.results;

				// Get Total # of Reviews
				setCount(reviewResponse.count);

				// Get Ratings Sum
				const ratings = reviews.map(review => review.rating);

				const sum = ratings.reduce((ratingSum, currentRating) => {
					return ratingSum + currentRating;
				}, 0);

				setSum(sum);
			}

		} catch (err) {
			console.log('Calculate Ratings Err', err);
		}

	}, [reviewResponse]);

	useEffect(() => {
		if (ratingsAverage && reviewCount) {
			const fillPercent = (ratingsAverage / 5) * 100;
			const elem = document.getElementById('stars');
			elem.style.width = `${fillPercent}%`;
		}
	}, [ratingsAverage]);

	// Update Average when ratingSum or reviewCount changes
	useEffect(() => {
		const average = ratingSum / reviewCount;
		average && setRatingsAverage(average);
		// reviewCount && setCount(0);
	}, [ratingSum, reviewCount]);

	// Return average rating and Review Count
	return { ratingsAverage, reviewCount };
};