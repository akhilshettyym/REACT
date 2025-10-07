import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen duration-200'
        style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button
              onClick={() => setColor('red')}
              className="outline-nonen px-3 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'red' }}>Red</button>

            <button
              onClick={() => setColor('green')}
              className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'green' }}>Green</button>

            <button
              onClick={() => setColor('blue')}
              className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'blue' }}>Blue</button>

            <button
              onClick={() => setColor('black')}
              className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'black' }}>Black</button>

            <button
              onClick={() => setColor('orange')}
              className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'orange' }}>Orange</button>

            <button
              onClick={() => setColor('purple')}
              className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: 'purple' }}>Purple</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App;