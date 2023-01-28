import React from 'react';
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
        <ContextProvider>
          <Overview />

          <ReviewProvider>
            <Reviews />
          </ReviewProvider>
          <QuestionsView />

        <RelatedProducts />
        <Reviews />
        <QuestionsView/>

        </ContextProvider>
      </div>

    </>
  );
}

export default App;