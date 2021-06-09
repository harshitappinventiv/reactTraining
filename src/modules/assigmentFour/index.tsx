import { ThemeProvider } from "@material-ui/core";
import theme from "./themeCustomize";

// ******************************************** components ********************************
import Home from "./home";
import Container from "./components/container";

function AssigmentFour() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default AssigmentFour;
