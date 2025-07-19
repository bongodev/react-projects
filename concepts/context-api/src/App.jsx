import { useState } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="flex flex-1">
        <Sidebar theme={theme} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
