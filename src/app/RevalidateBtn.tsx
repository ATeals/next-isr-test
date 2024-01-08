"use client";

import { useRouter } from "next/navigation";
import { DOMAIN } from "./ISRComponent";

export const RevalidateBtn = () => {
  const router = useRouter();
  const handleClick = async () => {
    const res = await fetch(DOMAIN + "/api/revalidate");

    const data = await res.json();

    console.log(data);

    router.refresh();
  };

  return (
    <button onClick={handleClick} className="ring-1 rounded-lg p-1">
      Revalidate
    </button>
  );
};
