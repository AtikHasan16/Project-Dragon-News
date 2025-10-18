import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div></div>
      <div className="">
        <ul className="flex gap-6 font-medium text-gray-500">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/career"}>Career</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <BiUserCircle className="text-5xl"></BiUserCircle>
        <button className="btn text-xl bg-gray-700 py-6 px-10 text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
