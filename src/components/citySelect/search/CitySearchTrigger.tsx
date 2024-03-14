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
    <div className='relative rounded-md overflow-hidden backdrop-blur-md'>
    <SelectTrigger className='bg-inherit border-none'>
      {isPending && <div className='z-20'>Loading...</div>}
      {isError && <div className="text-red-500">Error</div>}
      {isSuccess && <SelectValue placeholder="Select a city" className='z-20'/>}
     
    </SelectTrigger>
    <div className='absolute left-0 top-0 right-0 bottom-0 bg-neutral-50 dark:bg-neutral-800 opacity-80 dark:opacity-90 -z-10'></div>
    </div>
  );
}
