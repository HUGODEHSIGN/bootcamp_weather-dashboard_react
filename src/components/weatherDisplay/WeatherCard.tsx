import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List } from "@/types";
import dayjs from "dayjs";

interface WeatherCardProps {
  data: List;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <Card className="relative flex flex-row lg:flex-col flex-1 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 p-4 ml-7 lg:ml-0">
      <CardHeader className="relative w-20 lg:w-auto">
        <CardTitle className="z-10 text-primary-foreground flex justify-center items-center text-3xl text-center min-w-24 bg-neutral-800 dark:bg-neutral-200 rounded-md p-2 -left-12 top-1/2 -translate-y-1/2 lg:-top-8 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 absolute">
          {Math.round(data.main.temp)} °F
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row lg:flex-col w-full justify-between items-center text-center p-0 lg:pb-4">
        <div className='z-10'>
          <p>{Math.round(data.wind.speed)} MPH</p>
          <p>{data.main.humidity}%</p>
        </div>

        <p className="text-xl font-bold z-10">{dayjs.unix(data.dt).format("ddd")}</p>
      </CardContent>
      <div className='absolute left-0 top-0 right-0 bottom-0 bg-neutral-50 dark:bg-neutral-900 opacity-60 dark:opacity-70 rounded-md'></div>
    </Card>
  );
}
