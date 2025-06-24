// React Props Examples with Comments

// --- Simple component receiving a string prop ---
function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

// Usage: Passing a string directly as a prop
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<Car brand="Ford" />);
// Renders: I am a Ford!

// --- Passing a variable as a prop ---
function Garage() {
  const carName = "Tesla"; // Variable to pass as prop
  
  return (
    <>
      <h1>Who's in the garage?</h1>
      <Car brand={carName} /> {/* Passing variable in curly braces */}
    </>
  );
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Garage />);
// Renders: I am a Tesla!

// --- Passing an object as a prop ---
function CarDetails(props) {
  // Access nested object properties
  return <h2>This {props.carInfo.model} is a {props.carInfo.type}.</h2>;
}

function GarageWithObject() {
  const carInfo = {
    model: "Mustang",
    type: "Convertible"
  };
  
  return (
    <>
      <h1>Car info in object</h1>
      {/* Passing object as a prop */}
      <CarDetails carInfo={carInfo} />
    </>
  );
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<GarageWithObject />);
// Renders: This Mustang is a Convertible.

// Note: 
// - Ensure your HTML has containers with IDs: 'root1', 'root2', 'root3' for each example.
// - Props are like arguments to components and are passed via HTML-like attributes.
// - Inside the component, access props via the props object.