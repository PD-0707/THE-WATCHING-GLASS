import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CalendarSelector = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const { birthday } = location.state || {};  // Get birthday from previous page

  const handleContinue = () => {
    if (selectedDate) {
      navigate('/color', { state: { birthday, selectedDate } });  // Pass data to next page
    }
  };

  return (
    <div>
      <h2>Choosing Calendar Date</h2>
      <input 
        type="date" 
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button 
        onClick={handleContinue} 
        disabled={!selectedDate}  
        style={{
          backgroundColor: selectedDate ? 'green' : 'grey',
          cursor: selectedDate ? 'pointer' : 'not-allowed'
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default CalendarSelector;
