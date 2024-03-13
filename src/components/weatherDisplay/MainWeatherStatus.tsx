import { cn } from '@/lib/utils';
import { List } from '@/types';

interface ColorLookup {
  [key: string]: string;
}

const colorLookup: ColorLookup = {
  Thunderstorm: 'bg-amber-300 text-black',
  Drizzle: 'bg-cyan-300 text-black',
  Rain: 'bg-cyan-300 text-black',
  Snow: 'bg-sky-100 text-black',
  Mist: 'bg-sky-100 text-black',
  Smoke: 'bg-stone-500 text-white',
  Haze: 'bg-stone-500 text-white',
  Dust: 'bg-stone-500 text-white',
  Fog: 'bg-gray-100 text-black',
  Sand: 'bg-orange-50 text-black',
  Ash: 'bg-gray-100 text-black',
  Squall: 'bg-stone-700 text-white',
  Tornado: 'bg-stone-700 text-white',
  Clear: 'bg-sky-100 text-black',
  Clouds: 'bg-gray-100 text-black',
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
