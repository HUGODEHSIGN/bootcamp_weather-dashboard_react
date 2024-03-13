import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchCities({
  queryKey,
}: QueryFunctionContext<[string, string | null | undefined]>) {
  if (queryKey[1] === '') {
    return '';
  }

  try {
    const res = await axios({
      method: 'get',
      url: `https://api.openweathermap.org/geo/1.0/direct?q=${
        queryKey[1]
      }&limit=5&appid=${import.meta.env.VITE_OPENWEATHER}`,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  } finally {
  }
}

export function useFetchCities(inputVal: string) {
  const cities = useQuery({
    queryKey: ['cities', inputVal],
    queryFn: fetchCities,
  });
  return cities;
}
