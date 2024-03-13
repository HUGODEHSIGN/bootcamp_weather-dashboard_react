import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List } from '@/types';
import dayjs from 'dayjs';

const dayLookup = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function WeatherCard({ data }: { data: List }) {
  console.log(dayLookup[dayjs.unix(data.dt).day()]);

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-lg text-center">
          {dayLookup[dayjs.unix(data.dt).day()]}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data.main.temp} °F</p>
        <p>{data.wind.speed} MPH</p>
        <p>{data.main.humidity}%</p>
      </CardContent>
    </Card>
  );
}
