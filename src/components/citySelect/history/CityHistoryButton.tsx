import { Button } from "@/components/ui/button";
import { shortenString } from "@/lib/shortenString";
import { cityHistoryAtom, currentCityAtom } from "@/state";
import { City } from "@/types";
import { useAtom } from "jotai";
import { Trash2 } from "lucide-react";

interface CityHistoryButtonProps {
  city: City;
}

export default function CityHistoryButton({ city }: CityHistoryButtonProps) {
  const [_currentCity, setCurrentCity] = useAtom(currentCityAtom);
  const [cityHistory, setCityHistory] = useAtom(cityHistoryAtom);

  function deleteHistoryEntry(city: City) {
    const filteredHistory = cityHistory.filter((data) => data.id !== city.id);
    setCityHistory(filteredHistory);
  }

  return (
    <div className="flex flex-row gap-2">
      <Button
        onClick={() => {
          setCurrentCity(city);
        }}
        variant="ghost"
        className="z-10 flex-1 bg-inherit backdrop-blur-md hover:bg-neutral-50 dark:hover:bg-neutral-700"
      >
        {shortenString(`${city.name} ${city.state}`, 12)}
      </Button>
      <Button
        className="z-10"
        variant="ghost"
        size="icon"
        onClick={() => deleteHistoryEntry(city)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
