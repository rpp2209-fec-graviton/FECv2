import React from 'react';
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx';

import ContextProvider from './components/Context/ContextProvider.jsx';

import QuestionsView from './components/Questions/index.js';


function App() {
  return (
    <>
      <ContextProvider>
      <Overview />
      <RelatedProducts />
      <Reviews />
      <QuestionsView/>
      </ContextProvider>
    </>
  );
}

export default App;