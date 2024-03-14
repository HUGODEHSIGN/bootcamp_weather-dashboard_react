import { mainStatusIcon } from '@/components/weatherDisplay/lookupLists';
import { List } from '@/types';

interface WeatherCurrentStatusIconProps {
  data: List;
}

export default function WeatherCurrentStatusIcon({
  data,
}: WeatherCurrentStatusIconProps) {
  return (
    <div className="text-primary-foreground opacity-50">
      {mainStatusIcon[data!.weather[0].main]}
    </div>
  );
}
