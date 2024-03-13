import WeatherCurrent from '@/components/weatherDisplay/WeatherCurrent';
import WeatherWeekForecast from '@/components/weatherDisplay/WeatherWeekForecast';

export default function WeatherDisplay() {
  return (
    <div className="col-span-8 flex flex-col gap-8 w-full">
      <WeatherCurrent />
      <WeatherWeekForecast />
    </div>
  );
}
