import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  const tag = "random";
  revalidateTag(tag);
  return Response.json({ revalidated: true, now: Date.now() });
}
