"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const [user, setUser] = useState({});
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
