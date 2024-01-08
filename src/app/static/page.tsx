import { Suspense } from "react";
import { ISRComponent } from "../ISRComponent";
import { RevalidateBtn } from "../RevalidateBtn";

export default async () => {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <ISRComponent />
      </Suspense>

      <RevalidateBtn />
    </div>
  );
};
