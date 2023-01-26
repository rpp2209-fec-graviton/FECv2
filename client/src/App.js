import React from 'react';
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';

import ContextProvider from './components/Context/ContextProvider.jsx';

import QuestionsView from './components/Questions/index.js';


function App() {
  return (
    <>
      <ContextProvider>
      <Overview />
      <Reviews />
      <QuestionsView/>
      </ContextProvider>
    </>
  );
}

export default App;