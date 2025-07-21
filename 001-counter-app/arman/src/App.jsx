
import { useState } from 'react';
import './App.css'
import CounterButtons from './components/CounterButtons'
import Display from './components/Display'
import Header from './components/Header'

function App() {

  const [count, setCount] = useState(0);
  const increase = () => {
    if(count === 10) {
      alert(`not more than ${count}`);
      return;
    }
    setCount((count) => count+1);
    console.log(`before ${count}`);
  }
  const decrease = () => {
    if(count === 0) {
      alert(`not less than ${count}`);
      return;
    }
    setCount((count) => count-1);
    console.log(count);
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center justify-center space-y-4'>
      <Header/>
      <Display currentCount = {count}/>
      <div>
        <CounterButtons increment={increase} decrement={decrease}/>
      </div>
    </div>
  )
}

export default App
