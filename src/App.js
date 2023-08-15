import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator>
        <div className="zero-div"><div className="num-item  top-num">0</div></div>
      </Calculator>
    </div>
  );
}
export default App;
