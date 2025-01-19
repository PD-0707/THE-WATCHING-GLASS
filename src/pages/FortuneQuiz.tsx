import { useState } from "react";
import BirthdaySelector from "../components/BirthdaySelector";
import CalendarSelector from "../components/CalendarSelector";
import ColorSelector from "../components/ColorSelector";
import WeatherSelector from "../components/WeatherSelector";
import ZodiacSelector from "../components/ZodiacSelector";
import { useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import ResultsPage from "../components/ResultsPage";

const FortuneQuiz = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedWeather, setSelectedWeather] = useState("");
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedDate && selectedColor && selectedWeather && selectedZodiac) {
      navigate("/results", {
        state: {
          selectedDate,
          selectedColor,
          selectedWeather,
          selectedZodiac,
        },
      });
    }
  };

  return (
    <div>
      <h2>Select Your Birth Date</h2>
      <BirthdaySelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <h2>Select Your Favorite Calendar Date</h2>
      <CalendarSelector selectedDate={selectedDate} onChange={setSelectedDate} />

      <h2>Select Your Favorite Color</h2>
      <ColorSelector setSelectedColor={setSelectedColor} />

      <h2>Select Your Favorite Weather</h2>
      <WeatherSelector setSelectedWeather={setSelectedWeather} />

      <h2>Select Your Zodiac Sign</h2>
      <ZodiacSelector setSelectedZodiac={setSelectedZodiac} />

      <button
        onClick={handleContinue}
        disabled={!selectedDate || !selectedColor || !selectedWeather || !selectedZodiac}
        style={{ backgroundColor: selectedDate && selectedColor && selectedWeather && selectedZodiac ? "green" : "gray" }}
      >
        Continue
      </button>
    </div>
  );
};

export default FortuneQuiz;
