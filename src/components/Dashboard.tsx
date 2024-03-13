import CitySelect from '@/components/citySelect/CitySelect';
import WeatherDisplay from '@/components/weatherDisplay/WeatherDisplay';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-8 w-full">
      <CitySelect />
      <WeatherDisplay />
    </div>
  );
}
