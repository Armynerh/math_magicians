import React, { useState } from 'react';
import 'App.css';
import Calculator from 'components/Calculator';
import calculate from 'logic/calculate';

function Calcrender() {
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
    <div className="outcalc width-100">
      <div className="calc width-100 zero-div">
        <div><h1>Lets do some maths!</h1></div>
        <Calculator data={calculatorData} onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Calcrender;
