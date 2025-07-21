
import './App.css'
import CounterButtons from './components/CounterButtons'
import Display from './components/Display'
import Header from './components/Header'

function App() {

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center justify-center space-y-4'>
      <Header/>
      <Display/>
      <div>
        <CounterButtons/>
      </div>
    </div>
  )
}

export default App
