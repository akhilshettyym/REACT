import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null); // Set to null initially to hide details
  const [location, setLocation] = useState('');

  const apiKey = 'd4b93c3c8e14d3568b13df597f90ce97';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter' && location.trim() !== '') {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setData(null);
      }
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      {data && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>Location: {data.name}</p>
            </div>

            <div className="temp">
              <h1>{Math.round(data.main.temp)}°C</h1>
            </div>

            <div className="description">
              <p>{data.weather[0].description}</p>
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
              <p className="bold">{Math.round(data.main.feels_like)}°C</p>
              <p>Feels like</p>
            </div>

            <div className="humidity">
              <p className="bold">{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>

            <div className="wind">
              <p className="bold">{data.wind.speed} km/h</p>
              <p>Wind Speed</p>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;