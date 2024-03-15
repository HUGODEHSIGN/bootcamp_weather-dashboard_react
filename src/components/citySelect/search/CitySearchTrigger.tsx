import { SelectTrigger, SelectValue } from "@/components/ui/select";

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
    <div className="relative overflow-hidden rounded-md backdrop-blur-md">
      <SelectTrigger className="border-none bg-inherit">
        {isPending && <div className="z-20">Loading...</div>}
        {isError && <div className="text-red-500">Error</div>}
        {isSuccess && (
          <SelectValue placeholder="Select a city" className="z-20" />
        )}
      </SelectTrigger>
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-neutral-50 opacity-80 dark:bg-neutral-800 dark:opacity-90"></div>
    </div>
  );
}
