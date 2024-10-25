// src/components/WeatherWidget.tsx
import React, { useEffect } from 'react';
import useWeatherStore from '../store/useWeatherStore';
import CitySelector from './CitySelector';
import CurrentConditions from './CurrentConditions';
import Forecast from './Forecast';

const WeatherWidget: React.FC = () => {
  const city = useWeatherStore((state) => state.city);
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <CitySelector />
      <CurrentConditions />
      <Forecast />
    </div>
  );
};

export default WeatherWidget;
