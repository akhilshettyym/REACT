// Todos.js
import React, { memo } from 'react';

// Wrap the Todos component with React.memo to optimize rendering
const Todos = ({ todos }) => {
  console.log("Child component re-rendered");
  return (
    <>
      <h2>My Todos</h2>
      {/* Render the list of todos */}
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </>
  );
};

export default memo(Todos);