import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function RangeCalendar({
  date,
  setDate,
  defaultMonth,
  disabledDates,
}: any) {
  return (
    <Calendar
      mode="range"
      selected={date}
      disabled={[disabledDates && { ...disabledDates }, { before: new Date() }]}
      onSelect={(selected) => setDate(selected)}
      defaultMonth={defaultMonth}
      className="rounded-md border"
    />
  );
}
