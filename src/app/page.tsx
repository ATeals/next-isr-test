import { Suspense } from "react";
import { ISRComponent } from "./ISRComponent";
import { RevalidateBtn } from "./RevalidateBtn";

const Page = async () => {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <ISRComponent />
      </Suspense>

      <RevalidateBtn />
    </div>
  );
};

export default Page;
