// src/components/Forecast.tsx
import React from 'react';
import useWeatherStore from '../store/useWeatherStore';

const Forecast: React.FC = () => {
  const forecast = useWeatherStore((state) => state.forecast);

  if (!forecast.length) return <p>Loading...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-center mb-4">Five Day Forecast</h2>
      <div className="flex justify-center space-x-6">
        {forecast.map((day, index) => (
          <div key={index} className="text-center">
            {/* Adjust date to display each day correctly */}
            <p className="font-semibold">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="mx-auto"
            />
            <p className="text-lg">{day.main.temp.toFixed(0)} °F</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
