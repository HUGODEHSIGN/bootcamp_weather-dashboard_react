import { SelectItem } from '@/components/ui/select';
import { City } from '@/types';

interface CitySearchItemProps {
  city: City;
}

export default function CitySearchItem({ city }: CitySearchItemProps) {
  return (
    <SelectItem
      value={JSON.stringify(city)}
      key={JSON.stringify(city)}>
      {city.name + ' - ' + city.state}
    </SelectItem>
  );
}
