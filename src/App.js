import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

function App() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    if (buttonName === '=') {
      newData.next = null;
      newData.operation = null;
    }

    setCalculatorData(newData);
  };

  return (
    <div className="App">
      <Calculator data={calculatorData} onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
