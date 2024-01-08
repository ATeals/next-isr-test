import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const a = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  return NextResponse.json({
    randomNum: Math.random(),
    date: Date.now(),
  });
}
