import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handelAddButton = () => {
    if (counter >= 10) {
      alert("Already reached the maximum limit");
      return;
    }
    setCounter(counter + 1);
  };

  const handleSubButton = () => {
    if (counter <= 0) {
      alert("Already reached the minimum limit");
      return;
    }
    setCounter(counter - 1);
  };

  const handleResetButton = () => {
    setCounter(0);
  };

  return (
    <div className="bg-white p-6 rounded-md">
      <div className="bg-linear-to-r from-[#94BBE9] via-[#EEAECA] to-[#94BBE9] flex items-center justify-center h-[300px] w-[300px]">
        <span className="text-4xl">{counter}</span>
      </div>
      <div className="mt-4 flex justify-evenly">
        <button
          onClick={handelAddButton}
          className="text-4xl w-[50px] h-[50px] bg-green-200 hover:bg-green-500 px-4 py-3 rounded-md flex items-center justify-center cursor-pointer"
        >
          +
        </button>
        <button
          onClick={handleSubButton}
          className="text-4xl w-[50px] h-[50px] bg-red-200 hover:bg-red-500 px-4 py-3 rounded-md flex items-center justify-center cursor-pointer"
        >
          -
        </button>
        <button
          onClick={handleResetButton}
          className="text-2xl bg-yellow-200 hover:bg-yellow-400 px-4 py-2 rounded-md cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
