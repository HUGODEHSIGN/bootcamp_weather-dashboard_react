import { Cities } from '@/types';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchWeather({
  queryKey,
}: QueryFunctionContext<[string, string]>) {
  console.log(queryKey);

  if (JSON.parse(queryKey[1])!.name === '') {
    return '';
  }

  try {
    const res = await axios({
      method: 'get',
      url: `http://api.openweathermap.org/geo/1.0/direct?q=${
        queryKey[1]
      }&limit=5&appid=${import.meta.env.VITE_OPENWEATHER}`,
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
