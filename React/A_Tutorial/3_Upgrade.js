// Step 1: Install React 18 and ReactDOM 18
// Run this command in your project folder
// npm install react@latest react-dom@latest

// Step 2: Use the new React 18 root API in your code

// Old way (React 17 and earlier):
import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// New way (React 18):
import ReactDOM from 'react-dom/client';
// Create a root using createRoot to enable concurrent features
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render your main component
root.render(<App />);

// Explanation:
`
/* 
In React 17 and earlier:
  - We used ReactDOM.render() to mount the React app.

In React 18:
  - We import ReactDOM from 'react-dom/client' which introduces createRoot.
  - createRoot enables React 18's new concurrent rendering features.
  - We create a root object with ReactDOM.createRoot(), then call root.render() to display the app.
*/
`