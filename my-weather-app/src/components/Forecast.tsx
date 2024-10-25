// src/components/Forecast.tsx
import React from 'react';
import useWeatherStore from '../store/useWeatherStore';

const Forecast: React.FC = () => {
  const forecast = useWeatherStore((state) => state.forecast);

  if (!forecast.length) return <p>Loading...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-center mb-4">Five Day Forecast</h2>
      <div className="flex justify-center space-x-4">
        {forecast.map((day, index) => (
          <div key={index} className="text-center">
            <p>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="mx-auto"
            />
            <p>{day.main.temp} °F</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
