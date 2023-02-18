import React, { useState, useEffect } from 'react';

import useFetchProductInfo from '../../Reviews/hooks/useFetchProductInfo.jsx';

import { fetch } from '../../../../../server/utils/data-utils.js';
import { useProductContext } from "../../Context/ContextProvider.jsx";

export default function useRatingsAvg() {
	const { currentProductId, sortOrder, ratingsAverage, setRatingsAverage } = useProductContext();
	const [reviewCount, setCount] = useState(0);
	const [ratingSum, setSum] = useState(0);
	const [fill, setFill] = useState(0);

	const { reviewResponse } = useFetchProductInfo(currentProductId, sortOrder);

	useEffect(() => {
		if (ratingsAverage) {
			setFill((ratingsAverage / 5) * 100);
		}
	}, [ratingsAverage]);

	// =============================================
	// Effect: Get Reviews, set Review Count and Sum
	//   whenever the Review Response changes
	// =============================================
	useEffect(() => {
		try {
			if (reviewResponse) {

				const reviews = reviewResponse.results; // Get Selected Product Reviews
				setCount(reviewResponse.count); // Get Total # of Reviews
				const ratings = reviews.map(review => review.rating); // Convert Reviews to Just The Rating

				const sum = ratings.reduce((ratingSum, currentRating) => {  // Get Sum of All Reviews
					return ratingSum + currentRating;
				}, 0);

				setSum(sum); // Set the ratingSum
			}

		} catch (err) {
			console.log('Calculate Ratings Err', err);
		}

	}, [reviewResponse]);

	// Update Average when ratingSum or reviewCount changes
	useEffect(() => {
		const average = ratingSum / reviewCount;
		average && setRatingsAverage(average);
		// reviewCount && setCount(0); // Test Stars Component collapses when review count is 0
	}, [ratingSum, reviewCount]);

	// Return average rating and Review Count
	return { ratingsAverage, reviewCount, fill };
};