import { Skeleton } from '@/components/ui/skeleton';
import WeatherCard from '@/components/weatherDisplay/WeatherCard';
import weatherListGenerator from '@/components/weatherDisplay/WeatherListGenerator';
import { List } from '@/types';

interface WeatherWeekForecastProps {
    data: List[];
    status: 'success' | 'pending' | 'error';
}

export default function WeatherWeekForecast({
    data,
    status,
}: WeatherWeekForecastProps) {
    return (
        <div className="mt-6 flex flex-col">
            <h2 className="z-10 text-2xl font-semibold md:text-3xl">
                5 Day Forecast
            </h2>
            <div className="mt-12 flex flex-col gap-2 lg:flex-row">
                {status === 'success' &&
                    weatherListGenerator(data).map((day) => (
                        <WeatherCard data={day} key={JSON.stringify(day)} />
                    ))}
                {(status === 'pending' || status === 'error') && (
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
