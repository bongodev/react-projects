import Header from "./components/Header";
import Display from "./components/Display";
import CounterButtons from "./components/CounterButtons";

import "./App.css";

function App() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
      <Header />
      <Display />
      <div class="mt-6">
        <CounterButtons />
      </div>
    </div>
  );
}

export default App;
