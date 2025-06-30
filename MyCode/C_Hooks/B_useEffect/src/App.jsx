import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    alert("Welcome to React useState Hook Example");
  }, []);

  return (
    <>
      <h1>I am React useEffect</h1>
    </>
  );
}

export default App;