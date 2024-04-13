import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewAPI from './NewAPI';
import PP from './PP';
import Reduc from './Reduc';
import CustomH from './CustomH';

function App() {
  return (
    <>
    <CustomH></CustomH>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<NewAPI />} />
    //     <Route path="/item" element={<PP />} />

    //     {/* Other routes can be defined here */}
    //   </Routes>
    // </Router>
  );
}

export default App;
