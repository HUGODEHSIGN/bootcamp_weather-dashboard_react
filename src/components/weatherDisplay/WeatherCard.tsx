import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List } from "@/types";
import dayjs from "dayjs";

interface WeatherCardProps {
  data: List;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <Card className="relative ml-7 flex flex-1 flex-row p-4 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 lg:ml-0 lg:flex-col">
      <CardHeader className="relative w-20 lg:w-auto">
        <CardTitle className="absolute -left-12 top-1/2 z-10 flex min-w-24 -translate-y-1/2 items-center justify-center rounded-md bg-neutral-800 p-2 text-center text-3xl text-primary-foreground dark:bg-neutral-200 lg:-top-8 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0">
          {Math.round(data.main.temp)} °F
        </CardTitle>
      </CardHeader>
      <CardContent className="flex w-full flex-row items-center justify-between p-0 text-center lg:flex-col lg:pb-4">
        <div className="z-10">
          <p>{Math.round(data.wind.speed)} MPH</p>
          <p>{data.main.humidity}%</p>
        </div>

        <p className="z-10 text-xl font-bold">
          {dayjs.unix(data.dt).format("ddd")}
        </p>
      </CardContent>
      <div className="absolute bottom-0 left-0 right-0 top-0 rounded-md bg-neutral-50 opacity-60 dark:bg-neutral-900 dark:opacity-70"></div>
    </Card>
  );
}
