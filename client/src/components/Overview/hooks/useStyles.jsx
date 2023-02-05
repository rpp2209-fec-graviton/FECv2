import React, { useState, useEffect } from 'react';
import { fetch } from '../../../../../server/utils/fetch.js';

export default function useStyles(id) {
	const [currentStyle, setStyle] = useState({});
	const [allProductStyles, setStyles] = useState({});

	useEffect(() => {
		if (id) {
			// Set All Styles for Each Product
			fetch(`products/${id}/styles`, (err, payload) => {
				if (err) {
					console.log('Fetch Styles Err', err);
				} else {
					let newStyles = payload.data.results;
					setStyle(newStyles[0]);

					setStyles((prevState) => ({
						...prevState,
						[id]: newStyles
					}));
				}
			});
		}
	}, [id]);

	return { allProductStyles, currentStyle, setStyle };
}