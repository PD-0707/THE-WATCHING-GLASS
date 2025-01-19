import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import '../styles/resultspage.css';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const { birthday, selectedDate, selectedColor, selectedWeather, selectedZodiac } = location.state || {};
  const { setProgress } = useProgress(); // Get setProgress function

  useEffect(() => {
    setProgress(100); // Set progress to 100% when results page is loaded
  }, [setProgress]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EDE8E3] text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Future Awaits</h1>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">Your Details:</h2>
        <p className="text-lg text-gray-700">Birthday: {birthday}</p>
        <p className="text-lg text-gray-700">Calendar Date: {selectedDate}</p>
        <p className="text-lg text-gray-700">
          Favorite Color: <span style={{ color: selectedColor }}>{selectedColor}</span>
        </p>
        <p className="text-lg text-gray-700">Weather Preference: {selectedWeather}</p>
        <p className="text-lg text-gray-700">Zodiac Sign: {selectedZodiac}</p>
      </div>

      <p className="text-xl text-gray-700 mb-6">
      You are blah blah blah and you do blah blah, you wish you could blah blah.
      </p>

      <p className="text-lg text-gray-700">
      Do blah blah and everything will be amazing and beautiful and perfect and pay me $12031231
      for doing this service for you, and I'll give you 3 more predictions.
      </p>
    </div>
  );
};

export default ResultsPage;
