import WeatherCurrent from '@/components/weatherDisplay/WeatherCurrent';
import WeatherWeekForecast from '@/components/weatherDisplay/WeatherWeekForecast';
import { useFetchWeather } from '@/hooks/useFetchWeather';
import { currentCityAtom } from '@/state';
import { useAtom } from 'jotai';

export default function WeatherDisplay() {
  const [currentCity, _setCurrentCity] = useAtom(currentCityAtom);
  const { data, status } = useFetchWeather(currentCity);

  return (
    <div className="row-start-1 col-span-1 md:col-span-8 lg:col-span-9 flex flex-col gap-8 w-full">
      <WeatherCurrent
        data={data && data.list[0]}
        status={status}
      />

      <WeatherWeekForecast
        data={data && data.list}
        status={status}
      />
    </div>
  );
}
