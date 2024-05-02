import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Food from './components/Food';
// import Travel from './categories/Travel';
// import Utilities from './categories/Utilities';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        {/* <Route path="/travel" element={<Travel />} />
        <Route path="/utilities" element={<Utilities />} /> */}
      </Routes>
    </div>
  );
}

export default App;
