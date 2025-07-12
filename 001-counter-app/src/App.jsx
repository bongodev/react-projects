import { useState } from "react";

import Header from "./components/Header";
import Display from "./components/Display";
import CounterButtons from "./components/CounterButtons";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
      <Header />
      <Display currentCount={count} />
      <div className="mt-6">
        <CounterButtons increment={increase} decrement={decrease} />
      </div>
    </div>
  );
}

export default App;
