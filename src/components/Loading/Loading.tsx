import { FC } from "react";

export const Loading: FC = () => (
  <div className="w-full h-full w-screen h-screen flex items-center justify-center fixed block top-0 left-0 bg-black opacity-75 z-50">
    <p className="flex text-xl items-center flex-col text-white top-1/2 my-0 mx-auto block relative">
      <img src="/images/oval.svg" width="53" alt="Loading" />
    </p>
  </div>
);

export default Loading;
