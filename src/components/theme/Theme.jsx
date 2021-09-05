import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const Theme = (props) => {
  const { theme, isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} ${isDarkTheme() && "text-warning"}`}
      style={{ height: "100vh" }}
    >
      <Container className="d-flex justify-content-end">
        <button onClick={toggleTheme}>
          {isDarkTheme() ? "Light" : "Dark"} theme
        </button>
      </Container>

      {props.children}
    </div>
  );
};

export default Theme;
