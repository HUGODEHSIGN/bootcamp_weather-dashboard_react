import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cityHistoryAtom, currentCityAtom } from '@/state';
import { useAtom } from 'jotai';
import { History } from 'lucide-react';
import { nanoid } from 'nanoid';

export default function CityHistory() {
  const [cityHistory, _setCityHistory] = useAtom(cityHistoryAtom);
  const [_currentCity, setCurrentCity] = useAtom(currentCityAtom);

  function shortenString(str: string) {
    return str.length > 16 ? str.slice(0, 16 - 1) + '...' : str;
  }

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {cityHistory.map((city) => (
          <Button
            key={nanoid()}
            onClick={() => {
              setCurrentCity(city);
            }}
            variant="secondary">
            {shortenString(`${city.name} ${city.state}`)}
          </Button>
        ))}
      </CardContent>
      <History className="absolute w-24 h-24 -top-6 -right-5 opacity-50" />
    </Card>
  );
}
