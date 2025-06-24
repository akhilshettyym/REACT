import React, { useState, useCallback, memo } from "react";
import ReactDOM from "react-dom/client";

const Todos = memo(({ todos, addTodo }) => {
  console.log("Todos component rendering");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      {/* Button to add a new todo */}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});

const App = () => {
  const [count, setCount] = useState(0); // Count state
  const [todos, setTodos] = useState([]); // Todos list state

  // Function to increment count
  const increment = () => {
    setCount((c) => c + 1);
  };

  // Memoized addTodo function to prevent re-creation on each render
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]); // Dependency array - recreates only when `todos` change

  return (
    <div>
      {/* Render the Todos component with props */}
      <Todos todos={todos} addTodo={addTodo} />

      {/* Button to increment counter */}
      <hr />
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

// Render the App into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);