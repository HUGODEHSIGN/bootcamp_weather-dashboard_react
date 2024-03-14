import { CitySearchCombobox } from '@/components/citySelect/elements/CitySearchCombobox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function CitySearch() {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle>Search cities</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CitySearchCombobox />
      </CardContent>
      <Search className="absolute w-24 h-24 -bottom-4 -left-8 opacity-50" />
    </Card>
  );
}
