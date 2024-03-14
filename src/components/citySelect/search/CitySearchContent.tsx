import CitySearchItem from '@/components/citySelect/search/CitySearchItem';
import { Input } from '@/components/ui/input';
import { SelectContent } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { City } from '@/types';
import { Search } from 'lucide-react';
import { nanoid } from 'nanoid';

interface CitySearchContentProps {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  isSuccess: boolean;
  isPending: boolean;
  isError: boolean;
}

export default function CitySearchContent({
  inputVal,
  setInputVal,
  data,
  isSuccess,
  isPending,
  isError,
}: CitySearchContentProps) {
  return (
    <SelectContent>
      <div
        className={cn(
          'p-2 py-0 ml-2 flex flex-row items-center gap-4',
          isPending || isError ? 'mb-0 border-none' : 'mb-1 border-b'
        )}>
        <Search className="w-4 h-4" />
        <Input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Search"
          className="p-0 border-none"
        />
      </div>

      {isSuccess &&
        data.map((city: City) => (
          <CitySearchItem
            city={city}
            key={nanoid()}
          />
        ))}
    </SelectContent>
  );
}
