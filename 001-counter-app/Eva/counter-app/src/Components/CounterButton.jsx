function CounterButtons ( { increment , decrement })
{
    return (
        <> 
          <button className= "bg-blue-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mr-2" 
          onClick={increment}>+

          </button>

          <button className= "bg-blue-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ml-2" 
          onClick={decrement}>-

          </button>
        </>
    );
}

export default CounterButtons;