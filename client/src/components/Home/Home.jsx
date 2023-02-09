import React, { useState, useEffect } from 'react';

import { Route, Routes } from "react-router-dom";

// Component Imports
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import Overview from '../Overview/components/Overview.jsx';
import Reviews from '../Reviews/index.js';
import RelatedProducts from '../RelatedProducts/RelatedProducts.jsx';
import QuestionsView from '../Questions/index.js';

// Context
import OverviewProvider from '../Overview/Context/OverviewProvider.jsx';
import ReviewProvider from '../Reviews/Context/ReviewProvider.jsx';
import QuestionsProvider from '../Questions/Context/QuestionsProvider.jsx';
import RPProvider from '../RelatedProducts/Context/RPProvider.jsx'

// Hooks
import useGlobalProduct from '../Hooks/useGlobalProduct/useGlobalProduct.jsx';

// Styles
import styles from './home.module.css';

function Home () {
	// Use the URL Params to set Global Product ID State
	const currentProductId = useGlobalProduct();

	return (
		<Routes>
			<Route path='/:productId' element={
				<div className='body'>
					{/* Dev Logger: Uncomment to view selected product on page load */}
					{/* <h3>Selected Product Is: {currentProductId && currentProductId}</h3> */}

					{/* Overview  */}
					<ErrorBoundary component="Overview">
						<OverviewProvider>
							<Overview />
						</OverviewProvider>
					</ErrorBoundary>

					{/* Related Products  */}
					<ErrorBoundary component="Related">
            <RPProvider>
						  <RelatedProducts />
						</RPProvider>
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