// Define two simple components for goal status
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

// 1. Using if statement inside a component
function GoalIf(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

// 2. Using logical && operator
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && (
        <h2>You have {cars.length} cars in your garage.</h2>
      )}
    </>
  );
}

// 3. Using ternary operator
function GoalTernary(props) {
  const isGoal = props.isGoal;
  return (
    <>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
  );
}

// Rendering examples:

// Example 1: Conditional with if statement
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<GoalIf isGoal={false} />);
// Change to true to see different output
// root1.render(<GoalIf isGoal={true} />);

// Example 2: Conditional rendering with && operator
const cars = ['Ford', 'BMW', 'Audi'];
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Garage cars={cars} />);

// Example 3: Ternary operator
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<GoalTernary isGoal={false} />);
// Change to true for different output
// root3.render(<GoalTernary isGoal={true} />);