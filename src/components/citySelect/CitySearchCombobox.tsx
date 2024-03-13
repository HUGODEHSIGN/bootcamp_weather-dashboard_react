import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFetchCities } from '@/hooks/useFetchCities';
import { cn } from '@/lib/utils';
import { cityHistoryAtom, currentCityAtom } from '@/state';
import { Cities } from '@/types';
import { useDebounce } from '@uidotdev/usehooks';
import { useAtom } from 'jotai';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function CitySearchCombobox() {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const debouncedInputVal = useDebounce(inputVal, 300);
  const [_currentCity, setCurrentCity] = useAtom(currentCityAtom);
  const [cityHistory, setCityHistory] = useAtom(cityHistoryAtom);
  const { data } = useFetchCities(debouncedInputVal);

  return (
    <div className="z-10">
      <Select
        open={open}
        onOpenChange={() => setOpen(!open)}
        onValueChange={(val) => {
          setCurrentCity(JSON.parse(val));
          setCityHistory((prev) => [JSON.parse(val), ...prev]);
          cityHistory.length > 9 && setCityHistory((prev) => prev.slice(0, -1));
        }}>
        <SelectTrigger>
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>

        <SelectContent>
          <div
            className={cn(
              'p-2 py-0 ml-2 flex flex-row items-center gap-4',
              !data ? 'mb-0 border-none' : 'mb-1 border-b'
            )}>
            <Search className="w-4 h-4" />
            <Input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search"
              className="p-0 border-none"
            />
          </div>
          {data &&
            data.map((city: Cities) => (
              <SelectItem
                value={JSON.stringify(city)}
                key={JSON.stringify(city)}>
                {city.name + ' - ' + city.state}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
