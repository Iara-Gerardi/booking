import Book from "@/components/Book/Book";
import LanguageSelect from "@/components/Language";
import { Locale } from "@/Localization/types";
import { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale; unit: string }>;
}) {
  const { lang, unit } = await params;
  return (
    <div>
      <h1>unit details</h1>
      <p>booking: {lang}</p>
      <p>unit: {unit}</p>
      <LanguageSelect />
      
    </div>
  );
}
