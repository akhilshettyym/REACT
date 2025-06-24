// React JSX Example Script

// Example 1: JSX syntax for creating an element
const myElementJSX = <h1>I Love JSX!</h1>;

// Render the JSX element into a DOM container with id 'root'
const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(myElementJSX);

// Example 2: Creating React elements without JSX (using createElement)
const myElementNoJSX = React.createElement('h1', {}, 'I do not use JSX!');

// Render the non-JSX element into the same container
const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(myElementNoJSX);

// Example 3: Expressions inside JSX
const number = 5 + 5; // JavaScript expression
const myExpressionElement = <h1>React is {number} times better with JSX</h1>;

// Render expression example
const root3 = ReactDOM.createRoot(document.getElementById('root'));
root3.render(myExpressionElement);

// Example 4: Writing HTML block over multiple lines inside parentheses
const listElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
    <li>Apple</li>
    <li>Mango</li>
  </ul>
);

// Render the list
const root4 = ReactDOM.createRoot(document.getElementById('root'));
root4.render(listElement);

// Example 5: Multiple elements wrapped in a fragment (<> </>)
const fragmentExample = (
  <>
    <p>I am a paragraph.</p>
    <p>I am another paragraph.</p>
    <p>I am another other paragraph.</p>
  </>
);

// Render the fragment
const root5 = ReactDOM.createRoot(document.getElementById('root'));
root5.render(fragmentExample);

// Example 6: Properly closing elements, such as input with self-closing tag
const inputElement = <input type="text" />;

// Render the input element
const root6 = ReactDOM.createRoot(document.getElementById('root'));
root6.render(inputElement);

// Example 7: Using className instead of class
const classNameExample = <h1 className="myclass">Hello World</h1>;

// Render the element with className
const root7 = ReactDOM.createRoot(document.getElementById('root'));
root7.render(classNameExample);

// Example 8: Conditional rendering with ternary operator
const x = 7;
const conditionalElement = <h1>{x < 10 ? 'Hello' : 'Goodbye'}</h1>;

// Render the conditional element
const root8 = ReactDOM.createRoot(document.getElementById('root'));
root8.render(conditionalElement);

// Note:
// - Only one root.render() call per root, so to display multiple things, you need separate containers or update content accordingly.
// - Make sure your HTML has a container with id 'root' or other IDs per your code like 'sandy' etc.