import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [N, inputN] = useState("");

  function input(event) {
    inputN(N + event.target.value);
  }

  function del() {
    inputN(N.slice(0, -1));
  }

  function clear() {
    inputN("");
  }

  function result() {
    inputN(eval(N));
  }

  return (
    <div className="container">
      <div id="display"><div className="valueN">{N}</div></div>
      <div className="calculator">
        <div className="row">
          <button className="btn-number" value={1} onClick={input}>
            1
          </button>
          <button className="btn-number" value={2} onClick={input}>
            2
          </button>
          <button className="btn-number" value={3} onClick={input}>
            3
          </button>
        </div>
        <div className="row">
          <button className="btn-number" value={4} onClick={input}>
            4
          </button>
          <button className="btn-number" value={5} onClick={input}>
            5
          </button>
          <button className="btn-number" value={6} onClick={input}>
            6
          </button>
        </div>
        <div className="row">
          <button className="btn-number" value={7} onClick={input}>
            7
          </button>
          <button className="btn-number" value={8} onClick={input}>
            8
          </button>
          <button className="btn-number" value={9} onClick={input}>
            9
          </button>
        </div>
        <div className="row">
          <button className="btn-number" value={0} onClick={input}>
            0
          </button>
          <button className="btn-operator" value="+" onClick={input}>
            +
          </button>
          <button className="btn-operator" value="-" onClick={input}>
            -
          </button>
        </div>
        <div className="row">
          <button className="btn-operator" value="*" onClick={input}>
            *
          </button>
          <button className="btn-operator" value="/" onClick={input}>
            /
          </button>
          <button id="clear" onClick={clear}>
            clear
          </button>
        </div>
        <div className="row">
          <button onClick={del}>del</button>
          <button className="btn-equal" onClick={result}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
