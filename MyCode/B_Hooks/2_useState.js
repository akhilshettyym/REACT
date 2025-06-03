// Import the useState Hook from React
import { useState } from "react";
// Import ReactDOM for rendering the component
import ReactDOM from "react-dom/client";

// Define a functional component
function FavoriteColor() {
  // Initialize state variable 'color' with initial value "" (empty string)
  const [color, setColor] = useState(""); // Destructuring: 'color' is current state, 'setColor' updates it

  // Return JSX to render UI
  return (
    <>
      {/* Display the current favorite color */}
      <h1>My favorite color is {color}!</h1>
      
      {/* Button to change color to blue */}
      <button
        type="button"
        onClick={() => setColor("blue")} // Update 'color' state to "blue" on click
      >
        Blue
      </button>
      
      {/* Button to change color to red */}
      <button
        type="button"
        onClick={() => setColor("red")} // Update 'color' state to "red" on click
      >
        Red
      </button>
    </>
  );
}

// Render the component into the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);