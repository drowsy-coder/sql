import React, { useState } from 'react';
import CategoryForm from '../components/CategoryForm';
import ExpenseTable from '../components/ExpenseTable';

function Food() {
  const [entries, setEntries] = useState([]);

  const fields = [
    { name: 'item', label: 'Item Name', type: 'text' },
    { name: 'amount', label: 'Amount', type: 'number' },
    { name: 'date', label: 'Date', type: 'date' }
  ];

  const handleFormSubmit = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <h2>Food Expenses</h2>
      <CategoryForm fields={fields} onSubmit={handleFormSubmit} />
      <ExpenseTable data={entries} />
    </div>
  );
}

export default Food;
