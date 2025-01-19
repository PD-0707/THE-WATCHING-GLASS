import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Homepage.css';
import { useProgress } from '../contexts/ProgressContext'; // Import the custom hook
import ProgressBar from './ProgressBar';
const Homepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/birthday');  // Navigate to the birthday selection page
  };

  return (
    <div className="homepage">
      <h1>Watching Glass</h1>
      <p>Your path, clearly seen</p>
      <button className="start-btn" onClick={handleButtonClick}>Read My Future</button>
    </div>
  );
};

export default Homepage;
