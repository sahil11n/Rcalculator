
import { useState } from 'react';
import './App.css';


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '+', '-', '.', '*'];

//Function for inserting values , if condition so that operators cannot be used multiple times and aslo we cannot use a operator without a number,also defines evaluation
  const updatecalc = value => {
  
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if(!ops.includes(value))
    {
      // eslint-disable-next-line
      setResult(eval(calc + value).toString());
    }

  }

  // Clear function
  const clear = () =>{
    setCalc("");
    setResult("");
  }
// Function for calculating final value
  const equalto =() =>
  {
    // eslint-disable-next-line
    setCalc(eval(calc).toString());
   } 

  //For inserting all the digits
  const alldigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updatecalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          {result ? <span>({result})</span> : ""}  
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updatecalc("/")}>/</button>
          <button onClick={() => updatecalc("+")}>+</button>
          <button onClick={() => updatecalc("-")}>-</button>
          <button onClick={() => updatecalc("*")}>*</button>
          <button onClick={clear} >Clr</button>

        </div>
        <div className="digits">
          {alldigits()}
          <button onClick={() => updatecalc("0")}>0</button>
          <button onClick={() => updatecalc(".")}>.</button>
          <button onClick={equalto}>=</button>

        </div>

      </div>
    </div>
  );
}

export default App;
