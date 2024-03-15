import CitySearchItem from '@/components/citySelect/search/CitySearchItem';
import { Input } from '@/components/ui/input';
import { SelectContent } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { City } from '@/types';
import { Search } from 'lucide-react';
import { nanoid } from 'nanoid';
import { forwardRef } from 'react';

interface CitySearchContentProps {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  isSuccess: boolean;
  isPending: boolean;
  isError: boolean;
}

export const CitySearchContent = forwardRef<HTMLInputElement, CitySearchContentProps>(function CitySearchContent({
  inputVal,
  setInputVal,
  data,
  isSuccess,
  isPending,
  isError,
}: CitySearchContentProps, ref) {
  return (
    <SelectContent className='bg-inherit border-none backdrop-blur-md w-[240px]'>
      <div
        className={cn(
          'p-2 py-0 ml-2 flex flex-row items-center gap-4',
          isPending || isError ? 'mb-0 border-none' : 'mb-1 border-b'
        )}>
        <Search className="w-4 h-4" />
        <Input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onBlur={e => e.target.focus()}
          placeholder="Search"
          className="p-0 border-none bg-inherit"
          ref={ref}
        />
     
      </div>

      {isSuccess &&
        data.map((city: City) => (
          <CitySearchItem
            city={city}
            key={nanoid()}
          />
        ))}
         <div className='absolute left-0 top-0 right-0 bottom-0 bg-neutral-50 dark:bg-neutral-800 opacity-80 dark:opacity-90 -z-20'></div>
    </SelectContent>
  );
})
