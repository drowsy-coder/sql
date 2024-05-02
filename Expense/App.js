import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Expenses from './edu';

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <nav>
        <Link to="/groceries">Groceries   </Link> -
        <Link to="/bills">Bill Payments   </Link> -
        <Link to="/education">Education   </Link> -
        <Link to="/entertainment">Entertainment</Link>
      </nav>
      <Routes>
        <Route path="/:category" element={<Expenses />} />
      </Routes>
    </div>
  );
}

export default App;
