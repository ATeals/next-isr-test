import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const revalidate = 0;

export async function GET(request: Request) {
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(1);
  //   }, 1000);
  // });

  const randomNum = Math.random();
  const date = Date.now();

  console.log(randomNum, date);

  return NextResponse.json({
    randomNum,
    date,
  });
}
