import { useState } from 'react';
import { fetch } from '../../../server/utils/fetch.js';
import { useProductContext } from "../components/Context/ContextProvider.jsx";

// =============================================
// Ratings Average = Ratings Sum / Review Count

//        TO-DO: Calculation is finished,
//  Next task is to figure out how to convert
// average from number to percentage/stars filled
// =============================================
export default function getRatingsAvg(id) {
	const { setRatingsAverage } = useProductContext();
	const [reviewCount, setCount] = useState(0);
	const [ratingSum, setSum] = useState(0);

	// Get all Ratings
	fetch(`reviews/?product_id=${id}`, (err, payload) => {
		if (err) {
			console.log('Calculate Ratings Err', err);
		} else {
			// Get Selected Product Reviews
			const reviews = payload.data.results;

			// Get Total # of Reviews
			setCount(payload.data.count);

			// Get Ratings Sum
			const ratings = reviews.map(review => review.rating);

			const sum = ratings.reduce((ratingSum, currentRating) => {
				return ratingSum + currentRating;
			}, 0);

			setSum(sum);
		}
	})

	// Return average rating
	const average = ratingSum / reviewCount;
	!average ? null : setRatingsAverage(average);
};