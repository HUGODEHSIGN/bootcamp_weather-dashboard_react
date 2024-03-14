import { City } from '@/types';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchWeather({
  queryKey,
}: QueryFunctionContext<[string, City | { name: string }]>) {
  let lat = 40.6526006;
  let lon = -73.9497211;
  if (queryKey[1].name !== 'Brooklyn') {
    const key = queryKey[1] as City;
    lat = key.lat;
    lon = key.lon;
  }

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

export function useFetchWeather(city: City | { name: string }) {
  const weather = useQuery({
    queryKey: ['weather', city],
    queryFn: fetchWeather,
  });
  return weather;
}
