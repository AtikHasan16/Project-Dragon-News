import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="space-y-3 text-center mb-7">
      <div className="flex justify-center ">
        <img src={logo} alt="" />
      </div>

      <h2>Journalism Without Fear or Favour</h2>

      <p className="text-">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
    </div>
  );
};

export default Header;
