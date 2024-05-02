import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Expense Management App</h1>
      <nav>
        <Link to="/food">Food</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/utilities">Utilities</Link>
      </nav>
    </div>
  );
}

export default Home;
