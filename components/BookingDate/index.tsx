"use client";
import { dictionary } from "@/Localization/Dictionary";
import { Locale } from "@/Localization/types";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  fromDate: Date;
  toDate: Date;
}

function BookingDate({ fromDate, toDate }: Props) {
  const locale = usePathname().split("/")[1];
  const { from, to } = dictionary[locale as Locale];
  const getDate = (s: Date) => s.toLocaleString(locale).split(",")[0];

  return (
    <div className="grid grid-cols-2">
      <div>
        <p>{from}:</p>
        <p>{getDate(fromDate)}</p>
      </div>
      <div>
        <p>{to}:</p>
        <p>{getDate(toDate)}</p>
      </div>
    </div>
  );
}

export default BookingDate;
