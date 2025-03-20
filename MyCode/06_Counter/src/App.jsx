import { useState } from 'react'
import './App.css'

function App() {

  const  [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    setCounter = ((prevCounter) => prevCounter + 1)
    setCounter = ((prevCounter) => prevCounter + 1)
    setCounter = ((prevCounter) => prevCounter + 1)
    setCounter = ((prevCounter) => prevCounter + 1)
  };

  return (
    <>
      <h1>MyCode</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick = {addValue} >Add Value</button><br/><br/>
      
      <button onClick = {removeValue} >Remove Value {counter}</button>

      <p>footer check : {counter}</p>
    </>
  )
}

export default App;