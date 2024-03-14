import { Skeleton } from "@/components/ui/skeleton";
import WeatherCard from "@/components/weatherDisplay/WeatherCard";
import weatherListGenerator from "@/components/weatherDisplay/WeatherListGenerator";
import { List } from "@/types";

interface WeatherWeekForecastProps {
  data: List[];
  status: "success" | "pending" | "error";
}

export default function WeatherWeekForecast({
  data,
  status,
}: WeatherWeekForecastProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl md:text-3xl font-semibold z-10">
        5 Day Forecast
      </h2>
      <div className="flex flex-col lg:flex-row gap-2 mt-12">
        {status === "success" &&
          weatherListGenerator(data).map((day) => (
            <WeatherCard data={day} key={JSON.stringify(day)} />
          ))}
        {(status === "pending" || status === "error") && (
          <>
            <Skeleton className="h-[84px] lg:h-[176px] lg:flex-1" />
            <Skeleton className="h-[84px] lg:h-[176px] lg:flex-1" />
            <Skeleton className="h-[84px] lg:h-[176px] lg:flex-1" />
            <Skeleton className="h-[84px] lg:h-[176px] lg:flex-1" />
            <Skeleton className="h-[84px] lg:h-[176px] lg:flex-1" />
          </>
        )}
      </div>
    </div>
  );
}
