import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  revalidateTag("random");

  return NextResponse.json({ message: "revalidate random" });
}
