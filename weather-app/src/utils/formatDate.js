import { format, fromUnixTime } from "date-fns";

export default function formatDate(date) {
  return format(fromUnixTime(date), "EEE, d MMM");
}
