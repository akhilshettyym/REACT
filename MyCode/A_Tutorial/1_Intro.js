import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      {/* What is React? */}
      <h1>React is a front-end JavaScript library.</h1>
      
      {/* Developed by Facebook engineer Jordan Walke */}
      <p>React was developed by Facebook Software Engineer Jordan Walke.</p>
      
      {/* Also called React.js or ReactJS */}
      <p>React is also known as React.js or ReactJS.</p>
      
      {/* React's main purpose */}
      <p>React is a tool for building UI components.</p>
      
      {/* How React works - Virtual DOM concept */}
      <h2>How does React Work?</h2>
      <p>
        React creates a <strong>VIRTUAL DOM</strong> in memory. Instead of manipulating the browser's DOM directly,
        React does all necessary updates in the virtual DOM first.
      </p>
      <p>
        Then, React compares the virtual DOM with the actual DOM and only updates the parts that have changed,
        making rendering faster and more efficient.
      </p>
      
      {/* React updates only what's needed */}
      <p>React finds out what changes have been made and updates only what is necessary.</p>
      
      {/* React.js History */}
      <h2>React.js History</h2>
      <p>
        The latest version (as of December 2024) is 19.0.0.
        React was first released publicly in July 2013 (version 0.3.0).
        It was first used in Facebook's Newsfeed in 2011.
        React was created by Jordan Walke at Facebook.
      </p>
    </div>
  );
}

// Render the App component into the root div in HTML
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);