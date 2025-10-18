import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <MoonLoader></MoonLoader>
    </div>
  );
};

export default Loading;
