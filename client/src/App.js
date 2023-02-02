import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import ContextProvider from './components/Context/ContextProvider.jsx';
import ReviewProvider from './components/Reviews/Context/ReviewProvider.jsx';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';
import QuestionsView from './components/Questions/index.js';

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </ContextProvider>

    </>
  );
}

export default App;