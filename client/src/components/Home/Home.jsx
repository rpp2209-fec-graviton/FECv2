import React, { useState, useEffect } from 'react';

import { Route, Routes, useParams } from "react-router-dom";

// Component Imports
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import Overview from '../Overview/components/Overview.jsx';
import Reviews from '../Reviews/index.js';
import RelatedProducts from '../RelatedProducts/RelatedProducts.jsx';
import QuestionsView from '../Questions/index.js';

// Context Imports
import { useProductContext } from '../Context/ContextProvider.jsx';

import OverviewProvider from '../Overview/Context/OverviewProvider.jsx';
import ReviewProvider from '../Reviews/Context/ReviewProvider.jsx';
import QuestionsProvider from '../Questions/Context/QuestionsProvider.jsx';

function Home () {
	// Get id from query string
	const productId = useParams();
	const { currentProductId, setCurrentProductId } = useProductContext();

	// ID Context logger
	useEffect(() => {
		if (currentProductId) {
			// Remove trailing slash '/' and set to
			// Global `selected product id` Context
			const id = productId['*'].split('/')[0];
			setCurrentProductId(id);
		}
	}, [productId, currentProductId]);

	return (
		<Routes>
			<Route path='/:productId' element={
				<div className="body">
					{/* Dev Logger: Uncomment to view selected product on page load */}
					<h3>Selected Product Is: {currentProductId && currentProductId}!</h3>

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