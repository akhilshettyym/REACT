import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  // State for a single input field (name)
  const [name, setName] = useState("");

  // State for multiple inputs: an object holding form data
  const [inputs, setInputs] = useState({});

  // State for textarea content
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  // State for select dropdown
  const [favoriteCar, setFavoriteCar] = useState("Volvo");

  // Handle change for single input (name)
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle change for multiple inputs
  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setInputs((vals) => ({ ...vals, [name]: value }));
  };

  // Handle change for textarea
  const handleTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  // Handle change for select dropdown
  const handleSelectChange = (e) => {
    setFavoriteCar(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    alert(
      `Name: ${name}\nUsername: ${inputs.username}\nAge: ${inputs.age}\nFavorite Car: ${favoriteCar}\nTextarea Content: ${textarea}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text input for name */}
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
      </label>
      <br />

      {/* Multiple inputs with shared handler */}
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleInputsChange}
          placeholder="Username"
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleInputsChange}
          placeholder="Age"
        />
      </label>
      <br />

      {/* Textarea */}
      <label>
        Your message:
        <textarea value={textarea} onChange={handleTextareaChange} />
      </label>
      <br />

      {/* Select dropdown */}
      <label>
        Favorite Car:
        <select value={favoriteCar} onChange={handleSelectChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

// Render the form into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);