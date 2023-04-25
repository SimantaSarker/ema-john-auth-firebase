import React from 'react';
import { createContext } from 'react';
export const authContext=createContext(null);

const AuthProvider = ({children}) => {
  const user={displayName:'al katra'}

  const authInfo={
    user,
  }

  return (
    <authContext.Provider value={authInfo}>
      {
        children
      }
    </authContext.Provider>
  );
};

export default AuthProvider;