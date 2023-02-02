import React, { useState, useEffect } from 'react';

import { Route, Routes, useParams } from "react-router-dom";

import Overview from '../Overview/components/Overview.jsx';
import Reviews from '../Reviews/index.js';
import RelatedProducts from '../RelatedProducts/RelatedProducts.jsx';
import QuestionsView from '../Questions/index.js';

import ReviewProvider from '../Reviews/Context/ReviewProvider.jsx';
import QuestionsProvider from '../Questions/Context/QuestionsProvider.jsx';

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
			<Route path='/:productId' element={
					<div className="body">
						<h1>Selected Product Is: {id && id}!</h1>

						{/* Overview  */}
						<ErrorBoundary component="Overview">
							<OverviewProvider>
								<Overview />
							</OverviewProvider>
						</ErrorBoundary>

						{/* Related Products  */}
						<ErrorBoundary component="Related">
							<RelatedProducts />
						</ErrorBoundary>

						{/* Product Questions  */}
						<ErrorBoundary component="Questions">
							<QuestionsProvider>
								<QuestionsView />
							</QuestionsProvider>
						</ErrorBoundary>

						{/* Product Reviews  */}
						<ErrorBoundary component="Reviews">
							<ReviewProvider>
								<Reviews />
							</ReviewProvider>
						</ErrorBoundary>
					</div>}>
			</Route>
		</Routes>
	)
};

export default Home;