import './App.css';
import { useState } from 'react';

function App() {
  const color = "Red";

  // Initialize states as strings
  const [black, setBlack] = useState(color);
  const [blue, setBlue] = useState(color);

  const changeMeBlack = () => {
    setBlack('Black');
  };

  const changeMeBlue = () => {
    setBlue('Blue');
  };

  return (
    <>
      <h1>I am React useEffect in {color}</h1>
      <p>Black Color: {black}</p>
      <p>Blue Color: {blue}</p>
      <button onClick={changeMeBlack}>Black</button>
      <button onClick={changeMeBlue}>Blue</button>
    </>
  );
}

export default App;
