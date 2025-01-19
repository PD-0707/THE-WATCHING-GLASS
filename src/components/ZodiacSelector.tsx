import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ZodiacSelector = () => {
  const [zodiac, setZodiac] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { birthday, selectedColor, selectedWeather } = location.state || {};

  const handleContinue = () => {
    if (zodiac) {
      navigate('/results', {
        state: { birthday, selectedColor, selectedWeather, selectedZodiac: zodiac }, // Pass all data to ResultsPage
      });
    }
  };

  return (
    <div>
      <h2>Choose Your Zodiac Sign</h2>
      <select value={zodiac} onChange={(e) => setZodiac(e.target.value)}>
        <option value="">Select Zodiac</option>
        <option value="aries">Aries</option>
        <option value="taurus">Taurus</option>
        <option value="gemini">Gemini</option>
        <option value="cancer">Cancer</option>
        <option value="leo">Leo</option>
        <option value="virgo">Virgo</option>
        <option value="libra">Libra</option>
        <option value="scorpio">Scorpio</option>
        <option value="sagittarius">Sagittarius</option>
        <option value="capricorn">Capricorn</option>
        <option value="aquarius">Aquarius</option>
        <option value="pisces">Pisces</option>
        {/* Add other zodiac options */}
      </select>

      <button
        onClick={handleContinue}
        disabled={!zodiac}
        style={{ backgroundColor: zodiac ? 'green' : 'gray' }}
      >
        Finish
      </button>
    </div>
  );
};

export default ZodiacSelector;
