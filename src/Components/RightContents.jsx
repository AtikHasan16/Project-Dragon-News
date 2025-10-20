import React, { useContext } from "react";
import LoginWith from "./LoginWith";
import FindUs from "./FindUs";
import AuthContext from "../Contexts/AuthContext";

const RightContents = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="">
      {currentUser ? (
        <div className="mb-10 flex flex-col justify-center items-center space-y-2">
          <h1 className="text-xl text-center font-semibold mb-4 border-b border-gray-200">
            Profile
          </h1>
          <div className="w-22 h-22 rounded-full overflow-hidden bg-gray-50">
            <img
              className="w-full h-full"
              src={
                currentUser.photoURL || "https://readymadeui.com/team-5.webp"
              }
              alt={"user photo"}
              referrerPolicy="no-referrer"
            />
          </div>
          <h1>{currentUser?.displayName || "User Name"}</h1>
          <p>{currentUser?.email}</p>
          {/* <p>{currentUser?.metadata?.lastSignInTime}</p> */}
        </div>
      ) : (
        <div className="mb-10">
          <h1 className="text-xl font-bold mb-4">Log in with </h1>
          <LoginWith></LoginWith>
        </div>
      )}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-4">Find Us On</h1>
        <FindUs></FindUs>
      </div>
      <h1>Q-Zone </h1>
    </div>
  );
};

export default RightContents;
