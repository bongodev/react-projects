
export default function CounterButtons({increment, decrement}) {
  return (
    <div className='flex space-x-10 text-white text-2xl'>
        <button onClick={() => increment()} className='cursor-pointer px-3 py-1 ring-2 ring-blue-500/50 bg-blue-600 rounded-md hover:bg-slate-400'>+</button>
        <button onClick={() => decrement()} className='cursor-pointer px-3 py-1 ring-2 ring-blue-500/50 bg-red-600 rounded-md hover:bg-slate-400'>-</button>
      </div>
  )
}
