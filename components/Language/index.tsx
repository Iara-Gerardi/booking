"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import LanguageIcon from "@mui/icons-material/Language";
import { Locale } from "@/Localization/types";
import { dictionary } from "@/Localization/Dictionary";

function LanguageSelect() {
  const path = usePathname();
  const router = useRouter();

  const currentLocale = path.split("/")[1];
  const handleChange = (locale: Locale) => {
    const pth = path.replace(/en|es/, locale);
    router.push(pth);
  };

  return (
    <div className="flex w-fit items-center gap-2 mx-2">
      <LanguageIcon className="w-7 h-7" />
      <Select
        defaultValue={currentLocale}
        onValueChange={(e) => handleChange(e as Locale)}
      >
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="relative right-6">
          <SelectItem value="en" onClick={() => handleChange("en")}>
            {dictionary[currentLocale].english}
          </SelectItem>
          <SelectItem value="es" onClick={() => handleChange("es")}>
            {dictionary[currentLocale].spanish}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelect;
