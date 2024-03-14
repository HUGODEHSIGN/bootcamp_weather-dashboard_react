import CityHistory from '@/components/citySelect/history/CityHistory';
import CitySearch from '@/components/citySelect/search/CitySearch';

export default function CitySelect() {
  return (
    <aside className="row-start-2 md:row-start-1 col-span-1 md:col-span-4 lg:col-span-3 flex flex-col gap-8">
      <CitySearch />
      <CityHistory />
    </aside>
  );
}
