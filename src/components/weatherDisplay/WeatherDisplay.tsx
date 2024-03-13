import WeatherCurrent from '@/components/weatherDisplay/WeatherCurrent';
import WeatherWeekForecast from '@/components/weatherDisplay/WeatherWeekForecast';

export default function WeatherDisplay() {
  return (
    <div className="row-start-1 col-span-1 md:col-span-8 lg:col-span-9 flex flex-col gap-8 w-full">
      <WeatherCurrent />
      <WeatherWeekForecast />
    </div>
  );
}
