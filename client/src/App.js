import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import ContextProvider from './components/Context/ContextProvider.jsx';
import ReviewProvider from './components/Reviews/Context/ReviewProvider.jsx';
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
              <Overview />

              <RelatedProducts />

              <ReviewProvider>
              <Reviews />
              </ReviewProvider>
              <QuestionsView />
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