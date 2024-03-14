import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { List } from '@/types';
import dayjs from 'dayjs';

interface WeatherCardProps {
  data: List;
}

export default function WeatherCard({ data }: WeatherCardProps) {
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

        <p className="text-xl font-bold">{dayjs.unix(data.dt).format('ddd')}</p>
      </CardContent>
    </Card>
  );
}
