import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Header() {
  return (
    <header className="relative flex min-h-[88px] flex-row justify-between overflow-hidden rounded-md p-6">
      <h1 className="z-10 text-2xl font-bold text-foreground md:text-3xl">
        Weather App
      </h1>
      <ModeToggle />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-neutral-50 opacity-60 dark:bg-neutral-900 dark:opacity-70"></div>
    </header>
  );
}
