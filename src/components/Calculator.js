function Calculator() {
  return (
    <div className="top-div">
      <div className="zero-div"><div className="num-item  top-num">0</div></div>
      <div className="numerals">
        <div className="num-item">AC</div>
        <div className="num-item">±</div>
        <div className="num-item">%</div>
        <div className="num-item orange">÷</div>
      </div>
      <div className="numerals">
        <div className="num-item">7</div>
        <div className="num-item">8</div>
        <div className="num-item">9</div>
        <div className="num-item orange">x</div>
      </div>
      <div className="numerals">
        <div className="num-item">4</div>
        <div className="num-item">5</div>
        <div className="num-item">6</div>
        <div className="num-item orange">-</div>
      </div>
      <div className="numerals">
        <div className="num-item">1</div>
        <div className="num-item">2</div>
        <div className="num-item">3</div>
        <div className="num-item orange">+</div>
      </div>
      <div className="numerals">
        <div className="num-item bottom-num">0</div>
        <div className="num-item">.</div>
        <div className="num-item orange">=</div>
      </div>
    </div>
  );
}

export default Calculator;
