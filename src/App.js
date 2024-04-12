import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewAPI from './NewAPI';
import PP from './PP';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewAPI />} />
        <Route path="/item" element={<PP />} />

        {/* Other routes can be defined here */}
      </Routes>
    </Router>
  );
}

export default App;
