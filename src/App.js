import React, { useState } from 'react';
import './calculator.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input.concat(e.target.value));
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input className="display" type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={handleClick} value="7">7</button>
        <button onClick={handleClick} value="8">8</button>
        <button onClick={handleClick} value="9">9</button>
        <button onClick={handleClick} value="/">/</button>
        <button onClick={handleClick} value="4">4</button>
        <button onClick={handleClick} value="5">5</button>
        <button onClick={handleClick} value="6">6</button>
        <button onClick={handleClick} value="*">*</button>
        <button onClick={handleClick} value="1">1</button>
        <button onClick={handleClick} value="2">2</button>
        <button onClick={handleClick} value="3">3</button>
        <button onClick={handleClick} value="-">-</button>
        <button onClick={handleClick} value="0">0</button>
        <button onClick={handleClick} value=".">.</button>
        <button onClick={handleClear} className="clear">Clear</button>
        <button onClick={handleClick} value="+">+</button>
        <button onClick={handleCalculate} className="equals">=</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
