// src/components/CitySelector.tsx
import React, { useState } from 'react';
import useWeatherStore from '../store/useWeatherStore';

const CitySelector: React.FC = () => {
  const [inputCity, setInputCity] = useState<string>('');
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity) {
      fetchWeather(inputCity);
      setInputCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 border border-gray-400 rounded-lg"
      />
      <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default CitySelector;
