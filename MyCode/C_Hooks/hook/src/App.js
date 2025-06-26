import './App.css';
import { useState } from 'react';

function App() {
  const color = "Red";

  const [black, setBlack] = useState(color);
  const [blue, setBlue] = useState(color);
  const [purple, setPurple] = useState(color);

  const [count, setCount] = useState(0);

  const changeMeBlack = () => {
    setBlack('Black');
  };

  const changeMeBlue = () => {
    setBlue('Blue');
  };

  const changeMePurple = () => {
    setPurple('Purple');
  };

  const changeMeWhite = () => {
    setPurple('White');
  };

  const changeMe = () => {
    setCount = setCount + 1;
  }

  return (
    <>
      <h1>I am React useState in {color}</h1>
      <p>Black Color: {black}</p>
      <p>Blue Color: {blue}</p>
      <p>Purple Color: {purple}</p>
      <p>White Color: {white}</p>
      <button onClick={changeMeBlack}>Black</button>
      <button onClick={changeMeBlue}>Blue</button>
      <button onClick={changeMePurple}>Purple</button>
      <button onClick={changeMeWhite}>White</button>
      <div>The count is {count}</div>
      <button onClick={changeMe}>Update Count</button>

    </>
  );
}

export default App;