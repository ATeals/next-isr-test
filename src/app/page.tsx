import Link from "next/link";

const Page = async () => {
  return (
    <div>
      <Link href={"/static"}>Static Router</Link>
      <br />
      <Link href={"/1239712309"}>Dynamic Router</Link>
    </div>
  );
};

export default Page;
