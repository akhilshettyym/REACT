import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark')  //Wheather dark is on or nah

  
  return (
    <>
      <Navbar title = "Proreact" aboutText = "About" mode ={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
      <TextForm heading = "Enter your text to analyze below:" />
      <About/>
      </div>
    </>
  );
}

export default App;