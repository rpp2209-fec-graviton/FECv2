import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import ContextProvider from './components/Context/ContextProvider.jsx';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
            <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;