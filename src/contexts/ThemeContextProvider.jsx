import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [value, setValue] = useLocalStorage("theme");

  useEffect(() => {
    setTheme(() => (value ? value : "bg-dark"));
  }, []);

  useEffect(() => {
    setValue(theme);
  }, [theme]);

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
