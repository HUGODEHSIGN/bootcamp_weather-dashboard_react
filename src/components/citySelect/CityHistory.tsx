import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CityHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
        <Button>test</Button>
      </CardContent>
    </Card>
  );
}
