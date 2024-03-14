import CitySearchItem from '@/components/citySelect/elements/CitySearchItem';
import { Input } from '@/components/ui/input';
import { SelectContent } from '@/components/ui/select';
import { useFetchCities } from '@/hooks/useFetchCities';
import { cn } from '@/lib/utils';
import { City } from '@/types';
import { useDebounce } from '@uidotdev/usehooks';
import { Search } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function CitySearchContent() {
  const [inputVal, setInputVal] = useState('');
  const debouncedInputVal = useDebounce(inputVal, 300);
  const { data } = useFetchCities(debouncedInputVal);

  return (
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
        data.map((city: City) => (
          <CitySearchItem
            city={city}
            key={nanoid()}
          />
        ))}
    </SelectContent>
  );
}
