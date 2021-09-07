import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const Theme = (props) => {
  const { theme, isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} ${isDarkTheme() && "text-warning"}`}
      style={{ height: "100vh" }}
    >
      {props.children}
    </div>
  );
};

export default Theme;
