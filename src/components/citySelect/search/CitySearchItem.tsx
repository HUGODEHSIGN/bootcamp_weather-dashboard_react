import { SelectItem } from "@/components/ui/select";
import { City } from "@/types";

interface CitySearchItemProps {
  city: City;
}

export default function CitySearchItem({ city }: CitySearchItemProps) {
  return (
    <SelectItem
      value={JSON.stringify(city)}
      className="w-fit hover:bg-neutral-50 dark:hover:bg-neutral-700"
    >
      {city.name + " - " + city.state}
    </SelectItem>
  );
}
