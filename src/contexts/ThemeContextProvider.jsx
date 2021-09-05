import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("bg-dark");

  const toggleTheme = () =>
    setTheme(theme === "bg-dark" ? "bg-light" : "bg-dark");

  const isDarkTheme = () => theme === "bg-dark";
  const isLightTheme = () => theme === "bg-light";

  const contextValues = {
    theme,
    setTheme,
    toggleTheme,
    isDarkTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
