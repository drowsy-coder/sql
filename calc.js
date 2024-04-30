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

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <div className="input">{input}</div>
      </div>
      <div className="button-panel">
        {['C', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '1', '2', '3', '=', '0', '.'].map((button, index) => (
          <button key={index} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;