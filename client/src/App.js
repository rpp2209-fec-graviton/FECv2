import React from 'react';
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import ContextProvider from './components/Context/ContextProvider.jsx';
import QuestionsView from './components/Questions/QuestionsView.jsx';
import ReviewProvider from './components/Reviews/Context/ReviewProvider.jsx';


function App() {
  return (
    <>
      <ContextProvider>
        <Overview />
        <ReviewProvider>
          <Reviews />
        </ReviewProvider>
        <QuestionsView />
      </ContextProvider>
    </>
  );
}

export default App;