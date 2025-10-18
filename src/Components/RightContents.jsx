import React from "react";
import LoginWith from "./LoginWith";
import FindUs from "./FindUs";

const RightContents = () => {
  return (
    <div className="">
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-4">Log in with </h1>
        <LoginWith></LoginWith>
      </div>
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-4">Find Us On</h1>
        <FindUs></FindUs>
      </div>
      <h1>Q-Zone </h1>
    </div>
  );
};

export default RightContents;
