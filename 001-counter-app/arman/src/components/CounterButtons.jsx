
export default function CounterButtons({incrementSubhanallah, incrementAlhamdulillah, incrementAllahuAkbar, startAgain}) {
  return (
    <div className='flex flex-col space-y-4'>
      <div className="flex space-x-10 text-white text-2xl">
        {/* Subhanallah */}
        <button onClick={() => incrementSubhanallah()} className='cursor-pointer px-3 py-1 ring-2 ring-blue-500/50 bg-emerald-500 hover:bg-emerald-600 rounded-md'>Subhanallah</button>

        {/* Alhamdulillah */}
        <button onClick={() => incrementAlhamdulillah()} className='cursor-pointer px-3 py-1 ring-2 ring-blue-500/50 bg-amber-500 hover:bg-amber-600 rounded-md'>Alhamdulillah</button>

        {/* Allahu Akbar */}
        <button onClick={() => incrementAllahuAkbar()} className='cursor-pointer px-3 py-1 ring-2 ring-blue-500/50 bg-indigo-500 hover:bg-indigo-600 rounded-md'>Allahu Akbar</button>
      </div>


        {/* start again */}
        <button onClick={() => startAgain()} className='cursor-pointer px-3 py-1 ring-2 ring-blue-500/50 bg-lime-500 hover:bg-indigo-600 rounded-md'>Start Again</button>

      </div>
  )
}
