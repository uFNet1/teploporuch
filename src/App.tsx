import { useState } from 'react'
import teploLogo from '/logo.png'
import './App.css'
import ItemCard from './components/ItemCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img className='logo-header' height='80px' width='auto' src={teploLogo} alt="" />
        <hr className='header-bottom'></hr>
      </header>

      <div className='cards-container'>
        <ItemCard name="Ванільний гоголь-моголь"/>
        <ItemCard name="Позолочений мандарин"/>
        <ItemCard name="Лаванда"/>
        <ItemCard name="Сантал і кокос"/>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
