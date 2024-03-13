import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WeatherCurrent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atlanta (9/13/2022)</CardTitle>
      </CardHeader>
      <CardContent>
        <p>temp</p>
        <p>wind</p>
        <p>humidity</p>
      </CardContent>
    </Card>
  );
}
