import React, { createContext, useState } from 'react';

// tao ra Contexts
export const ThemeContext = createContext();

// nay la kho de luu tru cac context
// children la ten cua toan bo cai components duoc su dung trong cai Provider nay
const ThemeContextProvider = ({ children }) => {
  // State
  const [theme, setTheme] = useState({
    isLightTheme: true, // co phai phong mau sang hay khong
    light: {
      background: 'rgb(76, 190, 56)',
      color: 'black',
    },
    dark: {
      background: 'rgb(39, 39, 39)',
      color: 'white',
    },
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // xuat khau
  const themeContextData = {
    theme,
    toggleTheme,
  };

  // Return provider
  // tra ve nha kho cung cap du lieu cho tat ca components co du dung voi nha kho nay
  return (
    // value={themeContextData} nhet no vao kho Provider
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
