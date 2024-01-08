export const DOMAIN = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export const ISRComponent = async () => {
  const res = await fetch(`${DOMAIN}/api/random`, {
    next: { revalidate: false, tags: ["random"] },
  });
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <div>Random :{data?.randomNum}</div>
      <div>Date : {data?.date}</div>
    </div>
  );
};
