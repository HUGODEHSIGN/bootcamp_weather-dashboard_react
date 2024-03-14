import useSetCity from '@/components/citySelect/hooks/useSetCity';
import CitySearchContent from '@/components/citySelect/search/CitySearchContent';
import CitySearchTrigger from '@/components/citySelect/search/CitySearchTrigger';
import { Select } from '@/components/ui/select';
import { useState } from 'react';

export function CitySearchCombobox() {
  const [open, setOpen] = useState(false);
  const setNewCity = useSetCity();

  return (
    <div className="z-10">
      <Select
        open={open}
        onOpenChange={() => setOpen(!open)}
        onValueChange={(val) => {
          setNewCity(val);
        }}>
        <CitySearchTrigger />
        <CitySearchContent />
      </Select>
    </div>
  );
}
