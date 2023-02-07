import React, { useState, useEffect } from 'react';
import { fetch } from '../../../../../server/utils/data-utils.js';

export default function useStyles(id) {
	const [allProductStyles, setStyles] = useState({});

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

	return allProductStyles;
}