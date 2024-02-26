// App.js

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import { Level1, Level2, Level3 } from './Levels';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
      </Routes>
    </Router>
  );
}

export default App;