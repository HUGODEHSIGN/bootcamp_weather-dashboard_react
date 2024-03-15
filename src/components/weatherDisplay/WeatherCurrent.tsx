import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import MainWeatherStatus from "@/components/weatherDisplay/MainWeatherStatus";
import StatCard from "@/components/weatherDisplay/StatCard";
import { currentCityAtom } from "@/state";
import { List } from "@/types";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import Lottie from "lottie-react";
import { Droplets, Thermometer, Wind } from "lucide-react";
import { nanoid } from "nanoid";
import dayTrainBackgroundAnimation from "../../../public/dayBackground.json";
import spaceBackgroundAnimation from "../../../public/spaceBackground.json";
interface WeatherCardProps {
  data: List;
  status: "success" | "pending" | "error";
}

export default function WeatherCurrent({ data, status }: WeatherCardProps) {
  const [currentCity, _setCurrentCity] = useAtom(currentCityAtom);
  const timeOfDay = Number(dayjs().format("HH"));

  const statCardData = [
    {
      stat: `${data && data.main.temp.toString()} °F`,
      description: "Temperature",
      icon: <Thermometer className="h-20 w-20" />,
      className: "bg-gradient-to-br from-teal-200 to-orange-400",
    },
    {
      stat: `${data && data.wind.speed.toString()} MPH`,
      description: "Wind Speed",
      icon: <Wind className="h-20 w-20" />,
      className: "bg-gradient-to-br from-teal-200 to-lime-400",
    },
    {
      stat: `${data && data.main.humidity.toString()}%`,
      description: "Humidity",
      icon: <Droplets className="h-20 w-20" />,
      className: "bg-gradient-to-br from-cyan-200 to-blue-400",
    },
  ];

  return (
    <Card className="relative overflow-hidden bg-neutral-200 dark:bg-neutral-800">
      <CardHeader>
        <CardTitle className="z-10 text-3xl text-neutral-50">
          {status === "pending" && "Loading..."}
          {status === "error" && <div className="text-red-500">Error</div>}
          {status === "success" && currentCity.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex w-full flex-col gap-4">
        {(status === "pending" || status === "error") && (
          <Skeleton className="h-[72px]" />
        )}
        {status === "success" && <MainWeatherStatus data={data && data} />}
        <div className="flex flex-col gap-4 lg:flex-row">
          {status === "success" &&
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
          {(status === "pending" || status === "error") && (
            <>
              <Skeleton className="h-[176px] lg:h-[260px] lg:flex-1" />
              <Skeleton className="h-[176px] lg:h-[260px] lg:flex-1" />
              <Skeleton className="h-[176px] lg:h-[260px] lg:flex-1" />
            </>
          )}
        </div>
      </CardContent>

      {(timeOfDay < 7 || timeOfDay >= 19) && (
        <Lottie
          animationData={spaceBackgroundAnimation}
          className="absolute bottom-0 left-0 right-0 origin-bottom scale-125 sm:scale-100"
        />
      )}

      {timeOfDay >= 7 && timeOfDay < 19 && (
        <Lottie
          animationData={dayTrainBackgroundAnimation}
          className="absolute bottom-0 left-0 right-0 origin-bottom scale-125 sm:scale-100"
        />
      )}
    </Card>
  );
}
