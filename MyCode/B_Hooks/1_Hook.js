// Import React and the useState Hook from the react library
import React, { useState } from "react";
// Import ReactDOM to render the component
import ReactDOM from "react-dom/client";

// Define a functional component called FavoriteColor
function FavoriteColor() {
  // useState Hook creates a state variable called 'color' with initial value "red"
  // 'setColor' is the function to update the 'color' state
  const [color, setColor] = useState("red");

  // Return JSX, which renders the UI
  return (
    <>
      {/* Display the favorite color dynamically based on state */}
      <h1>My favorite color is {color}!</h1>

      {/* Button to change color to blue */}
      <button
        type="button"
        onClick={() => setColor("blue")}>Blue</button>

      {/* Button to change color to red */}
      <button
        type="button"
        onClick={() => setColor("red")}>Red</button>

      {/* Button to change color to pink */}
      <button
        type="button"
        onClick={() => setColor("pink")}>Pink</button>

      {/* Button to change color to green */}
      <button
        type="button"
        onClick={() => setColor("green")}>Green</button>
    </>
  );
}

// Get the root DOM element where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the FavoriteColor component into the root element
root.render(<FavoriteColor />);