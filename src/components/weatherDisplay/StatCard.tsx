import { cn } from "@/lib/utils";
import { ReactElement } from "react";

interface StatCardProps {
  stat: string;
  description: string;
  icon: ReactElement;
  className: string;
}

export default function StatCard({ stat, description, icon }: StatCardProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex min-w-40 flex-1 flex-row items-center gap-4 overflow-hidden rounded-md p-8 text-center text-accent-foreground backdrop-blur-md lg:flex-col",
      )}
    >
      <div className="p-4 text-white">{icon}</div>
      <div className="flex flex-col items-center gap-2 text-white">
        <p className="text-3xl font-semibold">{stat}</p>
        <p>{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-neutral-700 opacity-50 dark:bg-neutral-900"></div>
    </div>
  );
}
