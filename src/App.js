import './App.css';
import { useState } from "react"

const App = () => {
  const [number, setNumber] = useState(0)
  
  const handleAdd = () => {
    setNumber(number + 1)
  }

  const handleSubtract = () => {
    setNumber(number - 1)
  }

  return (
    <div className="main">
      <button className="button" onClick={handleAdd}>+</button>
      <Number number={number} />
      <button className="button" onClick={handleSubtract}>-</button>
    </div>
  );
}

const Number = (props) => {
  return (
    <div className="number">
      <p>{props.number}</p>
    </div>
  )
}

export default App;
