import WeatherCard from '@/components/weatherDisplay/WeatherCard';
import weatherListGenerator from '@/components/weatherDisplay/WeatherListGenerator';
import { List } from '@/types';

interface WeatherWeekForecast {
  data: List[];
}

export default function WeatherWeekForecast({ data }: WeatherWeekForecast) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl md:text-3xl font-semibold z-10">
        5 Day Forecast
      </h2>
      <div className="flex flex-col lg:flex-row gap-2">
        {weatherListGenerator(data).map((day) => (
          <WeatherCard
            data={day}
            key={JSON.stringify(day)}
          />
        ))}
      </div>
    </div>
  );
}
