import React, { createContext, useState } from "react";

const AuthContext = createContext({
  signed: false,
  signIn: {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function signIn(response) {
    setUser(response);
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
