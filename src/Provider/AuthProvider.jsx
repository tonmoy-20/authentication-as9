import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const registerWithEmailPassword = (email, pass) => {
    console.log(email, pass);

    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authDAta = {
    registerWithEmailPassword,
    setUser,
    user,
    handleGoogleSignIn,
    loading,
  };

  return <AuthContext value={authDAta}>{children}</AuthContext>;
};

export default AuthProvider;
