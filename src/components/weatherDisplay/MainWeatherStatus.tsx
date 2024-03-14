import { List } from '@/types';

interface MainWeatherStatusProps {
  data: List;
}

export default function MainWeatherStatus({ data }: MainWeatherStatusProps) {
  return (
    <div
      className=
        'relative overflow-hidden text-neutral-50 p-4 rounded-md text-4xl font-bold z-10 opacity-95'
      >
      {data && data.weather[0].main}
      <div className=
        'absolute top-0 left-0 right-0 bottom-0 -z-10 bg-neutral-700 dark:bg-neutral-900 opacity-50'
      ></div>
    </div>
  );
}
