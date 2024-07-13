import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => {
    if (count === 0) {
      alert('Count can not be less than zero!');
      return;
    }
    setCount(count - 1);
  };

  const resetCount = () => setCount(0);

  return (
    <div className="App">
      {console.log('rendering the App component.....')}
      <div> Count is: {count}</div>
      <button onClick={increaseCount}> + </button>
      <button onClick={decreaseCount}> - </button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
