import { cn } from '@/lib/utils';
import { List } from '@/types';

interface ColorLookup {
  [key: string]: string;
}

const colorLookup: ColorLookup = {
  Thunderstorm: 'bg-amber-300 text-primary',
  Drizzle: 'bg-cyan-300 text-primary',
  Rain: 'bg-cyan-300 text-primary',
  Snow: 'bg-sky-100 text-primary',
  Mist: 'bg-sky-100 text-primary',
  Smoke: 'bg-stone-500 text-primary-foreground',
  Haze: 'bg-stone-500 text-primary-foreground',
  Dust: 'bg-stone-500 text-primary-foreground',
  Fog: 'bg-gray-100 text-primary',
  Sand: 'bg-orange-50 text-primary',
  Ash: 'bg-gray-100 text-primary',
  Squall: 'bg-stone-700 text-primary-foreground',
  Tornado: 'bg-stone-700 text-primary-foreground',
  Clear: 'bg-sky-100 text-primary',
  Clouds: 'bg-gray-100 text-primary',
};

export default function MainWeatherStatus({ data }: { data?: List }) {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground p-4 rounded-md font-semibold z-10 opacity-95',
        colorLookup[data!.weather[0].main]
      )}>
      {data!.weather[0].main}
    </div>
  );
}
