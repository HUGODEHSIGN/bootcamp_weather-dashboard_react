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
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'flex flex-row lg:flex-col items-center bg-accent p-4 rounded-md min-w-40 text-center text-accent-foreground z-10',
        className
      )}>
      <div className="p-4">{icon}</div>
      <div>
        <p className="text-3xl font-semibold">{stat}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
