// src/store/useWeatherStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

interface WeatherState {
  city: string;
  currentWeather: any;
  forecast: any[];
  fetchWeather: (city: string) => Promise<void>;
}

const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      city: 'Charlottesville, VA',
      currentWeather: {},
      forecast: [],
      fetchWeather: async (city: string) => {
        try {
          const API_KEY = 'c21235b958d2eef8ec57b6374153c9c3'; // Replace with your real API key
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=c21235b958d2eef8ec57b6374153c9c3`
          );
          const forecastResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c21235b958d2eef8ec57b6374153c9c3`
          );
          set({
            city,
            currentWeather: response.data,
            forecast: forecastResponse.data.list.slice(0, 5),
          });
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      },
    }),
    { name: 'weather-storage' }
  )
);

export default useWeatherStore;
