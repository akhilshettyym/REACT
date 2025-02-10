import './App.css';

let name = "Akhil";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>contact</li>
      <li>Services</li>
    </nav>
    <div className = "container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci nihil debitis accusantium nobis, iusto recusandae est voluptatem quo eaque impedit deleniti labore dicta voluptate! Quas, officiis necessitatibus tenetur dicta impedit minima quisquam quibusdam.</p>
    </div>
  
    </>
    

  );
}

export default App;
