import './App.css';
import { useState } from 'react';

function App() {
  const color = "Red"
  const [ black, setBlack] = useState({color})
  const [ blue, setBlue] = useState({color})
  
  const changeMeBlack = () => {
    setBlack('Black')
  }

  const changeMeBlue = () => {
    setBlue('Blue')
  }

  return (
    <>
    <h1>I am React useEffect in {}</h1>
    <button onClick={changeMeBlack}>Black</button>
    <button onClick={changeMeBlue}>Blue</button>
    </>
  );
}

export default App;
