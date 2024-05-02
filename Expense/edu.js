import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Expenses() {
  const { category } = useParams();
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'groceries', description: 'Milk and bread', amount: 20 },
    { id: 2, category: 'bills', description: 'Internet', amount: 50 },
    { id: 3, category: 'education', description: 'Books', amount: 100 },
    { id: 4, category: 'entertainment', description: 'Movie tickets', amount: 30 },
  ]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      category: category,
      description: description,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };

  const filteredExpenses = expenses.filter(expense => expense.category === category);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Expenses</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} required />
        </label>
        <label>
          Amount ($):
          <input type="number" value={amount} onChange={handleAmountChange} required />
        </label>
        <button type="submit">Add Expense</button>
      </form>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}</td>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;
