import { ISRComponent } from "@/app/ISRComponent";
import { RevalidateBtn } from "@/app/RevalidateBtn";
import { Suspense } from "react";

export default ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <div>id : {id}</div>
      <Suspense>
        <ISRComponent />
        <RevalidateBtn />
      </Suspense>
    </div>
  );
};
