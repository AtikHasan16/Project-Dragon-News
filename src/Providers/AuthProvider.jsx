import React, { useEffect, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Config/firebase.config";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createNewUser = (name, photoURL, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const logOutUser = () => {
    return signOut(auth);
  };
  const deleteCurrentUser = () => {
    return deleteUser(auth.currentUser);
  };

  const authInfo = {
    createNewUser,
    loginUser,
    currentUser,
    logOutUser,
    deleteCurrentUser,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
