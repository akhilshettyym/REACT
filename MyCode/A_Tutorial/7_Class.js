// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor(props) {
    super(props); // Always call super(props) to initialize parent class

    //  Initialize component state
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: props.color || 'red', // Use prop or default
      year: 1964,
    };

    // Bind custom method
    this.changeColor = this.changeColor.bind(this);
  }

  // Lifecycle Method - Mounting
  componentDidMount() {
    console.log(' componentDidMount: Car component mounted.');

    // Simulate a data fetch or DOM setup
    setTimeout(() => {
      this.setState({ color: 'blue' });
    }, 2000);
  }

  // Lifecycle Method - Updating
  componentDidUpdate(prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      console.log(
        ` componentDidUpdate: Color changed from ${prevState.color} to ${this.state.color}`
      );
    }
  }

  // Lifecycle Method - Unmounting (Optional)
  componentWillUnmount() {
    console.log('🧹 componentWillUnmount: Cleaning up...');
  }

  // Custom method to change color
  changeColor() {
    this.setState({ color: 'green' });
  }

  // 🔷 Render method
  render() {
    return (
      <div style={{ padding: '20px', border: '2px solid black', width: '300px' }}>
        <h2>🚗 {this.state.brand} {this.state.model}</h2>
        <p>Color: <strong>{this.state.color}</strong></p>
        <p>Year: {this.state.year}</p>

        {/* Props usage */}
        <p>📦 Passed from parent: <strong>{this.props.engineType}</strong></p>

        {/* Event handling */}
        <button onClick={this.changeColor}>Change Color to Green</button>
      </div>
    );
  }
}

// 🔷 Main App component
class App extends React.Component {
  render() {
    return (
      <div style={{ margin: '40px' }}>
        <h1>🚙 React Class Component Demo</h1>
        {/* Pass props */}
        <Car color="red" engineType="V8 Turbo" />
      </div>
    );
  }
}

// 🔷 Mount React App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);