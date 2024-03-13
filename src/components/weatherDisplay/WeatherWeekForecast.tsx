import WeatherCard from '@/components/weatherDisplay/WeatherCard';
import { List } from '@/types';
import dayjs from 'dayjs';

export default function WeatherWeekForecast({ data }: { data: List[] }) {
  const filteredDates = [];
  let dayCounter = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      dayjs.unix(data[i].dt).diff(dayjs(), 'day') === dayCounter &&
      dayCounter < 5
    ) {
      filteredDates.push(data[i]);
      dayCounter++;
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl md:text-3xl font-semibold z-10">
        5 Day Forecast
      </h2>
      <div className="flex flex-col lg:flex-row gap-2">
        {filteredDates.map((dt) => (
          <WeatherCard
            data={dt}
            key={JSON.stringify(dt)}
          />
        ))}
        {/* <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard /> */}
      </div>
    </div>
  );
}
