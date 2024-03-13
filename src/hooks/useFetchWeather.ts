import { Cities } from '@/types';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchWeather({
  queryKey,
}: QueryFunctionContext<[string, string]>) {
  if (JSON.parse(queryKey[1]).name === 'No City Selected') {
    return '';
  }

  const { lat, lon } = JSON.parse(queryKey[1]);

  try {
    const res = await axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${
        import.meta.env.VITE_OPENWEATHER
      }`,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  } finally {
  }
}

export function useFetchWeather(city: Cities | { name: string }) {
  const weather = useQuery({
    queryKey: ['weather', JSON.stringify(city)],
    queryFn: fetchWeather,
  });
  return weather;
}
