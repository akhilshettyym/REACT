// File: App.js (or index.js if running in a plain setup)

// React core imports
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  // State for input value
  const [inputValue, setInputValue] = useState("");

  // 1. useRef for render count (does NOT trigger re-render)
  const renderCount = useRef(1); // Initialized with 1

  useEffect(() => {
    renderCount.current += 1; // Updates on every render but doesn't cause re-render
  });

  // 2. useRef for DOM access (to focus input)
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Focus the input element directly via DOM
    inputRef.current.focus();
  };

  // 3. useRef to track previous state
  const prevInputValue = useRef(""); // Initialize empty string

  useEffect(() => {
    // Store the current inputValue after each change
    prevInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React useRef Hook Examples</h1>

      {/* Controlled Input with useState */}
      <label>
        Enter something:{" "}
        <input
          ref={inputRef} // Attach useRef to this input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: "5px", marginRight: "10px" }}
        />
      </label>

      {/* Button to demonstrate DOM access via ref */}
      <button onClick={handleFocus} style={{ padding: "5px 10px" }}>
        Focus Input
      </button>

      {/* Rendered values */}
      <div style={{ marginTop: "20px" }}>
        <h3>Current Input Value: {inputValue}</h3>
        <h3>Previous Input Value: {prevInputValue.current}</h3>
        <h3>Render Count: {renderCount.current}</h3>
      </div>
    </div>
  );
}

// Render the App to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);