import { mainStatusColor } from '@/components/weatherDisplay/lookupLists';
import { cn } from '@/lib/utils';
import { List } from '@/types';

interface MainWeatherStatusProps {
  data: List;
}

export default function MainWeatherStatus({ data }: MainWeatherStatusProps) {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground p-4 rounded-md text-4xl font-bold z-10 opacity-95',
        mainStatusColor[data.weather[0].main]
      )}>
      {data.weather[0].main}
    </div>
  );
}
