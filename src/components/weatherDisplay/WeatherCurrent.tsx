import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { currentCityAtom } from '@/state';
import { useAtom } from 'jotai';

export default function WeatherCurrent() {
  const [currentCity, _setCurrentCity] = useAtom(currentCityAtom);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{currentCity.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>temp</p>
        <p>wind</p>
        <p>humidity</p>
      </CardContent>
    </Card>
  );
}
