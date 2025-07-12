function CounterButtons({ increment, decrement }) {
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={increment}
      >
        +
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={() => decrement()}
      >
        -
      </button>
    </>
  );
}

export default CounterButtons;
