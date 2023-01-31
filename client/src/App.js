import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';

// Context Imports
import ContextProvider from './components/Context/ContextProvider.jsx';
import ReviewProvider from './components/Reviews/Context/ReviewProvider.jsx';
import OverviewProvider from "./components/Overview/Context/OverviewProvider.jsx";

// Component Imports
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import QuestionsView from './components/Questions/index.js';

function App() {
  return (
    <>
      <div className="body">
        <ContextProvider>
        <ErrorBoundary>
          <OverviewProvider>
            <Overview />
          </OverviewProvider>
        </ErrorBoundary>

        <ErrorBoundary>
          <RelatedProducts />
        </ErrorBoundary>
        <ErrorBoundary>
          <QuestionsView />
        </ErrorBoundary>

        <ErrorBoundary>
          <ReviewProvider>
            <Reviews />
          </ReviewProvider>
        </ErrorBoundary>
        </ContextProvider>
      </div>

    </>
  );
}

export default App;