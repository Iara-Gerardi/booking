import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { enUS, es, Locale } from "date-fns/locale";
import { usePathname } from "next/navigation";

const localeMap: Record<string, Locale> = {
  en: enUS,
  "es-AR": es,
};

interface CalendarProps {
  date: any;
  setDate: any;
  defaultMonth?: any;
  disabledDates: { from: Date; to: Date }[];
}

export default function RangeCalendar({
  date,
  setDate,
  defaultMonth,
  disabledDates,
}: CalendarProps) {
  const d = [...disabledDates, { before: new Date() }];
  return (
    <div className="rounded-md container">
      <Calendar
        classNames={{
          day_disabled: "bg-gray-700/5 rounded-none",
          caption_label: "font-semibold text-blue-500 capitalize",
        }}
        mode="range"
        selected={date}
        disabled={d}
        onSelect={(selected) => setDate(selected)}
        defaultMonth={defaultMonth}
        className="border rounded-md"
        locale={localeMap[usePathname().split("/")[1]]}
      />
    </div>
  );
}
