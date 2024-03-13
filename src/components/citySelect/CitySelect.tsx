import CityHistory from '@/components/citySelect/CityHistory';
import CitySearch from '@/components/citySelect/CitySearch';

export default function CitySelect() {
  return (
    <aside className="col-span-4 flex flex-col gap-8">
      <CitySearch />
      <CityHistory />
    </aside>
  );
}
