import { SelectTrigger, SelectValue } from '@/components/ui/select';

interface CitySearchTriggerProps {
  isSuccess: boolean;
  isPending: boolean;
  isError: boolean;
}

export default function CitySearchTrigger({
  isSuccess,
  isPending,
  isError,
}: CitySearchTriggerProps) {
  return (
    <SelectTrigger>
      {isPending && <div>Loading...</div>}
      {isError && <div className="text-red-500">Error</div>}
      {isSuccess && <SelectValue placeholder="Select a city" />}
    </SelectTrigger>
  );
}
