import React from "react";
import ReactDOM from "react-dom";

import List from "./components/List";
import Counter from "./components/Counter";
import NumberProvider from "./components/NumberProvider";

import NumberContext from "./contexts/NumberContext";

const data = ["A", "B", "C"];

// Provider Consumer

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <NumberContext.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
            </div>
          )}
        </NumberContext.Consumer>

        <Counter>{({ count }) => <h1>{count}</h1>}</Counter>
      </div>
    </NumberProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
