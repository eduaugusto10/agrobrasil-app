import React, { createContext, useState } from "react";

const AuthContext = createContext({
  signed: false,
  signIn: {},
  token: {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  async function signIn(token) {
    setToken(token);
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!token,
        signIn,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
