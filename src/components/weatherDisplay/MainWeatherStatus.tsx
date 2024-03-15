import { List } from "@/types";

interface MainWeatherStatusProps {
  data: List;
}

export default function MainWeatherStatus({ data }: MainWeatherStatusProps) {
  return (
    <div className="relative z-10 overflow-hidden rounded-md p-4 text-4xl font-bold text-neutral-50 opacity-95">
      {data && data.weather[0].main}
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-neutral-700 opacity-50 dark:bg-neutral-900"></div>
    </div>
  );
}
