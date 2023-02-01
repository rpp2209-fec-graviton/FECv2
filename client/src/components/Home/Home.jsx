import React, { useState, useEffect } from 'react';

import { Route, Routes, useParams } from "react-router-dom";

import Overview from '../Overview/components/Overview.jsx';
import Reviews from '../Reviews/index.js';
import RelatedProducts from '../RelatedProducts/RelatedProducts.jsx';
import QuestionsView from '../Questions/index.js';

import ContextProvider from '../Context/ContextProvider.jsx';
import ReviewProvider from '../Reviews/Context/ReviewProvider.jsx';

function Home () {
	// Get id from query string
	const productId = useParams();

	// String trailing slacsh '/' and set to state
	let newId = productId['*'].toString().split('/');
	const [id, setId] = useState(newId[0]);

	// ID logger
	useEffect(() => {
		if (id) {
			console.log('Product ID From State', id);
		}
	}, [id]);

	return (
		<Routes>
			<Route path='/:id' element={
				<ContextProvider>
					<h1>Selected Product Is: {id && id}!</h1>
					<Overview />

					<RelatedProducts />
					<QuestionsView />

					<ReviewProvider>
						<Reviews />
					</ReviewProvider>
				</ContextProvider>
			}>
			</Route>
		</Routes>
	)
};

export default Home;