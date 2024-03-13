import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { currentCityAtom } from '@/state';
import { List } from '@/types';
import { useAtom } from 'jotai';

export default function WeatherCurrent({ data }: { data?: List }) {
  const [currentCity, _setCurrentCity] = useAtom(currentCityAtom);

  console.log;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{currentCity.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>temp: {data!.main.temp} °F</p>
        <p>wind: {data!.wind.speed} MPH</p>
        <p>humidity: {data!.main.humidity}%</p>
      </CardContent>
    </Card>
  );
}
