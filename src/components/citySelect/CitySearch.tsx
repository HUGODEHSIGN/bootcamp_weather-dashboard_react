import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function CitySearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search for a city</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input />
        <Button>Search</Button>
      </CardContent>
    </Card>
  );
}
