import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS Stylesheet (imported globally)
import './App.css'; // Make sure this file exists with some basic styles

// CSS Module (imported locally)
import styles from './MyStyles.module.css';

// Define inline styles as a JavaScript object
const inlineStyle = {
  color: 'white',
  backgroundColor: 'purple',
  padding: '10px',
  fontFamily: 'Sans-Serif',
};

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* 1. Inline Styling */}
      <h1 style={{ color: 'red', backgroundColor: 'lightblue', padding: '10px' }}>
        Inline Style Example
      </h1>
      
      {/* 2. Styles from external CSS stylesheet */}
      <h2 className="header">CSS Stylesheet Example</h2>
      
      {/* 3. CSS Modules */}
      <h3 className={styles.bigblue}>CSS Module Example</h3>
      
      {/* Applying the inline style object */}
      <p style={inlineStyle}>This paragraph uses inline styles defined in a JS object.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*

body {
  background-color: #282c34;
  color: white;
  font-family: Sans-Serif;
}

.header {
  color: green;
  text-decoration: underline;
}

.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}
  
*/