import { NextResponse } from "next/server";
import { getSiteData } from "@/lib/siteData";

export async function GET() {
  const data = getSiteData();
  return NextResponse.json(data);
}
