import { cityHistoryAtom, currentCityAtom } from "@/state";
import { useAtom } from "jotai";
import { nanoid } from "nanoid";

export default function useSetCity() {
  const [_currentCity, setCurrentCity] = useAtom(currentCityAtom);
  const [cityHistory, setCityHistory] = useAtom(cityHistoryAtom);

  function setNewCity(val: string) {
    setCurrentCity(JSON.parse(val));
    setCityHistory((prev) => [{ id: nanoid(), ...JSON.parse(val) }, ...prev]);
    cityHistory.length > 9 && setCityHistory((prev) => prev.slice(0, -1));
  }
  return setNewCity;
}
