import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

// A resource-intensive function that we'll cache using useMemo
const expensiveCalculation = (num) => {
  console.log("Calculating..."); // To observe when this runs
  for (let i = 0; i < 1000000000; i++) {
    num += 1; // Simulate a heavy calculation
  }
  return num;
};

const App = () => {
  const [count, setCount] = useState(0); // State to track count
  const [todos, setTodos] = useState([]); // State for list of todos

  // Wrap the expensive calculation with useMemo
  // It only recalculates when 'count' changes
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  // Function to increment the count
  const increment = () => {
    setCount((c) => c + 1);
  };

  // Function to add a new todo
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      {/* Todo list */}
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <hr />

      {/* Counter section */}
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>

        {/* Display the result of the expensive calculation */}
        <h2>Expensive Calculation</h2>
        <p>{calculation}</p>
      </div>
    </div>
  );
};

// Render the App component into the DOM element with id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);