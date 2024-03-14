import { BackgroundBeams } from '@/components/ui/background-beams';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import MainWeatherStatus from '@/components/weatherDisplay/MainWeatherStatus';
import StatCard from '@/components/weatherDisplay/StatCard';
import WeatherCurrentStatusIcon from '@/components/weatherDisplay/WeatherCurrentStatusIcon';
import { currentCityAtom } from '@/state';
import { List } from '@/types';
import { useAtom } from 'jotai';
import { Droplets, Thermometer, Wind } from 'lucide-react';
import { nanoid } from 'nanoid';

interface WeatherCardProps {
  data: List;
  status: 'success' | 'pending' | 'error';
}

export default function WeatherCurrent({ data, status }: WeatherCardProps) {
  const [currentCity, _setCurrentCity] = useAtom(currentCityAtom);

  const statCardData = [
    {
      stat: `${data && data.main.temp.toString()} °F`,
      description: 'Temperature',
      icon: <Thermometer className="w-20 h-20" />,
      className:
        'bg-gradient-to-br from-teal-200 to-orange-400 text-white opacity-9 flex-1',
    },
    {
      stat: `${data && data.wind.speed.toString()} MPH`,
      description: 'Wind Speed',
      icon: <Wind className="w-20 h-20" />,
      className:
        'bg-gradient-to-br from-teal-200 to-lime-400 text-white opacity-95 flex-1',
    },
    {
      stat: `${data && data.main.humidity.toString()}%`,
      description: 'Humidity',
      icon: <Droplets className="w-20 h-20" />,
      className:
        'bg-gradient-to-br from-cyan-200 to-blue-400 text-white opacity-95 flex-1',
    },
  ];

  return (
    <Card className="relative overflow-hidden bg-primary">
      <CardHeader>
        <CardTitle className="text-primary-foreground">
          {status === 'pending' && 'Loading...'}
          {status === 'error' && <div className="text-red-500">Error</div>}
          {status === 'success' && currentCity.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 w-full">
        {(status === 'pending' || status === 'error') && (
          <Skeleton className="h-[72px]" />
        )}
        {status === 'success' && <MainWeatherStatus data={data && data} />}
        <div className="flex flex-col lg:flex-row gap-2">
          {status === 'success' &&
            statCardData.map((card) => (
              <>
                <StatCard
                  stat={card.stat}
                  description={card.description}
                  icon={card.icon}
                  className={card.className}
                  key={nanoid()}
                />
              </>
            ))}
          {(status === 'pending' || status === 'error') && (
            <>
              <Skeleton className="h-[176px] lg:h-[260px] lg:flex-1" />
              <Skeleton className="h-[176px] lg:h-[260px] lg:flex-1" />
              <Skeleton className="h-[176px] lg:h-[260px] lg:flex-1" />
            </>
          )}
        </div>
      </CardContent>
      <WeatherCurrentStatusIcon data={data} />
      <BackgroundBeams />
    </Card>
  );
}
