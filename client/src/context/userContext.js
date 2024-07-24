import { createContext, useEffect, useState } from "react";
import { getCurrentUser, signOutUser } from "../services/userActions";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {}, []);

  const signIn = async () => {
    const user = await getCurrentUser(sessionStorage.getItem("token"));
    setCurrentUser(user);
  };

  const signOut = async () => {
    signOutUser();
  };

  const value = {
    currentUser,
    signIn,
    signOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
