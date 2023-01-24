import React from "react";
import Overview from './components/Overview/components/Overview.jsx';
import Reviews from './components/Reviews/index.js';
import QuestionsView from './components/Questions/QuestionsView.jsx';

function App() {
  return (
    <>
      <Overview />
      <Reviews />
      <QuestionsView/>
    </>
  );
}

export default App;