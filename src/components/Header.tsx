import { ModeToggle } from '@/components/theme/mode-toggle';

export default function Header() {
  return (
    <header className="relative overflow-hidden flex justify-between flex-row p-6 rounded-md min-h-[88px]">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground z-10">
        Weather App
      </h1>
      <ModeToggle/>
      <div className='absolute left-0 top-0 right-0 bottom-0 bg-neutral-50 dark:bg-neutral-900 opacity-60 dark:opacity-70'></div>
    </header>
  );
}
