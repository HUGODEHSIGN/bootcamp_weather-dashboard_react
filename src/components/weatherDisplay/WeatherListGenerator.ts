import { List } from "@/types";
import dayjs from "dayjs";

export default function weatherListGenerator(data: List[]) {
  let filteredDates = [];

  let dayCounter = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      dayjs.unix(data[i].dt).diff(dayjs(), "day") === dayCounter &&
      dayCounter < 5
    ) {
      filteredDates.push(data[i]);
      dayCounter++;
    }
  }
  return filteredDates;
}
