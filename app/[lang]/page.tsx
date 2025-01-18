import Book from "@/components/Book/Book";
import LanguageSelect from "@/components/Language";
import { Locale } from "@/Localization/types";
import { Metadata } from "next";

async function getData(lang: Locale) {
  const locales = {
    es: { title: "titulo", description: "descripcion en español" },
    en: { title: "title", description: "english description" },
  };

  return locales[lang];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const d = await getData(lang);
  return d;
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const data = await fetch(`${process.env.URL}/api/booked`, {
    method: "GET",
  }).then((res) => res.json());
  console.log(data);
  return (
    <div>
      <LanguageSelect />
      <Book bookedDates={data.dates} />
    </div>
  );
}
