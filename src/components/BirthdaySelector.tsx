import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
const BirthdaySelector = () => {
  const [birthday, setBirthday] = useState('');
  const navigate = useNavigate();
  const { setProgress } = useProgress();
  const handleContinue = () => {
    if (birthday) {
        setProgress(20);
      navigate('/color', { state: { birthday } }); // Pass selected birthday state
    }
  };
  useEffect(() => {
    setProgress(0); // Set progress to 0% when the page is loaded
  }, [setProgress]);
  return (
    <div>
      <h2>Choose Your Birthday</h2>
      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <button
        onClick={handleContinue}
        disabled={!birthday}
        style={{ backgroundColor: birthday ? 'green' : 'gray' }}
      >
        Continue
      </button>
    </div>
  );
};

export default BirthdaySelector;
