import CityHistoryButton from '@/components/citySelect/elements/CityHistoryButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cityHistoryAtom } from '@/state';
import { useAtom } from 'jotai';
import { History } from 'lucide-react';
import { nanoid } from 'nanoid';

export default function CityHistory() {
  const [cityHistory, _setCityHistory] = useAtom(cityHistoryAtom);

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {cityHistory.map((city) => (
          <CityHistoryButton
            city={city}
            key={nanoid()}
          />
        ))}
      </CardContent>
      <History className="absolute w-24 h-24 -top-6 -right-5 opacity-50" />
    </Card>
  );
}
