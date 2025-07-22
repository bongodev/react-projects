import { useState } from "react";

export default function GoalInput({ onGoalChange }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setInput(value);
    if (!isNaN(value) && value !== "") {
      onGoalChange(Number(value));
    }
  }

    return (
      <div className="w-full flex gap-8 justify-around items-center">
        {/* <h3 className="text-bold text-2xl">Goal </h3> */}
        <input
          type="number"
          value={input}
          placeholder="Enter your goal"
          className="max-w-xs px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          onChange={handleChange}
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              e.target.blur();
            }
          }}
        />
      </div>
    );
  };

