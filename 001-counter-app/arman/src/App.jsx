import { useState } from "react";
import "./App.css";
import CounterButtons from "./components/CounterButtons";
import Display from "./components/Display";
import Header from "./components/Header";
import GoalInput from "./components/GoalInput";

function App() {
  const [Subhanallah, setSubhanallah] = useState(0);
  const [Alhamdulillah, setAlhamdulillah] = useState(0);
  const [AllahuAkbar, setAllahuAkbar] = useState(0);
  const [goalCount, setGoalCount] = useState(10);
  const [total, setTotal] = useState(0);
  const result = document.getElementById("result");
  const [resetGoalInput, setResetGoalInput] = useState(false);

  const increaseSubhanallah = () => {
    if (total >= goalCount) {
      alert("start again");
      return;
    }
    setSubhanallah((count) => count + 1);
    setTotal((count) => count + 1);
  };
  const increaseAlhamdulillah = () => {
    if (total >= goalCount) {
      alert("start again");
      return;
    }
    setAlhamdulillah((count) => count + 1);
    setTotal((count) => count + 1);
  };
  const increaseAllahuAkbar = () => {
    if (total >= goalCount) {
      alert("start again");
      return;
    }
    setAllahuAkbar((count) => count + 1);
    setTotal((count) => count + 1);
  };
  const startAgainBtn = () => {
    setSubhanallah(0);
    setAlhamdulillah(0);
    setAllahuAkbar(0);
    setGoalCount(10);
    result.innerText = "";
    result.classList = '';
    setTotal(0);
    setResetGoalInput(true);
  };

  if (total === goalCount) {
    result.className =
      "inline-block bg-emerald-200 text-emerald-700 px-3 py-1 rounded-lg shadow-md font-medium ring-2 ring-emerald-300";
    result.innerText = "🎉 Goal Achieved!";
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center justify-center space-y-4">
      <Header />
      {/* <GoalInput/> */}
      <div className="flex flex-col space-y-4">
        <GoalInput onGoalChange={setGoalCount} resetInput={resetGoalInput}/>
        <p className="text-2xl font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-lg shadow-sm inline-block mt-4">
          🎯 Current Goal: {goalCount}
        </p>
      </div>
      {/* Display */}
      <Display
        currentCountSubhanallah={Subhanallah}
        currentCountAlhamdulillah={Alhamdulillah}
        currentCountAllahuAkbar={AllahuAkbar}
      />
      {/* Buttons */}
      <CounterButtons
        incrementSubhanallah={increaseSubhanallah}
        incrementAlhamdulillah={increaseAlhamdulillah}
        incrementAllahuAkbar={increaseAllahuAkbar}
        startAgain={startAgainBtn}
      />

      <div>
        <p className="text-xl font-semibold text-gray-700 flex items-center gap-2 mt-4">
          <span>🧮 Total Count:</span>
          <span className="text-emerald-600 text-2xl font-bold">{total}</span>
        </p>
      </div>
      {/* result */}
      <div id="result"></div>
    </div>
  );
}

export default App;
