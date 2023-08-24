import React from 'react';
import PropTypes from 'prop-types';

const Calculator = ({ data, onButtonClick }) => (
  <div className="top-div">
    <div className="zero-div width-100 auto-margin">
      <div className="num-item top-num width-100">
        {data.next ? `${data.total || ''} ${data.operation || ''} ${data.next}` : data.total || '0'}
      </div>
    </div>
    <div className="numerals width-100 auto-margin">
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('AC')}
      >
        AC
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('+/-')}
      >
        ±
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('%')}
      >
        %
      </button>
      <button
        type="submit"
        className="num-item orange width-100"
        onClick={() => onButtonClick('÷')}
      >
        ÷
      </button>
    </div>

    <div className="numerals width-100 auto-margin">
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('7')}
      >
        7
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('8')}
      >
        8
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('9')}
      >
        9
      </button>
      <button
        type="submit"
        className="num-item orange width-100"
        onClick={() => onButtonClick('x')}
      >
        x
      </button>
    </div>
    <div className="numerals width-100 auto-margin">
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('4')}
      >
        4
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('5')}
      >
        5
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('6')}
      >
        6
      </button>
      <button
        type="submit"
        className="num-item orange width-100"
        onClick={() => onButtonClick('-')}
      >
        -
      </button>
    </div>

    <div className="numerals width-100 auto-margin">
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('1')}
      >
        1
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('2')}
      >
        2
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('3')}
      >
        3
      </button>
      <button
        type="submit"
        className="num-item orange width-100"
        onClick={() => onButtonClick('+')}
      >
        +
      </button>
    </div>
    <div className="numerals width-100 auto-margin">
      <button
        type="submit"
        className="num-item bottom-num "
        onClick={() => onButtonClick('0')}
      >
        0
      </button>
      <button
        type="submit"
        className="num-item width-100"
        onClick={() => onButtonClick('.')}
      >
        .
      </button>
      <button
        type="submit"
        className="num-item orange width-100"
        onClick={() => onButtonClick('=')}
      >
        =
      </button>
    </div>
  </div>
);
Calculator.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
export default Calculator;
