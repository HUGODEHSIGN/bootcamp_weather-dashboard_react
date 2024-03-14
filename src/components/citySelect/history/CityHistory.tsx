import CityHistoryButton from '@/components/citySelect/history/CityHistoryButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cityHistoryAtom } from '@/state';
import { useAtom } from 'jotai';
import { History } from 'lucide-react';
import { nanoid } from 'nanoid';

export default function CityHistory() {
  const [cityHistory, _setCityHistory] = useAtom(cityHistoryAtom);

  return (
    <Card className="relative overflow-hidden backdrop-blur-3xl">
      <CardHeader>
        <CardTitle className='z-10 text-center'>History</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {cityHistory.map((city) => (
          <CityHistoryButton
            city={city}
            key={nanoid()}
          />
        ))}
      </CardContent>
      <History className="absolute w-24 h-24 -top-6 -right-5 opacity-50 z-10" />
      <div className='absolute left-0 top-0 right-0 bottom-0 bg-neutral-50 dark:bg-neutral-900 opacity-60 dark:opacity-70'></div>
    </Card>
  );
}
