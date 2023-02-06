import { useState } from 'react';
import { fetch } from '../../../../../server/utils/data-utils.js';
import { useProductContext } from "../../Context/ContextProvider.jsx";

// Ratings Average = Ratings Sum / Review Count

// =============================================
//        TO-DO: Calculation is finished,
//  Next task is to figure out how to convert
// average from number to percentage/stars filled
// =============================================
export default function useRatingsAvg(id) {
	const { ratingsAverage, setRatingsAverage } = useProductContext();
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

			// Calculate Star Fill Percentage For Styling
			// ratings.forEach(review => {
			// 	const starPercentage = (review.rating / reviewCount) * 100;
			// 	const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

			// 	// =============================================
			// 	//      TO-DO: Figure out how to import the %
			// 	// 				fill to use in the stylesheet
			// 	// =============================================
			// 	// Selects element correctly but can't set
			// 	// style bc of the css module styles import
			// 	const stars = document.querySelector(`[class^='stars__inner']`);
			// 	// console.log('Stars Elem', stars);
			// 	stars.style.width = starPercentageRounded;
			// });
		}
	})

	const average = ratingSum / reviewCount;
	!average ? null : setRatingsAverage(average);

	// Return average rating and Review Count
	return { ratingsAverage, reviewCount };
};