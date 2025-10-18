import React, { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router";
import AuthContext from "../Contexts/AuthContext";

const Navbar = () => {
  const userInfo = useContext(AuthContext);
  console.log(userInfo);

  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <h1 className="text-2xl font-bold">The Dragon</h1>
      </div>
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
        <Link to={"/authentication/registration"}>
          <BiUserCircle className="text-5xl"></BiUserCircle>
        </Link>
        <Link to={"/authentication"}>
          <button className="btn text-xl bg-gray-700 py-6 px-10 text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
