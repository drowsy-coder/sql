import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [page, setPage] = useState('home');
  const [expenses, setExpenses] = useState([]);

  const navigate = (page) => {
    setPage(page);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('travel')}>Travel</button>
      <button onClick={() => navigate('food')}>Food</button>
      <button onClick={() => navigate('utilities')}>Utilities</button>

      {page === 'home' && <Home />}
      {page === 'travel' && <ExpenseForm category="Travel" onAddExpense={addExpense} />}
      {page === 'food' && <ExpenseForm category="Food" onAddExpense={addExpense} />}
      {page === 'utilities' && <ExpenseForm category="Utilities" onAddExpense={addExpense} />}

      <ExpenseTable expenses={expenses} />
    </div>
  );
};

const Home = () => (
  <h1>Welcome to the Expense Management App</h1>
);

const ExpenseForm = ({ category, onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ category, amount, date, details });
    setAmount('');
    setDate('');
    setDetails('');
  };

  return (
    <div>
      <h2>Add Expense for {category}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Details:</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

const ExpenseTable = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;
