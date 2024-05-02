import React from 'react';

function ExpenseTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => <td key={idx}>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
