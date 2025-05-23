import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    // console.log("Clicked", Math.random());
    
    counter = counter + 1
    setCounter(counter)
    // setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0){
      counter = counter - 1
    setCounter(counter)
    }
  }

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
