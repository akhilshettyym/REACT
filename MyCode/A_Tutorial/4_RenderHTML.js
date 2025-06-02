// React rendering example with different target containers and JSX

// Step 1: Import React and ReactDOM
// Note: In a real React environment, you'd use import statements, but for CDN use, 
// include React via script tags in HTML.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 2: Get DOM elements where React will render components
const containerRoot = document.getElementById('root');    // Standard container
const containerSandy = document.getElementById('sandy');  // Custom container

// Step 3: Create React roots for each container
// This is React 18 syntax, enabling concurrent features
const root1 = ReactDOM.createRoot(containerRoot);
const root2 = ReactDOM.createRoot(containerSandy);

// Step 4: Render simple JSX into #root
root1.render(<p>Hello from the #root element!</p>);

// Step 5: Render into custom element (i.e., header with id="sandy")
root2.render(<p>Hello inside the header!</p>);

// Step 6: Render a JSX table into the #root element (overwrites previous)
const myTable = (
  <table border="1" cellPadding="5" style={{ marginTop: '20px' }}>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </tbody>
  </table>
);

// Overwrite previous content with the table
root1.render(myTable);

/*
Note:
- Replace the import statements with script tags if you're including React via CDN in an HTML file.
- Example usage in HTML:

<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="path-to-your-js-file.js" type="module"></script>

- Make sure your HTML has:
  <div id="root"></div>
  <header id="sandy"></header>
*/