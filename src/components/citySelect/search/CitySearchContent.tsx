import CitySearchItem from "@/components/citySelect/search/CitySearchItem";
import { Input } from "@/components/ui/input";
import { SelectContent } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { City } from "@/types";
import { Search } from "lucide-react";
import { nanoid } from "nanoid";
import { forwardRef } from "react";

interface CitySearchContentProps {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  isSuccess: boolean;
  isPending: boolean;
  isError: boolean;
}

export const CitySearchContent = forwardRef<
  HTMLInputElement,
  CitySearchContentProps
>(function CitySearchContent(
  {
    inputVal,
    setInputVal,
    data,
    isSuccess,
    isPending,
    isError,
  }: CitySearchContentProps,
  ref,
) {
  return (
    <SelectContent className="relative border-none bg-inherit backdrop-blur-md">
      <div
        className={cn(
          "ml-2 flex flex-row items-center gap-4 p-2 py-0",
          isPending || isError ? "mb-0 border-none" : "mb-1 border-b",
        )}
      >
        <Search className="h-4 w-4" />
        <Input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onBlur={(e) => e.target.focus()}
          placeholder="Search"
          className="border-none bg-inherit p-0"
          ref={ref}
        />
      </div>

      {isSuccess &&
        data.map((city: City) => <CitySearchItem city={city} key={nanoid()} />)}
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-20 bg-neutral-50 opacity-80 dark:bg-neutral-800 dark:opacity-90"></div>
    </SelectContent>
  );
});
