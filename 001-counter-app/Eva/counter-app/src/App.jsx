import { useState } from "react";
import Header from "./Components/header";
import CounterButtons from "./Components/CounterButton";

import Display from "./Components/Display";

import './App.css'

 function App () {
    
  const [count , setCount ] = useState(0);

  const increase = () =>{
    if(count >= 10) return;
    else // Prevent 
    setCount(count+1);
  };

  const decrease =() =>
  {
    if(count <= 0) return;
    else 
    setCount(count-1);
  };

  return (
    <div className="bg-blue-100 shadow-lg rounded-lg p-8 text-center" > 
        < Header />
        <Display currentCount ={count} />
        <div className ="mt-6">
          < CounterButtons increment ={increase} decrement={decrease} />
        </div>
      
    </div>
  );

 }

 export default App ;
