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

function shortenString(str: string) {
  return str.slice(0, 4 - 1);
}

export default function WeatherCard({ data }: { data: List }) {
  return (
    <Card className="flex flex-row lg:flex-col flex-1">
      <CardHeader className="">
        <CardTitle className="text-3xl text-center min-w-20">
          {Math.round(data.main.temp)} °F
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row lg:flex-col w-full justify-between items-center text-center pb-0 lg:pb-4">
        <div>
          <p>{Math.round(data.wind.speed)} MPH</p>
          <p>{data.main.humidity}%</p>
        </div>

        <p className="text-xl font-bold">
          {shortenString(dayLookup[dayjs.unix(data.dt).day()])}
        </p>
      </CardContent>
    </Card>
  );
}
