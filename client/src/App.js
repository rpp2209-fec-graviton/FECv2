import React from 'react';
import Overview from './components/Overview/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import ContextProvider from './components/Context/ContextProvider.jsx';

function App() {
  return (
    <>
      <ContextProvider>
        <Overview />
        <Reviews />
      </ContextProvider>
    </>
  );
}

export default App;