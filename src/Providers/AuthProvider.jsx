import React, { useEffect, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Config/firebase.config";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createNewUser = (name, photoURL, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // log in function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // auth changed observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // log out function
  const logOutUser = () => {
    return signOut(auth);
  };

  // user delete function
  const deleteCurrentUser = () => {
    return deleteUser(auth.currentUser);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    createNewUser,
    loginUser,
    currentUser,
    logOutUser,
    deleteCurrentUser,
    loading,
    googleLogin,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
