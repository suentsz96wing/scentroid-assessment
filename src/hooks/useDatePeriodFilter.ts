import React from "react";
import { Dayjs } from "dayjs";
import { TimeZoneType } from "../type";
import { default as dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(timezone);

export function useDatePeriodFilter() {
  const [startDate, setStartDate] = React.useState<Dayjs>(dayjs("2009-05-14"));
  const [endDate, setEndDate] = React.useState<Dayjs>(dayjs("2014-12-01"));
  const [timezone, setTimezone] =
    React.useState<TimeZoneType>("America/Toronto");

  return {
    startDate,
    endDate,
    handleStartDateChange: (date: Dayjs) => {
      setStartDate(date);
    },
    handleEndDateChange: (date: Dayjs) => {
      setEndDate(date);
    },
    timezone,
    handleTimezoneChange: (value: TimeZoneType) => {
      setStartDate((startDate) => startDate?.tz(value));
      setEndDate((endDate) => endDate?.tz(value));
      setTimezone(value);
    },
  };
}
