import React from "react";
import { Link } from "react-router";

const Registration = () => {
  return (
    <div>
      <div className="flex flex-col justify-center sm:h-screen p-4">
        <div className="max-w-3xl w-full mx-auto shadow-xl shadow-gray-400 bg-white rounded-2xl p-10">
          <div className="text-center mb-10 text-3xl font-bold text-gray-700">
            Register your account
          </div>
          <form>
            <div className="space-y-5">
              <div>
                <label className="text-slate-900 font-medium mb-2 block">
                  Your Name
                </label>
                <input
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-4 rounded-md outline-blue-500"
                  name="email"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div>
                <label className="text-slate-900 font-medium mb-2 block">
                  Photo URL{" "}
                </label>
                <input
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-4 rounded-md outline-blue-500"
                  name="email"
                  placeholder="Enter photo URL"
                  type="text"
                />
              </div>
              <div>
                <label className="text-slate-900 font-medium mb-2 block">
                  Email Id
                </label>
                <input
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-4 rounded-md outline-blue-500"
                  name="email"
                  placeholder="Enter email"
                  type="text"
                />
              </div>
              <div>
                <label className="text-slate-900 font-medium mb-2 block">
                  Password
                </label>
                <input
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-4 rounded-md outline-blue-500"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                />
              </div>

              <div className="flex items-center">
                <input
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label
                  className="text-slate-600 ml-3 block text-sm"
                  htmlFor="remember-me"
                >
                  I accept the
                  <a
                    className="text-blue-600 font-medium hover:underline ml-1"
                    href="javascript:void(0);"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="mt-12">
              <button
                className="w-full btn py-6 bg-gray-500 text-white hover:bg-gray-700"
                type="button"
              >
                Create an account
              </button>
            </div>
            <p className="text-slate-600 text-sm mt-6 text-center">
              Already have an account?{" "}
              <Link
                to={"/authentication"}
                className="text-rose-600 hover:underline ml-1 whitespace-nowrap font-semibold"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
