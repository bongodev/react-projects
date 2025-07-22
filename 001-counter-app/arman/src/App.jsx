
import { useState } from 'react';
import './App.css'
import CounterButtons from './components/CounterButtons'
import Display from './components/Display'
import Header from './components/Header'
// import TasbihList from './components/TasbihList';

function App() {

  const [Subhanallah, setSubhanallah] = useState(0);
  const [Alhamdulillah, setAlhamdulillah] = useState(0);
  const [AllahuAkbar, setAllahuAkbar] = useState(0);

  const increaseSubhanallah = () => {
    // if(Subhanallah === 10) {
    //   alert(`not more than ${count}`);
    //   return;
    // }
    setSubhanallah((count) => count+1);
  }
  const increaseAlhamdulillah = () => {
    // if(Alhamdulillah === 0) {
    //   alert(`not less than ${count}`);
    //   return;
    // }
    setAlhamdulillah((count) => count-1);
  }
  const increaseAllahuAkbar = () => {
    // if(AllahuAkbar === 33) {
    //   alert(`not more than ${count}`);
    //   return;
    // }
    setAllahuAkbar((count) => count-1);
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center justify-center space-y-4'>
      <Header/>
      <Display currentCountSubhanallah = {Subhanallah} currentCountAlhamdulillah = {Alhamdulillah} currentCountAllahuAkbar = {AllahuAkbar}/>
      <CounterButtons incrementSubhanallah={increaseSubhanallah} incrementAlhamdulillah={increaseAlhamdulillah}incrementAllahuAkbar={increaseAllahuAkbar}/>
      {/* <TasbihList/> */}
    </div>
  )
}

export default App
