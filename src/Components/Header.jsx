import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <img src={logo} alt="" />
      </div>
      <div className="text-center">
        <h2>Journalism Without Fear or Favour</h2>

        <p className="text-xl">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
