import useSetCity from '@/components/citySelect/hooks/useSetCity';
import CitySearchContent from '@/components/citySelect/search/CitySearchContent';
import CitySearchTrigger from '@/components/citySelect/search/CitySearchTrigger';
import { Select } from '@/components/ui/select';
import { useFetchCities } from '@/hooks/useFetchCities';
import { useDebounce } from '@uidotdev/usehooks';
import { useState } from 'react';

export function CitySearchCombobox() {
  const [open, setOpen] = useState(false);
  const setNewCity = useSetCity();
  const [inputVal, setInputVal] = useState('');
  const debouncedInputVal = useDebounce(inputVal, 300);
  const { data, isSuccess, isPending, isError } =
    useFetchCities(debouncedInputVal);

  return (
    <div className="z-20">
      <Select
        open={open}
        onOpenChange={() => setOpen(!open)}
        onValueChange={(val) => {
          setNewCity(val);
        }}
        >
        <CitySearchTrigger
          isSuccess={isSuccess}
          isPending={isPending}
          isError={isError}
        />
        <CitySearchContent
          inputVal={inputVal}
          setInputVal={setInputVal}
          data={data}
          isSuccess={isSuccess}
          isPending={isPending}
          isError={isError}
        />
      </Select>
    </div>
  );
}
