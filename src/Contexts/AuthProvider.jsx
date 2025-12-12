import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";

//
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  //states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //createUser with email
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signInUser with email
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //Log Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //
  const updateUserProfile = (displayName, photoURL) => {
            return updateProfile(auth.currentUser, {displayName, photoURL})
    }
  //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //AuthContext
  const authInfo = {
    registerUser,
    signInUser,
    signInGoogle,
    signOutUser,
    updateUserProfile,
    user,
    loading
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
