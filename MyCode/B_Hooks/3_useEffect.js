import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Example 1: Basic useEffect with no dependency - runs after every render
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render (including initial)
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  
  return <h1>I've rendered {count} times!</h1>;
}
// Renders into DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

// Fix: To run only once (initial render), add empty dependency array
function TimerOnce() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs only once on mount
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // Dependency array empty

  return <h1>I've rendered {count} times!</h1>;
}
root.render(<TimerOnce />);

// Example 2: Effect dependent on a variable (count)
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    // Runs when 'count' changes
    setCalculation(() => count * 2);
  }, [count]); // Dependency array with 'count'

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
root.render(<Counter />);

// Example 3: Cleanup with return function to prevent memory leaks
function TimerWithCleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set a timer
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // Cleanup function to clear timeout
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  return <h1>I've rendered {count} times!</h1>;
}
root.render(<TimerWithCleanup />);