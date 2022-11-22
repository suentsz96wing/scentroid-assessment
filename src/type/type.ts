import { Dayjs } from "dayjs";

export interface DateTimePickerProps {
  label?: string;
  date?: Dayjs;
  timezone?: TimeZoneType;
  onChange: (date: any) => void;
}

export interface StockChartProps {
  startTime?: Dayjs;
  endTime?: Dayjs;
}

export type TimeZoneType = "Etc/UTC" | "America/Toronto" | "Japan";

export interface TimeZoneInputProps {
  value: TimeZoneType;
  onChange: (value: TimeZoneType) => void;
}
