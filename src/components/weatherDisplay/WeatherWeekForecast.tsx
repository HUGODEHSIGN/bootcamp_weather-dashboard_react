import WeatherCard from '@/components/weatherDisplay/WeatherCard';

export default function WeatherWeekForecast() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl md:text-3xl font-semibold z-10">
        5 Day Forecast
      </h2>
      <div className="flex flex-col lg:flex-row gap-2">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
}
