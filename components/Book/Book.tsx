"use client";
import RangeCalendar from "@/components/Calendar/RangeCalendar";
import { Button } from "@/components/ui/button";
import React from "react";
import { DateRange } from "react-day-picker";
import BookingDate from "../BookingDate";
import { dictionary } from "@/Localization/Dictionary";
import { usePathname } from "next/navigation";

interface Dates {
  from: string | globalThis.Date | any;
  to?: string | globalThis.Date | any;
}

function validateRange(rango: Dates, bookings: Dates[]) {
  const rangeStart = new Date(rango.from);
  const rangeEnd = new Date(rango.to);

  for (const booked of bookings) {
    const bookedStart = new Date(booked.from);
    const bookedEnd = new Date(booked.to);

    if (rangeStart < bookedEnd && rangeEnd > bookedStart) {
      return true;
    }
  }

  return false;
}

export default function Book({
  bookedDates,
}: {
  bookedDates: { from: Date; to: Date }[];
}) {
  const locale = usePathname().split("/")[1];
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [loading, setLoading] = React.useState(false);
  const isRangeValid = !!date && !validateRange(date, bookedDates);

  const currentLocale = usePathname().split("/")[1];

  const now = new Date();

  const nextMonth =
    now.getMonth() == 11
      ? `01-01-${now.getFullYear() + 1}`
      : `01-${now.getMonth() + 2}-${now.getFullYear()}`;

  const containerStyles = `[&_.container]:relative [&_.container]:overflow-hidden [&_.container]:after:w-full [&_.container]:after:h-full [&_.container]:after:absolute [&_.container]:after:animate-loading [&_.container]:after:z-10 [&_.container]:after:top-0 [&_.container]:after:left-0`;

  return (
    <div className={`flex gap-6 m-4 items-end`}>
      <div className="">
        <p className="container w-fit rounded-md my-2">
          Holi estoy probando cosas
        </p>
        <div className={`flex gap-4  `}>
          <RangeCalendar
            date={date}
            setDate={setDate}
            disabledDates={bookedDates}
          />
          <RangeCalendar
            date={date}
            setDate={setDate}
            disabledDates={bookedDates}
            defaultMonth={nextMonth}
          />
        </div>
        {!!date && !!date.from && !!date.to && (
          <BookingDate fromDate={date.from} toDate={date.to} />
        )}
        {!!date && validateRange(date, bookedDates) && (
          <p className="color-red-700">
            {dictionary[currentLocale].calendarError}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4 ">
        <Button disabled={!isRangeValid} className="bg-blue-500 container">
          {dictionary[locale].book}
        </Button>
      </div>
    </div>
  );
}
