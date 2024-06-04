export function ProductList() {
  return (
    <div id="product-list" className="grid grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <img
          src="https://via.placeholder.com/150"
          alt="Wireless Mouse"
          className="w-full mb-4"
        />
        <h3 className="text-lg font-semibold">Wireless Mouse</h3>
        <p className="text-gray-700">$50</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <img
          src="https://via.placeholder.com/150"
          alt="Mechanical Keyboard"
          className="w-full mb-4"
        />
        <h3 className="text-lg font-semibold">Mechanical Keyboard</h3>
        <p className="text-gray-700">$100</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Add to Cart
        </button>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <img
          src="https://via.placeholder.com/150"
          alt="All-in-One Printer"
          className="w-full mb-4"
        />
        <h3 className="text-lg font-semibold">All-in-One Printer</h3>
        <p className="text-gray-700">$150</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
