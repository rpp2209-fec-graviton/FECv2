import React, { useState, useEffect } from 'react';
import { fetch } from '../../../../../server/utils/data-utils.js';

export default function useStyles(id) {
	const [allProductStyles, setStyles] = useState({});
	const [styleImageLinks, setImageLinks] = useState([]);
	const [slideImgs, setSlideImgs] = useState([]);

	useEffect(() => {
		if (id) {
			// Set All Styles for Each Product
			fetch(`products/${id}/styles`, (err, payload) => {
				if (err) {
					console.log('Fetch Styles Err', err);
				} else {
					setStyles((prevState) => ({
						...prevState,
						[id]: payload.data.results
					}));
				}
			});
		}
	}, [id]);

	// Set Slide Image Links to State Var
	// This may be unnecessary state that can be removed at a later date.
	// Keeping in case I need it for now
	useEffect(() => {
		allProductStyles && Object.values(allProductStyles).forEach((style, index) => {
			let id = style[index].style_id;

			setImageLinks((prevState) => ({
				...prevState,
				[id]: [...style[index].photos]
			}))

		});
	}, [allProductStyles]);

	// Set Slides
	useEffect(() => {
		styleImageLinks && setSlideImgs(document.getElementsByClassName('slides__sCujp'));
	}, [styleImageLinks]);

	return { allProductStyles, slideImgs, setSlideImgs, styleImageLinks};
}