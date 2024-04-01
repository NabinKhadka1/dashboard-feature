import { createContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const localStorageToken = localStorage.getItem("stored_token")
      ? localStorage.getItem("stored_token")
      : "";
    if (Object.keys(user).length > 0) {
      localStorage.setItem("userInfo", JSON.stringify(user));
    }
    setUserToken(localStorageToken);
  }, [user]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "";
    setUser(userInfo);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, userToken }}>
      {children}
    </UserContext.Provider>
  );
};
