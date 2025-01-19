import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
const ColorSelector = () => {
  const [color, setColor] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { setProgress } = useProgress();
  const { birthday } = location.state || {};

  const handleContinue = () => {
    if (color) {
      setProgress(40);
      navigate('/weather', {
        state: { birthday, selectedColor: color }, // Pass color and birthday to the next page
      });
    }
  };
  useEffect(() => {
    setProgress(20); // Set progress to 20% when the page is loaded
  }, [setProgress]);
  return (
    <div>
      <h2>Choose Your Favorite Color</h2>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <button
        onClick={handleContinue}
        disabled={!color}
        style={{ backgroundColor: color ? 'green' : 'gray' }}
      >
        Continue
      </button>
    </div>
  );
};

export default ColorSelector;
