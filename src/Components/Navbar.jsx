// import React, { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link, NavLink, useLocation } from "react-router";
import AuthContext from "../Contexts/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const Navbar = ({ location = "" }) => {
  const { currentUser, logOutUser } = useContext(AuthContext);
  console.log(currentUser?.photoURL);

  const currLocation = useLocation();
  // console.log(currLocation);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <h1 className="text-2xl font-bold">The Dragon</h1>
      </div>
      <div className="">
        <ul className="flex items-center gap-6 font-medium text-gray-500">
          <li>
            <Link
              to={"/"}
              className={`${location.includes("categories") ? "btn" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/career"}>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        {currentUser ? (
          <>
            <Link to={"/profile"}>
              <div className="relative w-max group mx-auto ">
                {currentUser?.photoURL ? (
                  <div className="w-6/12 rounded-full overflow-hidden mx-auto bg-gray-50">
                    <img
                      className="w-full h-full "
                      src={
                        currentUser.photoURL ||
                        "https://readymadeui.com/team-5.webp"
                      }
                      alt={"user photo"}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <BiUserCircle className="text-5xl"></BiUserCircle>
                )}

                <div className="max-w-xs mx-auto absolute shadow-lg hidden group-hover:block bg-gray-500 text-white font-semibold px-3 py-[6px] text-[13px] w-max -bottom-10 rounded ">
                  View Profile
                </div>
              </div>
            </Link>

            <button
              onClick={handleLogOut}
              className="btn text-xl bg-gray-700 py-6 px-10 text-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            {/* <Link to={"/authentication/registration"}>
              <BiUserCircle className="text-5xl"></BiUserCircle>
            </Link> */}
            {currLocation?.pathname === "/authentication" ? (
              <Link to={"/authentication/registration"}>
                <button className="btn text-xl bg-gray-700 py-6 px-10 text-white">
                  SignUp
                </button>
              </Link>
            ) : (
              <Link to={"/authentication"}>
                <button className="btn text-xl bg-gray-700 py-6 px-10 text-white">
                  Login
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
