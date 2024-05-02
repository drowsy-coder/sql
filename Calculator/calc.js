import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (buttonName) => {
    if (buttonName === '=') {
      calculate();
    } else if (buttonName === 'C') {
      reset();
    } else {
      setInput(input + buttonName);
    }
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input).toString();
      setResult(res);
    } catch (e) {
      setResult('error');
    }
  };

  const reset = () => {
    setInput('');
    setResult('');
  };

  // Styles defined inside the component
  const styles = {
    calculator: {
      maxWidth: '400px',
      margin: '50px auto',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      padding: '20px',
      borderRadius: '10px'
    },
    display: {
      backgroundColor: '#f2f2f2',
      marginBottom: '10px',
      padding: '20px',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    result: {
      fontSize: '32px',
      color: '#333',
      minHeight: '40px'
    },
    input: {
      fontSize: '24px',
      color: '#666',
      minHeight: '30px',
      overflow: 'hidden'
    },
    buttonPanel: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px'
    },
    button: {
      fontSize: '20px',
      padding: '15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#e0e0e0',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <div style={styles.result}>{result}</div>
        <div style={styles.input}>{input}</div>
      </div>
      <div style={styles.buttonPanel}>
        {['C', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '1', '2', '3', '=', '0', '.'].map((button, index) => (
          <button
            key={index}
            style={styles.button}
            onClick={() => handleClick(button)}
            onMouseDown={(e) => e.preventDefault()} // Prevents focus state sticking
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
