// React Components Example with Comments and Snippets

// --- Function Component ---
// A simple function component named Car
// It returns an <h2> element

function Car() {
  return (
  <h2>Hi, I am a Car!</h2>
  );
}

// Usage: In your React app, you can render <Car /> inside the root element
// Example:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

// ------------------------------------------------------

// --- Class Component ---
// A React class component also named Car
// It must extend React.Component and implement a render() method

class ClassCar extends React.Component {
  render() {
    return <h2>Hi, I am a Class Car!</h2>;
  }
}

// Usage:
const classCarRoot = ReactDOM.createRoot(document.getElementById('classRoot'));
classCarRoot.render(<ClassCar />);

// ------------------------------------------------------

// --- Props (Properties) ---
// Components can accept props, similar to function arguments

function CarWithProps(props) {
  // Access prop 'color' and display it inside JSX
  return <h2>I am a {props.color} Car!</h2>;
}

// Usage:
const propsRoot = ReactDOM.createRoot(document.getElementById('propsRoot'));
propsRoot.render(<CarWithProps color="red" />);

// ------------------------------------------------------

// --- Components inside components ---
// One component can include other components

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      {/* Embedded component */}
      <Car />
    </>
  );
}

// Usage:
const garageRoot = ReactDOM.createRoot(document.getElementById('garageRoot'));
garageRoot.render(<Garage />);

// ------------------------------------------------------

// --- Components in separate files ---
// In practice, you'd create separate files like Car.js, then import.
// Example for "Car.js":

// --- Car.js ---
// export default function Car() {
//   return <h2>Hi, I am a Car from separate file!</h2>;
// }

// And in main file:
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js'; // importing from Car.js file

const importedCarRoot = ReactDOM.createRoot(document.getElementById('importedCarRoot'));
importedCarRoot.render(<Car />);

// --- 
// Note: To run this code, ensure your HTML has elements with IDs: 'root', 'classRoot', 'propsRoot', 'garageRoot', 'importedCarRoot'
// Example HTML snippet:
/// <div id="root"></div>
/// <div id="classRoot"></div>
/// <div id="propsRoot"></div>
/// <div id="garageRoot"></div>
/// <div id="importedCarRoot"></div>

// End of combined example code