// src/components/CurrentConditions.tsx
import React from 'react';
import useWeatherStore from '../store/useWeatherStore';

const CurrentConditions: React.FC = () => {
  const currentWeather = useWeatherStore((state) => state.currentWeather);

  if (!currentWeather.main) return <p>Loading...</p>;

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">Current Conditions</h2>
      <div className="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="mx-auto"
        />
      </div>
      <p className="text-lg font-semibold">{currentWeather.main.temp} °F</p>
    </div>
  );
};

export default CurrentConditions;
