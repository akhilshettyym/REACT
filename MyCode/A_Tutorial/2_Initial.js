// Step 1: Import React and ReactDOM libraries
import ReactDOM from 'react-dom/client';

// Step 2: Create a simple React component
function Welcome() {
  // This component returns a JSX element
  return <h1>Welcome to React!</h1>;
}

// Step 3: Get a DOM element to mount our React app
const container = document.getElementById('root');

// Step 4: Create a React root and render the component
const root = ReactDOM.createRoot(container);
root.render(<Welcome />);

// Explanation of key points:
/*
1. To use React in production, you need Node.js and npm installed.
2. You can write React code directly in HTML using CDN links and Babel for JSX syntax, suitable for testing.
3. For production, set up a full React environment via create-react-app to enable hot reloading and easier development.
4. Once the environment is set, modify src/App.js (or your main component) to change the UI.
5. Changes are live-reloaded immediately after saving, without refreshing the page.
6. To start a React app:
    - Create it with 'npx create-react-app app-name'
    - Navigate to the folder: cd app-name
    - Launch it with: npm start
7. You can modify the main component to customize your app.
*/
// Example: simplest React implementation in an HTML file using CDN and Babel:
`
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="mydiv"></div>
  <script type="text/babel">
    function Hello() {
      return <h1>Hello World!</h1>;
    }

    const container = document.getElementById('mydiv');
    const root = ReactDOM.createRoot(container);
    root.render(<Hello />);
  </script>
</body>
</html>
`
// This method is good for quick testing but not suitable for production.