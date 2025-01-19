import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext'; // Import the provider
import HomePage from './components/HomePage';
import BirthdaySelector from './components/BirthdaySelector';
import ColorSelector from './components/ColorSelector';
import WeatherSelector from './components/WeatherSelector';
import ZodiacSelector from './components/ZodiacSelector';
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <ProgressProvider> {/* Wrap the app with the provider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/birthday" element={<BirthdaySelector />} />
          <Route path="/color" element={<ColorSelector />} />
          <Route path="/weather" element={<WeatherSelector />} />
          <Route path="/zodiac" element={<ZodiacSelector />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </ProgressProvider>
  );
}

export default App;
