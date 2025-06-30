import { useState } from 'react';
import Navbar from './components/Navbar';
import UseState from './hooks/useState';
import UseEffect from './hooks/useEffect';
import { counterContext } from './hooks/useContext'

function App() {
  const [count, setCount] = useState(0);

  const changeMe = () => {
    setCount(count + 1);
  }
  return (
    <>
      <counterContext.Provider value={count}>
        <Navbar />
        <UseState />
        <UseEffect />
        <div>The count is {count}</div>
        <button type="button" class="btn btn-outline-danger" onClick={changeMe}>Update Count</button>
      </counterContext.Provider>
    </>
  );
}

export default App;