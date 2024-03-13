import { BackgroundBeams } from '@/components/ui/background-beams';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MainWeatherStatus from '@/components/weatherDisplay/MainWeatherStatus';
import StatCard from '@/components/weatherDisplay/StatCard';
import { currentCityAtom } from '@/state';
import { List } from '@/types';
import { useAtom } from 'jotai';
import {
  Cloud,
  CloudFog,
  CloudHail,
  CloudRain,
  Droplets,
  Snowflake,
  Sun,
  Thermometer,
  Tornado,
  Wind,
  Zap,
} from 'lucide-react';
import { ReactElement } from 'react';

interface IconLookup {
  [key: string]: ReactElement;
}

const iconLookup: IconLookup = {
  Thunderstorm: (
    <Zap className="absolute -top-32 -right-20 w-[400px] h-[400px]" />
  ),
  Drizzle: (
    <CloudHail className="absolute -top-32 -right-20 w-[400px] h-[400px]" />
  ),
  Rain: (
    <CloudRain className="absolute -top-32 -right-20 w-[400px] h-[400px]" />
  ),
  Snow: (
    <Snowflake className="absolute -top-32 -right-20 w-[400px] h-[400px]" />
  ),
  Mist: <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
  Smoke: (
    <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />
  ),
  Haze: <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
  Dust: <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
  Fog: <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
  Sand: <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
  Ash: <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
  Squall: (
    <CloudFog className="absolute -top-32 -right-20 w-[400px] h-[400px]" />
  ),
  Tornado: (
    <Tornado className="absolute -top-32 -right-20 w-[400px] h-[400px]" />
  ),
  Clear: <Sun className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
  Clouds: <Cloud className="absolute -top-32 -right-20 w-[400px] h-[400px]" />,
};

export default function WeatherCurrent({ data }: { data?: List }) {
  const [currentCity, _setCurrentCity] = useAtom(currentCityAtom);

  console.log(data!.weather[0]);
  return (
    <Card className="relative overflow-hidden bg-primary">
      <CardHeader>
        <CardTitle className="text-primary-foreground">
          {currentCity.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 w-full">
        <MainWeatherStatus data={data} />
        <div className="flex flex-col lg:flex-row gap-2">
          <StatCard
            stat={`${data!.main.temp.toString()} °F`}
            description="Temperature"
            icon={<Thermometer className="w-20 h-20" />}
            className="bg-gradient-to-br from-teal-200 to-orange-400 text-white opacity-9 flex-1"
          />
          <StatCard
            stat={`${data!.wind.speed.toString()} MPH`}
            description="Wind Speed"
            icon={<Wind className="w-20 h-20" />}
            className="bg-gradient-to-br from-teal-200 to-lime-400 text-white opacity-95 flex-1"
          />
          <StatCard
            stat={`${data!.main.humidity.toString()}%`}
            description="Humidity"
            icon={<Droplets className="w-20 h-20" />}
            className="bg-gradient-to-br from-cyan-200 to-blue-400 text-white opacity-95 flex-1"
          />
        </div>
      </CardContent>
      <div className="text-primary-foreground opacity-50">
        {iconLookup[data!.weather[0].main]}
      </div>
      <BackgroundBeams />
    </Card>
  );
}
