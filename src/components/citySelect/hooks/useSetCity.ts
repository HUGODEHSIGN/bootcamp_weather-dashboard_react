import { cityHistoryAtom, currentCityAtom } from '@/state';
import { useAtom } from 'jotai';

export default function useSetCity() {
  const [_currentCity, setCurrentCity] = useAtom(currentCityAtom);
  const [cityHistory, setCityHistory] = useAtom(cityHistoryAtom);

  function setNewCity(val: string) {
    setCurrentCity(JSON.parse(val));
    setCityHistory((prev) => [JSON.parse(val), ...prev]);
    cityHistory.length > 9 && setCityHistory((prev) => prev.slice(0, -1));
  }
  return setNewCity;
}
