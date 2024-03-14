import CitySearchContent from '@/components/citySelect/elements/CitySearchContent';
import CitySearchTrigger from '@/components/citySelect/elements/CitySearchTrigger';
import { useSetCity } from '@/components/citySelect/hooks/useSetCity';
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
