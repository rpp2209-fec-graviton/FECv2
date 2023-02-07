import React, { useState, useEffect } from 'react';

import useFetchProductInfo from '../../Reviews/hooks/useFetchProductInfo.jsx';

import { fetch } from '../../../../../server/utils/data-utils.js';
import { useProductContext } from "../../Context/ContextProvider.jsx";

// Ratings Average = Ratings Sum / Review Count

// =============================================
//        TO-DO: Calculation is finished,
//  Next task is to figure out how to convert
// average from number to percentage/stars filled
// =============================================
export default function useRatingsAvg(id) {
	const { currentProductId, ratingsAverage, setRatingsAverage } = useProductContext();
	const [reviewCount, setCount] = useState(0);
	const [ratingSum, setSum] = useState(0);

	const { reviewResponse, reviewError, reviewLoading } = useFetchProductInfo({
		method: 'POST',
		url: '/reviews/results',
		data: {
			product_id: currentProductId,
		}
	});

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
		const average = ratingSum / reviewCount;
		average && setRatingsAverage(average);
		// reviewCount && setCount(0);
	}, [ratingSum, reviewCount]);

	// Return average rating and Review Count
	return { ratingsAverage, reviewCount };
};