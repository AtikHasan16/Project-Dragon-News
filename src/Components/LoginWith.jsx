import React, { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import AuthContext from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const LoginWith = () => {
  const { googleLogin } = useContext(AuthContext);
  // console.log(googleLogin);
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully login with Google");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="space-y-4">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-lg btn-block bg-white border-2 border-blue-500 text-blue-500"
      >
        <FaGoogle size={20}></FaGoogle> Login with Google
      </button>
      <button className="btn btn-lg btn-block bg-white border-2 border-gray-700 text-gray-700">
        <BsGithub size={20}></BsGithub> Login with Github
      </button>
    </div>
  );
};

export default LoginWith;
