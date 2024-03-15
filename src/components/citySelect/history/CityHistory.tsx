import CityHistoryButton from "@/components/citySelect/history/CityHistoryButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cityHistoryAtom } from "@/state";
import { useAtom } from "jotai";
import { History } from "lucide-react";
import { nanoid } from "nanoid";

export default function CityHistory() {
  const [cityHistory, setCityHistory] = useAtom(cityHistoryAtom);

  return (
    <Card className="relative overflow-hidden backdrop-blur-3xl">
      <CardHeader>
        <CardTitle className="z-10 text-center">History</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button
          className="z-10"
          variant="destructive"
          onClick={() => setCityHistory([])}
        >
          Clear History
        </Button>
        {cityHistory.map((city) => (
          <CityHistoryButton city={city} key={nanoid()} />
        ))}
      </CardContent>
      <History className="absolute -right-5 -top-6 z-10 h-24 w-24 opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-neutral-50 opacity-60 dark:bg-neutral-900 dark:opacity-70"></div>
    </Card>
  );
}
