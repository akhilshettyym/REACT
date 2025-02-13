import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');  // Default am setting to light mode traditional way

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#181818';
      document.body.classList.add('dark-mode');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <>
      <Navbar title="Proreact" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <TextForm heading="Enter your text to analyze below:" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;