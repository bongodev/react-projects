import { FilterTab } from './components/FilterTab';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-semibold mb-4">Simple E-commerce</h1>
      <FilterTab />
      <button
        id="clear-filters-btn"
        className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
      >
        Clear Filters
      </button>
      <ProductList />
    </div>
  );
}

export default App;
