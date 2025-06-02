// React Event Handling Example with Comments

// Functional component for a football button
function Football() {
  // Simple event handler that shows an alert
  const shoot = () => {
    alert("Great Shot!");
  };

  // Event handler with argument passing using arrow function
  const shootWithMessage = (message) => {
    alert(message);
  };

  // Event handler accessing the React event object
  const handleClickWithEvent = (message, event) => {
    alert(`Message: ${message}, Event type: ${event.type}`);
  };

  return (
    <div>
      {/* Basic event handler */}
      <button onClick={shoot}>Take the shot!</button>
      
      {/* Passing argument to handler with arrow function */}
      <button onClick={() => shootWithMessage("Goal!")}>Target Score</button>
      
      {/* Accessing event object in handler */}
      <button
        onClick={(event) => handleClickWithEvent("Goal!", event)}
      >
        Shot with event info
      </button>
    </div>
  );
}

// Rendering the Football component inside the element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);