import React, { createContext, useState } from "react";

export const Context = createContext({
  user: null,
  isAuthenticated: false,
  authenticate: (user) => {},
  logout: () => {},
});

function ContextProvider({ children }) {
  const [authUser, setAuthUser] = useState();

  function authenticate(user) {
    setAuthUser(user);
  }

  function logout() {
    setAuthUser(null);
  }

  const value = {
    user: authUser,
    isAuthenticated: !!authUser,
    authenticate: authenticate,
    logout: logout,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
