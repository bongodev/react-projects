import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
