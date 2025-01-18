export type Locale = "es" | "en";

interface Words {
  [index: string]: string;
  spanish: string;
  english: string;
  book: string;
  more: string;
  from: string;
  to: string;
  calendarError: string;
}

export interface Dictionary {
  [index: string]: Words;
}
