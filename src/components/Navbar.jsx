import { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const Navigation = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar
        className="mb-2"
        bg={isDarkTheme() ? "warning" : "dark"}
        variant="dark"
        role="navigation"
      >
        <Container className="justify-content-space">
          <h1 className="text-secondary h1 pe-none">SW Api - Encyclopedia</h1>
          <Button variant="outline-light" onClick={toggleTheme}>
            {isDarkTheme() ? "Light" : "Dark"} theme
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
