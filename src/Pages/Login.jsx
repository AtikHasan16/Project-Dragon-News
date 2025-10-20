import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    loginUser(email, password)
      .then(() => {
        // console.log(result);
        toast.success("Successfully Logged In");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <>
      <div>
        <div className="">
          <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
            <div className="max-w-2xl w-full">
              <div className="p-6 sm:px-20 sm:py-10 rounded-2xl bg-white shadow-xl shadow-gray-400">
                <h1 className="text-slate-900 text-center text-3xl font-semibold">
                  Login your account{" "}
                </h1>
                <form onSubmit={handleForm} className="mt-12 space-y-6">
                  <div>
                    <label className="text-slate-500 text-xl font-medium mb-2 block">
                      User email
                    </label>
                    <div className="relative flex items-center">
                      <input
                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-5 pr-8 rounded-md outline-blue-600"
                        name="email"
                        placeholder="Enter user email"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-500 text-xl font-medium mb-2 block">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-5 pr-8 rounded-md outline-blue-600"
                        name="password"
                        placeholder="Enter password"
                        required
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center">
                      <input
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                      <label
                        className="ml-3 block text-sm text-slate-900"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a className="text-rose-600 hover:underline font-semibold">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div className="!mt-12">
                    <button className="w-full py-4 px-4 text-lx font-medium tracking-wide rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none cursor-pointer">
                      Sign in
                    </button>
                  </div>
                  <p className="text-slate-900 text-sm !mt-6 text-center">
                    Don't have an account?{" "}
                    <Link
                      to={"/authentication/registration"}
                      className="text-rose-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                    >
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
