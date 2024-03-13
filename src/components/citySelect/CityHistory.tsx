import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cityHistoryAtom } from '@/state';
import { useAtom } from 'jotai';

export default function CityHistory() {
  const [cityHistory, setCityHistory] = useAtom(cityHistoryAtom);
  return (
    <Card>
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {cityHistory.map((city) => (
          <Button>{city.name}</Button>
        ))}
        {/* <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button> */}
      </CardContent>
    </Card>
  );
}
