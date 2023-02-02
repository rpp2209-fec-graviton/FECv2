import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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

              <OverviewProvider>
                <Overview />
              </OverviewProvider>

              <RelatedProducts />

              <QuestionsView />

              <ReviewProvider>
                <Reviews />
              </ReviewProvider>

              </ContextProvider>
            }
          />
        </Routes>
      </Router>
      </div>

    </>
  );
}

export default App;