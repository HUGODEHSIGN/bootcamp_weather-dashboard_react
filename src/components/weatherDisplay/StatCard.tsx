import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

interface StatCardProps {
  stat: string;
  description: string;
  icon: ReactElement;
  className: string;
}

export default function StatCard({
  stat,
  description,
  icon,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-row flex-1 overflow-hidden lg:flex-col items-center gap-4 p-8 rounded-md min-w-40 text-center text-accent-foreground backdrop-blur-md z-10',
      )}>
      <div className="p-4 text-white">{icon}</div>
      <div className="flex flex-col gap-2 items-center text-white">
        <p className="text-3xl font-semibold">{stat}</p>
        <p>{description}</p>
      </div>
      <div className=
        'absolute top-0 left-0 right-0 bottom-0 -z-10 bg-neutral-700 dark:bg-neutral-900 opacity-50'
      ></div>
    </div>
  );
}
