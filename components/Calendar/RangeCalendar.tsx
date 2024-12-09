import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function RangeCalendar({ date, setDate }: any) {
  return (
    <Calendar
      mode="range"
      selected={date}
      disabled={[
        {
          from: new Date("12-12-2024"),
          to: new Date("12-19-2024"),
        },
        { before: new Date() },
      ]}
      onSelect={(selected, triggerDate, modifiers, e) => {
        console.log(selected);
        setDate(selected);
      }}
      className="rounded-md border"
    />
  );
}
