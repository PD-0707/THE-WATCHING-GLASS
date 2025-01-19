import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const WeatherSelector = () => {
  const [weather, setWeather] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { birthday, selectedColor } = location.state || {};

  const handleContinue = () => {
    if (weather) {
      navigate('/zodiac', {
        state: { birthday, selectedColor, selectedWeather: weather }, // Pass data to Zodiac page
      });
    }
  };

  return (
    <div>
      <h2>Choose Your Preferred Weather</h2>
      <select value={weather} onChange={(e) => setWeather(e.target.value)}>
        <option value="">Select Weather</option>
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
        <option value="snowy">Snowy</option>
        <option value="cloudy">Cloudy</option>
      </select>

      <button
        onClick={handleContinue}
        disabled={!weather}
        style={{ backgroundColor: weather ? 'green' : 'gray' }}
      >
        Continue
      </button>
    </div>
  );
};

export default WeatherSelector;
