import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const a = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  const randomNum = Math.random();
  const date = Date.now();

  return NextResponse.json({
    randomNum,
    date,
  });
}
