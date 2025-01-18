import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: Response) {
  return NextResponse.json({
    dates: [
      { from: new Date("01-20-2025"), to: new Date("01-22-2025") },
      { from: new Date("01-06-2025"), to: new Date("01-09-2025") },
    ],
  });
}
