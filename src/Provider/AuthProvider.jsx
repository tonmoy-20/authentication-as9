import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const registerWithEmailPassword = (email, pass) => {
    console.log(email, pass);

    return createUserWithEmailAndPassword(auth, email, pass);
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

  const authDAta = { registerWithEmailPassword, setUser, user };

  return <AuthContext value={authDAta}>{children}</AuthContext>;
};

export default AuthProvider;
