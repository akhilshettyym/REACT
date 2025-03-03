import React, { useState}  from 'react';
import axios from 'axios';

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=mangalore&lon=mangalore&appid=d4b93c3c8e14d3568b13df597f90ce97`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Location: Mangalore</p>
          </div>
          <div className="temp">
            <h1>60°C</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels like: 65°C</p>
          </div>
          <div className="humidity">
            <p>Humidity: 20%</p>
          </div>
          <div className="wind">
            <p>Wind Speed: 10 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
