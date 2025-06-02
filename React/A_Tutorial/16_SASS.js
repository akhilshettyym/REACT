// styles.scss

// Define a variable for text color
$myColor: teal;

// Styling for h1
// h1 {
//   color: $myColor;
//   font-size: 2em;
//   margin-bottom: 10px;
// }

// Styling for paragraph
// p {
//   font-family: 'Arial', sans-serif;
//   font-size: 1.2em;
//   color: darkgray;
// }

import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the Sass stylesheet
import './styles.scss';

const App = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Hello with Sass!</h1>
      <p>This paragraph is styled using Sass variables and functions.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*

How to make this work:
Save the Sass code in a file named styles.scss in the same directory.
Run npm install sass once in your project directory.
Import './styles.scss' in your React entry point (index.js or App.js).
Start your React app with npm start.

*/