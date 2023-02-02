import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// Context Imports
import ContextProvider from './components/Context/ContextProvider.jsx';
import ReviewProvider from './components/Reviews/Context/ReviewProvider.jsx';
import OverviewProvider from "./components/Overview/Context/OverviewProvider.jsx";

// Component Imports
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import QuestionsView from './components/Questions/index.js';
import QuestionsProvider from './components/Questions/Context/QuestionsProvider.jsx';

function App() {
  return (
    <>
      <div className="body">
      <Router>
        <Routes>
          <Route
            // path="/"
            // element={<Home />}
          />
          <Route
            path="/:productId"
            element={
              <ContextProvider>
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
            </ContextProvider>}
          />
        </Routes>
      </Router>



      </div>
    </>
  );
}

export default App;