// login, logout
import React, { createContext, useState, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State
  // const [isAuthenticated, setAuthentication] = useState(false)

  // // tham so thu nhat: 1 cai kho su dung de luu tru tat ca hanh dong
  // false: gia tri ban dau
  const [isAuthenticated, dispatch] = useReducer(authReducer, false);

  // useEffect
  useEffect(() => {
    alert(
      isAuthenticated
        ? 'Login Successful'
        : 'You are logged out. Please login to see todos.'
    );
  }, [isAuthenticated]);

  // xuat khau bien va ham de co the su dung o moi noi
  const authContextData = {
    isAuthenticated,
    dispatch,
  };

  // return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
