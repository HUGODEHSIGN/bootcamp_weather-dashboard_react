import { ModeToggle } from '@/components/theme/mode-toggle';

export default function Header() {
  return (
    <header className="flex justify-between flex-row bg-background dark:border p-6 rounded-md shadow dark:shadow-none">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
        Weather App
      </h1>
      <ModeToggle />
    </header>
  );
}
