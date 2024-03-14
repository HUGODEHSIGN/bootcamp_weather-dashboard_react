import { Button } from '@/components/ui/button';
import { shortenString } from '@/lib/shortenString';
import { cityHistoryAtom, currentCityAtom } from '@/state';
import { City } from '@/types';
import { useAtom } from 'jotai';

interface CityHistoryButtonProps {
  city: City;
}

export default function CityHistoryButton({ city }: CityHistoryButtonProps) {
  const [_currentCity, setCurrentCity] = useAtom(currentCityAtom);
  const [_cityHistory, _setCityHistory] = useAtom(cityHistoryAtom);

  return (
    <Button
      onClick={() => {
        setCurrentCity(city);
      }}
      variant="secondary">
      {shortenString(`${city.name} ${city.state}`, 16)}
    </Button>
  );
}
