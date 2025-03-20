import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
<>
<div className='fixed top-0 left-0 w-screen h-screen duration-200'
    style={{backgroundColor: color}}
>
  text
</div>


    </>
  )
}

export default App;