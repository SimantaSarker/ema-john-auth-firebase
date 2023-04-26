import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';
export const authContext=createContext(null);

const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logOut=()=>{
   return signOut(auth);
  }

  //----------------observer user auth state------------
  useEffect(()=>{
   const unsubscibe=onAuthStateChanged((auth),currentUser=>{
      setUser(currentUser);
      setLoading(false)
     
    })

    // ---stop observing---
    return ()=>{
      unsubscibe();
    }
  },[])


  const authInfo={
    user,createUser,signIn,logOut,loading
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