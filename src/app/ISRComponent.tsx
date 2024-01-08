import { DOMAIN } from "./api/domain";

export const ISRComponent = async () => {
  const res = await (
    await fetch(`${DOMAIN}/api/random`, {
      next: { revalidate: false, tags: ["random"] },
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    })
  ).json();

  console.log(res);

  return (
    <div>
      <div>Random :{res?.randomNum}</div>
      <div>Date : {res?.date}</div>
    </div>
  );
};
