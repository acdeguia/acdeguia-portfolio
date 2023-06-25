import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};