
import { useState } from 'react';
import './App.css'
import CounterButtons from './components/CounterButtons'
import Display from './components/Display'
import Header from './components/Header'
import GoalInput from './components/GoalInput';

function App() {

  const [Subhanallah, setSubhanallah] = useState(0);
  const [Alhamdulillah, setAlhamdulillah] = useState(0);
  const [AllahuAkbar, setAllahuAkbar] = useState(0);
  const [goalCount, setGoalCount] = useState(10);
  const [total, setTotal] = useState(0);
  const result = document.getElementById('result');


  const increaseSubhanallah = () => {
    if(total >= goalCount) {
      alert('start again');
      return;
    }
    setSubhanallah((count) => count+1);
    setTotal((count) => count+1);
  }
  const increaseAlhamdulillah = () => {
    if(total >= goalCount) {
      alert('start again');
      return;
    }
    setAlhamdulillah((count) => count+1);
    setTotal((count) => count+1);
  }
  const increaseAllahuAkbar = () => {
    if(total >= goalCount) {
      alert('start again');
      return;
    }
    setAllahuAkbar((count) => count+1);
    setTotal((count) => count+1);
  }
  const startAgainBtn = () => {
    setSubhanallah(0);
    setAlhamdulillah(0);
    setAllahuAkbar(0);
    result.innerText = '';
    setTotal(0);
  }
  // console.log(total);
  if(total === goalCount) {
    result.innerText = 'Goal Achieved!';
    // startAgainBtn();
  }
  

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center justify-center space-y-4'>
      <Header/>
      {/* <GoalInput/> */}
      <div className='flex flex-col space-y-4'>
        <GoalInput onGoalChange= {setGoalCount}/>
        <p className='text-2xl font-semibold text-gray-800 bg-gray-300 rounded-md py-2'>Current Goal : {goalCount}</p>
      </div>
      {/* Display */}
      <Display currentCountSubhanallah = {Subhanallah} currentCountAlhamdulillah = {Alhamdulillah} currentCountAllahuAkbar = {AllahuAkbar}/>
      {/* Buttons */}
      <CounterButtons incrementSubhanallah={increaseSubhanallah} incrementAlhamdulillah={increaseAlhamdulillah}incrementAllahuAkbar={increaseAllahuAkbar} startAgain={startAgainBtn}/>
      <div><h1>{`Total = ${total}`}</h1></div>
      <div id='result'></div>
    </div>
  )
}

export default App
