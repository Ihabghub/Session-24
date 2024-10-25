// src/App.tsx
import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import './index.css'; // Tailwind CSS is imported

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <WeatherWidget />
    </div>
  );
};

export default App;
