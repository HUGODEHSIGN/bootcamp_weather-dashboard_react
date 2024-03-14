import { CitySearchCombobox } from '@/components/citySelect/search/CitySearchCombobox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function CitySearch() {
  return (
    <Card className="relative overflow-hidden backdrop-blur-3xl">
      <CardHeader>
        <CardTitle className='z-10 text-center'>Search</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 z-10">
        <CitySearchCombobox />
      </CardContent>
      <Search className="absolute w-24 h-24 -bottom-4 -left-8 opacity-50 z-10" />
      <div className='absolute left-0 top-0 right-0 bottom-0 bg-neutral-50 dark:bg-neutral-900 opacity-60 dark:opacity-70'></div>
    </Card>
  );
}
