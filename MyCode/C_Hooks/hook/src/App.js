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

  const changeMe = () => {
    setCount(count+1);
  }

  return (
    <>
      <h1>I am React useState in {color}</h1>
      <p>Black Color: {black}</p>
      <p>Blue Color: {blue}</p>
      <p>Purple Color: {purple}</p>

      <button onClick={changeMeBlack}>Black</button>
      <button onClick={changeMeBlue}>Blue</button>
      <button onClick={changeMePurple}>Purple</button>

      <div>The count is {count}</div>
      {/* <button onClick={()=>{setCount(count+1)}}>Update Count</button> */}
      <button onClick={changeMe}>Update Count</button>

    </>
  );
}

export default App;