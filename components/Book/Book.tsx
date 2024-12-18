"use client";
import RangeCalendar from "@/components/Calendar/RangeCalendar";
import { Button } from "@/components/ui/button";
import React from "react";
import { DateRange } from "react-day-picker";

interface Date {
  from: string | globalThis.Date | any;
  to?: string | globalThis.Date | any;
}

function rangoEnConflicto(rango: Date, bookings: Date[]) {
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

export default function Book() {
  const [date, setDate] = React.useState<DateRange | undefined>();

  const mockBooked = [
    { from: new Date("12-27-2024"), to: new Date("12-29-2024") },
    { from: new Date("12-08-2024"), to: new Date("12-09-2024") },
  ];

  const isRangeValid = !!date && !rangoEnConflicto(date, mockBooked);

  const now = new Date();
  const nextMonth =
    now.getMonth() == 11
      ? `01-01-${now.getFullYear() + 1}`
      : `01-${now.getMonth() + 2}-${now.getFullYear()}`;

  return (
    <div className="flex gap-6 m-4 items-end">
      <div className="">
        <div className="flex gap-4">
          <RangeCalendar
            date={date}
            setDate={setDate}
            disabledDates={mockBooked}
          />
          <RangeCalendar
            date={date}
            setDate={setDate}
            disabledDates={mockBooked}
            defaultMonth={nextMonth}
          />
        </div>
        {!!date && rangoEnConflicto(date, mockBooked) && (
          <p className="color-red-700">
            La fecha seleccionada no esta disponible. <br />
            Por favor seleccione un rango que no incluya fechas bloqueadas
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Button disabled={!isRangeValid} className="bg-violet-600">
          Reservar con Stripe
        </Button>
        <Button disabled={!isRangeValid} className="bg-blue-600">
          Reservar con Mercado Pago
        </Button>
      </div>
    </div>
  );
}
