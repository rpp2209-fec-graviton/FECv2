import { useState } from 'react';
import { fetch } from '../../../../../server/utils/fetch.js';

// Ratings Average = Ratings Sum / Review Count

// =============================================
//        TO-DO: Calculation is finished,
//  Next task is to figure out how to convert
// average from number to percentage/stars filled
// =============================================
export default function getRatingsAvg(id) {
	console.log('Calculating average rating for product #', id);
	const [reviewCount, setCount] = useState(0);
	const [total, setTotal] = useState(0);
	var reviews;

	// Get all Ratings
	fetch(`reviews/?product_id=${id}`, (err, payload) => {
		if (err) {
			console.log('Calculate Ratings Err', err);
		} else {
			// Get Selected Product Reviews
			reviews = payload.data.results;

			// Get Total # of Reviews
			setCount(payload.data.count);

			// Get Ratings Sum
			const ratings = reviews.map(review => review.rating);

			const sum = ratings.reduce((total, currentRating) => {
				return total + currentRating;
			}, 0);

			setTotal(sum);
		}
	})

	// Return average rating
	return total / reviewCount;
};