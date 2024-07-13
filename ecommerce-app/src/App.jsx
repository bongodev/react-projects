import { CartProvider } from './contexts';

import { LeftPanel } from './components/leftPanel';
import { RightPanel } from './components/rightPanel';

import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="left-panel">
          <LeftPanel />
        </div>
        <div className="right-panel">
          <RightPanel />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
