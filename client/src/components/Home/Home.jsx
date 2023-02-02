import React, { useState, useEffect } from 'react';

import { Route, Routes, useParams } from "react-router-dom";

import Overview from '../Overview/components/Overview.jsx';
import Reviews from '../Reviews/index.js';
import RelatedProducts from '../RelatedProducts/RelatedProducts.jsx';
import QuestionsView from '../Questions/index.js';

import { useProductContext } from '../Context/ContextProvider.jsx';
import OverviewProvider from "../Overview/Context/OverviewProvider.jsx";
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
	}, [productId]);

	return (
		<Routes>
			<Route path='/:id' element={
					<div className="body">
						{/* Dev Logger: Uncomment to view selected product on page load */}
						<h3>Selected Product Is: {currentProductId && currentProductId}!</h3>
						<OverviewProvider>
							<Overview />
						</OverviewProvider>

						<RelatedProducts />

						<QuestionsProvider>
							<QuestionsView />
						</QuestionsProvider>

						<ReviewProvider>
							<Reviews />
						</ReviewProvider>
					</div>
			}>
			</Route>
		</Routes>
	)
};

export default Home;