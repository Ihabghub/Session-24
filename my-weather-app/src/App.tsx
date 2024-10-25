// src/App.tsx
import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen width-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 ml-96">
      <WeatherWidget />
    </div>
  );
};

export default App;
