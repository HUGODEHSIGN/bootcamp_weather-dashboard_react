import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cityHistoryAtom, currentCityAtom } from '@/state';
import { useAtom } from 'jotai';

export default function CityHistory() {
  const [cityHistory, setCityHistory] = useAtom(cityHistoryAtom);
  const [currentCity, setCurrentCity] = useAtom(currentCityAtom);
  return (
    <Card>
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {cityHistory.map((city) => (
          <Button
            key={JSON.stringify(city)}
            onClick={() => setCurrentCity(city)}>
            {city.name} - {city.state}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
