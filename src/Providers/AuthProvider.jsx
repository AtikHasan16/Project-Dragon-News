import React from "react";
import AuthContext from "../Contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Atik Hasan",
    email: "akhasannaeem@gmail.com",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
