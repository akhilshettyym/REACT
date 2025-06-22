import './App.css';
import { useState } from 'react';

function App() {
  // const color = "Red"
  const [ color, setColor] = useState('Red')
  const changeMe = () => {
    setColor('Black')
  }

  return (
    <>
    <h1>I am React useEffect in {color}</h1>
    <button onClick={changeMe}>Black</button>
    </>
  );
}

export default App;
