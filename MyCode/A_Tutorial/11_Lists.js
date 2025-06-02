// Car component renders a list item for each car
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

// Garage component renders a list of cars
function Garage() {
  // Array of car objects with unique id and brand
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' },
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {/* Map over cars array and assign a unique key to each Car component */}
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

// Render the Garage component into the DOM element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);