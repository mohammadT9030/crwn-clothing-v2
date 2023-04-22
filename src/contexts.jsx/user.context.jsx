import { createContext, useContext, useState } from "react";

export const userContext = createContext({
  currUser: null,
  setCurrUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const value = { currUser, setCurrUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const useUser = () => {
  return useContext(userContext);
};
