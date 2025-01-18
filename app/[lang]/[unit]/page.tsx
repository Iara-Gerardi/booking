import { Locale } from "@/Localization/types";
import { Metadata } from "next";
import axios from "axios";

const getData = async (unit: string, locale: string) => {
  try {
    const property = await axios(
      `${process.env.STRAPI_URL}/properties?filters[propertyID][$eq]=${unit}&locale=${locale}`
    );

    return property.data.data[0];
  } catch (error) {
    console.error(error);
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale; unit: string }>;
}) {
  const { lang, unit } = await params;
  const prop: any = await getData(unit, lang);
  console.log(prop)
  return (
    <div>
      <h1>unit homepage</h1>
      <p>nombre: {prop.name}</p>
      <p>descripcion: {prop.description}</p>
    </div>
  );
}
