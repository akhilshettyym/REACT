import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');  // Default am setting to light mode traditional way
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#181818';
      document.body.classList.add('dark-mode');
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.classList.remove('dark-mode');
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Navbar title="Proreact" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container my-3'>
        <TextForm showAlert = {showAlert} heading="Enter your text to analyze below:" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;