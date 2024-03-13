import { CitySearchCombobox } from '@/components/citySelect/CitySearchCombobox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CitySearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search cities</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CitySearchCombobox />
      </CardContent>
    </Card>
  );
}
